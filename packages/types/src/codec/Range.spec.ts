// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { TypeRegistry } from '../create';
import { U32 } from '../primitive';
import { Range } from '.';

describe('Range', (): void => {
  const registry = new TypeRegistry();
  const Type = Range.with(U32);
  let range: Range<U32>;

  beforeEach((): void => {
    range = new Range(
      registry,
      U32,
      [new U32(registry, 1), new U32(registry, 2)]
    );
  });

  it('decodes', (): void => {
    const rslt = new Type(registry, new Uint8Array([1, 0, 0, 0, 2, 0, 0, 0]));

    expect(rslt.toJSON()).toEqual([1, 2]);
  });

  it('encodes', (): void => {
    expect(range.toU8a()).toEqual(new Uint8Array([1, 0, 0, 0, 2, 0, 0, 0]));
  });

  it('has a sane toRawType representation', (): void => {
    expect(range.toRawType()).toEqual('Range<u32>');
  });
});
