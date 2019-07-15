// Copyright 2017-2019 @polkadot/jsonrpc authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { RpcMethodOpt } from './types';

import createMethod from './create/method';

// NOTE order here is the same as in Rust, alphabetical below

const name: RpcMethodOpt = {
  description: 'Retrieves the node name',
  params: [],
  type: 'Text'
};

const version: RpcMethodOpt = {
  description: 'Retrieves the version of the node',
  params: [],
  type: 'Text'
};

const chain: RpcMethodOpt = {
  description: 'Retrieves the chain',
  params: [],
  type: 'Text'
};

const properties: RpcMethodOpt = {
  description: 'Get a custom set of properties as a JSON object, defined in the chain spec',
  params: [],
  type: 'ChainProperties'
};

const health: RpcMethodOpt = {
  description: 'Return health status of the node',
  params: [],
  type: 'Health'
};

const peers: RpcMethodOpt = {
  description: 'Returns the currently connected peers',
  params: [],
  // @ts-ignore the Vec<> wrap is fine
  type: 'Vec<PeerInfo>'
};

const networkState: RpcMethodOpt = {
  description: 'Returns current state of the network',
  params: [],
  type: 'NetworkState'
};

const section = 'system';

/**
 * @summary Methods to retrieve system info.
 */
export default {
  isDeprecated: false,
  isHidden: false,
  description: 'Methods to retrieve system info',
  section,
  methods: {
    chain: createMethod(section, 'chain', chain),
    health: createMethod(section, 'health', health),
    name: createMethod(section, 'name', name),
    networkState: createMethod(section, 'networkState', networkState),
    peers: createMethod(section, 'peers', peers),
    properties: createMethod(section, 'properties', properties),
    version: createMethod(section, 'version', version)
  }
};
