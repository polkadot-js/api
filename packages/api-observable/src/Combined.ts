// Copyright 2017-2018 @polkadot/api-observable authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { RxBalance, RxBalanceMap, RxReferendumVote } from './types';

import BN from 'bn.js';
import { EMPTY, Observable, from } from 'rxjs';
import { switchMap, defaultIfEmpty, map } from 'rxjs/operators';
import { decodeAddress } from '@polkadot/keyring';
import { AccountId, AccountIndex, Balance, bool as Bool, BlockNumber, Moment, ReferendumIndex, ReferendumInfo } from '@polkadot/types/index';
import { ENUMSET_SIZE } from '@polkadot/types/AccountIndex';
import { assert } from '@polkadot/util';

import ApiCalls from './Calls';
import { RxProposal } from './classes';

// Combines API calls and queries into single results. This allows for the exposed API to have
// useful extensions, i.e. queries can be made that returns the results from multiple observables,
// make the noise for the API users significantly less
export default class ApiCombined extends ApiCalls {
  // Creates a mapping of AccountId (encoded) => AccountIndex
  accountIndexes = (): Observable<{ [index: string]: AccountIndex }> => {
    return this
      .nextAccountEnumSet()
      .pipe(
        switchMap((nextEnum: AccountIndex | undefined) => {
          const lastIndex = nextEnum || new BN(0);
          const setSize = ENUMSET_SIZE.toNumber();
          const enumRange = [...Array(lastIndex.div(ENUMSET_SIZE).toNumber() + 1).keys()];

          return this.combine(
            enumRange.map((index) =>
              this.getAccountEnumSet(1 + (index * setSize))
            ),
            (all: Array<Array<AccountId> | undefined> = []) => {
              return all.reduce((result, list = [], outerIndex: number) => {
                list.forEach((accountId, innerIndex) => {
                  const index = (outerIndex * setSize) + innerIndex;

                  result[accountId.toString()] = new AccountIndex(index);
                });

                return result;
              }, {} as { [index: string]: AccountIndex });
            }
          );
        })
      );
  }

  // lookup accountId from index
  accountIdFromIndex = (_accountIndex: AccountIndex | string): Observable<AccountId | undefined> => {
    const accountIndex = _accountIndex instanceof AccountIndex
      ? _accountIndex
      : new AccountIndex(_accountIndex);

    return this
      .getAccountEnumSet(accountIndex)
      .pipe(
        map((accounts: Array<AccountId> = []): AccountId | undefined =>
          accounts[accountIndex.mod(ENUMSET_SIZE).toNumber()]
        )
      );
  }

  // lookup accountIndex from accountId
  accountIndexFromId = (accountId: AccountId | string): Observable<AccountIndex | undefined> => {
    return this
      .accountIndexes()
      .pipe(
        map((mapping: { [index: string]: AccountIndex } = {}): AccountIndex | undefined =>
          mapping[accountId.toString()]
        )
      );
  }

  // lookup accountId & accountIndex from value
  accountIdAndIndex = (address?: AccountId | AccountIndex | string | null): Observable<[AccountId | undefined, AccountIndex | undefined]> => {
    try {
      // yes, this can fail, don't care too much, catch will catch it
      const length = decodeAddress((address as any).toString()).length;

      assert([1, 2, 4, 8, 32].indexOf(length) !== -1, `Invalid length for decoded address, found ${length}`);

      if (length === 32) {
        const accountId = new AccountId(address as string);

        return this
          .accountIndexFromId(accountId)
          .pipe(
            map((accountIndex?: AccountIndex): [AccountId, AccountIndex | undefined] =>
              [accountId, accountIndex]
            )
          );
      }

      const accountIndex = new AccountIndex(address as string);

      return this
        .accountIdFromIndex(accountIndex)
        .pipe(
          map((accountId?: AccountId): [AccountId | undefined, AccountIndex] =>
            [accountId, accountIndex]
          )
        );
    } catch (error) {
      // swallow
    }

    // just return empties
    return from([]);
  }

  publicProposalCount = (): Observable<number> => {
    return this
      .publicProposals()
      .pipe(
        map((proposals: Array<RxProposal>) =>
          proposals.length
        )
      );
  }

  referendumsInfo = (referendumIds: Array<ReferendumIndex | BN | number>): Observable<Array<ReferendumInfo>> => {
    return this.combine(
      referendumIds.map((referendumId) =>
        this.referendumInfo(referendumId)
      ),
      (referendums: Array<ReferendumInfo> = []): Array<ReferendumInfo> =>
        referendums.filter((referendum) =>
          referendum
        )
    );
  }

