// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { MetadataAll } from '../../interfaces/metadata';

import { TypeRegistry } from '../../create';
import { Metadata } from '../Metadata';
// eslint-disable-next-line import/no-duplicates
import polkadotData from './static-polkadot';
// eslint-disable-next-line import/no-duplicates
import polkadotJson from './static-polkadot.json';
import polkadotTypes from './static-polkadot-types.json';
// eslint-disable-next-line import/no-duplicates
import substrateData from './static-substrate';
// eslint-disable-next-line import/no-duplicates
import substrateJson from './static-substrate.json';
import substrateTypes from './static-substrate-types.json';

describe('MetadataV14 (substrate)', (): void => {
  // FIXME This is to be replaced with the proper version (here as a stop-gap)
  it('parses', (): void => {
    const registry = new TypeRegistry();
    const metadata = new Metadata(registry, substrateData);
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
      expect(allJson).toEqual(substrateJson);
    } catch (error) {
      console.error(JSON.stringify(allJson));

      throw error;
    }

    try {
      expect(jsonTypes).toEqual(substrateTypes);
    } catch (error) {
      console.error(JSON.stringify(jsonTypes));

      throw error;
    }
  });
});

describe('MetadataV14 (polkadot)', (): void => {
  // FIXME This is to be replaced with the proper version (here as a stop-gap)
  it('parses', (): void => {
    const registry = new TypeRegistry();
    const metadata = new Metadata(registry, polkadotData);
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
      expect(allJson).toEqual(polkadotJson);
    } catch (error) {
      console.error(JSON.stringify(allJson));

      throw error;
    }

    try {
      expect(jsonTypes).toEqual(polkadotTypes);
    } catch (error) {
      console.error(JSON.stringify(jsonTypes));

      throw error;
    }
  });
});
