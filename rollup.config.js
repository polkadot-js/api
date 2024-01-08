// Copyright 2017-2024 @polkadot/api authors & contributors
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
  '@polkadot/util',
  '@polkadot/util-crypto'
];

function expand (prefix, all) {
  return all.map((p) => p ? `${prefix}-${p}` : prefix);
}

const entries = [
  ...expand('api', ['augment', 'base', 'derive']),
  ...expand('rpc', ['augment', 'core', 'provider']),
  ...expand('types', [...expand('augment', ['', 'lookup', 'registry']), 'codec', 'create', 'helpers', 'known'])
].reduce((all, p) => ({
  ...all,
  [`@polkadot/${p}`]: path.resolve(process.cwd(), `packages/${p}/build/bundle.js`)
}), {
  // re-exported in @polkadot/util-crypto, map directly
  '@polkadot/networks': '@polkadot/util-crypto',
  // we point to a specific file for these (default augmentations)
  '@polkadot/rpc-core/types/jsonrpc': path.resolve(process.cwd(), 'packages/rpc-core/build/types/jsonrpc.js'),
  '@polkadot/types-codec/types/registry': path.resolve(process.cwd(), 'packages/types-codec/build/types/registry.js'),
  '@polkadot/types-create/exports': path.resolve(process.cwd(), 'packages/types-create/build/exports.js')
});

const overrides = {};

export default pkgs.map((pkg) => {
  const override = (overrides[pkg] || {});

  return createBundle({
    external,
    pkg,
    ...override,
    entries: {
      ...entries,
      ...(override.entries || {})
    }
  });
});
