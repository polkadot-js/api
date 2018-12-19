// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import compacted from '../json/Metadata.latest.json';
import Metadata from './index';
import latestParsed from './latest.substrate.json';

describe('Metadata', () => {
  it('decodes latest properly', () => {
    const decoded = new Metadata(compacted.result);
    const str = JSON.stringify(decoded.toJSON());

    console.error(str);
    console.error(decoded.getUniqTypes());

    expect(decoded.events.length).not.toBe(0);
    expect(str).toEqual(JSON.stringify(latestParsed));
  });
});
