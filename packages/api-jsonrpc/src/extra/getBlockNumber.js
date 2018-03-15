// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { InterfaceMethodDefinition } from '../types';

/**
  @name getBlockNumber
  @signature extra_getBlockNumber (): BlockNumber
  @summary Retrieves the best blockNumber
  @description
    Returns the best blockNumber available on the client
*/
module.exports = ({
  inputs: [],
  output: { type: 'BlockNumber' }
}: InterfaceMethodDefinition);
