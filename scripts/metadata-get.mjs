// Copyright 2017-2024 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

import fs from 'node:fs';

import { fetch } from '@polkadot/x-fetch';

const PREAMBLE = '// Copyright 2017-2024 @polkadot/types-support authors & contributors\n// SPDX-License-Identifier: Apache-2.0\n\n/* eslint-disable */\n\n';
const CMD = {
  'asset-hub-kusama': `${PREAMBLE}//To run a asset-hub-kusama node please refer to types-support/src/metadata/README.md\n\nexport default`,
  'asset-hub-polkadot': `${PREAMBLE}//To run a asset-hub-polkadot node please refer to types-support/src/metadata/README.md\n\nexport default`,
  kusama: `${PREAMBLE}// cargo run --release -- purge-chain -y --chain kusama-dev  && cargo run --release -- --chain kusama-dev --alice --force-authoring\n\nexport default`,
  polkadot: `${PREAMBLE}// cargo run --release -- purge-chain -y --dev  && cargo run --release -- --dev\n\nexport default`,
  substrate: `${PREAMBLE}// cargo run --release -- purge-chain -y --dev  && cargo run --release -- --dev\n\nexport default`,
  'substrate-contracts-node': `${PREAMBLE}// cargo run --release -- purge-chain -y --dev  && cargo run --release -- --dev\n\nexport default`
};

// V15
const META_VERSION_HEX = '0x0f000000';
const META_VERSION = 15;

/**
 * Parse the specName given any exceptions.
 * 
 * @param {'polkadot' | 'kusama' | 'node' | 'statemint' | 'statemine'} specName
 * @returns {'polkadot' | 'kusama' | 'substrate' | 'asset-hub-kusama' | 'asset-hub-polkadot'} 
 */
const parseChainName = (specName) => {
  switch(specName) {
    case 'node':
      return 'substrate';
    case 'statemine':
      return 'asset-hub-kusama';
    case 'statemint':
      return 'asset-hub-polkadot';
    default:
      return specName;
  }
}

/**
 * Small CLI parser.
 *
 * This script accepts `--url` to specify the endpoint to query the metadata from.
 *
 * @returns {string}
 */
const getUrl = () => {
  const [,, command, ...args] = process.argv;

  if (command === '--url') {
    return args.join(' ');
  }

  return 'http://127.0.0.1:9944';
};

const main = async () => {
  let requestId = 0;

  const chainUrl = getUrl();

  /**
   *
   * @param {'rpc_methods' | 'state_getMetadata' | 'state_getRuntimeVersion' | 'state_call'} method
   * @param {string[]} params
   * @returns {Promise<any>}
   */
  async function get (method, params = []) {
    const res = await fetch(chainUrl, {
      body: JSON.stringify({
        id: ++requestId,
        jsonrpc: '2.0',
        method,
        params
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });
    const body = await res.json();

    return body.result;
  }

  /** @type {[string[], string, { specName: 'polkadot' | 'kusama' | 'node' | 'statemine' | 'statemint'; specVersion: string; }]} */
  const [methods, metadata, version] = await Promise.all([
    get('rpc_methods'),
    get('state_call', ['Metadata_metadata_at_version', META_VERSION_HEX]),
    get('state_getRuntimeVersion')
  ]);
  const chain = parseChainName(version.specName);
  const metaVer = parseInt(metadata.substring(20, 22), 16);
  const path = `packages/types-support/src/metadata/v${META_VERSION}/${chain}`;

  fs.writeFileSync(`${path}-hex.ts`, `${CMD[chain]} '${metadata}';\n`);
  fs.writeFileSync(`${path}-rpc.ts`, `${CMD[chain]} ${JSON.stringify(methods, null, 2)};\n`);
  fs.writeFileSync(`${path}-ver.ts`, `${CMD[chain]} ${JSON.stringify(version, null, 2)};\n`);

  console.log(`Retrieved ${chain}/${version.specVersion}, metadata v${metaVer}`);
};

main().catch((err) => console.error(err)).finally(() => process.exit());