  democracyReferendumVoters = (referendumId: ReferendumIndex | BN | number): Observable<Array<RxReferendumVote>> => {
    return this.combine(
      [
        this.referendumVoters(referendumId),
        this.democracyVotersBalancesOf(referendumId),
        this.democracyVotersVotesOf(referendumId)
      ],
      ([voters, balances, votes]: [Array<AccountId>, Array<Balance>, Array<Bool>]): Array<RxReferendumVote> =>
        voters.map((address, index): RxReferendumVote => ({
          address,
          balance: balances[index] || new Balance(0),
          vote: votes[index] || new Bool(false)
        }))
    );
  }

  referendums = (): Observable<Array<ReferendumInfo>> => {
    return this.combine(
      [
        this.referendumCount(),
        this.democracyNextTally()
      ]
    ).pipe(
      // @ts-ignore After upgrade to 6.3.2
      switchMap(([referendumCount, nextTally]: [ReferendumIndex | undefined, ReferendumIndex | undefined]): Observable<Array<RxReferendum>> =>
        referendumCount && nextTally && referendumCount.gt(nextTally) && referendumCount.gtn(0)
          ? this.referendumsInfo(
            [...Array(referendumCount.sub(nextTally).toNumber())].map((_, i) =>
              nextTally.addn(i).toNumber()
            )
          )
          : EMPTY
      ),
      defaultIfEmpty([])
    );
  }

  referendumVotes = (index: ReferendumIndex | BN | number, addresses: Array<AccountId | string>): Observable<boolean> => {
    return this.combine(
      addresses.map((address) =>
        this.referendumVote(index, address)
      )
    );
  }

  democracyVotersBalancesOf = (referendumId: ReferendumIndex | BN | number): Observable<Array<Balance>> => {
    return this
      .referendumVoters(referendumId)
      .pipe(
        switchMap((voters: Array<AccountId> = []) =>
          this.votingBalances(...voters)
        ),
        defaultIfEmpty([] as any),
        map((balances: Array<RxBalance>) =>
          balances.map(({ votingBalance }) =>
            votingBalance
          )
        )
      );
  }

  democracyVotersVotesOf = (referendumId: ReferendumIndex | BN | number): Observable<Array<Bool>> => {
    return this
      .referendumVoters(referendumId)
      .pipe(
        switchMap((voters: Array<AccountId> = []) =>
          this.referendumVotes(referendumId, voters)
        ),
        defaultIfEmpty([] as any)
      );
  }

  eraBlockLength = (): Observable<BlockNumber | undefined> => {
    return this.combine(
      [
        this.sessionLength(),
        this.sessionsPerEra()
      ],
      ([sessionLength, sessionsPerEra]: [BlockNumber | undefined, BlockNumber | undefined]): BlockNumber | undefined =>
        sessionLength && sessionsPerEra
          ? new BlockNumber(
            sessionLength.mul(sessionsPerEra)
          )
          : undefined
    );
  }

  eraBlockProgress = (): Observable<BlockNumber | undefined> => {
    return this.combine(
      [
        this.sessionBlockProgress(),
        this.sessionLength(),
        this.sessionCurrentIndex(),
        this.sessionsPerEra(),
        this.eraLastLengthChange()
      ],
      ([sessionBlockProgress, sessionLength, sessionCurrentIndex, sessionsPerEra, eraLastLengthChange]: [BlockNumber | undefined, BlockNumber | undefined, BlockNumber | undefined, BlockNumber | undefined, BlockNumber | undefined]): BlockNumber | undefined =>
        sessionsPerEra && sessionCurrentIndex && sessionLength && sessionBlockProgress
          ? new BlockNumber(
            sessionCurrentIndex
              // last era can be null (i.e. new chain, valid key, no value set yet)
              .sub(eraLastLengthChange || new BlockNumber(0))
              .mod(sessionsPerEra)
              .mul(sessionLength)
              .add(sessionBlockProgress)
          )
          : undefined
    );
  }

  eraBlockRemaining = (): Observable<BlockNumber | undefined> => {
    return this.combine(
      [
        this.eraBlockLength(),
        this.eraBlockProgress()
      ],
      ([eraBlockLength, eraBlockProgress]: [BlockNumber | undefined, BlockNumber | undefined]): BlockNumber | undefined =>
        eraBlockLength && eraBlockProgress
          ? new BlockNumber(
            eraBlockLength.sub(eraBlockProgress)
          )
          : undefined
    );
  }

  sessionBlockProgress = (): Observable<BlockNumber | undefined> => {
    return this.combine(
      [
        this.bestNumber(),
        this.sessionLength(),
        this.sessionLastLengthChange()
      ],
      ([bestNumber, sessionLength, lastSessionLengthChange]: [BlockNumber | undefined, BlockNumber | undefined, BlockNumber | undefined]): BlockNumber | undefined =>
        bestNumber && sessionLength
          ? new BlockNumber(
            bestNumber
              // last change can be null (i.e. new chain, valid key, no value set yet)
              .sub(lastSessionLengthChange || new BlockNumber(0))
              .add(sessionLength)
              .mod(sessionLength)
          )
          : undefined
    );
  }

