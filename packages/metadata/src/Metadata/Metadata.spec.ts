// Copyright 2017-2020 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { TypeRegistry } from '@polkadot/types';

import substrateData from './static';
import Metadata from './Metadata';

describe('Metadata', (): void => {
  it('allows creation from hex with JSON equivalence', (): void => {
    const test = new Metadata(new TypeRegistry(), substrateData);

    expect(
      new Metadata(new TypeRegistry(), test.toHex()).toJSON()
    ).toEqual(test.toJSON());
  });
});
