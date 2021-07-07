// Copyright 2017-2021 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import path from 'path';

import { createBundle } from '@polkadot/dev/config/rollup';

const pkgs = [
  '@polkadot/api',
  '@polkadot/api-contract',
  '@polkadot/types'
];

const external = [
  ...pkgs,
  '@polkadot/keyring',
  '@polkadot/networks',
  '@polkadot/util',
  '@polkadot/util-crypto'
];

const entries = ['api-derive', 'rpc-core', 'rpc-provider', 'types-known'].map((p) => ({
  find: `@polkadot/${p}`,
  replacement: path.resolve(process.cwd(), `packages/${p}/build`)
}));

const overrides = {};

export default pkgs.map((pkg) => {
  const override = (overrides[pkg] || {});

  return createBundle({
    external,
    pkg,
    ...override,
    entries: entries.concat(...(override.entries || []))
  });
});
