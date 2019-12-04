// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import testingPairs from '@polkadot/keyring/testingPairs';
import Mock from '@polkadot/rpc-provider/mock/index';
import { createType, TypeRegistry } from '@polkadot/types';

import { ApiPromise } from '..';
import { SingleAccountSigner } from '../../test/util';
import { ApiOptions } from '../types';

describe('ApiPromise', (): void => {
  const registry = new TypeRegistry();
  const keyring = testingPairs({ type: 'ed25519' });
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
        await api.sign(keyring.alice_session, TEST)
      ).toEqual(SIG);
    });

    it('signs data using an external signer', async (): Promise<void> => {
      const api = new ApiPromise({
        provider,
        registry,
        signer: new SingleAccountSigner(registry, keyring.alice_session)
      });

      expect(
        await api.sign(ADDR, TEST)
      ).toEqual(SIG);
    });
  });

  describe('decorator.signAsync', (): void => {
    it('signs a transfer using an external signer', async (): Promise<void> => {
      const api = await ApiPromise.create({ provider, registry });
      api.setSigner(new SingleAccountSigner(registry, keyring.alice_session));
      const transfer = api.tx.balances.transfer(keyring.eve.address, 12345);
      const dummySignature = '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000';
      expect(transfer.signature.toHex()).toEqual(dummySignature);
      await transfer.signAsync(keyring.alice_session, {});
      expect(transfer.signature.toHex()).not.toEqual(dummySignature);
    });
  });
});
