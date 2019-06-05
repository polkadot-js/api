// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import '.';

// Module augmentation
declare module 'rxjs/internal/Observable' {
  interface Observable<T> {
    _URI: 'Observable';
    _A: T;
  }
}
