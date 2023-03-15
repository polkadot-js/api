// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/node.d.ts" />

import { createTestPairs } from '@polkadot/keyring/testingPairs';
import metadataStatic from '@polkadot/types-support/metadata/v13/substrate-hex';
import { BN } from '@polkadot/util';

import { TypeRegistry } from '../../../create/index.js';
import { Metadata } from '../../Metadata.js';
import { decorateExtrinsics } from './index.js';

const keyring = createTestPairs({ type: 'ed25519' }, false);
const registry = new TypeRegistry();
const metadata = new Metadata(registry, metadataStatic);

registry.setMetadata(metadata);
registry.register({ Address: 'IndicesLookupSource', LookupSource: 'IndicesLookupSource' });

const extrinsics = decorateExtrinsics(registry, metadata.asLatest, metadata.version);

describe('extrinsics', (): void => {
  it('encodes an actual transfer (actual data)', (): void => {
    expect(
      registry.createType('Extrinsic',
        extrinsics.balances.transfer(keyring.bob.publicKey, 6969)
      ).sign(keyring.alice, {
        blockHash: '0xec7afaf1cca720ce88c1d1b689d81f0583cc15a97d621cf046dd9abf605ef22f',
        genesisHash: '0xdcd1346701ca8396496e52aa2785b1748deb6db09551b72159dcb3e08991025b',
        nonce: 0,
        runtimeVersion: {
          apis: [],
          authoringVersion: new BN(123),
          implName: 'test',
          implVersion: new BN(123),
          specName: 'test',
          specVersion: new BN(123),
          transactionVersion: new BN(123)
        }
      }).toHex()
    ).toEqual(
      '0x' +
      '2d02' + // length
      '84' + // signed flag
      'ffd172a74cda4c865912c32ba0a80a57ae69abae410e5ccb59dee84e2f4432db4f' + // who
      '00' + // ed25519
      '4634f7b973084f983ef48e2afbd72a990f7d4dd9d86c39e645cb34d9a45466b6' + // sig1
      '263f0f2020363a6475f91e323a8b1bd43dedd97e78ec3c5d5b5197466305400e' + // sig2
      '000000' + // nonce, era, tip
      '0600' + // balances.transfer
      'ffd7568e5f0a7eda67a82691ff379ac4bba4f9c9b859fe779b5d46363b61ad2db9' + // to
      'e56c' // value
    );
  });
});

describe('decorateExtrinsics', (): void => {
  it('should throw if an incorrect number of args is supplied', (): void => {
    expect(() => extrinsics.balances.setBalance()).toThrow(/expects 3 arguments/);
  });

  it('should return a value if the storage function does not expect an argument', (): void => {
    expect(() => extrinsics.balances.setBalance('5C62W7ELLAAfix9LYrcx5smtcffbhvThkM5x7xfMeYXCtGwF', 2, 3)).not.toThrow();
  });

  it('should return properly-encoded transactions', (): void => {
    expect(
      registry.createType('Extrinsic', extrinsics.timestamp.set(32)).toU8a()
    ).toEqual(
      new Uint8Array([
        // length (encoded)
        4 << 2,
        // version, no signature
        4,
        // index
        3, 0,
        // values, Compact<Moment>
        32 << 2
      ])
    );
  });

  it('has working .is', (): void => {
    const tx = extrinsics.balances.setBalance('5C62W7ELLAAfix9LYrcx5smtcffbhvThkM5x7xfMeYXCtGwF', 2, 3);

    expect(extrinsics.balances.setBalance.is(tx)).toBe(true);
    expect(extrinsics.balances.transfer.is(tx)).toBe(false);
  });
});
