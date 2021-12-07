// Copyright 2017-2021 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import ink from './ink';
import solang from './solang';
import user from './user';

const all: Record<string, Record<string, unknown>> = {};

Object.entries({ ink, solang, user }).forEach(([type, abis]) =>
  Object.keys(abis).forEach((key): void => {
    all[`${type}_${key}`] = abis[key];
  })
);

export default all;
