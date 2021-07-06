// Copyright 2019-2021 @polkadot/wasm-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { createInput, createOutput, createPlugins } from '@polkadot/dev/config/rollup';

const external = [
  '@polkadot/api',
  '@polkadot/api-contract',
  '@polkadot/api-derive',
  '@polkadot/keyring',
  '@polkadot/metadata',
  '@polkadot/networks',
  '@polkadot/rpc-core',
  '@polkadot/rpc-provider',
  '@polkadot/types',
  '@polkadot/types-known',
  '@polkadot/util',
  '@polkadot/util-crypto',
  '@polkadot/wasm-crypto',
  '@polkadot/x-fetch',
  '@polkadot/x-global',
  '@polkadot/x-randomvalues',
  '@polkadot/x-textdecoder',
  '@polkadot/x-textencoder'
];

export default [
  {
    external,
    input: createInput('api'),
    output: createOutput('api', external),
    plugins: createPlugins()
  },
  {
    external,
    input: createInput('api-contract'),
    output: createOutput('api-contract', external),
    plugins: createPlugins()
  },
  {
    external,
    input: createInput('api-derive'),
    output: createOutput('api-derive', external),
    plugins: createPlugins()
  },
  {
    external,
    input: createInput('metadata'),
    output: createOutput('metadata', external),
    plugins: createPlugins()
  },
  {
    external,
    input: createInput('rpc-core'),
    output: createOutput('rpc-core', external),
    plugins: createPlugins()
  },
  {
    external,
    input: createInput('rpc-provider'),
    output: createOutput('rpc-provider', external),
    plugins: createPlugins()
  },
  {
    external,
    input: createInput('types'),
    output: createOutput('types', external),
    plugins: createPlugins()
  },
  {
    external,
    input: createInput('types-known'),
    output: createOutput('types-known', external),
    plugins: createPlugins()
  }
];
