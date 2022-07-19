// Copyright 2017-2022 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

export * from './assert';
export * from './derived';
export * from './docs';
export * from './file';
export * from './formatting';
export * from './imports';
export * from './initMeta';
export * from './register';
export * from './wsMeta';

type Cmp = { name: { toString(): string } };

export function compareName (a: Cmp, b: Cmp): number {
  return a.name.toString().localeCompare(b.name.toString());
}