  sessionBlockRemaining = (): Observable<BlockNumber | undefined> => {
    return this.combine(
      [
        this.sessionBlockProgress(),
        this.sessionLength()
      ],
      ([sessionBlockProgress, sessionLength]: [BlockNumber | undefined, BlockNumber | undefined]): BlockNumber | undefined =>
        sessionBlockProgress && sessionLength
          ? new BlockNumber(
            sessionLength.sub(sessionBlockProgress)
          )
          : undefined
    );
  }

  sessionBrokenValue = (): Observable<Moment | undefined> => {
    return this.combine(
      [
        this.blockNow(),
        this.sessionTimeExpected(),
        this.sessionTimeRemaining(),
        this.sessionCurrentStart()
      ],
      ([now, sessionTimeExpected, sessionTimeRemaining, sessionCurrentStart]: [Moment | undefined, Moment | undefined, Moment | undefined, Moment | undefined]): Moment | undefined =>
        sessionTimeExpected && sessionTimeRemaining && sessionCurrentStart && now
          ? new Moment(
            Math.round(
              100 * (now.getTime() + sessionTimeRemaining.toNumber() - sessionCurrentStart.getTime()) / sessionTimeExpected.toNumber() - 100
            )
          )
          : undefined
    );
  }

  sessionTimeExpected = (): Observable<Moment | undefined> => {
    return this.combine(
      [
        this.sessionLength(),
        this.blockPeriod()
      ],
      ([sessionLength, blockPeriod]: [BlockNumber | undefined, Moment | undefined]): Moment | undefined =>
        sessionLength && blockPeriod
          ? new Moment(
            sessionLength.muln(blockPeriod.toNumber()).muln(1000)
          )
          : undefined
    );
  }

  sessionTimeRemaining = (): Observable<Moment | undefined> => {
    return this.combine(
      [
        this.sessionBlockRemaining(),
        this.blockPeriod()
      ],
      ([sessionBlockRemaining, blockPeriod]: [BlockNumber | undefined, Moment | undefined]): Moment | undefined =>
        blockPeriod && sessionBlockRemaining
          ? new Moment(
            sessionBlockRemaining.muln(blockPeriod.toNumber()).muln(1000)
          )
          : undefined
    );
  }

  validatingBalance = (address: AccountId | string): Observable<RxBalance> => {
    return this.combine(
      [
        this.votingBalance(address),
        this.votingBalancesNominatorsFor(address)
      ],
      ([balance, nominators = []]: [RxBalance, Array<RxBalance>]): RxBalance => {
        const nominatedBalance = nominators.reduce((total, nominator: RxBalance) => {
          return total.add(nominator.votingBalance);
        }, new BN(0));

        const result = {
          ...balance,
          nominators,
          nominatedBalance: new Balance(nominatedBalance),
          stakingBalance: new Balance(
            nominatedBalance.add(balance.votingBalance)
          )
        };

        return result;
      }
    );
  }

  validatingBalances = (...addresses: Array<AccountId | string>): Observable<RxBalanceMap> => {
    return this.combine(
      addresses.map((address) =>
        this.validatingBalance(address)
      ),
      (result: Array<RxBalance>): RxBalanceMap =>
        result.reduce((balances, balance) => {
          balances[balance.address.toString()] = balance;

          return balances;
        }, {} as RxBalanceMap)
    );
  }

  votingBalance = (address: AccountIndex | AccountId | string): Observable<RxBalance> => {
    return this
      .accountIdAndIndex(address)
      .pipe(
        switchMap(([accountId]: [AccountId | undefined, AccountIndex | undefined]): Observable<RxBalance> => {
          if (!accountId) {
            return EMPTY;
          }

          return this.combine(
            [
              this.balanceFree(accountId),
              this.balanceReserved(accountId)
            ],
            ([freeBalance, reservedBalance]: [Balance | undefined, Balance | undefined]): RxBalance => ({
              address: accountId,
              freeBalance: freeBalance || new Balance(0),
              nominatedBalance: new Balance(0),
              reservedBalance: reservedBalance || new Balance(0),
              stakingBalance: new Balance(0),
              votingBalance: new Balance(
                (freeBalance || new Balance(0)).add(reservedBalance || new Balance(0))
              )
            })
          );
        })
      );
  }

  votingBalancesNominatorsFor = (address: AccountId | string) => {
    return this
      .stakingNominatorsFor(address)
      .pipe(
        switchMap((nominators: Array<AccountId>) =>
          this.votingBalances(...nominators)
        ),
        defaultIfEmpty([] as any)
      );
  }

  votingBalances = (...addresses: Array<AccountId | string>): Observable<RxBalance[]> => {
    return this.combine(
      addresses.map((address) =>
        this.votingBalance(address)
      )
    );
  }
}
