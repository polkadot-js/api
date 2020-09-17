// Copyright 2017-2020 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

export * from './derived';
export * from './docs';
export * from './file';
export * from './formatting';
export * from './imports';
export * from './register';

export const compareName = (a: { name: { toString(): string } }, b: { name: { toString(): string } }): number =>
  a.name.toString().localeCompare(b.name.toString());
