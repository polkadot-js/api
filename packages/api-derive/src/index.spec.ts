// Copyright 2017-2019 @polkadot/ui-react-rx authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import ApiRx from '@polkadot/api/rx';
import { Observable } from 'rxjs';

import { Chain, Derive } from './index';

const testFunction = (api: ApiRx, section: keyof Derive, method: keyof Chain, inputs: any[]) => {
  describe(`function '${section}_${method}'`, () => {
    it('should return an Observable', () => {
      expect((api.derive[section][method] as Function)(...inputs) instanceof Observable);
    });

    it('should be memoized', () => {
      const first = (api.derive[section][method] as Function)(...inputs);
      const second = (api.derive[section][method] as Function)(...inputs);
      expect(first).toBe(second);
    });
  });
};

describe('derive', () => {
  const api = new ApiRx();

  testFunction(api, 'chain', 'bestNumber', []);
});
