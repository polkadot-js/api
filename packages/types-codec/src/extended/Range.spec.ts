// Copyright 2017-2023 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

// eslint-disable-next-line spaced-comment
/// <reference types="@polkadot/dev/node/test/node" />

import { TypeRegistry } from '@polkadot/types';
import { Range, U32 } from '@polkadot/types-codec';

describe('Range', (): void => {
  const registry = new TypeRegistry();
  let range: Range<U32>;

  beforeEach((): void => {
    range = new (Range.with(U32))(registry, [1, 2]);
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

  it('has a sane inspect', (): void => {
    expect(range.inspect()).toEqual({
      inner: [
        { outer: [new Uint8Array([1, 0, 0, 0])] },
        { outer: [new Uint8Array([2, 0, 0, 0])] }
      ]
    });
  });
});
