// Copyright 2017-2023 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@polkadot/util/types';

import path from 'path';
import yargs from 'yargs';

import { Definitions, DefinitionsTypes } from '@polkadot/types/types';
import { formatNumber } from '@polkadot/util';

import { generateDefaultConsts, generateDefaultErrors, generateDefaultEvents, generateDefaultQuery, generateDefaultRpc, generateDefaultRuntime, generateDefaultTx } from './generate';
import { assertDir, assertFile, getMetadataViaWs, HEADER, writeFile } from './util';

async function generate (metaHex: HexString, pkg: string | undefined, output: string, isStrict?: boolean): Promise<void> {
  console.log(`Generating from metadata, ${formatNumber((metaHex.length - 2) / 2)} bytes`);

  const outputPath = assertDir(path.join(process.cwd(), output));
  let extraTypes: Record<string, any> = {};
  let customLookupDefinitions: Definitions = { rpc: {}, types: {} };

  if (pkg) {
    try {
      const defPath = assertFile(path.join(outputPath, 'definitions.ts'));
      const defCont = await import(defPath) as { module: any };

      extraTypes = {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        [pkg]: defCont.module
      };
    } catch (error) {
      console.error('ERROR: No custom definitions found:', (error as Error).message);
    }
  }

  try {
    const lookPath = assertFile(path.join(outputPath, 'lookup.ts'));
    const lookCont = await import(lookPath) as { module: { default: DefinitionsTypes } };

    customLookupDefinitions = {
      rpc: {},
      types: lookCont.module.default
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

async function mainPromise (): Promise<void> {
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

  let metadata: HexString;

  if (endpoint.startsWith('wss://') || endpoint.startsWith('ws://')) {
    metadata = await getMetadataViaWs(endpoint);
  } else {
    const metaPath = assertFile(path.join(process.cwd(), endpoint));
    const metaCont = await import(metaPath) as { result: HexString };

    metadata = metaCont.result;
  }

  await generate(metadata, pkg, output, isStrict);
}

export function main (): void {
  mainPromise().catch(() => process.exit(1));
}
