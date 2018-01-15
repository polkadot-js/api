// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { InterfaceMethodDefinition } from '../types';

/**
  @name call
  @signature chain_call (address: Address, method: String, data: CallData, block: HeaderHash): OutData
  @summary Perform a call to a builtin on the chain.
  @description
    Calls a `method` at a specific `address`, passing the encoded `data`. The query is executed at the block specified by `block`.
*/
module.exports = ({
  inputs: [
    {
      name: 'address',
      type: 'Address'
    },
    {
      name: 'method',
      type: 'String'
    },
    {
      name: 'data',
      type: 'CallData'
    },
    {
      name: 'block',
      type: 'HeaderHash'
    }
  ],
  output: {
    type: 'OutData'
  }
}: InterfaceMethodDefinition);
