// Copyright 2017-2020 @polkadot/rpc-core authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Codec, Registry, TypeDefInfo, TypeDef } from '@polkadot/types/types';

import { Option, Raw, createClass } from '@polkadot/types';
import { createTypeUnsafe } from '@polkadot/types/codec';

export function formatData (registry: Registry, data: Raw, { info, type }: TypeDef): Codec {
  if (info === TypeDefInfo.Option) {
    return new Option(
      registry,
      createClass(registry, type),
      createTypeUnsafe(registry, type, [data], true)
    );
  }

  return createTypeUnsafe(registry, type, [data], true);
}
