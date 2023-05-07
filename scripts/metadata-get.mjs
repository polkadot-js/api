// Copyright 2017-2023 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

import fs from 'node:fs';

import { fetch } from '@polkadot/x-fetch';

const META = 14;
const PREAMBLE = `// Copyright 2017-2023 @polkadot/types-support authors & contributors\n// SPDX-License-Identifier: Apache-2.0\n\n/* eslint-disable */\n\n`;
const CMD = {
  kusama: `${PREAMBLE}// cargo run --release -- purge-chain -y --chain kusama-dev  && cargo run --release -- --chain kusama-dev --alice --force-authoring\n\nexport default`,
  polkadot: `${PREAMBLE}// cargo run --release -- purge-chain -y --dev  && cargo run --release -- --dev\n\nexport default`,
  substrate: `${PREAMBLE}// cargo run --release -- purge-chain -y --dev  && cargo run --release -- --dev\n\nexport default`
}

let requestId = 0;

async function get (method) {
  const res = await fetch('http://127.0.0.1:9944', {
    body: JSON.stringify({
      id: ++requestId,
      jsonrpc: '2.0',
      method,
      params: []
    }),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'post'
  });
  const body = await res.json();

  return body.result;
}

const [methods, metadata, version] = await Promise.all([
  get('rpc_methods'),
  get('state_getMetadata'),
  get('state_getRuntimeVersion')
]);
const chain = version.specName === 'node'
  ? 'substrate'
  : version.specName;
const path = `packages/types-support/src/metadata/v${META}/${chain}`;

fs.writeFileSync(`${path}-hex.ts`, `${CMD[chain]} '${metadata}';\n`);
fs.writeFileSync(`${path}-rpc.ts`, `${CMD[chain]} ${JSON.stringify(methods, null, 2)};\n`);
fs.writeFileSync(`${path}-ver.ts`, `${CMD[chain]} ${JSON.stringify(version, null, 2)};\n`);

console.log(`Done. ${chain}/${version.specVersion}`);
