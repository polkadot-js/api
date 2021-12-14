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
  '@polkadot/util',
  '@polkadot/util-crypto'
];

const entries = ['api-derive', 'rpc-core', 'rpc-provider', 'types-codec', 'types-known'].reduce((all, p) => ({
  ...all,
  [`@polkadot/${p}`]: path.resolve(process.cwd(), `packages/${p}/build/bundle.js`)
}), {
  // re-exported in @polkadot/util-crypto, map directly
  '@polkadot/networks': '@polkadot/util-crypto'
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
