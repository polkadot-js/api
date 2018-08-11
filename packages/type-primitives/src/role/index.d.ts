// Copyright 2017-2018 @polkadot/primitives authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

export type RoleMap = {
  none: number,
  full: number,
  light: number,
  authority: number
};

export type Role = keyof RoleMap;
