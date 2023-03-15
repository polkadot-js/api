// Copyright 2017-2023 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/node.d.ts" />

import type { Registry } from '@polkadot/types/types';

import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

import { TypeDefInfo } from '@polkadot/types/types';
import { blake2AsHex } from '@polkadot/util-crypto';

import abis from '../test/contracts/index.js';
import { Abi } from './index.js';

interface SpecDef {
  messages: {
    label: string;
    name: string[] | string
  }[]
}

interface JSONAbi {
  source: {
    compiler: string,
    hash: string,
    language: string,
    wasm: string
  },
  spec: SpecDef;
  V1: {
    spec: SpecDef;
  },
  V2: {
    spec: SpecDef;
  },
  V3: {
    spec: SpecDef;
  },
  V4: {
    spec: SpecDef;
  }
}

// FIXME When Jest is removed with ESM tests, this should be converted to use import.meta.url
const cmpPath = path.join(process.cwd(), 'packages/api-contract/src/test/compare');

function stringifyInfo (key: string, value: unknown): unknown {
  return key === 'info'
    ? TypeDefInfo[value as number]
    : value;
}

function stringifyJson (registry: Registry): string {
  const defs = registry.lookup.types.map(({ id }) =>
    registry.lookup.getTypeDef(id)
  );

  return JSON.stringify(defs, stringifyInfo, 2);
}

describe('Abi', (): void => {
  describe('ABI', (): void => {
    Object.entries(abis).forEach(([abiName, _abi]) => {
      const abi = _abi as unknown as JSONAbi;

      it(`initializes from a contract ABI (${abiName})`, (): void => {
        try {
          const messageIds = (abi.V4 || abi.V3 || abi.V2 || abi.V1 || abi).spec.messages.map(({ label, name }) =>
            label || (
              Array.isArray(name)
                ? name.join('::')
                : name
            )
          );
          const inkAbi = new Abi(abis[abiName]);

          expect(inkAbi.messages.map(({ identifier }) => identifier)).toEqual(messageIds);
        } catch (error) {
          console.error(error);

          throw error;
        }
      });
    });
  });

  describe('TypeDef', (): void => {
    for (const [abiName, abiJson] of Object.entries(abis)) {
      it(`initializes from a contract ABI: ${abiName}`, (): void => {
        const abi = new Abi(abiJson);
        const registryJson = stringifyJson(abi.registry);
        const cmpFile = path.join(cmpPath, `${abiName}.test.json`);
        const cmpText = fs.readFileSync(cmpFile, 'utf-8');

        try {
          expect(JSON.parse(registryJson)).toEqual(JSON.parse(cmpText));
        } catch (error) {
          if (process.env.GITHUB_REPOSITORY) {
            console.error(registryJson);

            throw error;
          }

          fs.writeFileSync(cmpFile, registryJson, { flag: 'w' });
        }
      });
    }
  });

  it('has the correct hash for the source', (): void => {
    const abi = new Abi(abis.ink_v0_flipperBundle);
    const bundle = abis.ink_v0_flipperBundle as unknown as JSONAbi;

    // manual
    expect(bundle.source.hash).toEqual(blake2AsHex(bundle.source.wasm));

    // the Codec hash
    expect(bundle.source.hash).toEqual(abi.info.source.wasm.hash.toHex());

    // the hash as per the actual Abi
    expect(bundle.source.hash).toEqual(abi.info.source.wasmHash.toHex());
  });
});
