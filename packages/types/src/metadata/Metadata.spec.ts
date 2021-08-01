// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { TypeRegistry } from '../create';
import { Metadata } from './Metadata';
import polkadot from './static-polkadot';
import substrate from './static-substrate';

const allData: Record<string, string> = {
  polkadot,
  substrate
};

describe('Metadata', (): void => {
  it.each(['polkadot', 'substrate'])('allows creation from hex on %s', (type): void => {
    const test = new Metadata(new TypeRegistry(), allData[type]);

    expect(
      new Metadata(new TypeRegistry(), test.toHex()).toJSON()
    ).toEqual(test.toJSON());
  });
});
