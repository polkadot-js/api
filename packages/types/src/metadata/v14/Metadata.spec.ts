// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { MetadataAll } from '../../interfaces/metadata';
import type { Check } from '../util/types';

import fs from 'fs';
import path from 'path';

import kusamaData from '@polkadot/types-support/metadata/v14/kusama-hex';
import kusamaJson from '@polkadot/types-support/metadata/v14/kusama-json.json';
import kusamaTypes from '@polkadot/types-support/metadata/v14/kusama-types.json';
import polkadotData from '@polkadot/types-support/metadata/v14/polkadot-hex';
import polkadotJson from '@polkadot/types-support/metadata/v14/polkadot-json.json';
import polkadotTypes from '@polkadot/types-support/metadata/v14/polkadot-types.json';
import substrateData from '@polkadot/types-support/metadata/v14/substrate-hex';
import substrateJson from '@polkadot/types-support/metadata/v14/substrate-json.json';
import substrateTypes from '@polkadot/types-support/metadata/v14/substrate-types.json';
import { stringify } from '@polkadot/util';

import { TypeRegistry } from '../../create';
import { Metadata } from '../Metadata';

function testMeta (version: number, matchers: Record<string, Check>): void {
  describe(`MetadataV${version}`, (): void => {
    describe.each(Object.keys(matchers))('%s', (type): void => {
      const { compare, data, types } = matchers[type];

      // FIXME This is to be replaced with the proper version (here as a stop-gap)
      it('parses', (): void => {
        const registry = new TypeRegistry();
        const metadata = new Metadata(registry, data);
        const all = metadata.get('metadata') as MetadataAll;
        const v14 = all.asV14;
        const jsonStruct = v14.toJSON();
        const jsonTypes = v14.lookup.types.toJSON();

        delete (jsonStruct as Record<string, unknown>).lookup;

        const allJson = {
          magicNumber: 1635018093,
          metadata: {
            v14: jsonStruct
          }
        };

        try {
          expect(allJson).toEqual(compare);
        } catch (error) {
          if (process.env.GITHUB_REPOSITORY) {
            console.error(stringify(allJson));

            throw error;
          }

          fs.writeFileSync(
            path.join(process.cwd(), `packages/types-support/src/metadata/v${version}/${type}-json.json`),
            stringify(allJson, 2),
            { flag: 'w' }
          );
        }

        try {
          expect(jsonTypes).toEqual(types);
        } catch (error) {
          if (process.env.GITHUB_REPOSITORY) {
            console.error(stringify(jsonTypes));

            throw error;
          }

          fs.writeFileSync(
            path.join(process.cwd(), `packages/types-support/src/metadata/v${version}/${type}-types.json`),
            stringify(jsonTypes, 2),
            { flag: 'w' }
          );
        }
      });
    });
  });
}

testMeta(14, {
  kusama: {
    compare: kusamaJson as Record<string, unknown>,
    data: kusamaData,
    types: kusamaTypes as Record<string, unknown>
  },
  polkadot: {
    compare: polkadotJson as Record<string, unknown>,
    data: polkadotData,
    types: polkadotTypes as Record<string, unknown>
  },
  substrate: {
    compare: substrateJson as Record<string, unknown>,
    data: substrateData,
    types: substrateTypes as Record<string, unknown>
  }
});
