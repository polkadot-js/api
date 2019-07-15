// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { createType } from '@polkadot/types';
import json from '../json/StorageChangeSet.001.json';
import StorageChangeSet from './StorageChangeSet';

describe('StorageChangeSet', (): void => {
  describe('construction', (): void => {
    const set = new StorageChangeSet({
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
        set.changes[0].value.toString()
      ).toEqual('0xcd');
    });
  });

  describe('json', (): void => {
    const set = new StorageChangeSet(json.params.result);

    it('has the correct hash', (): void => {
      expect(
        set.block.toHex()
      ).toEqual('0x2ad8077937e9a5ceb2e0d57c95b95a6a9edcedc4fb1f14e3bc13245e223a569d');
    });

    it('has the changes', (): void => {
      expect(set.changes).toHaveLength(1);
      expect(set.changes[0].key.toHex()).toEqual('0x54bdbdb5e438d574dd4da05ee6131cee');
    });

    it('converts result data to Bytes', (): void => {
      const bytes = createType('Bytes', set.changes[0].value.unwrap());

      expect(bytes).toHaveLength(4452);
    });
  });
});
