// Copyright 2017-2021 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { compactAddLength, u8aToU8a } from '@polkadot/util';

import { TypeRegistry } from '../../../create';
import { substrate } from './substrate';

const registry = new TypeRegistry();

describe('substrate', (): void => {
  it('creates a well-known :code key', (): void => {
    expect(
      substrate.code(registry)()
    ).toEqual(
      compactAddLength(u8aToU8a(':code'))
    );
  });
});
