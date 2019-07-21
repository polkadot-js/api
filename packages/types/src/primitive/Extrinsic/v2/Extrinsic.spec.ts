// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import extrinsics from '@polkadot/api-metadata/extrinsics/static';
import testingPairs from '@polkadot/keyring/testingPairs';

import Method from '../../Method';
import Extrinsic from './Extrinsic';

const keyring = testingPairs({ type: 'ed25519' }, false);

describe('ExtrinsicV2', (): void => {
  beforeEach((): void => {
    Method.injectMethods(extrinsics);
  });

  it('constructs a sane Uint8Array (default)', (): void => {
    expect(
      new Extrinsic().toU8a()
    ).toEqual(new Uint8Array([0, 0]));
  });

  it('creates a unsigned extrinsic', (): void => {
    expect(
      new Extrinsic(
        extrinsics.balances.transfer(keyring.bob.publicKey, 6969)
      ).toHex()
    ).toEqual(
      '0x' +
      '0500' + // balance.transfer
      'ff' +
      'd7568e5f0a7eda67a82691ff379ac4bba4f9c9b859fe779b5d46363b61ad2db9' +
      'e56c'
    );
  });

  it('creates a signed extrinsic', (): void => {
    expect(
      new Extrinsic(
        extrinsics.balances.transfer(keyring.bob.publicKey, 6969)
      ).sign(keyring.alice, {
        blockHash: '0xec7afaf1cca720ce88c1d1b689d81f0583cc15a97d621cf046dd9abf605ef22f',
        nonce: 1,
        tip: 2
      }).toHex()
    ).toEqual(
      '0x' +
      'ff' +
      'd172a74cda4c865912c32ba0a80a57ae69abae410e5ccb59dee84e2f4432db4f' +
      '975c79b3c7c57898153faa55a97744f71aa8b4c44ec319978c1206f7941db65e' +
      '6cea25fe0bc700f8cb3c5eeef3894b21ed88398e8d8ab93b6af2e9d2fd9f5404' +
      '000408' + // era. nonce, tip
      '0500' +
      'ff' +
      'd7568e5f0a7eda67a82691ff379ac4bba4f9c9b859fe779b5d46363b61ad2db9' +
      'e56c'
    );
  });
});
