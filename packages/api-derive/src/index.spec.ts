// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Observable, from } from 'rxjs';
import ApiRx from '@polkadot/api/rx/Api';
import MockProvider from '@polkadot/rpc-provider/mock';

import { Derive } from '.';

const testFunction = (api: ApiRx) => {
  return <
    Section extends keyof Derive,
    Method extends keyof (typeof api.derive[Section])
  >(section: Section, method: Method, inputs: any[]) => {
    describe(`derive.${section}.${method}`, () => {
      it('should be a function', () => {
        expect(typeof api.derive[section][method]).toBe('function');
      });

      it('should return an Observable', () => {
        expect((api.derive[section][method] as any)(...inputs)).toBeInstanceOf(Observable);
      });
    });
  };
};

// https://github.com/polkadot-js/api/pull/1066#issuecomment-509142048
// https://github.com/polkadot-js/api/issues/1064
describe.skip('derive', () => {
  describe('builtin', () => {
    const api = new ApiRx(new MockProvider());

    beforeAll((done) => {
      api.isReady.subscribe(() => done());
    });

    testFunction(api)('accounts', 'idAndIndex', []);
    testFunction(api)('accounts', 'idToIndex', []);
    testFunction(api)('accounts', 'indexes', []);
    testFunction(api)('accounts', 'indexToId', []);

    testFunction(api)('balances', 'all', []);
    testFunction(api)('balances', 'fees', []);
    testFunction(api)('balances', 'votingBalance', []);
    testFunction(api)('balances', 'votingBalances', []);
    testFunction(api)('balances', 'votingBalancesNominatorsFor', []);

    testFunction(api)('chain', 'bestNumber', []);
    testFunction(api)('chain', 'bestNumberFinalized', []);

    testFunction(api)('democracy', 'referendumInfos', []);
    testFunction(api)('democracy', 'referendums', []);
    testFunction(api)('democracy', 'referendumVotesFor', []);
    testFunction(api)('democracy', 'votes', []);

    testFunction(api)('session', 'eraLength', []);
    testFunction(api)('session', 'eraProgress', []);
    testFunction(api)('session', 'sessionProgress', []);
  });

  describe('custom', () => {
    const api = new ApiRx({
      derives: {
        balances: {
          fees: () => () => from(['a', 'b'])
        },
        custom: {
          test: () => () => from([1, 2, 3])
        }
      },
      provider: new MockProvider()
    });

    beforeAll((done) => {
      api.isReady.subscribe(() => done());
    });

    // override
    testFunction(api)('balances', 'fees', ['a', 'b']);

    // new
    testFunction(api)('custom' as any, 'test', [1, 2, 3]);

    // existing
    testFunction(api)('chain', 'bestNumber', []);
  });
});
