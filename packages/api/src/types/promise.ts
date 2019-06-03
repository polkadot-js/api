// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import './index';

declare module './hkt' {
  interface URI2HKT<A> {
    Promise: Promise<A>;
  }
}
