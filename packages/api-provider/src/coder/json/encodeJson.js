// Copyright 2017-2018 @polkadot/api-provider authors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { RpcCoderState } from './types';

const encodeObject = require('./encodeObject');

module.exports = function encodeJson (self: RpcCoderState, method: string, params: Array<mixed>): string {
  return JSON.stringify(
    encodeObject(self, method, params)
  );
};
