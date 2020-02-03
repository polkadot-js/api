// Copyright 2017-2020 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import testingPairs from '@polkadot/keyring/testingPairs';
import { TypeRegistry } from '@polkadot/types';
import { u8aToHex } from '@polkadot/util';

import rpcMetadata from '../../../Metadata/static';
import rpcMetadataV8 from '../../../Metadata/v8/static';
import Decorated from '../../Decorated';

const keyring = testingPairs({ type: 'ed25519' });

describe('fromMetadata', (): void => {
  describe('latest', (): void => {
    const registry = new TypeRegistry();
    const decorated = new Decorated(registry, rpcMetadata);

    it('should throw if the storage function expects an argument', (): void => {
      expect((): any => decorated.query.balances.account()).toThrowError(/requires one argument/);
    });

    it('should return a value if the storage function does not expect an argument', (): void => {
      expect((): any => decorated.query.timestamp.now()).not.toThrow();
    });

    it('should return the correct length-prefixed storage key', (): void => {
      expect(
        u8aToHex(
          decorated.query.system.accountNonce(keyring.alice.address)
        )
      ).toEqual(
        // new storage key format
        '0x010126aa394eea5630e07c48ae0c9558cef79c2f82b23e5fd031fb54c292794b4cc42e3fb4c297a84c5cebc0e78257d213d0927ccc7596044c6ba013dd05522aacba'
      );
    });
  });

  describe('V8', (): void => {
    const registry = new TypeRegistry();
    const decorated = new Decorated(registry, rpcMetadataV8);

    it('should return the correct length-prefixed storage key', (): void => {
      expect(
        u8aToHex(
          decorated.query.balances.freeBalance(keyring.alice.address)
        )
      ).toEqual(
        // old storage key format
        '0x807f864e18e3dd8b58386310d2fe0919eef27c6e558564b7f67f22d99d20f587bb'
      );
    });
  });
});
