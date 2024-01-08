// Copyright 2017-2024 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/globals.d.ts" />

/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/restrict-template-expressions */

import type { ExactDerive } from './index.js';

import { from, Observable } from 'rxjs';

import { ApiRx } from '@polkadot/api';
import { MockProvider } from '@polkadot/rpc-provider/mock';
import { TypeRegistry } from '@polkadot/types/create';

const testFunction = (api: ApiRx): any => {
  return <S extends keyof ExactDerive, M extends keyof (typeof api.derive[S])>(section: S, method: M, inputs: any[]): void => {
    describe(`derive.${section}.${method as string}`, (): void => {
      it('should be a function', (): void => {
        expect(typeof api.derive[section][method]).toBe('function');
      });

      it('should return an Observable', (): void => {
        expect((api.derive[section][method] as any)(...inputs)).toBeInstanceOf(Observable);
      });
    });
  };
};

function waitReady (api: ApiRx): Promise<ApiRx> {
  return new Promise<ApiRx>((resolve) =>
    api.isReady.subscribe((api) => resolve(api))
  );
}

describe('derive', (): void => {
  const registry = new TypeRegistry();

  describe('builtin', (): void => {
    const api = new ApiRx({ provider: new MockProvider(registry), registry });

    beforeAll(async () => {
      await waitReady(api);
    });
    afterAll(() => api.disconnect());

    testFunction(api)('accounts', 'idAndIndex', []);
    testFunction(api)('accounts', 'idToIndex', []);
    testFunction(api)('accounts', 'indexes', []);
    testFunction(api)('accounts', 'indexToId', []);

    testFunction(api)('balances', 'all', []);
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
      registry,
      throwOnConnect: true
    });

    beforeAll(async () => {
      await waitReady(api);
    });
    afterAll(() => api.disconnect());

    // override
    testFunction(api)('balances', 'fees', ['a', 'b']);

    // new
    testFunction(api)('custom', 'test', [1, 2, 3]);

    // existing
    testFunction(api)('chain', 'bestNumber', []);
  });
});
