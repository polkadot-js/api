// ISC, Copyright 2017 Jaco Greeff
// @flow

import type { InterfaceDefinition } from './types';

const chain = require('./chain');
const state = require('./state');

/**
  @summary Exposes the definition for the RPC endpoints for a Polkadot client node
*/
module.exports = ({
  chain,
  state
}: { [string]: InterfaceDefinition });
