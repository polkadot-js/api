// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/globals.d.ts" />

import rpcMetadata from '@polkadot/types-support/metadata/static-substrate';

import { TypeRegistry } from '../../create/index.js';
import { Metadata } from '../../metadata/index.js';
import { GeneralExt } from './index.js';

const registry = new TypeRegistry();
const metadata = new Metadata(registry, rpcMetadata);

registry.setMetadata(metadata);

describe('GeneralExt', (): void => {
  // const extrinsic = new Uint8Array([181, 1, 69, 0, 0, 1, 168, 233, 106, 49, 105, 38, 163, 218, 171, 202, 93, 136, 17, 15, 0, 153, 39, 227, 172, 193, 76, 18, 216, 240, 169, 102, 211, 43, 191, 124, 81, 18, 51, 177, 255, 243, 61, 86, 88, 188, 237, 234, 116, 68, 15, 154, 78, 127, 45, 238, 86, 104, 223, 203, 13, 26, 41, 115, 42, 107, 130, 67, 198, 131, 212, 53, 147, 199, 21, 253, 211, 28, 97, 20, 26, 189, 4, 169, 159, 214, 130, 44, 133, 88, 133, 76, 205, 227, 154, 86, 132, 231, 165, 109, 162, 125, 92, 0, 0, 2, 0, 42, 0, 0, 0]);
  const extrinsic = '0xe501450006038eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a480700e40b54021501000000000c01000002000000fc39f7510a4c591e688532a6df54e856a77e92aee8a2372f0f194eea11c48739802eeadbd7894fb53b20132be877ecf58925ee4ab284d1792db0c5d8fcf21e9f00'
  
  it('Can decode a general extrinsic', (): void => {
    const genExt = new GeneralExt(registry, extrinsic);

    expect(genExt.version).toEqual(69);
    expect(genExt.transactionExtensionVersion).toEqual(0);
  });

  it('Can encode a general extrinsic', (): void => {
    const payload = {
      blockHash: '0x802eeadbd7894fb53b20132be877ecf58925ee4ab284d1792db0c5d8fcf21e9f',
      era: '0x1501',
      genesisHash: '0xfc39f7510a4c591e688532a6df54e856a77e92aee8a2372f0f194eea11c48739',
      method: '0x0603008eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a480700e40b5402',
      nonce: '0x00000000',
      specVersion: '0x0000010c',
      tip: '0x00000000000000000000000000000000',
      transactionVersion: '0x00000002'
    };
    const genExt = new GeneralExt(registry, {
      payload
    });

    expect(genExt.toHex()).toEqual(extrinsic);
  });
});
