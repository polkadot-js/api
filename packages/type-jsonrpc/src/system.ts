// Copyright 2017-2018 @polkadot/jsonrpc authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { MethodOpt, Section } from './types';

import createMethod from './create/method';

const chain: MethodOpt = {
  description: 'Retrieves the chain',
  params: [],
  type: 'Text'
};

const name: MethodOpt = {
  description: 'Retrieves the node name',
  params: [],
  type: 'Text'
};

const version: MethodOpt = {
  description: 'Retrieves the version of the node',
  params: [],
  type: 'Text'
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
    name: createMethod(section, 'name', name),
    version: createMethod(section, 'version', version)
  }
} as Section;
