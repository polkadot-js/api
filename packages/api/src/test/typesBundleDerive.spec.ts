// Copyright 2017-2022 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { Enum, Struct } from '@polkadot/types';
import type { Option } from '@polkadot/types/codec';
import type { AccountId, AccountIndex, AccountInfo, Address, Balance, BlockNumber, Index } from '@polkadot/types/interfaces';

import { combineLatest, map, of, switchMap } from 'rxjs';

import { ApiPromise, WsProvider } from '@polkadot/api';
import { memo } from '@polkadot/rpc-core';

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

type EQDeriveBalancesQuery = (address: AccountIndex | AccountId | Address | string) => Observable<EQDeriveBalancesAll>;

const typesBundle = {
  spec: {
    Equilibrium: {
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
                              [api.query.system.account, accountId]
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
                                    res[3].nonce
                                  ];
                                }
                              )
                            )
                        ])
                        : of([
                          api.registry.createType('AccountId'),
                          [
                            api.registry.createType('Balance'),
                            api.registry.createType('Balance'),
                            api.registry.createType('Balance'),
                            api.registry.createType('Index')
                          ]
                        ])
                  ),
                  map(
                    ([
                      accountId,
                      [
                        freeBalance,
                        reservedBalance,
                        vestingLocked,
                        accountNonce
                      ]
                    ]): EQDeriveBalancesAll => ({
                      accountId,
                      accountNonce,
                      freeBalance,
                      lockedBalance: vestingLocked,
                      lockedBreakdown: [],
                      reservedBalance,
                      vestingLocked
                    })
                  )
                )
            )
        }
      },

      types: [
        {
          minmax: [0, undefined],
          types: {
            Balance: 'u64',
            BalanceOf: 'Balance',
            BalancesAggregate: {
              total_debt: 'Balance',
              total_issuance: 'Balance'
            },
            BlockNumber: 'u64',
            Currency: {
              _enum: ['Unknown', 'Usd', 'EQ', 'Eth', 'Btc', 'Eos', 'Dot']
            },
            DataPoint: {
              account_id: 'AccountId',
              block_number: 'BlockNumber',
              price: 'u64',
              timestamp: 'u64'
            },
            FixedI64: 'i64',
            Keys: 'SessionKeys3',
            LookupSource: 'AccountId',
            PricePeriod: {
              _enum: ['Min', 'TenMin', 'Hour', 'FourHour', 'Day']
            },
            PricePoint: {
              block_number: 'BlockNumber',
              data_points: 'Vec<DataPoint>',
              price: 'u64',
              timestamp: 'u64'
            },
            ReinitRequest: {
              account: 'AccountId',
              authority_index: 'AuthIndex',
              block_num: 'BlockNumber',
              validators_len: 'u32'
            },
            SignedBalance: {
              _enum: {
                Negative: 'Balance',
                Positive: 'Balance'
              }
            },
            TotalAggregates: {
              collateral: 'Balance',
              debt: 'Balance'
            },
            TransferReason: {
              _enum: [
                'Common',
                'InterestFee',
                'MarginCall',
                'BailsmenRedistribution',
                'TreasuryEqBuyout',
                'TreasuryBuyEq'
              ]
            },
            UserGroup: {
              _enum: ['Unknown', 'Balances', 'Bailsman']
            },
            VestingInfo: {
              locked: 'Balance',
              perBlock: 'Balance',
              startingBlock: 'BlockNumber'
            }
          }
        }
      ]
    }
  }
};

function createApi (): Promise<ApiPromise> {
  jest.setTimeout(30000);
  const provider = new WsProvider('wss://tge.equilibrium.io');

  return ApiPromise.create({ provider, typesBundle });
}

describe.skip('equilibrium api', () => {
  it.skip('does not fail on derive.balances.all', async () => {
    const api = await createApi();

    await api.derive.balances.all(
      '5DnoYz3koaRcMZ9Hj4FmQ2nNRKQfS73yBmEzzM9SsPn9cLtb'
    );
  });
});
