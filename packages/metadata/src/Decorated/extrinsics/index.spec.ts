// Copyright 2017-2020 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0

import BN from 'bn.js';
import testingPairs from '@polkadot/keyring/testingPairs';
import { Metadata, TypeRegistry } from '@polkadot/types';

import metadataStatic from '../../Metadata/static';
import fromMetadata from './fromMetadata';

const keyring = testingPairs({ type: 'ed25519' }, false);
const registry = new TypeRegistry();
const metadata = new Metadata(registry, metadataStatic);

registry.setMetadata(metadata);

const extrinsics = fromMetadata(registry, metadata);

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
