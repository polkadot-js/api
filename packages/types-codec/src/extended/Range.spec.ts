// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { TypeRegistry } from '@polkadot/types';
import { Range, U32 } from '@polkadot/types-codec';

describe('Range', (): void => {
  const registry = new TypeRegistry();
  let range: Range<U32>;

  beforeEach((): void => {
    const Clazz = Range.with(U32);

    range = new Clazz(
      registry,
      [new U32(registry, 1), new U32(registry, 2)]
    );
  });

  it('decodes', (): void => {
    expect(range.toJSON()).toEqual([1, 2]);
  });

  it('encodes', (): void => {
    expect(range.toU8a()).toEqual(new Uint8Array([1, 0, 0, 0, 2, 0, 0, 0]));
  });

  it('has a sane toRawType representation', (): void => {
    expect(range.toRawType()).toEqual('Range<u32>');
  });
});
