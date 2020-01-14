// Copyright 2017-2020 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiOptions } from '../types';

import createPair from '@polkadot/keyring/pair';
import testKeyring from '@polkadot/keyring/testing';
import Mock from '@polkadot/rpc-provider/mock/index';
import { createType, TypeRegistry } from '@polkadot/types';
import { hexToU8a } from '@polkadot/util';

import { SingleAccountSigner } from '../../test/util';
import ApiPromise from './Api';

describe('ApiPromise', (): void => {
  const registry = new TypeRegistry();
  const keyring = testKeyring({ type: 'ed25519' });
  const aliceEd = keyring.addPair(
    createPair('ed25519', {
      secretKey: hexToU8a('0xabf8e5bdbe30c65656c0a3cbd181ff8a56294a69dfedd27982aace4a7690911588dc3417d5058ec4b4503e0c12ea1a0a89be200fe98922423d4334014fa6b0ee'),
      publicKey: hexToU8a('0x88dc3417d5058ec4b4503e0c12ea1a0a89be200fe98922423d4334014fa6b0ee')
    })
  );
  let provider: Mock;

  beforeEach((): void => {
    jest.setTimeout(3000000);
    provider = new Mock(registry);
  });

  describe('initialization', (): void => {
    it('Create API instance with metadata map and makes the runtime, rpc, state & extrinsics available', async (): Promise<void> => {
      const rpcData = await provider.send('state_getMetadata', []);
      const genesisHash = createType(registry, 'Hash', await provider.send('chain_getBlockHash', [])).toHex();
      const specVersion = 0;
      const metadata: any = {};
      const key = `${genesisHash}-${specVersion}`;
      metadata[key] = rpcData;
      const api = await ApiPromise.create({ provider, metadata, registry } as ApiOptions);

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
      const api = await ApiPromise.create({ provider, metadata, registry });

      expect(api.genesisHash).toBeDefined();
      expect(api.runtimeMetadata).toBeDefined();
      expect(api.runtimeVersion).toBeDefined();
      expect(api.rpc).toBeDefined();
      expect(api.query).toBeDefined();
      expect(api.tx).toBeDefined();
      expect(api.derive).toBeDefined();
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
      const signer = new SingleAccountSigner(registry, aliceEd);
      const api = await ApiPromise.create({ provider, registry, signer });
      const transfer = api.tx.balances.transfer(keyring.getPair('0xe659a7a1628cdd93febc04a4e0646ea20e9f5f0ce097d9a05290d4a9e054df4e').address, 12345);

      await transfer.signAsync(aliceEd, {});

      expect(transfer.signature.toHex()).toEqual(
        '0x97f3cfe5088fcd575313e983f45d02b0f630e7b94ff9a3ac50e20cd096a8f554fda73d42ead891b5a1d3ce5607d83f20b0c6570b555e949cfb5763d0abcd590b'
      );
    });
  });
});
