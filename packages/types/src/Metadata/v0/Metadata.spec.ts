// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import MetadataV0 from './';
import Metadata from '../';
import latestSubstrateV0 from './latest.substrate.v0.json';
import rpcData from './static';
import { defaultValues, toV6 } from '../util/testUtil';

describe('Metadata', () => {
  it('works with fallback', () => {
    const metadata = new Metadata(rpcData);
    const metadataV0 = new MetadataV0(rpcData);

    expect(metadata.asV0.toString()).toEqual(metadataV0.toString());
  });

  it('decodes latest substrate properly', () => {
    const metadata = new Metadata(rpcData);
    const json = metadata.asV0.toJSON();

    console.error(JSON.stringify(json));

    expect(metadata.version).toBe(0);
    expect(metadata.asV0.modules.length).not.toBe(0);
    expect(json).toEqual(latestSubstrateV0);
  });

  toV6(0, rpcData);

  defaultValues(rpcData);
});
