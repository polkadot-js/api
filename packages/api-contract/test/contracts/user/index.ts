// Copyright 2017-2021 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import * as v0 from './v0';

const exp: Record<string, unknown> = {};

Object.entries(v0).forEach(([name, json]): void => {
  exp[`v0_${name}`] = json;
});

export default exp;
