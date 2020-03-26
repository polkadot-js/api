// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';
import Decorated from '@polkadot/metadata/Decorated';
import Metadata from '@polkadot/metadata/Metadata';
import rpcMetadata from '@polkadot/metadata/Metadata/static';
import testingPairs from '@polkadot/keyring/testingPairs';

import { TypeRegistry } from '../../create';
import Extrinsic from './Extrinsic';

const registry = new TypeRegistry();
const decorated = new Decorated(registry, rpcMetadata);
const keyring = testingPairs({ type: 'ed25519' }, false);

// eslint-disable-next-line no-new
new Metadata(registry, rpcMetadata);

describe('ExtrinsicV2', (): void => {
  it('constructs a sane Uint8Array (default)', (): void => {
    expect(
      new Extrinsic(registry).toU8a()
    ).toEqual(new Uint8Array([
      0, 0, // index
      0, 0, 0, 0 // fillBlock Perbill
    ]));
  });

  it('creates a unsigned extrinsic', (): void => {
    expect(
      new Extrinsic(
        registry,
        decorated.tx.balances.transfer(keyring.bob.publicKey, 6969n)
      ).toHex()
    ).toEqual(
      '0x' +
      '0600' + // balance.transfer
      'ff' +
      'd7568e5f0a7eda67a82691ff379ac4bba4f9c9b859fe779b5d46363b61ad2db9' +
      'e56c'
    );
  });

  it('creates a signed extrinsic', (): void => {
    expect(
      new Extrinsic(
        registry,
        decorated.tx.balances.transfer(keyring.bob.publicKey, 6969n)
      ).sign(keyring.alice, {
        blockHash: '0xec7afaf1cca720ce88c1d1b689d81f0583cc15a97d621cf046dd9abf605ef22f',
        genesisHash: '0xdcd1346701ca8396496e52aa2785b1748deb6db09551b72159dcb3e08991025b',
        nonce: 1,
        runtimeVersion: {
          apis: [],
          authoringVersion: new BN(123),
          implName: 'test',
          implVersion: new BN(123),
          specName: 'test',
          specVersion: new BN(123)
        },
        tip: 2
      }).toHex()
    ).toEqual(
      '0x' +
      'ff' +
      'd172a74cda4c865912c32ba0a80a57ae69abae410e5ccb59dee84e2f4432db4f' +
      '4f47f2d47095239adcb8b725c2c950348c0f65a5019b91e0946636c6c2424cdc' +
      '6c0cece073e18b40ba13d2dd3afcc0daa0f223fa6a8f59d1e025a2dde1d1200a' +
      '000408' + // era. nonce, tip
      '0600' +
      'ff' +
      'd7568e5f0a7eda67a82691ff379ac4bba4f9c9b859fe779b5d46363b61ad2db9' +
      'e56c'
    );
  });
});
