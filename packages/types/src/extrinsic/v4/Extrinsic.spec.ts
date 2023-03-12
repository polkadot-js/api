// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev/node/test/node.d.ts" />

import { createTestPairs } from '@polkadot/keyring/testingPairs';
import rpcMetadata from '@polkadot/types-support/metadata/static-substrate';
import { BN } from '@polkadot/util';

import { TypeRegistry } from '../../create/index.js';
import { decorateExtrinsics, Metadata } from '../../metadata/index.js';
import { GenericExtrinsicV4 as Extrinsic } from './index.js';

const registry = new TypeRegistry();
const metadata = new Metadata(registry, rpcMetadata);
const keyring = createTestPairs({ type: 'ed25519' }, false);

registry.setMetadata(metadata);

const tx = decorateExtrinsics(registry, metadata.asLatest, metadata.version);

describe('ExtrinsicV4', (): void => {
  it('constructs a sane Uint8Array (default)', (): void => {
    const xt = new Extrinsic(registry);

    // expect(`${xt.method.section}${xt.method.method}`).toEqual('system.fillBlock');
    expect(`${xt.method.section}.${xt.method.method}`).toEqual('system.remark');

    expect(xt.toU8a()).toEqual(new Uint8Array([
      0, 0, // index
      // 0, 0, 0, 0 // fillBlock, Perbill
      0 // remark, Vec<u8>
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
      'eb58b10100923b73df92010db6f9363300ea3947d4c7c92ce669da93931853e8' +
      'a2f21c8a7c73035b3ddd8cdd47ef5db3092aad09d15e6f5ed9d32d7864821409' +
      '00040800' + // era. nonce, tip
      '0600' +
      '00' +
      'd7568e5f0a7eda67a82691ff379ac4bba4f9c9b859fe779b5d46363b61ad2db9' +
      'e56c'
    );
  });
});
