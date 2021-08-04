// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import substrateData from '@polkadot/types-support/metadata/static-substrate';

import { TypeRegistry } from '../create';
import { Metadata } from './Metadata';

describe('Metadata', (): void => {
  it('allows creation from hex with JSON equivalence', (): void => {
    const test = new Metadata(new TypeRegistry(), substrateData);

    expect(
      new Metadata(new TypeRegistry(), test.toHex()).toJSON()
    ).toEqual(test.toJSON());
  });
});
