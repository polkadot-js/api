// Copyright 2017-2018 @polkadot/jsonrpc authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { MethodOpt, Section, SectionMethods } from './types';

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

const methods: { [index: string]: MethodOpt } = {
  chain, name, version
};

export type Methods = typeof methods;

/**
 * @summary Methods to retrieve system info.
 */
export default {
  isDeprecated: false,
  isHidden: false,
  description: 'Methods to retrieve system info',
  name: 'system',
  methods: Object.keys(methods).reduce((result, key) => {
    result[key] = createMethod('system', key, methods[key]);

    return result;
  }, {} as SectionMethods<Methods>)
} as Section<Methods>;
