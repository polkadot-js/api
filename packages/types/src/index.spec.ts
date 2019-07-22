// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import extrinsics from '@polkadot/api-metadata/extrinsics/static';

import { Codec, Constructor } from './types';
import * as Classes from './index.types';

const Types = Classes as Record<string, Constructor>;
const UNCONSTRUCTABLE = ['origin', 'usize', 'vote'];

describe('types', (): void => {
  describe('default creation', (): void => {
    Object.keys(Types).forEach((name): void => {
      it(`creates an empty ${name}`, (): void => {
        const constructFn = (): Codec =>
          new Types[name]();

        if (UNCONSTRUCTABLE.includes(name.toLowerCase())) {
          expect(constructFn).toThrow();
        } else {
          expect(constructFn).not.toThrow();
        }
      });
    });
  });

  describe('default creation (empty bytes)', (): void => {
    (Types.Method as any).injectMethods(extrinsics);

    Object.keys(Types).forEach((name): void => {
      it(`creates an empty ${name} (from empty bytes)`, (): void => {
        const constructFn = (): Codec =>
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
