// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import '../../injector';

import staticData from '../static';
import Metadata from '..';

describe('toCallsOnly', (): void => {
  it('creates a calls-only version of the  metadata', (): void => {
    const stripped = new Metadata(staticData).asCallsOnly;

    console.error(JSON.stringify(stripped));

    expect(stripped).toBeDefined();
  });

  it('can serialize from the input', (): void => {
    const s1 = new Metadata(staticData).asCallsOnly.toU8a();
    const s2 = new Metadata(s1).asCallsOnly.toU8a();

    expect(s1).toEqual(s2);
  });
});
