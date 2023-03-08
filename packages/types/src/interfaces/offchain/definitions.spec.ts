// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev/node/test/node" />

import { TypeRegistry } from '../../create/index.js';

describe('offchain definitions', (): void => {
  const registry = new TypeRegistry();

  describe('StorageKind', (): void => {
    it('has the correct indexes', (): void => {
      expect(registry.createType('StorageKind').index).toEqual(1);
      expect(registry.createType('StorageKind', 'LOCAL').index).toEqual(2);
    });

    it('has a correct JSON for the type', (): void => {
      expect(registry.createType('StorageKind').toJSON()).toEqual('PERSISTENT');
    });
  });
});
