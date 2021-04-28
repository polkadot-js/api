// Copyright 2017-2021 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { createTestPairs } from '@polkadot/keyring/testingPairs';
import { TypeRegistry } from '@polkadot/types/create';
import { u8aToHex } from '@polkadot/util';

import { Metadata } from '../../';
import rpcMetadata from '../../static';
import { decorateStorage } from '..';

const keyring = createTestPairs({ type: 'ed25519' });

describe('decorateStorage', (): void => {
  describe('latest', (): void => {
    const registry = new TypeRegistry();
    const metadata = new Metadata(registry, rpcMetadata);

    registry.setMetadata(metadata);

    const query = decorateStorage(registry, metadata.asLatest, metadata.version);

    it('should throw if the storage function expects an argument', (): void => {
      expect(() => query.balances.account()).toThrowError('Call to balances.account has a null or undefined argument at position 0');
    });

    it('should throw if the storage function expects multiple arguments', (): void => {
      expect(() => query.staking.erasStakers([1])).toThrowError('Call to staking.erasStakers needs 2 arguments, found [1]');
    });

    it('should return a value if the storage function does not expect an argument', (): void => {
      expect(() => query.timestamp.now()).not.toThrow();
    });

    it('should return the correct length-prefixed storage key', (): void => {
      expect(
        u8aToHex(
          query.system.account(keyring.alice.address)
        )
      ).toEqual(
        '0x410126aa394eea5630e07c48ae0c9558cef7b99d880ec681799c0cf30e8886371da9de1e86a9a8c739864cf3cc5ec2bea59fd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d'
      );
    });
  });
});
