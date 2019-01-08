// Copyright 2017-2019 @polkadot/ui-react-rx authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import ApiRx from '@polkadot/api/rx';
import { Observable } from 'rxjs';

import { Chain, Derive } from './index';

type Section<S> = S extends 'chain' ? Chain : Chain;

const testFunction = <S>(api: ApiRx, section: keyof Derive, method: keyof Section<S>, inputs: any[]) => {
  describe(`derive.${section}.${method}`, () => {
    it('should return an Observable', () => {
      const f = api.derive[section][method] as Function;
      expect((api.derive[section][method])(...inputs) instanceof Observable);
    });

    it('should be memoized', () => {
      const first = api.derive[section][method](...inputs);
      const second = api.derive[section][method](...inputs);
      expect(first).toBe(second);
    });
  });
};

describe('derive', () => {
  const api = new ApiRx();

  testFunction(api, 'chain', 'bestNumber', []);
});
