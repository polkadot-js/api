// Copyright 2019-2021 @polkadot/wasm-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { createBundle } from '@polkadot/dev/config/rollup';

const pkgs = [
  '@polkadot/api',
  '@polkadot/api-contract',
  '@polkadot/api-derive',
  '@polkadot/metadata',
  '@polkadot/rpc-core',
  '@polkadot/rpc-provider',
  '@polkadot/types',
  '@polkadot/types-known'
];

const external = [
  ...pkgs,
  '@polkadot/keyring',
  '@polkadot/networks',
  '@polkadot/util',
  '@polkadot/util-crypto',
  '@polkadot/wasm-crypto',
  '@polkadot/x-fetch',
  '@polkadot/x-global',
  '@polkadot/x-randomvalues',
  '@polkadot/x-rxjs',
  '@polkadot/x-textdecoder',
  '@polkadot/x-textencoder',
  '@polkadot/x-ws'
];

const overrides = {};

export default pkgs.map((pkg) =>
  createBundle({ ...(overrides[pkg] || {}), external, pkg })
);
