// Copyright 2017-2022 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { BigInt } from '@polkadot/x-bigint';

// @ts-expect-error not extensible, we make it extensible here
export abstract class AbstractBigInt extends BigInt {
  // @ts-expect-error super() not required, the self magic does that
  constructor (value: string | number | bigint | boolean) {
    const self = Object(BigInt(value)) as typeof AbstractBigInt;

    Object.setPrototypeOf(self, AbstractBigInt.prototype);

    return self;
  }
}
