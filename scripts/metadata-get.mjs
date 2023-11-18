// Copyright 2017-2023 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

import fs from 'node:fs';

import { fetch } from '@polkadot/x-fetch';

const PREAMBLE = '// Copyright 2017-2023 @polkadot/types-support authors & contributors\n// SPDX-License-Identifier: Apache-2.0\n\n/* eslint-disable */\n\n';
const CMD = {
  kusama: `${PREAMBLE}// cargo run --release -- purge-chain -y --chain kusama-dev  && cargo run --release -- --chain kusama-dev --alice --force-authoring\n\nexport default`,
  polkadot: `${PREAMBLE}// cargo run --release -- purge-chain -y --dev  && cargo run --release -- --dev\n\nexport default`,
  // TODO Migration for old Kusama/Polkadot dev specs (as per SDK)
  // rococo: `${PREAMBLE}// cargo run --release --bin polkadot -- purge-chain -y --dev  && cargo run --release --bin polkadot -- --dev\n\nexport default`,
  substrate: `${PREAMBLE}// cargo run --release --bin substrate-node -- purge-chain -y --dev  && cargo run --release --bin substrate-node -- --dev\n\nexport default`
};

let requestId = 0;

/**
 *
 * @param {'rpc_methods' | 'state_getMetadata' | 'state_getRuntimeVersion'} method
 * @returns {Promise<any>}
 */
async function get (method) {
  const res = await fetch('http://127.0.0.1:9944', {
    body: JSON.stringify({
      id: ++requestId,
      jsonrpc: '2.0',
      method,
      params: []
    }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'post'
  });
  const body = await res.json();

  return body.result;
}

/** @type {[string[], string, { specName: 'polkadot' | 'kusama' | 'node'; specVersion: string; }]} */
const [methods, metadata, version] = await Promise.all([
  get('rpc_methods'),
  get('state_getMetadata'),
  get('state_getRuntimeVersion')
]);
const chain = version.specName === 'node'
  ? 'substrate'
  : version.specName;
const preamble = CMD[chain];

if (!preamble) {
  throw new Error(`FATAL: Chain ${chain} not found with a preamble, add it in scripts/metadata-get.mjs`);
}

const metaVer = parseInt(metadata.substring(10, 12), 16);
const path = `packages/types-support/src/metadata/v${metaVer}/${chain}`;

fs.writeFileSync(`${path}-hex.ts`, `${preamble} '${metadata}';\n`);
fs.writeFileSync(`${path}-rpc.ts`, `${preamble} ${JSON.stringify(methods, null, 2)};\n`);
fs.writeFileSync(`${path}-ver.ts`, `${preamble} ${JSON.stringify(version, null, 2)};\n`);

console.log(`Retrieved ${chain}/${version.specVersion}, metadata v${metaVer}`);
