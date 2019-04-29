// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Metadata from '../Metadata';
import latestParsed from './latest.substrate.v4.json';
import rpcData from './static';

describe('MetadataV4', () => {
  const metadata = new Metadata(rpcData);

  it('decodes latest properly', () => {
    const str = JSON.stringify(metadata.toJSON());

    console.error(str);
    console.error(metadata.getUniqTypes(true));

    expect(metadata.version).toBe(4);
    expect(metadata.asV4.modules.length).not.toBe(0);
    expect(str).toEqual(JSON.stringify(latestParsed));
  });
});
