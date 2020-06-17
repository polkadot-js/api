// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import Metadata from '@polkadot/metadata/Metadata';
import metadataStatic from '@polkadot/metadata/Metadata/static';

import { TypeRegistry } from '../../create';
import immortalTxs from '../../json/SignedBlock.004.immortal.json';
import mortalTxs from '../../json/SignedBlock.004.mortal.json';
import knownMehods from '../../json/SignedBlock.005.json';

const registry = new TypeRegistry();

// eslint-disable-next-line no-new
new Metadata(registry, metadataStatic);

describe('SignedBlock', (): void => {
  it('decodes a full block', (): void => {
    const s = registry.createType('SignedBlock', knownMehods.result);

    expect(
      s.block.header.stateRoot.toString()
    ).toEqual('0xc7803b39c1b30a87566ec9d95890db76cf2eee7034faee4c8a0997759e7bcb7e');
    expect(s.block.header.digest.logs.length).toBe(2);
    expect(s.block.header.digest.logs[0].type).toBe('PreRuntime');
    expect(s.block.header.digest.logs[0].value.toHuman()).toEqual([
      'BABE',
      '0xa5cb8138000000000000000000000000549baa911a66f7bab6318a6930380bfd015713f77b6775d2df467d37dadd224dda0a80881cfbddc580d45b3b7358f28e4990d950df4508590543d39d635b3402822279397c1d55449b201710c706ce5de3fd3cb2e269bea6ba89c71e4446fd06'
    ]);
  });

  // Test to replicate https://github.com/polkadot-js/api/issues/1212
  it('decodes to known extrinsics', (): void => {
    const s = registry.createType('SignedBlock', knownMehods.result);
    const indexes = s.block.extrinsics.map(({ method: { callIndex } }): Uint8Array => callIndex);

    expect(indexes).toEqual([
      new Uint8Array([0x03, 0x00]),
      new Uint8Array([0x0c, 0x00])
    ]);
  });

  describe('eras', (): void => {
    it('can decode immortals', (): void => {
      const s = registry.createType('SignedBlock', immortalTxs.result);
      const immortalTx = s.block.extrinsics[0];

      expect(immortalTx.method.methodName).toEqual('transfer');
      expect(immortalTx.method.sectionName).toEqual('balances');
    });

    it('can decode mortals', (): void => {
      const s = registry.createType('SignedBlock', mortalTxs.result);
      const mortalTx = s.block.extrinsics[0];

      expect(mortalTx.method.methodName).toEqual('transfer');
      expect(mortalTx.method.sectionName).toEqual('balances');
    });
  });
});
