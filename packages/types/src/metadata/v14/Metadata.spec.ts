// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { MetadataAll } from '../../interfaces/metadata';
import type { Check } from '../util/types';

import kusamaData from '@polkadot/types-support/metadata/v14/kusama-hex';
import kusamaJson from '@polkadot/types-support/metadata/v14/kusama-json.json';
import kusamaTypes from '@polkadot/types-support/metadata/v14/kusama-types.json';
import substrateData from '@polkadot/types-support/metadata/v14/substrate-hex';
import substrateJson from '@polkadot/types-support/metadata/v14/substrate-json.json';
import substrateTypes from '@polkadot/types-support/metadata/v14/substrate-types.json';

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
          console.error(JSON.stringify(allJson));

          throw error;
        }

        try {
          expect(jsonTypes).toEqual(types);
        } catch (error) {
          console.error(JSON.stringify(jsonTypes));

          throw error;
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
  substrate: {
    compare: substrateJson as Record<string, unknown>,
    data: substrateData,
    types: substrateTypes as Record<string, unknown>
  }
});
