// Copyright 2017-2020 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0

import testingPairs from '@polkadot/keyring/testingPairs';
import { TypeRegistry } from '@polkadot/types';
import { u8aToHex } from '@polkadot/util';

import Metadata from '../../../Metadata';
import rpcMetadata from '../../../Metadata/static';
import Decorated from '../../Decorated';

const keyring = testingPairs({ type: 'ed25519' });

describe('fromMetadata', (): void => {
  describe('latest', (): void => {
    const registry = new TypeRegistry();
    const metadata = new Metadata(registry, rpcMetadata);

    registry.setMetadata(metadata);

    const decorated = new Decorated(registry, metadata);

    it('should throw if the storage function expects an argument', (): void => {
      expect((): any => decorated.query.balances.account()).toThrowError(/requires one argument/);
    });

    it('should return a value if the storage function does not expect an argument', (): void => {
      expect((): any => decorated.query.timestamp.now()).not.toThrow();
    });

    it('should return the correct length-prefixed storage key', (): void => {
      expect(
        u8aToHex(
          decorated.query.system.account(keyring.alice.address)
        )
      ).toEqual(
        '0x410126aa394eea5630e07c48ae0c9558cef7b99d880ec681799c0cf30e8886371da9de1e86a9a8c739864cf3cc5ec2bea59fd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d'
      );
    });
  });
});
