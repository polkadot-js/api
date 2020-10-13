// Copyright 2017-2020 @polkadot/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

// Type overrides for specific spec types & versions as given in runtimeVersion
const warnings: Record<string, string[]> = {
  'node-template': [
    '',
    'You are using the node-template, depending on your config and age of the template, you may',
    'have some unexpected results without applying the correct config for your node type:',
    '',
    '- If you have trouble sending txs, apply https://polkadot.js.org/docs/api/FAQ#i-cannot-send-transactions-from-my-node-template-based-chain',
    '- If you have trouble parsing events, apply https://polkadot.js.org/docs/api/FAQ#using-a-non-current-master-node-i-have-issues-parsing-events',
    ''
  ]
};

export default warnings;
