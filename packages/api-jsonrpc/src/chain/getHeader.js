// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { InterfaceMethodDefinition } from '../types';

/**
  @name getHeader
  @signature chain_getHeader (hash: HeaderHash): Header
  @summary Retrieves the header for a specific block.
  @description
    Given a block header specified by `hash`, return the full block `Header` information.
*/
module.exports = ({
  inputs: [
    {
      name: 'hash',
      type: 'HeaderHash'
    }
  ],
  output: { type: 'Header' }
}: InterfaceMethodDefinition);
