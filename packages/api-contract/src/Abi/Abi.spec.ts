// Copyright 2017-2021 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AnyJson, Registry } from '@polkadot/types/types';

import fs from 'fs';
import path from 'path';

import { TypeDefInfo } from '@polkadot/types/types';
import { blake2AsHex } from '@polkadot/util-crypto';

import abis from '../../test/contracts';
import { Abi } from '.';

interface SpecDef {
  messages: {
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
  }
}

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
    Object.entries(abis).forEach(([abiName, abi]: [string, JSONAbi]) => {
      it(`initializes from a contract ABI (${abiName})`, (): void => {
        try {
          const messageIds = (abi.V1 ? abi.V1 : abi).spec.messages.map(({ name }) => Array.isArray(name) ? name[0] : name);
          const inkAbi = new Abi(abis[abiName] as AnyJson);

          expect(inkAbi.messages.map(({ identifier }) => identifier)).toEqual(messageIds);
        } catch (error) {
          console.error(error);

          throw error;
        }
      });
    });
  });

  describe('TypeDef', (): void => {
    Object.keys(abis).forEach((abiName) => {
      it(`initializes from a contract ABI (${abiName})`, (): void => {
        const abi = new Abi(abis[abiName] as AnyJson);
        const json = stringifyJson(abi.registry);
        const cmpPath = path.join(__dirname, `../../test/compare/${abiName}.test.json`);

        try {
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          expect(JSON.parse(json)).toEqual(require(cmpPath));
        } catch (error) {
          if (process.env.GITHUB_REPOSITORY) {
            console.error(json);

            throw error;
          }

          fs.writeFileSync(cmpPath, json, { flag: 'w' });
        }
      });
    });
  });

  it('has the correct hash for the source', (): void => {
    const bundle = abis.ink_v0_flipperBundle as JSONAbi;
    const abi = new Abi(bundle as unknown as AnyJson);

    // manual
    expect(bundle.source.hash).toEqual(blake2AsHex(bundle.source.wasm));

    // the Codec hash
    expect(bundle.source.hash).toEqual(abi.info.source.wasm.hash.toHex());

    // the hash as per the actual Abi
    expect(bundle.source.hash).toEqual(abi.info.source.wasmHash.toHex());
  });
});
