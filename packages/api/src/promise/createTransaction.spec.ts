// Copyright 2017-2026 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/globals.d.ts" />

import type { ExtrinsicPayload } from '@polkadot/types/interfaces';
import type { SignerPayloadJSON, TxPayloadV1 } from '@polkadot/types/types';
import type { HexString } from '@polkadot/util/types';
import type { Signer, SubmittableExtrinsic } from '../types/index.js';

import { createTestPairs } from '@polkadot/keyring/testingPairs';
import { MockProvider } from '@polkadot/rpc-provider/mock';
import { TypeRegistry } from '@polkadot/types';
import { hexToU8a, u8aConcat, u8aToHex } from '@polkadot/util';
import { blake2AsU8a, cryptoWaitReady, signatureVerify } from '@polkadot/util-crypto';

import { SingleAccountSigner } from '../test/index.js';
import { ApiPromise } from './index.js';

// `System.Account` prefixed storage key used by the mock to resolve the nonce
const NONCE_STORAGE_KEY = '0x26aa394eea5630e07c48ae0c9558cef79c2f82b23e5fd031fb54c292794b4cc4d560eb8d00e57357cf76492334e43bb2ecaa9f28df6a8c4426d7b6090f7ad3c9';

describe('Signer.createTransaction', (): void => {
  const registry = new TypeRegistry();

  let provider: MockProvider;
  let api: ApiPromise;
  let transfer: SubmittableExtrinsic<'promise'>;
  let aliceAddress: string;
  let refHex: HexString;

  beforeAll(async (): Promise<void> => {
    await cryptoWaitReady();
  });

  beforeEach(async (): Promise<void> => {
    const { alice, bob } = createTestPairs({ type: 'ed25519' });

    aliceAddress = alice.address;

    provider = new MockProvider(registry);
    provider.subscriptions.state_subscribeStorage.lastValue = {
      changes: [[NONCE_STORAGE_KEY, '0x00']]
    };

    api = await ApiPromise.create({ provider, registry, throwOnConnect: true });
    transfer = api.tx.balances.transferAllowDeath(bob.address, 12345n);

    // a valid, decodable, legacy-signed extrinsic to hand back from the mock
    refHex = (
      await api.tx.balances
        .transferAllowDeath(bob.address, 12345n)
        .signAsync(alice.address, { signer: new SingleAccountSigner(registry, alice) })
    ).toHex();
  });

  afterEach(async (): Promise<void> => {
    await api.disconnect();
  });

  it('is preferred over signPayload and receives a faithful TxPayloadV1', async (): Promise<void> => {
    let captured: TxPayloadV1 | null = null;

    const signer: Signer = {
      createTransaction: (payload) => {
        captured = payload;

        return Promise.resolve(refHex);
      },
      signPayload: () => Promise.reject(new Error('signPayload must not be called when createTransaction is present'))
    };

    await transfer.signAsync(aliceAddress, { signer });

    expect(captured !== null).toBe(true);

    const payload = captured as unknown as TxPayloadV1;

    // top-level shape
    expect(payload.version).toBe(1);
    expect(payload.txExtVersion).toBe(0); // Extrinsic V4
    expect(payload.signer).toBe(aliceAddress);
    expect(payload.callData).toBe(transfer.method.toHex());

    // context (RFC-faithful)
    expect(payload.context.metadata.startsWith('0x6d657461')).toBe(true); // "meta" magic
    expect(payload.context.genesisHash).toBe(api.genesisHash.toHex());
    expect(typeof payload.context.bestBlockHeight).toBe('number');
    expect(typeof payload.context.tokenSymbol).toBe('string');
    expect(typeof payload.context.tokenDecimals).toBe('number');

    // one entry per signed extension, in metadata order
    expect(payload.extensions.map((e) => e.id)).toEqual(api.registry.signedExtensions);

    // generic per-extension encoder faithfulness (values pulled from the real payload)
    const find = (id: string) => payload.extensions.find((e) => e.id === id);

    expect(find('CheckGenesis')?.additionalSigned).toBe(api.genesisHash.toHex());
    expect(find('CheckNonce')?.extra).toBe('0x00'); // Compact nonce == 0
    expect(find('CheckSpecVersion')?.additionalSigned).toBe(registry.createType('u32', api.runtimeVersion.specVersion).toHex());
    expect(find('CheckTxVersion')?.additionalSigned).toBe(registry.createType('u32', api.runtimeVersion.transactionVersion).toHex());
  });

  it('submits the extrinsic returned by createTransaction verbatim', async (): Promise<void> => {
    const signer: Signer = {
      createTransaction: () => Promise.resolve(refHex)
    };

    const signed = await transfer.signAsync(aliceAddress, { signer });

    expect(signed.toHex()).toEqual(refHex);
    expect(signed.isSigned).toBe(true);
  });

  it('falls back to signPayload when createTransaction is not implemented', async (): Promise<void> => {
    const { alice } = createTestPairs({ type: 'ed25519' });
    const inner = new SingleAccountSigner(registry, alice);
    let signPayloadCalled = false;

    const signer: Signer = {
      signPayload: (payload) => {
        signPayloadCalled = true;

        return inner.signPayload(payload);
      }
    };

    const signed = await transfer.signAsync(aliceAddress, { signer });

    expect(signPayloadCalled).toBe(true);
    expect(signed.isSigned).toBe(true);
  });

  it('carries the exact signable bytes: reconstructing from TxPayloadV1 matches the legacy payload and yields a valid signature', async (): Promise<void> => {
    const { alice, bob } = createTestPairs({ type: 'ed25519' });
    // pin the nonce so the createTransaction and legacy signings use identical inputs
    const options = { nonce: 7 };

    // (1) capture the TxPayloadV1 the API builds for createTransaction
    let captured: TxPayloadV1 | null = null;

    await transfer.signAsync(aliceAddress, {
      ...options,
      signer: { createTransaction: (p) => {
        captured = p;

        return Promise.resolve(refHex);
      } }
    });

    const payload = captured as unknown as TxPayloadV1;

    // (2) capture the legacy SignerPayloadJSON for the SAME extrinsic (same dest) + options
    let legacyJson: SignerPayloadJSON | null = null;
    const inner = new SingleAccountSigner(registry, alice);

    await api.tx.balances.transferAllowDeath(bob.address, 12345n).signAsync(aliceAddress, {
      ...options,
      signer: { signPayload: (json) => {
        legacyJson = json;

        return inner.signPayload(json);
      } }
    });

    // reconstruct the signable payload purely from the explicit TxPayloadV1 extensions:
    // callData ++ (every extension's extra) ++ (every extension's additionalSigned)
    const reconstructed = u8aConcat(
      hexToU8a(payload.callData),
      ...payload.extensions.map((e) => hexToU8a(e.extra)),
      ...payload.extensions.map((e) => hexToU8a(e.additionalSigned))
    );

    // the canonical signable bytes the legacy path signs (bare method encoding)
    const legacySignable = registry
      .createType<ExtrinsicPayload>('ExtrinsicPayload', legacyJson as unknown as SignerPayloadJSON, { version: (legacyJson as unknown as SignerPayloadJSON).version })
      .toU8a({ method: true });

    // GOLD STANDARD: the bytes a signer reconstructs from TxPayloadV1 are byte-identical
    // to what the legacy signer signs
    expect(u8aToHex(reconstructed)).toEqual(u8aToHex(legacySignable));

    // and a signer can produce a cryptographically valid signature from them
    // (payloads > 256 bytes are hashed before signing, matching ExtrinsicPayload.sign)
    const message = reconstructed.length > 256 ? blake2AsU8a(reconstructed) : reconstructed;
    const signature = alice.sign(message);

    expect(signatureVerify(message, signature, alice.address).isValid).toBe(true);
  });
});
