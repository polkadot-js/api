// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { u32 } from './primitive';
import type { Registry } from './types/registry';

import { TypeRegistry } from './create';

function registryCheck (registry: Registry): void {
  // Should be AccountId
  const aa = registry.createType('AccountId');
  // Should be Codec
  const bb = registry.createType('Something');
  // Should be u32
  const cc = registry.createType('Something' as 'u32');
  // Should be u32
  const dd = registry.createType<u32>('Something');

  console.log([aa, bb, cc, dd].map((c) => c.toHuman()));
}

registryCheck(new TypeRegistry());
