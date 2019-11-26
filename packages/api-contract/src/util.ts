// Copyright 2017-2019 @polkadot/rpc-core authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Codec, Registry, TypeDefInfo, TypeDef } from '@polkadot/types/types';

import { Data, Option, createClass } from '@polkadot/types';
import { createTypeUnsafe } from '@polkadot/types/codec';

export function formatData (registry: Registry, data: Data, { info, type }: TypeDef): Codec {
  const u8a = data.toU8a();

  if (info === TypeDefInfo.Option) {
    return new Option(
      registry,
      createClass(registry, type),
      createTypeUnsafe(registry, type, [u8a], true)
    );
  }

  return createTypeUnsafe(registry, type, [u8a], true);
}
