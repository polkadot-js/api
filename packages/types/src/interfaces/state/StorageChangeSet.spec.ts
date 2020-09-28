// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { TypeRegistry } from '@polkadot/types';

import json from '../../json/StorageChangeSet.001.json';

describe('StorageChangeSet', (): void => {
  const registry = new TypeRegistry();

  describe('construction', (): void => {
    const set = registry.createType('StorageChangeSet', {
      block: '0x1234',
      changes: [
        ['0xab', '0xcd']
      ]
    });

    it('wraps blockHash', (): void => {
      expect(
        set.block.toHex()
      ).toEqual('0x1234000000000000000000000000000000000000000000000000000000000000');
    });

    it('wraps key/value', (): void => {
      expect(
        set.changes[0][1].toString()
      ).toEqual('0xcd');
    });
  });

  describe('json', (): void => {
    const set = registry.createType('StorageChangeSet', json.params.result);

    it('has the correct hash', (): void => {
      expect(
        set.block.toHex()
      ).toEqual('0x2ad8077937e9a5ceb2e0d57c95b95a6a9edcedc4fb1f14e3bc13245e223a569d');
    });

    it('has the changes', (): void => {
      expect(set.changes).toHaveLength(1);
      expect(set.changes[0][0].toHex()).toEqual('0x54bdbdb5e438d574dd4da05ee6131cee');
    });
  });
});
