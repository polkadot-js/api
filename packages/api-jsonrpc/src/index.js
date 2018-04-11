// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { InterfaceDefinitions } from './types';

const author = require('./author');
const chain = require('./chain');
const extra = require('./extra');
const state = require('./state');

/**
  @summary Exposes the definition for the RPC endpoints for a Polkadot client node
*/
module.exports = ({
  author,
  chain,
  extra,
  state
}: InterfaceDefinitions);
