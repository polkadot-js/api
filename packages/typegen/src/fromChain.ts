// Copyright 2017-2023 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@polkadot/util/types';

import fs from 'node:fs';
import path from 'node:path';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

import { Definitions, DefinitionsTypes } from '@polkadot/types/types';
import { formatNumber, isHex } from '@polkadot/util';

import { generateDefaultConsts, generateDefaultErrors, generateDefaultEvents, generateDefaultQuery, generateDefaultRpc, generateDefaultRuntime, generateDefaultTx } from './generate/index.js';
import { assertDir, assertFile, getMetadataViaWs, HEADER, writeFile } from './util/index.js';

async function generate (metaHex: HexString, pkg: string | undefined, output: string, isStrict?: boolean): Promise<void> {
  console.log(`Generating from metadata, ${formatNumber((metaHex.length - 2) / 2)} bytes`);

  const outputPath = assertDir(path.join(process.cwd(), output));
  let extraTypes: Record<string, any> = {};
  let customLookupDefinitions: Definitions = { rpc: {}, types: {} };

  if (pkg) {
    try {
      const defCont = await import(
        assertFile(path.join(outputPath, 'definitions.ts'))
      ) as Record<string, any>;

      extraTypes = {
        [pkg]: defCont
      };
    } catch (error) {
      console.error('ERROR: No custom definitions found:', (error as Error).message);
    }
  }

  try {
    const lookCont = await import(
      assertFile(path.join(outputPath, 'lookup.ts'))
    ) as { default: DefinitionsTypes };

    customLookupDefinitions = {
      rpc: {},
      types: lookCont.default
    };
  } catch (error) {
    console.error('ERROR: No lookup definitions found:', (error as Error).message);
  }

  generateDefaultConsts(path.join(outputPath, 'augment-api-consts.ts'), metaHex, extraTypes, isStrict, customLookupDefinitions);
  generateDefaultErrors(path.join(outputPath, 'augment-api-errors.ts'), metaHex, extraTypes, isStrict);
  generateDefaultEvents(path.join(outputPath, 'augment-api-events.ts'), metaHex, extraTypes, isStrict, customLookupDefinitions);
  generateDefaultQuery(path.join(outputPath, 'augment-api-query.ts'), metaHex, extraTypes, isStrict, customLookupDefinitions);
  generateDefaultRpc(path.join(outputPath, 'augment-api-rpc.ts'), extraTypes);
  generateDefaultRuntime(path.join(outputPath, 'augment-api-runtime.ts'), metaHex, extraTypes, isStrict, customLookupDefinitions);
  generateDefaultTx(path.join(outputPath, 'augment-api-tx.ts'), metaHex, extraTypes, isStrict, customLookupDefinitions);

  writeFile(path.join(outputPath, 'augment-api.ts'), (): string =>
    [
      HEADER('chain'),
      ...[
        ...['consts', 'errors', 'events', 'query', 'tx', 'rpc', 'runtime']
          .filter((key) => !!key)
          .map((key) => `./augment-api-${key}.js`)
      ].map((path) => `import '${path}';\n`)
    ].join('')
  );

  process.exit(0);
}

type ArgV = { endpoint: string; output: string; package?: string; strict?: boolean };

async function mainPromise (): Promise<void> {
  const { endpoint, output, package: pkg, strict: isStrict } = yargs(hideBin(process.argv)).strict().options({
    endpoint: {
      description: 'The endpoint to connect to (e.g. wss://kusama-rpc.polkadot.io) or relative path to a file containing the JSON output of an RPC state_getMetadata call',
      required: true,
      type: 'string'
    },
    output: {
      description: 'The target directory to write the data to',
      required: true,
      type: 'string'
    },
    package: {
      description: 'Optional package in output location (for extra definitions)',
      type: 'string'
    },
    strict: {
      description: 'Turns on strict mode, no output of catch-all generic versions',
      type: 'boolean'
    }
  }).argv as ArgV;

  let metaHex: HexString;

  if (endpoint.startsWith('wss://') || endpoint.startsWith('ws://')) {
    metaHex = await getMetadataViaWs(endpoint);
  } else {
    metaHex = (
      JSON.parse(
        fs.readFileSync(assertFile(path.join(process.cwd(), endpoint)), 'utf-8')
      ) as { result: HexString }
    ).result;

    if (!isHex(metaHex)) {
      throw new Error('Invalid metadata file');
    }
  }

  await generate(metaHex, pkg, output, isStrict);
}

export function main (): void {
  mainPromise().catch((error) => {
    console.error();
    console.error(error);
    console.error();
    process.exit(1);
  });
}
