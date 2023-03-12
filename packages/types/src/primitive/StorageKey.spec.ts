// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev/node/test/node.d.ts" />

import rpcDataV11 from '@polkadot/types-support/metadata/v11/substrate-hex';

import { TypeRegistry } from '../create/index.js';
import { decorateStorage, Metadata } from '../metadata/index.js';
import { StorageKey } from './index.js';

describe('StorageKey', (): void => {
  const registry = new TypeRegistry();

  describe('with MetadataV11', (): void => {
    const metadata = new Metadata(registry, rpcDataV11);

    registry.setMetadata(metadata);

    const query = decorateStorage(registry, metadata.asLatest, metadata.version);

    it('should allow decoding of a DoubleMap key', (): void => {
      const key = new StorageKey(registry, '0x5f3e4907f716ac89b6347d15ececedca8bde0a0ea8864605e3b68ed9cb2da01b66ccada06515787c10000000e535263148daaf49be5ddb1579b72e84524fc29e78609e3caf42e85aa118ebfe0b0ad404b5bdd25f');

      key.setMeta(query.staking.erasStakers.meta);

      expect(key.toHuman()).toEqual([
        '16',
        '5GNJqTPyNqANBkUVMN1LPPrxXnFouWXoe2wNSmmEoLctxiZY'
      ]);
    });

    it('should allow decoding of a Map key', (): void => {
      const key = new StorageKey(registry, '0x426e15054d267946093858132eb537f191ca57b0c4b20b29ae7e99d6201d680cc906f7710aa165d62c709012f807af8fc3f0d2abb0c51ca9a88d4ef24d1a092bf89dacf5ce63ea1d');

      key.setMeta(query.society.defenderVotes.meta);

      expect(key.toHuman()).toEqual([
        '5D4yQHKfqCQYThhHmTfN1JEDi47uyDJc1xg9eZfAG1R7FC7J'
      ]);
    });
  });
});
