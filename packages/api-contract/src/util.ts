// Copyright 2017-2020 @polkadot/rpc-core authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Codec, Registry, TypeDef, TypeDefInfo } from '@polkadot/types/types';

import { Option, Raw, createClass, createTypeUnsafe } from '@polkadot/types';

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
