// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import '../../injector';

import { Codec, Constructor } from '../../types';

import { getTypeClass } from '.';

describe('getTypeClass', (): void => {
  it('does not allow invalid types', (): void => {
    expect(
      (): Constructor<Codec> => getTypeClass('SomethingInvalid' as any)
    ).toThrow(/determine type/);
  });
});
