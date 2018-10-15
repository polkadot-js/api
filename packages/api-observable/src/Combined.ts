// Copyright 2017-2018 @polkadot/api-observable authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { RxBalance, RxBalanceMap, RxReferendumVote } from './types';

import BN from 'bn.js';
import { EMPTY, Observable } from 'rxjs';
import { switchMap, defaultIfEmpty, map } from 'rxjs/operators';
import { AccountId, AccountIndex, Balance, bool as Bool, BlockNumber, Moment, ReferendumIndex } from '@polkadot/types/index';
import { ENUMSET_SIZE } from '@polkadot/types/AccountIndex';
import isString from '@polkadot/util/is/string';

import ApiCalls from './Calls';
import { RxProposal, RxReferendum } from './classes';

// Combines API calls and queries into single results. This allows for the exposed API to have
// useful extensions, i.e. queries can be made that returns the results from multiple observables,
// make the noise for the API users significantly less
export default class ApiCombined extends ApiCalls {
  // Creates a mapping of AccountId (encoded) => AccountIndex (encoded)
  accountIndexes = (): Observable<{ [index: string]: string }> => {
    return this
      .nextAccountEnumSet()
      .pipe(
        switchMap((nextEnum: AccountIndex | undefined) => {
          const lastIndex = nextEnum
            ? nextEnum.toBn()
            : new BN(0);

          return this.combine(
            Array(lastIndex.div(ENUMSET_SIZE).toNumber()).map((_, i): Observable<Array<AccountId> | undefined> =>
              this.getAccountEnumSet(i * ENUMSET_SIZE.toNumber())
            ),
            (...all: Array<Array<AccountId> | undefined>) => {
              return all.reduce((result, list = [], outerIndex: number) => {
                list.forEach((accountId, innerIndex) => {
                  const index = (outerIndex * ENUMSET_SIZE.toNumber()) + innerIndex;

                  // FIXME This is not even remotely correct, here we basically only cater
                  // for the first 0xfd indexes, short just to get things going....
                  // AccountIndex should allow number as a constructor input
                  result[accountId.toString()] = new AccountIndex(
                    new Uint8Array([index])
                  ).toString();
                });

                return result;
              }, {} as { [index: string]: string });
            }
          );
        })
      );
  }

  // lookup accountId from index
  accountIdFromIndex = (accountIndex: AccountIndex): Observable<AccountId | undefined> => {
    return this
      .getAccountEnumSet(accountIndex)
      .pipe(
        map((accounts: Array<AccountId> = []): AccountId | undefined =>
          accounts[accountIndex.toBn().mod(ENUMSET_SIZE).toNumber()]
        )
      );
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

  referendumsInfo = (referendumIds: Array<ReferendumIndex | BN | number>): Observable<Array<RxReferendum>> => {
    return this.combine(
      referendumIds.map((referendumId) =>
        this.referendumInfo(referendumId)
      ),
      (referendums: Array<RxReferendum> = []): Array<RxReferendum> =>
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

  referendums = (): Observable<Array<RxReferendum>> => {
    return this.combine(
      [
        this.referendumCount(),
        this.democracyNextTally()
      ]
    ).pipe(
      // @ts-ignore After upgrade to 6.3.2
      switchMap(([referendumCount, nextTally]: [ReferendumIndex | undefined, ReferendumIndex | undefined]): Observable<Array<RxReferendum>> =>
        referendumCount && nextTally && referendumCount.gt(nextTally) && referendumCount.gt(0)
          ? this.referendumsInfo(
            [...Array(referendumCount.toBn().sub(nextTally.toBn()).toNumber())].map((_, i) =>
              nextTally.add(i).toNumber()
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
              .mod(sessionsPerEra.toBn())
              .mul(sessionLength.toBn())
              .add(sessionBlockProgress.toBn())
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
              .add(sessionLength.toBn())
              .mod(sessionLength.toBn())
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
            sessionLength.mul(blockPeriod.toBn()).muln(1000)
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
            sessionBlockRemaining.mul(blockPeriod.toBn()).muln(1000)
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
          return total.add(nominator.votingBalance.toBn());
        }, new BN(0));

        const result = {
          ...balance,
          nominators,
          nominatedBalance: new Balance(nominatedBalance),
          stakingBalance: new Balance(
            nominatedBalance.add(balance.votingBalance.toBn())
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

  votingBalance = (_address: AccountId | string): Observable<RxBalance> => {
    const address = isString(_address)
      ? new AccountId(_address)
      : _address;

    return this.combine(
      [
        this.balanceFree(address),
        this.balanceReserved(address)
      ],
      ([freeBalance, reservedBalance]: [Balance | undefined, Balance | undefined]): RxBalance => ({
        address,
        freeBalance: freeBalance || new Balance(0),
        nominatedBalance: new Balance(0),
        reservedBalance: reservedBalance || new Balance(0),
        stakingBalance: new Balance(0),
        votingBalance: new Balance(
          (freeBalance || new Balance(0)).add(reservedBalance || new Balance(0))
        )
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
