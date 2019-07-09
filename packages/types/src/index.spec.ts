// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import extrinsics from '@polkadot/api-metadata/extrinsics/static';

import { Constructor } from './types';
import * as Classes from './index.types';

const Types = Classes as { [index: string]: Constructor };
const UNCONSTRUCTABLE = ['origin', 'usize', 'vote'];

describe('types', () => {
  describe('default creation', () => {
    Object.keys(Types).forEach((name) => {
      it(`creates an empty ${name}`, () => {
        const constructFn = () =>
          new Types[name]();

        if (UNCONSTRUCTABLE.includes(name.toLowerCase())) {
          expect(constructFn).toThrow();
        } else {
          expect(constructFn).not.toThrow();
        }
      });
    });
  });

  describe('default creation (empty bytes)', () => {
    (Types.Method as any).injectMethods(extrinsics);

    Object.keys(Types).forEach((name) => {
      it(`creates an empty ${name} (from empty bytes)`, () => {
        const constructFn = () =>
          new Types[name](new Types.Bytes());

        if (UNCONSTRUCTABLE.includes(name.toLowerCase())) {
          expect(constructFn).toThrow();
        } else {
          expect(constructFn).not.toThrow();
        }
      });
    });
  });
});
