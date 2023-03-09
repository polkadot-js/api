// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev/node/test/node" />

import { createTestPairs } from '@polkadot/keyring/testingPairs';
import rpcMetadata from '@polkadot/types-support/metadata/static-substrate';
import { u8aToHex } from '@polkadot/util';
import { xxhashAsHex } from '@polkadot/util-crypto';

import { TypeRegistry } from '../../../create/index.js';
import { Metadata } from '../../index.js';
import { decorateStorage } from '../index.js';

const keyring = createTestPairs({ type: 'ed25519' });

describe('decorateStorage', (): void => {
  const registry = new TypeRegistry();
  const metadata = new Metadata(registry, rpcMetadata);

  registry.setMetadata(metadata);

  const query = decorateStorage(registry, metadata.asLatest, metadata.version);

  it('should throw if the storage function expects an argument', (): void => {
    expect(() => query.balances.account()).toThrow('Call to balances.account needs 1 arguments, found []');
  });

  it('should throw if the storage function expects multiple arguments', (): void => {
    expect(() => query.staking.erasStakers([1])).toThrow('Call to staking.erasStakers needs 2 arguments, found [1]');
  });

  it('should throw if the storage function expects tuple arguments', (): void => {
    expect(() => query.staking.erasStakers(1)).toThrow('Call to staking.erasStakers needs 2 arguments, found [1]');
  });

  it('should return a value if the storage function does not expect an argument', (): void => {
    expect(() => query.timestamp.now()).not.toThrow();
  });

  it('should return a value if the storage function has the correct arguments', (): void => {
    expect(() => query.staking.erasStakers(1, keyring.alice.address)).not.toThrow();
  });

  it('should return the correct length-prefixed storage key', (): void => {
    expect(
      u8aToHex(query.system.account(keyring.alice.address))
    ).toEqual(
      '0x' +
      '4101' + // length
      '26aa394eea5630e07c48ae0c9558cef7' + // System
      'b99d880ec681799c0cf30e8886371da9' + // account
      'de1e86a9a8c739864cf3cc5ec2bea59fd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d'
    );
  });

  it('should decorate the palletVersion entry', (): void => {
    expect(
      u8aToHex(query.system.palletVersion())
    ).toEqual(
      '0x' +
      '80' + // length
      '26aa394eea5630e07c48ae0c9558cef7' + // System
      xxhashAsHex(':__STORAGE_VERSION__:', 128).substring(2)
    );
  });
});
