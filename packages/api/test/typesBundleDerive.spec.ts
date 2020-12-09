// Copyright 2017-2020 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { Enum, Struct } from '@polkadot/types';
import type { Option } from '@polkadot/types/codec';
import type { AccountId, AccountIndex, AccountInfo, Address, Balance, BlockNumber, Index } from '@polkadot/types/interfaces';

import { ApiPromise, WsProvider } from '@polkadot/api';
import { combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { memo } from '@polkadot/api-derive/util/memo';

interface VestingInfo extends Struct {
  readonly locked: Balance;
  readonly perBlock: Balance;
  readonly startingBlock: BlockNumber;
}

interface SignedBalance extends Enum {
  readonly isPositive: boolean;
  readonly asPositive: Balance;
  readonly isNegative: boolean;
  readonly asNegative: Balance;
}

export interface EQDeriveBalancesAll {
  freeBalance: Balance;
  reservedBalance: Balance;
  vestingLocked: Balance;
  lockedBalance: Balance;
  accountId: AccountId;
  accountNonce: Index;
  lockedBreakdown: unknown[];
}

type Result = [Balance, Balance, Balance, Index];

type RawResult = [
  SignedBalance,
  Option<Balance>,
  Option<VestingInfo>,
  AccountInfo
];

type EQDeriveBalancesQuery = (
  address: AccountIndex | AccountId | Address | string
) => Observable<EQDeriveBalancesAll>;

const typesBundle = {
  spec: {
    Equilibrium: {
      types: [
        {
          minmax: [0, undefined] as any,
          types: {
            BlockNumber: 'u64',
            Keys: 'SessionKeys3',
            Balance: 'u64',
            FixedI64: 'i64',
            SignedBalance: {
              _enum: {
                Positive: 'Balance',
                Negative: 'Balance',
              },
            },
            ReinitRequest: {
              account: 'AccountId',
              authority_index: 'AuthIndex',
              validators_len: 'u32',
              block_num: 'BlockNumber',
            },
            Currency: {
              _enum: ['Unknown', 'Usd', 'EQ', 'Eth', 'Btc', 'Eos', 'Dot'],
            },
            UserGroup: {
              _enum: ['Unknown', 'Balances', 'Bailsman'],
            },
            TotalAggregates: {
              collateral: 'Balance',
              debt: 'Balance',
            },
            PricePeriod: {
              _enum: ['Min', 'TenMin', 'Hour', 'FourHour', 'Day'],
            },
            DataPoint: {
              price: 'u64',
              account_id: 'AccountId',
              block_number: 'BlockNumber',
              timestamp: 'u64',
            },
            PricePoint: {
              block_number: 'BlockNumber',
              timestamp: 'u64',
              price: 'u64',
              data_points: 'Vec<DataPoint>',
            },
            BalancesAggregate: {
              total_issuance: 'Balance',
              total_debt: 'Balance',
            },
            VestingInfo: {
              locked: 'Balance',
              perBlock: 'Balance',
              startingBlock: 'BlockNumber',
            },
            LookupSource: 'AccountId',
            BalanceOf: 'Balance',
            TransferReason: {
              _enum: [
                'Common',
                'InterestFee',
                'MarginCall',
                'BailsmenRedistribution',
                'TreasuryEqBuyout',
                'TreasuryBuyEq',
              ],
            },
          },
        },
      ],

      derives: {
        balances: {
          all: (
            instanceId: string,
            api: ApiInterfaceRx
          ): EQDeriveBalancesQuery =>
            memo(
              instanceId,
              (address: AccountIndex | AccountId | Address | string) =>
                api.derive.accounts.accountId(address).pipe(
                  switchMap(
                    (accountId): Observable<[AccountId, Result]> =>
                      accountId
                        ? combineLatest([
                            of(accountId),
                            api
                              .queryMulti([
                                [api.query.balances.account, [accountId, 'EQ']],
                                [api.query.eqVesting.vested, accountId],
                                [api.query.eqVesting.vesting, accountId],
                                [api.query.system.account, accountId],
                              ])
                              .pipe(
                                map(
                                  (raw): Result => {
                                    if (raw.length < 4) {
                                      throw new Error('4 members expected');
                                    }

                                    const res = raw as RawResult;
                                    const freeBalance = res[0].asPositive;

                                    let reservedBalance = api.registry.createType(
                                      'Balance'
                                    );

                                    let vestingLocked = api.registry.createType(
                                      'Balance'
                                    );

                                    if (res[1].isSome && res[2].isSome) {
                                      const vested = res[1].unwrap();
                                      const info = res[2].unwrap();

                                      vestingLocked = info.locked;

                                      reservedBalance = api.registry.createType(
                                        'Balance',
                                        vestingLocked.sub(vested)
                                      );
                                    }

                                    return [
                                      freeBalance,
                                      reservedBalance,
                                      vestingLocked,
                                      res[3].nonce,
                                    ];
                                  }
                                )
                              ),
                          ])
                        : of([
                            api.registry.createType('AccountId'),
                            [
                              api.registry.createType('Balance'),
                              api.registry.createType('Balance'),
                              api.registry.createType('Balance'),
                              api.registry.createType('Index'),
                            ],
                          ])
                  ),
                  map(
                    ([
                      accountId,
                      [
                        freeBalance,
                        reservedBalance,
                        vestingLocked,
                        accountNonce,
                      ],
                    ]): EQDeriveBalancesAll => ({
                      accountId,
                      accountNonce,
                      freeBalance,
                      lockedBalance: vestingLocked,
                      lockedBreakdown: [],
                      reservedBalance,
                      vestingLocked,
                    })
                  )
                )
            ),
        },
      },
    },
  },
};

function createApi(): Promise<ApiPromise> {
  jest.setTimeout(30000);
  const provider = new WsProvider('wss://tge.equilibrium.io');
  return new ApiPromise({ provider, typesBundle }).isReady;
}

describe.skip('equilibrium api', () => {
  it.skip('does not fail on derive.balances.all', async () => {
    const api = await createApi();

    const all = await api.derive.balances.all(
      '5DnoYz3koaRcMZ9Hj4FmQ2nNRKQfS73yBmEzzM9SsPn9cLtb'
    );
  });
});
