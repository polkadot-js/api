// ISC, Copyright 2017 Jaco Greeff
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
