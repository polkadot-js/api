// Copyright 2017-2025 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/globals.d.ts" />

import type { KeyringPair } from '@polkadot/keyring/types';
import type { Hash, SignerPayload } from '@polkadot/types/interfaces';
import type { TxPayloadV1 } from '@polkadot/types/types';
import type { HexString } from '@polkadot/util/types';
import type { Signer } from '../types/index.js';

import { createTestPairs } from '@polkadot/keyring';
import { MockProvider } from '@polkadot/rpc-provider/mock';
import { GenericExtrinsic, TypeRegistry } from '@polkadot/types';

import { ApiPromise } from './index.js';

// Helper to extract 'extra' from extensions
const findExtra = (payloadV1: TxPayloadV1, id: string) => {
  const ext = payloadV1.extensions.find((e) => e.id === id);

  return ext && ext.extra !== '0x' ? ext.extra : null;
};

// Helper to extract 'additionalSigned' from extensions
const findAdditional = (payloadV1: TxPayloadV1, id: string) => {
  const ext = payloadV1.extensions.find((e) => e.id === id);

  return ext && ext.additionalSigned !== '0x' ? ext.additionalSigned : null;
};

class MockModernSigner implements Signer {
  private readonly keypair: KeyringPair;
  private readonly api: ApiPromise;

  constructor (keypair: KeyringPair, api: ApiPromise) {
    this.keypair = keypair;
    this.api = api;
  }

  public async createTransaction (payloadV1: TxPayloadV1): Promise<HexString> {
    const bestBlockHeight = payloadV1.context.bestBlockHeight;

    const blockHash = (
      await this.api.rpc.chain.getBlockHash<Hash>(bestBlockHeight)
    ).toHex();

    const payloadToSign = this.api.registry.createType<SignerPayload>(
      'SignerPayload',
      {
        address: payloadV1.signer,
        assetId: findExtra(payloadV1, 'ChargeAssetTxPayment'),
        blockHash,
        blockNumber: bestBlockHeight,
        era: findExtra(payloadV1, 'CheckMortality'),
        genesisHash: findAdditional(payloadV1, 'CheckGenesis'),
        method: payloadV1.callData,
        mode: null,
        nonce: findExtra(payloadV1, 'CheckNonce'),
        runtimeVersion: this.api.runtimeVersion,
        signedExtensions: payloadV1.extensions.map((e) => e.id),
        tip: findExtra(payloadV1, 'ChargeTransactionPayment'),
        version: findAdditional(payloadV1, 'CheckTxVersion')
      }
    );

    const { signature: signatureHex } = this.api.registry
      .createType('ExtrinsicPayload', payloadToSign.toPayload(), {
        version: payloadToSign.version
      })
      .sign(this.keypair);

    const extrinsic = new GenericExtrinsic(
      this.api.registry,
      payloadToSign.method
    );

    if (!payloadV1.signer) {
      throw new Error('Signer is required but not provided');
    }

    extrinsic.addSignature(
      payloadV1.signer,
      signatureHex,
      payloadToSign.toPayload()
    );

    return extrinsic.toHex();
  }
}

describe('createTransaction', () => {
  const registry = new TypeRegistry();
  let api: ApiPromise;
  let provider: MockProvider;
  const { alice } = createTestPairs({ type: 'ed25519' }, false);

  beforeEach(async () => {
    provider = new MockProvider(registry);
    provider.subscriptions.state_subscribeStorage.lastValue = {
      changes: [
        [
          '0x26aa394eea5630e07c48ae0c9558cef79c2f82b23e5fd031fb54c292794b4cc4d560eb8d00e57357cf76492334e43bb2ecaa9f28df6a8c4426d7b6090f7ad3c9',
          '0x00'
        ]
      ]
    };

    // Set up the API
    const rpcData = await provider.send<HexString>('state_getMetadata', []);
    const genesisHash = registry.createType('Hash', await provider.send('chain_getBlockHash', [])).toHex();
    const specVersion = 0;

    api = await ApiPromise.create({
      metadata: { [`${genesisHash}-${specVersion}`]: rpcData },
      provider,
      registry,
      throwOnConnect: true
    });
  });

  afterEach(async () => {
    await provider.disconnect();
  });

  it('should create a valid signed transaction', async (): Promise<void> => {
    const mockSigner = new MockModernSigner(alice, api);
    let extrinsic = api.tx.balances.transferKeepAlive('16kVKdv56dtV13tPttUZonKgj7qqkJget5Xkf3yMqEgdwhZK', 1);
    const blockHash = await api.rpc.chain.getBlockHash();

    extrinsic = await extrinsic.signAsync(alice.address, { blockHash, signer: mockSigner });

    expect(extrinsic.isSigned).toEqual(true);
    expect(extrinsic.signer.toString()).toEqual(alice.address);
    expect(extrinsic.method.toHex()).toEqual(extrinsic.method.toHex());
    expect(extrinsic.nonce.toNumber()).toEqual(0);
    expect(extrinsic.tip.toNumber()).toEqual(0);
    expect(extrinsic.era.isMortalEra).toEqual(true);

    await api.disconnect();
  });
});
