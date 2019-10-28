// Copyright 2017-2019 @polkadot/rpc-core authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Codec, TypeDefInfo, TypeDef } from '@polkadot/types/types';

import { Bytes, Option, createClass } from '@polkadot/types';
import { createType, createTypeUnsafe } from '@polkadot/types/codec';
import { compactStripLength } from '@polkadot/util';

export function formatData (value: Bytes, { info, type }: TypeDef): Codec {
  const input = compactStripLength(value.toU8a(true))[1];
  const data = createType('Data', input);

  if (info === TypeDefInfo.Option) {
    return new Option(
      createClass(type),
      createTypeUnsafe(type, [data], true)
    );
  }

  return createTypeUnsafe(type, [data], true);
}
