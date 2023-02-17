// Copyright 2017-2023 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@polkadot/util/types';

import path from 'path';
import yargs from 'yargs';

import { Definitions } from '@polkadot/types/types';
import { formatNumber } from '@polkadot/util';

import { generateDefaultConsts, generateDefaultErrors, generateDefaultEvents, generateDefaultQuery, generateDefaultRpc, generateDefaultRuntime, generateDefaultTx } from './generate';
import { assertDir, assertFile, getMetadataViaWs, HEADER, writeFile } from './util';

function generate (metaHex: HexString, pkg: string | undefined, output: string, isStrict?: boolean): void {
  console.log(`Generating from metadata, ${formatNumber((metaHex.length - 2) / 2)} bytes`);

  const outputPath = assertDir(path.join(process.cwd(), output));
  let extraTypes: Record<string, any> = {};
  let customLookupDefinitions: Definitions = { rpc: {}, types: {} };

  if (pkg) {
    try {
      extraTypes = {
        // eslint-disable-next-line @typescript-eslint/no-var-requires, @typescript-eslint/no-unsafe-argument
        [pkg]: require(assertFile(path.join(outputPath, 'definitions.ts'))) as Record<string, any>
      };
    } catch (error) {
      console.error('ERROR: No custom definitions found:', (error as Error).message);
    }
  }

  try {
    customLookupDefinitions = {
      rpc: {},
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-var-requires
      types: require(assertFile(path.join(outputPath, 'lookup.ts'))).default
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
          .map((key) => `./augment-api-${key}`)
      ].map((path) => `import '${path}';\n`)
    ].join('')
  );

  process.exit(0);
}

type ArgV = { endpoint: string; output: string; package?: string; strict?: boolean };

export function main (): void {
  const { endpoint, output, package: pkg, strict: isStrict } = yargs.strict().options({
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

  if (endpoint.startsWith('wss://') || endpoint.startsWith('ws://')) {
    getMetadataViaWs(endpoint)
      .then((metadata) => generate(metadata, pkg, output, isStrict))
      .catch(() => process.exit(1));
  } else {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const metadata = (require(assertFile(path.join(process.cwd(), endpoint))) as Record<string, HexString>).result;

    generate(metadata, pkg, output, isStrict);
  }
}
