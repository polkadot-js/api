// Copyright 2017-2020 @polkadot/rpc-core authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { isBigInt } from '@polkadot/util';

export default function normalizer (instanceId: string): (value: unknown) => string {
  return (value: unknown) =>
    instanceId + JSON.stringify(value, (_, value: unknown) =>
      isBigInt(value)
        ? value.toString()
        : value
    );
}
