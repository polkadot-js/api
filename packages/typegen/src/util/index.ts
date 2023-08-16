// Copyright 2017-2023 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

export * from './assert.js';
export * from './derived.js';
export * from './docs.js';
export * from './file.js';
export * from './formatting.js';
export * from './imports.js';
export * from './initMeta.js';
export * from './register.js';
export * from './wsMeta.js';

interface Cmp { name: { toString(): string } }

export function compareName (a: Cmp, b: Cmp): number {
  return a.name.toString().localeCompare(b.name.toString());
}
