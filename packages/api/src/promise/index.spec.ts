// Copyright 2017-2023 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/globals.d.ts" />

import type { HexString } from '@polkadot/util/types';
import type { SubmittableExtrinsic } from '../types/index.js';

import { createPair } from '@polkadot/keyring/pair';
import { createTestKeyring } from '@polkadot/keyring/testing';
import { MockProvider } from '@polkadot/rpc-provider/mock';
import { TypeRegistry } from '@polkadot/types';
import { hexToU8a } from '@polkadot/util';

import { SingleAccountSigner } from '../test/index.js';
import { ApiPromise } from './index.js';

const TRANSFER_SIG = '0xcc277eb341d3801c08f149508221583fa3185cc3944e6cb376cd061640305edd7dc24dfd754adb24768f1d8547389b7720e6f626bc81f5593fba1141e7f7ba07';

describe('ApiPromise', (): void => {
  const registry = new TypeRegistry();
  const keyring = createTestKeyring({ type: 'ed25519' });
  const aliceEd = keyring.addPair(
    // eslint-disable-next-line @typescript-eslint/unbound-method
    createPair({ toSS58: keyring.encodeAddress, type: 'ed25519' }, {
      publicKey: hexToU8a('0x88dc3417d5058ec4b4503e0c12ea1a0a89be200fe98922423d4334014fa6b0ee'),
      secretKey: hexToU8a('0xabf8e5bdbe30c65656c0a3cbd181ff8a56294a69dfedd27982aace4a7690911588dc3417d5058ec4b4503e0c12ea1a0a89be200fe98922423d4334014fa6b0ee')
    })
  );
  let provider: MockProvider;

  async function createTransfer (): Promise<{ api: ApiPromise; transfer: SubmittableExtrinsic<'promise'> }> {
    provider.subscriptions.state_subscribeStorage.lastValue = {
      changes: [
        [
          '0x26aa394eea5630e07c48ae0c9558cef79c2f82b23e5fd031fb54c292794b4cc4d560eb8d00e57357cf76492334e43bb2ecaa9f28df6a8c4426d7b6090f7ad3c9',
          '0x00'
        ]
      ]
    };

    const signer = new SingleAccountSigner(registry, aliceEd);
    const api = await ApiPromise.create({ provider, registry, signer, throwOnConnect: true });
    const transfer = api.tx.balances.transferAllowDeath(keyring.getPair('0xe659a7a1628cdd93febc04a4e0646ea20e9f5f0ce097d9a05290d4a9e054df4e').address, 321564789876512345n);

    return { api, transfer: await transfer.signAsync(aliceEd.address, {}) };
  }

  beforeEach((): void => {
    provider = new MockProvider(registry);
  });

  afterEach(async () => {
    await provider.disconnect();
  });

  describe('initialization', (): void => {
    it('Create API instance with metadata map and makes the runtime, rpc, state & extrinsics available', async (): Promise<void> => {
      const rpcData = await provider.send<HexString>('state_getMetadata', []);
      const genesisHash = registry.createType('Hash', await provider.send('chain_getBlockHash', [])).toHex();
      const specVersion = 0;
      const api = await ApiPromise.create({ metadata: { [`${genesisHash}-${specVersion}`]: rpcData }, provider, registry, throwOnConnect: true });

      expect(api.genesisHash).toBeDefined();
      expect(api.runtimeMetadata).toBeDefined();
      expect(api.runtimeVersion).toBeDefined();
      expect(api.rpc).toBeDefined();
      expect(api.query).toBeDefined();
      expect(api.tx).toBeDefined();
      expect(api.derive).toBeDefined();

      await api.disconnect();
    });

    it('Create API instance without metadata and makes the runtime, rpc, state & extrinsics available', async (): Promise<void> => {
      const metadata = {};
      const api = await ApiPromise.create({ metadata, provider, registry, throwOnConnect: true });

      expect(api.genesisHash).toBeDefined();
      expect(api.runtimeMetadata).toBeDefined();
      expect(api.runtimeVersion).toBeDefined();
      expect(api.rpc).toBeDefined();
      expect(api.query).toBeDefined();
      expect(api.tx).toBeDefined();
      expect(api.derive).toBeDefined();

      await api.disconnect();
    });

    // eslint-disable-next-line jest/expect-expect
    it('Create API instance will error on failure to await ready', async (): Promise<void> => {
      class ErrorApiPromise extends ApiPromise {
        constructor () {
          super({ provider });
        }

        protected override _loadMeta (): Promise<boolean> {
          throw new Error('Simulate failure to load meta');
        }
      }

      try {
        const api = await ErrorApiPromise.create({ provider, throwOnConnect: true });

        await api.disconnect();

        throw new Error('Expected an error but none occurred.');
      } catch {
        // Pass
      }
    });
  });

  describe('api.sign', (): void => {
    const ADDR = '5FA9nQDVg267DEd8m1ZypXLBnvN7SFxYwV7ndqSYGiN9TTpu';
    const TEST = { data: '0x0102030405060708090a0b0c0d0e0f112233445566778899aabbccddeeff' };
    const SIG = '0x659effefbbe5ab4d7136ebb5084b959eb424e32b862307371be4721ac2c46334245af4f1476c36c5e5aff04396c2fdd2ce561ec90382821d4aa071b559b1db0f';

    it('signs data using a specified keyring', async (): Promise<void> => {
      const api = await ApiPromise.create({ provider, registry, throwOnConnect: true });
      const sig = await api.sign(aliceEd, TEST);

      expect(sig).toEqual(SIG);

      await api.disconnect();
    });

    it('signs data using an external signer', async (): Promise<void> => {
      const api = await ApiPromise.create({ provider, registry, signer: new SingleAccountSigner(registry, aliceEd), throwOnConnect: true });
      const sig = await api.sign(ADDR, TEST);

      expect(sig).toEqual(SIG);

      await api.disconnect();
    });
  });

  describe('decorator.signAsync', (): void => {
    it('signs a transfer using an external signer', async (): Promise<void> => {
      const { api, transfer } = await createTransfer();

      expect(transfer.signature.toHex()).toEqual(TRANSFER_SIG);

      await api.disconnect();
    });
  });

  describe('api.tx(...)', (): void => {
    it('allows construction from existing extrinsic', async (): Promise<void> => {
      const { api, transfer } = await createTransfer();

      expect(api.tx(transfer.toHex()).signature.toHex()).toEqual(TRANSFER_SIG);
      expect(api.tx(transfer).signature.toHex()).toEqual(TRANSFER_SIG);

      await api.disconnect();
    });
  });

  describe('api.rpc(...)', (): void => {
    it('allows sending rpc call', async (): Promise<void> => {
      const { api } = await createTransfer();

      expect(await api.rpc('dev_echo', 'hello', 'world')).toEqual(['hello', 'world']);

      await api.disconnect();
    });
  });
});
