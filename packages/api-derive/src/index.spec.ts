// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/restrict-template-expressions */

import { from, Observable } from 'rxjs';

import { ApiRx } from '@polkadot/api/rx';
import { MockProvider } from '@polkadot/rpc-provider/mock';
import { TypeRegistry } from '@polkadot/types/create';

import { ExactDerive } from '.';

const testFunction = (api: ApiRx): any => {
  return <S extends keyof ExactDerive, M extends keyof (typeof api.derive[S])>(section: S, method: M, inputs: any[]): void => {
    describe(`derive.${section}.${method}`, (): void => {
      it('should be a function', (): void => {
        expect(typeof api.derive[section][method]).toBe('function');
      });

      it('should return an Observable', (): void => {
        expect((api.derive[section][method] as any)(...inputs)).toBeInstanceOf(Observable);
      });
    });
  };
};

describe('derive', (): void => {
  const registry = new TypeRegistry();

  describe('builtin', (): void => {
    const api = new ApiRx({ provider: new MockProvider(registry), registry });

    beforeAll((done): void => {
      api.isReady.subscribe(() => done());
    });

    afterAll(async () => {
      await api.disconnect();
    });

    testFunction(api)('accounts', 'idAndIndex', []);
    testFunction(api)('accounts', 'idToIndex', []);
    testFunction(api)('accounts', 'indexes', []);
    testFunction(api)('accounts', 'indexToId', []);

    testFunction(api)('balances', 'all', []);
    testFunction(api)('balances', 'fees', []);
    testFunction(api)('balances', 'votingBalance', []);
    testFunction(api)('balances', 'votingBalances', []);

    testFunction(api)('chain', 'bestNumber', []);
    testFunction(api)('chain', 'bestNumberFinalized', []);

    testFunction(api)('democracy', 'proposals', []);
    testFunction(api)('democracy', 'referendums', []);

    testFunction(api)('elections', 'info', []);

    testFunction(api)('session', 'eraLength', []);
    testFunction(api)('session', 'eraProgress', []);
    testFunction(api)('session', 'sessionProgress', []);

    testFunction(api)('staking', 'account', []);
    testFunction(api)('staking', 'stashes', []);
  });

  describe('custom', (): void => {
    const api = new ApiRx({
      derives: {
        balances: {
          fees: (): any => (): Observable<any> => from(['a', 'b'])
        },
        custom: {
          test: (): any => (): Observable<any> => from([1, 2, 3])
        }
      },
      provider: new MockProvider(registry),
      registry
    });

    beforeAll((done): void => {
      api.isReady.subscribe(() => done());
    });

    afterAll(async () => {
      await api.disconnect();
    });

    // override
    testFunction(api)('balances', 'fees', ['a', 'b']);

    // new
    testFunction(api)('custom', 'test', [1, 2, 3]);

    // existing
    testFunction(api)('chain', 'bestNumber', []);
  });
});
