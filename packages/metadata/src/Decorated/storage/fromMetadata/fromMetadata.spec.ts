// Copyright 2017-2019 @polkadot/metadata authors & contributors
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
      expect((): any => decorated.query.balances.freeBalance()).toThrowError(/requires one argument/);
    });

    it('should return a value if the storage function does not expect an argument', (): void => {
      expect((): any => decorated.query.timestamp.now()).not.toThrow();
    });

    it('should return the correct length-prefixed storage key', (): void => {
      expect(
        u8aToHex(
          decorated.query.balances.freeBalance(keyring.alice.address)
        )
      ).toEqual(
        // new storage key format
        '0x4101c2261276cc9d1f8598ea4b6a74b15c2f6482b9ade7bc6657aaca787ba1add3b4518366b5b1bc7c99bae0ba710af1ac66d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d'
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
        '0x1101c99f5446efa57788f39ab529311f455042616c616e636573204672656542616c616e6365d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d'
      );
    });
  });
});
