// Copyright 2017-2019 @polkadot/ui-react-rx authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import ApiRx from '@polkadot/api/rx';
import { Observable } from 'rxjs';

import { Derive } from './index';

const api = new ApiRx();

const testFunction = (api: ApiRx) => {
  return <
    Section extends keyof Derive,
    Method extends keyof (typeof api.derive[Section])
  >(section: Section, method: Method, inputs: any[]) => {
    describe(`derive.${section}.${method}`, () => {
      it('should return an Observable', () => {
        expect((api.derive[section][method] as any)(...inputs) instanceof Observable);
      });

      it('should be memoized', () => {
        const first = (api.derive[section][method] as any)(...inputs);
        const second = (api.derive[section][method] as any)(...inputs);
        expect(first).toBe(second);
      });
    });
  };
};

describe('derive', () => {
  testFunction(api)('chain', 'bestNumber', []);
});
