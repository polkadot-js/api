// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import isUndefined from './is/undefined';
import assert from './assert';

/**
 * @name assertSingletonPackage
 * @summary Checks that a specific package is only imported once
 */
export default function assertSingletonPackage (name: string): void {
  // tslint:disable-next-line
  const _global: any = typeof window !== 'undefined'
    ? window
    : global;

  if (!_global.__polkadotjs) {
    _global.__polkadotjs = {};
  }

  assert(isUndefined(_global.__polkadotjs[name]), `Multiple versions of ${name} detected, ensure that there is only version one in your dependency tree`);

  _global.__polkadotjs[name] = true;
}
