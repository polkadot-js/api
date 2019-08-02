// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import staticData from '../static';
import Metadata from '..';

describe('toStripped', (): void => {
  it('creates a stripped version of the  metadata', (): void => {
    const stripped = new Metadata(staticData).asStripped;

    console.error(JSON.stringify(stripped));

    expect(stripped).toBeDefined();
  });

  it('can serialize from the input', (): void => {
    const s1 = new Metadata(staticData).asStripped;
    const s2 = new Metadata(s1).asStripped;

    expect(s1).toEqual(s2);
  });
});
