// Copyright 2017-2019 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { createType, TypeRegistry } from '@polkadot/types/codec';

import Metadata from '../';
import latestSubstrateV0 from './static-substrate.json';
import rpcData from './static';
import { defaultValues, toLatest } from '../util/testUtil';

describe('Metadata', (): void => {
  const registry = new TypeRegistry();

  it('works with fallback', (): void => {
    const metadata = new Metadata(registry, rpcData);
    const metadataV0 = createType(registry, 'MetadataV0', rpcData);

    expect(metadata.asV0.toString()).toEqual(metadataV0.toString());
  });

  it('decodes latest substrate properly', (): void => {
    const metadata = new Metadata(registry, rpcData);
    const json = metadata.asV0.toJSON();

    try {
      expect(metadata.version).toBe(0);
      expect(metadata.asV0.modules.length).not.toBe(0);
      expect(json).toEqual(latestSubstrateV0);
    } catch (error) {
      console.error(JSON.stringify(json));

      throw error;
    }
  });

  toLatest(registry, 0, rpcData);

  defaultValues(registry, rpcData);
});
