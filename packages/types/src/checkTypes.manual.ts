// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { u32 } from './primitive';
import type { Registry } from './types/registry';

import { assert } from '@polkadot/util';

import { TypeRegistry } from './create';

function registryCheck (registry: Registry): void {
  // Should be AccountId
  const aa = registry.createType('AccountId');

  assert(aa.isAscii, 'All ok');

  // Should be Codec
  const bb = registry.createType('Something');

  assert(bb.toHuman(), 'All ok');

  // Should be u32
  const cc = registry.createType('Something' as 'u32');

  assert(cc.divn(123), 'All ok');

  // Should be u32
  const dd = registry.createType<u32>('Something');

  assert(dd.divn(123), 'All ok');
}

registryCheck(new TypeRegistry());
