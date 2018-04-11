// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { InterfaceMethodDefinition } from '../types';

/**
  @name submitExtrinsic
  @signature author_submitExtrinsic (extrinsic: Bytes): Header
  @summary Submit a fully formatted extrinsic for block inclusion.
  @description
    Given a block header specified by `hash`, return the full block `Header` information.
*/
module.exports = ({
  inputs: [
    {
      name: 'extrinsic',
      type: 'Bytes'
    }
  ],
  output: { type: 'Header' }
}: InterfaceMethodDefinition);
