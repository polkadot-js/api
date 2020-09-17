// Copyright 2017-2020 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0

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
