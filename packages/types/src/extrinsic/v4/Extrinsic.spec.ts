// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import BN from 'bn.js';

import { createTestPairs } from '@polkadot/keyring/testingPairs';
import { decorateExtrinsics, Metadata } from '@polkadot/metadata';
import rpcMetadata from '@polkadot/metadata/static';

import { TypeRegistry } from '../../create';
import { GenericExtrinsicV4 as Extrinsic } from '.';

const registry = new TypeRegistry();
const metadata = new Metadata(registry, rpcMetadata);
const keyring = createTestPairs({ type: 'ed25519' }, false);

registry.setMetadata(metadata);

const tx = decorateExtrinsics(registry, metadata.asLatest, metadata.version);

describe('ExtrinsicV4', (): void => {
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
        tx.balances.transfer(keyring.bob.publicKey, 6969n)
      ).toHex()
    ).toEqual(
      '0x' +
      '0600' + // balance.transfer
      '00' +
      'd7568e5f0a7eda67a82691ff379ac4bba4f9c9b859fe779b5d46363b61ad2db9' +
      'e56c'
    );
  });

  it('creates a signed extrinsic', (): void => {
    expect(
      new Extrinsic(
        registry,
        tx.balances.transfer(keyring.bob.publicKey, 6969n)
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
          specVersion: new BN(123),
          transactionVersion: new BN(123)
        },
        tip: 2
      }).toHex()
    ).toEqual(
      '0x' +
      '00' +
      'd172a74cda4c865912c32ba0a80a57ae69abae410e5ccb59dee84e2f4432db4f' +
      '00' + // ed25519
      'ab31e8dbdbf37398f9a42cfe473e17f6e2e05d8d7a1612513fa73f5f6ad3bfdb' +
      'adbabd920d033ad48999d9dc6a07e3e7ffb9a503128c94bf4fd97aeb4523f90e' +
      '000408' + // era. nonce, tip
      '0600' +
      '00' +
      'd7568e5f0a7eda67a82691ff379ac4bba4f9c9b859fe779b5d46363b61ad2db9' +
      'e56c'
    );
  });
});
