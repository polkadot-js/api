// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { InterfaceMethodDefinition } from '../types';

/**
  @name getStorage
  @signature chain_getStorage (address: Address, key: H256, block: HeaderHash): StorageData
  @summary Retrieves the storage for an address.
  @description
    Retrieves the storage `key` at a specific `address`, executing the query at a specific `block`.
*/
module.exports = ({
  inputs: [
    {
      name: 'address',
      type: 'Address'
    },
    {
      name: 'key',
      type: 'H256'
    },
    {
      name: 'block',
      type: 'HeaderHash'
    }
  ],
  output: {
    type: 'StorageData'
  }
}: InterfaceMethodDefinition);
