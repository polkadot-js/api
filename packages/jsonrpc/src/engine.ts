// Copyright 2017-2020 @polkadot/jsonrpc authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { RpcMethodOpt } from './types';

import createMethod from './create/method';
import createParam from './create/param';

const createBlock: RpcMethodOpt = {
  description: 'Instructs the manual-seal authorship task to create a new block',
  params: [
    createParam('createEmpty', 'bool'),
    createParam('finalize', 'bool'),
    createParam('parentHash', 'Option<BlockHash>')
  ],
  type: 'CreatedBlock'
};

const finalizeBlock: RpcMethodOpt = {
  description: 'Instructs the manual-seal authorship task to finalize a block',
  params: [
    createParam('hash', 'BlockHash'),
    createParam('justification', 'Option<Justification>')
  ],
  type: 'bool'
};

const section = 'engine';

/**
 * @summary Calls to interact with the block production engine
 */
export default {
  isDeprecated: false,
  isHidden: false,
  description: 'Block production engine',
  section,
  methods: {
    createBlock: createMethod(section, 'createBlock', createBlock),
    finalizeBlock: createMethod(section, 'finalizeBlock', finalizeBlock)
  }
};
