// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { InterfaceMethodDefinition } from '../types';

/**
  @name getClientTime
  @signature extra_getClientTime (): U64
  @summary Retrieves the current time
  @description
    Returns the current time on the running node
*/
module.exports = ({
  isSubscription: true,
  inputs: [],
  output: { type: 'U64' }
}: InterfaceMethodDefinition);
