// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Constructor } from './types';

import * as Types from './index';

describe('types', () => {
  describe('default creation', () => {
    Object.keys(Types).forEach((name) => {
      it(`creates an empty ${name}`, () => {
        const constructFn = () => new (Types as { [index: string]: Constructor })[name]();

        if (name === 'Origin') {
          expect(constructFn).toThrow();
        } else {
          expect(constructFn).not.toThrow();
        }
      });
    });
  });
});
