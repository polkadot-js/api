// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { MetadataAll } from '../../interfaces/metadata';

import kusamaData from '@polkadot/types-support/metadata/v14/kusama-hex';
import kusamaJson from '@polkadot/types-support/metadata/v14/kusama-json.json';
import kusamaTypes from '@polkadot/types-support/metadata/v14/kusama-types.json';
import substrateData from '@polkadot/types-support/metadata/v14/substrate-hex';
import substrateJson from '@polkadot/types-support/metadata/v14/substrate-json.json';
import substrateTypes from '@polkadot/types-support/metadata/v14/substrate-types.json';

import { TypeRegistry } from '../../create';
import { Metadata } from '../Metadata';

function runTest (type: string, staticData: string, staticJson: any, staticTypes: any): void {
  describe(`MetadataV14 (${type})`, (): void => {
    // FIXME This is to be replaced with the proper version (here as a stop-gap)
    it('parses', (): void => {
      const registry = new TypeRegistry();
      const metadata = new Metadata(registry, staticData);
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
        expect(allJson).toEqual(staticJson);
      } catch (error) {
        console.error(JSON.stringify(allJson));

        throw error;
      }

      try {
        expect(jsonTypes).toEqual(staticTypes);
      } catch (error) {
        console.error(JSON.stringify(jsonTypes));

        throw error;
      }
    });
  });
}

runTest('substrate', substrateData, substrateJson, substrateTypes);
runTest('kusama', kusamaData, kusamaJson, kusamaTypes);
