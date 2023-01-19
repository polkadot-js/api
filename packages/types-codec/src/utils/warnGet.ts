// Copyright 2017-2023 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

const hasWarned: Record<string, boolean> = {};

/** @description Warns (once, per class) on the use of a deprecated interface */
export function warnGet <T> (obj: Record<string, any>, name: 'createdAtHash' | 'initialU8aLength'): T {
  const clazz = `${obj.constructor?.name || 'Codec'}`;
  const check = `${clazz}.${name}`;
  const pass = `$${name}`;

  if (!hasWarned[check]) {
    hasWarned[check] = true;

    console.warn(`Use ${clazz}.${pass} instead. The previous ${check} is deprecated and will be removed in a future version.`);
  }

  return obj[pass] as T;
}
