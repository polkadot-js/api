// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { InterfaceMethodDefinition } from '../types';

/**
  @name getStorage
  @signature chain_getStorage (key: H256, blockHash: HeaderHash): StorageData
  @summary Retrieves the storage for a key at a specific block.
  @description
    Retrieves the storage `key` at a specific `blockHash`.
*/
module.exports = ({
  inputs: [
    {
      name: 'key',
      type: 'H256'
    },
    {
      isOptional: true,
      name: 'blockHash',
      type: 'HeaderHash'
    }
  ],
  output: {
    type: 'Bytes'
  }
}: InterfaceMethodDefinition);
