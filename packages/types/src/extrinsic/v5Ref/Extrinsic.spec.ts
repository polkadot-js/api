// Copyright 2017-2025 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/globals.d.ts" />

import { createTestPairs } from '@polkadot/keyring/testingPairs';
import rpcMetadata from '@polkadot/types-support/metadata/static-substrate';

import { TypeRegistry } from '../../create/index.js';
import { decorateExtrinsics, Metadata } from '../../metadata/index.js';
import { ExtrinsicV5 as Extrinsic } from './index.js';

const registry = new TypeRegistry();
const metadata = new Metadata(registry, rpcMetadata);
const keyring = createTestPairs({ type: 'ed25519' }, false);

registry.setMetadata(metadata);

import { createWriteStream } from "fs";
import { BN_ZERO } from '@polkadot/util';

console.log = async (message: any) => {
  const tty = createWriteStream("/dev/tty");
  const msg =
    typeof message === "string" ? message : JSON.stringify(message, null, 2);
  return tty.write(msg + "\n");
};


const tx = decorateExtrinsics(registry, metadata.asLatest, metadata.version);

const signOptions = {
  blockHash: '0x1234567890123456789012345678901234567890123456789012345678901234',
  genesisHash: '0x1234567890123456789012345678901234567890123456789012345678901234',
  nonce: '0x69',
  runtimeVersion: {
    apis: [],
    authoringVersion: BN_ZERO,
    implName: String('test'),
    implVersion: BN_ZERO,
    specName: String('test'),
    specVersion: BN_ZERO,
    transactionVersion: BN_ZERO
  }
};

describe('ExtrinsicV5', (): void => {
  it('constructs a sane Uint8Array (default)', (): void => {
    const xt = new Extrinsic(registry);

    // expect(`${xt.method.section}${xt.method.method}`).toEqual('system.fillBlock');
    expect(`${xt.method.section}.${xt.method.method}`).toEqual('system.remark');

    expect(xt.toU8a()).toEqual(new Uint8Array([
      0, 0, // index
      // 0, 0, 0, 0 // fillBlock, Perbill
      0 // remark, Vec<u8>
    ]));

    xt.signFake(keyring.bob.publicKey, signOptions);
    console.log(xt.toHuman())
  });

  it('creates a bare extrinsic', (): void => {
    expect(
      new Extrinsic(
        registry,
        tx['balances']['transferAllowDeath'](keyring.bob.publicKey, 6969n)
      ).toHex()
    ).toEqual(
      '0x' +
      '0600' + // balance.transferAllowDeath
      '00' +
      'd7568e5f0a7eda67a82691ff379ac4bba4f9c9b859fe779b5d46363b61ad2db9' +
      'e56c'
    );
  });
});
