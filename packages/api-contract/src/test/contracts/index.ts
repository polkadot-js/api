// Copyright 2017-2023 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import ink from './ink/index.js';
import solang from './solang/index.js';
import user from './user/index.js';

const all: Record<string, Record<string, unknown>> = {};

Object
  .entries({ ink, solang, user })
  .forEach(([type, abis]) =>
    Object
      .entries(abis)
      .forEach(([name, abi]): void => {
        all[`${type}_${name}`] = abi;
      })
  );

export default all;
