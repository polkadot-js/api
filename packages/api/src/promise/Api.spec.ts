// Copyright 2017-2020 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiOptions, SubmittableExtrinsic } from '../types';

import createPair from '@polkadot/keyring/pair';
import testKeyring from '@polkadot/keyring/testing';
import Mock from '@polkadot/rpc-provider/mock/index';
import { TypeRegistry } from '@polkadot/types';
import { hexToU8a } from '@polkadot/util';

import { SingleAccountSigner } from '../../test/util';
import ApiPromise from './Api';

const TRANSFER_SIG = '0xa1d493ab6b74550da434fbc153a739429be68c9d30e59e631fb5d08f348504deefb5577f4824e138741ad102f479109827e8fa9552812a3e5f505a24d10e820f';

describe('ApiPromise', (): void => {
  const registry = new TypeRegistry();
  const keyring = testKeyring({ type: 'ed25519' });
  const aliceEd = keyring.addPair(
    // eslint-disable-next-line @typescript-eslint/unbound-method
    createPair({ toSS58: keyring.encodeAddress, type: 'ed25519' }, {
      publicKey: hexToU8a('0x88dc3417d5058ec4b4503e0c12ea1a0a89be200fe98922423d4334014fa6b0ee'),
      secretKey: hexToU8a('0xabf8e5bdbe30c65656c0a3cbd181ff8a56294a69dfedd27982aace4a7690911588dc3417d5058ec4b4503e0c12ea1a0a89be200fe98922423d4334014fa6b0ee')
    })
  );
  let provider: Mock;

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
    const api = await ApiPromise.create({ provider, registry, signer });
    const transfer = api.tx.balances.transfer(keyring.getPair('0xe659a7a1628cdd93febc04a4e0646ea20e9f5f0ce097d9a05290d4a9e054df4e').address, 321_564_789_876_512_345n);

    return { api, transfer: await transfer.signAsync(aliceEd.address, {}) };
  }

  beforeEach((): void => {
    jest.setTimeout(3000000);
    provider = new Mock(registry);
  });

  describe('initialization', (): void => {
    it('Create API instance with metadata map and makes the runtime, rpc, state & extrinsics available', async (): Promise<void> => {
      const rpcData = await provider.send('state_getMetadata', []);
      const genesisHash = registry.createType('Hash', await provider.send('chain_getBlockHash', [])).toHex();
      const specVersion = 0;
      const metadata: any = {};
      const key = `${genesisHash}-${specVersion}`;

      metadata[key] = rpcData;

      const api = await ApiPromise.create({ metadata, provider, registry } as ApiOptions);

      expect(api.genesisHash).toBeDefined();
      expect(api.runtimeMetadata).toBeDefined();
      expect(api.runtimeVersion).toBeDefined();
      expect(api.rpc).toBeDefined();
      expect(api.query).toBeDefined();
      expect(api.tx).toBeDefined();
      expect(api.derive).toBeDefined();
    });

    it('Create API instance without metadata and makes the runtime, rpc, state & extrinsics available', async (): Promise<void> => {
      const metadata = {};
      const api = await ApiPromise.create({ metadata, provider, registry });

      expect(api.genesisHash).toBeDefined();
      expect(api.runtimeMetadata).toBeDefined();
      expect(api.runtimeVersion).toBeDefined();
      expect(api.rpc).toBeDefined();
      expect(api.query).toBeDefined();
      expect(api.tx).toBeDefined();
      expect(api.derive).toBeDefined();
    });

    it('Create API instance will error on failure to await ready', async (): Promise<void> => {
      class ErrorApiPromise extends ApiPromise {
        constructor () {
          super({ provider });
        }

        protected _loadMeta (): Promise<boolean> {
          throw new Error('Simulate failure to load meta');
        }
      }

      try {
        await new ErrorApiPromise().isReady;
        fail('Expected an error but none occurred.');
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
      const api = new ApiPromise({ provider, registry });

      expect(
        await api.sign(aliceEd, TEST)
      ).toEqual(SIG);
    });

    it('signs data using an external signer', async (): Promise<void> => {
      const api = new ApiPromise({
        provider,
        registry,
        signer: new SingleAccountSigner(registry, aliceEd)
      });

      expect(
        await api.sign(ADDR, TEST)
      ).toEqual(SIG);
    });
  });

  describe('decorator.signAsync', (): void => {
    it('signs a transfer using an external signer', async (): Promise<void> => {
      const { transfer } = await createTransfer();

      expect(transfer.signature.toHex()).toEqual(TRANSFER_SIG);
    });
  });

  describe('api.tx(...)', (): void => {
    it('allows construction from existing extrinsic', async (): Promise<void> => {
      const { api, transfer } = await createTransfer();

      expect(api.tx(transfer.toHex()).signature.toHex()).toEqual(TRANSFER_SIG);
      expect(api.tx(transfer).signature.toHex()).toEqual(TRANSFER_SIG);
    });
  });
});
