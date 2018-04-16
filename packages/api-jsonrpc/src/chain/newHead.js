// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { InterfaceMethodDefinition } from '../types';

/**
  @name getHead
  @signature chain_newHead (): HeaderHash
  @summary Retrieves the best headerHash via subscription.
  @description
    Return the block hash for the lastest/best.
*/
module.exports = ({
  isSubscription: true,
  inputs: [],
  output: {
    type: 'Header'
  }
}: InterfaceMethodDefinition);
