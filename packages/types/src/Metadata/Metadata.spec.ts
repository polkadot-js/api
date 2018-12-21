// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Metadata from './index';
import latestParsed from './latest.substrate.json';
import rpcData from './static';

describe('Metadata', () => {
  it('decodes latest properly', () => {
    const decoded = new Metadata(rpcData);
    const str = JSON.stringify(decoded.toJSON());

    console.error(str);
    console.error(decoded.getUniqTypes());

    expect(decoded.events.length).not.toBe(0);
    expect(str).toEqual(JSON.stringify(latestParsed));
  });
});
