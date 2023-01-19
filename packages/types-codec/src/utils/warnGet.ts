// Copyright 2017-2023 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

const hasWarned: Record<string, boolean> = {};

export function warnGet <T> (obj: Record<string, any>, name: string): T {
  const clazz = `${obj.constructor?.name || 'Codec'}`;
  const check = `${clazz}.${name}`;
  const pass = `$${name}`;

  if (!hasWarned[check]) {
    hasWarned[check] = true;

    console.warn(`The use of ${check} is deprecated and will be removed in a future version, use ${clazz}.${pass} instead`);
  }

  return obj[pass] as T;
}
