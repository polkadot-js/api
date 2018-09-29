// Copyright 2017-2018 @polkadot/ui-react-rx authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { RxApiInterface, RxApiInterface$Method } from '@polkadot/api-rx/types';
import { Method } from '@polkadot/jsonrpc/types';
import { RxBalance, RxBalanceMap, RxFees, RxProposal, RxProposalDeposits, RxReferendum, RxReferendumVote } from './types';

import BN from 'bn.js';
import { EMPTY, Observable, combineLatest } from 'rxjs';
import { switchMap, defaultIfEmpty, map } from 'rxjs/operators';
import { AccountId, Balance, Bool, BlockNumber, Header, Index, Moment, PropIndex, Proposal, ReferendumIndex, SignedBlock, u32, VoteThreshold } from '@polkadot/api-codec/index';
import { Tuple, Vector } from '@polkadot/api-codec/codec';
import { StorageFunction } from '@polkadot/api-codec/StorageKey';
import storage from '@polkadot/storage/testing';
import assert from '@polkadot/util/assert';
import isString from '@polkadot/util/is/string';
import isUndefined from '@polkadot/util/is/undefined';

type OptBN = BN | undefined;
type OptDate = Date | undefined;
type MapFn<R, T> = (combined: R) => T;

const ResultReferendum = Tuple.with({ Balance, Proposal, VoteThreshold });
const ResultProposal = Tuple.with({ PropIndex, Proposal, AccountId });
const ResultProposalDeposits = Tuple.with({ Balance, AccountIds: Vector.with(AccountId) });

const defaultMapFn = (result: any): any =>
  result;

export default class ObservableApi {
  private api: RxApiInterface;

  constructor (api: RxApiInterface) {
    this.api = api;
  }

  private combine = <T, R> (observables: Array<Observable<any>>, mapfn: MapFn<R, T> = defaultMapFn): Observable<T> => {
    return combineLatest(...observables).pipe(
      // FIXME There are a couple of places now where this casting happens after rxjs 6.3.2
      defaultIfEmpty([] as any),
      map(mapfn)
    );
  }

  rawCall = <T> ({ name, section }: Method, ...params: Array<any>): Observable<T> => {
    // @ts-ignore
    const apiSection = this.api[section];

    assert(section && apiSection, `Unable to find 'api.${section}'`);

    const fn: RxApiInterface$Method = apiSection
      ? apiSection[name]
      // @ts-ignore This one is done for 'isConnected'
      : this.api[name];

    assert(fn, `Unable to find 'api${section ? '.' : ''}${section || ''}.${name}'`);

    return fn.apply(null, params);
  }

  rawStorage = <T> (key: StorageFunction, ...params: Array<any>): Observable<T> => {
    return this
      .rawStorageMulti([key, ...params] as [StorageFunction, any])
      .pipe(
        // @ts-ignore After upgrade to 6.3.2
        map(([result]: Array<T>): T =>
          result
        )
      );
  }

  rawStorageMulti = <T> (...keys: Array<[StorageFunction] | [StorageFunction, any]>): Observable<T> => {
    return this.api.state
      .storage(keys)
      .pipe(
        map((result?: any) =>
          isUndefined(result)
            ? []
            : result
        )
      );
  }

  bestNumber = (): Observable<BlockNumber | undefined> => {
    return this
      .chainNewHead()
      .pipe(
        map((header?: Header): BlockNumber | undefined =>
          header && header.blockNumber
            ? header.blockNumber
            : undefined
        )
      );
  }

  chainGetBlock = (hash: Uint8Array): Observable<SignedBlock | undefined> => {
    return this.api.chain.getBlock(hash);
  }

  chainNewHead = (): Observable<Header | undefined> => {
    return this.api.chain.newHead().pipe(
      defaultIfEmpty()
    );
  }

  democracyLaunchPeriod = (): Observable<BlockNumber | undefined> => {
    return this.rawStorage(storage.democracy.launchPeriod);
  }

  democracyNextTally = (): Observable<ReferendumIndex | undefined> => {
    return this.rawStorage(storage.democracy.nextTally);
  }

  democracyPublicProposals = (): Observable<Array<RxProposal>> => {
    return this
      .rawStorage(storage.democracy.publicProps)
      .pipe(
        // @ts-ignore After upgrade to 6.3.2
        map((proposals: Array<ResultProposal> = []) =>
          proposals
            .map((result: typeof ResultProposal): RxProposal | undefined =>
              result && result[1]
                ? {
                  address: result[2],
                  id: result[0],
                  proposal: result[1]
                }
                : undefined
            )
            .filter((proposal) =>
              proposal
            )
        )
    );
  }

  democracyProposalCount = (): Observable<number> => {
    return this
      .democracyPublicProposals()
      .pipe(
        map((proposals: Array<RxProposal>) =>
          proposals.length
        )
      );
  }

  democracyProposalDeposits = (proposalId: PropIndex | BN | number): Observable<RxProposalDeposits | undefined> => {
    return this
      .rawStorage(storage.democracy.depositOf, proposalId)
      .pipe(
        // @ts-ignore After upgrade to 6.3.2
        map((result: ResultProposalDeposits): RxProposalDeposits | undefined =>
          result && result[0]
            ? {
              addresses: result[1] || [],
              balance: result[0]
            }
            : undefined
        )
      );
  }

  democracyReferendumCount = (): Observable<ReferendumIndex | undefined> => {
    return this.rawStorage(storage.democracy.referendumCount);
  }

  democracyReferendumInfoOf = (referendumId: ReferendumIndex | BN | number): Observable<RxReferendum> => {
    return this
      .rawStorage(storage.democracy.referendumInfoOf, referendumId)
      .pipe(
        // @ts-ignore After upgrade to 6.3.2
        map((result: typeof ResultReferendum) =>
          result && result[1]
            ? {
              blockNumber: result[0],
              id: new ReferendumIndex(referendumId),
              proposal: result[1],
              voteThreshold: result[2]
            }
            : undefined
        )
      );
  }

  democracyReferendumInfos = (referendumIds: Array<ReferendumIndex | BN | number>): Observable<Array<RxReferendum>> => {
    return this.combine(
      referendumIds.map((referendumId) =>
        this.democracyReferendumInfoOf(referendumId)
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
        this.democacyVotersFor(referendumId),
        this.democracyVotersBalancesOf(referendumId),
        this.democracyVotersVotesOf(referendumId)
      ],
      ([voters, balances, votes]: [Array<AccountId>, Array<Balance>, Array<Bool>]): Array<RxReferendumVote> =>
        voters.map((address, index): RxReferendumVote => ({
          address,
          balance: balances[index] || new BN(0),
          vote: votes[index] || false
        }))
    );
  }

  democracyReferendums = (): Observable<Array<RxReferendum>> => {
    return this.combine(
      [
        this.democracyReferendumCount(),
        this.democracyNextTally()
      ]
    ).pipe(
      // @ts-ignore After upgrade to 6.3.2
      switchMap(([referendumCount, nextTally]: [OptBN, OptBN]): Observable<Array<RxReferendum>> =>
        referendumCount && nextTally && referendumCount.gt(nextTally) && referendumCount.gtn(0)
          ? this.democracyReferendumInfos(
            [...Array(referendumCount.sub(nextTally).toNumber())].map((_, i) =>
              nextTally.addn(i).toNumber()
            )
          )
          : EMPTY
      ),
      defaultIfEmpty([])
    );
  }

  democacyVoteOf = (index: ReferendumIndex | BN | number, address: AccountId | string): Observable<Bool> => {
    return this.rawStorage(storage.democracy.voteOf, index, address);
  }

  democracyVotesOf = (index: ReferendumIndex | BN | number, addresses: Array<AccountId | string>): Observable<boolean> => {
    return this.combine(
      addresses.map((address) =>
        this.democacyVoteOf(index, address)
      )
    );
  }

  democacyVotersFor = (index: ReferendumIndex | BN | number): Observable<Array<AccountId>> => {
    return this
      .rawStorage(storage.democracy.votersFor, index)
      .pipe(
        // @ts-ignore After upgrade to 6.3.2
        map((voters: Array<string> = []) =>
          voters
        )
      );
  }

  democracyVotersBalancesOf = (referendumId: ReferendumIndex | BN | number): Observable<Array<Balance>> => {
    return this
      .democacyVotersFor(referendumId)
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
      .democacyVotersFor(referendumId)
      .pipe(
        switchMap((voters: Array<AccountId> = []) =>
          this.democracyVotesOf(referendumId, voters)
        ),
        defaultIfEmpty([] as any)
      );
  }

  democracyVotingPeriod = (): Observable<BlockNumber | undefined> => {
    return this.rawStorage(storage.democracy.votingPeriod);
  }

  eraBlockLength = (): Observable<OptBN> => {
    return this.combine(
      [
        this.sessionLength(),
        this.sessionsPerEra()
      ],
      ([sessionLength, sessionsPerEra]: [OptBN, OptBN]): OptBN =>
        sessionLength && sessionsPerEra
          ? sessionLength.mul(sessionsPerEra)
          : undefined
    );
  }

  eraBlockProgress = (): Observable<OptBN> => {
    return this.combine(
      [
        this.sessionBlockProgress(),
        this.sessionLength(),
        this.sessionCurrentIndex(),
        this.sessionsPerEra(),
        this.eraLastLengthChange()
      ],
      ([sessionBlockProgress, sessionLength, sessionCurrentIndex, sessionsPerEra, eraLastLengthChange = new BN(0)]: [OptBN, OptBN, OptBN, OptBN, OptBN]): OptBN =>
        sessionsPerEra && sessionCurrentIndex && sessionLength && sessionBlockProgress && eraLastLengthChange
          ? sessionCurrentIndex
              .sub(eraLastLengthChange)
              .mod(sessionsPerEra)
              .mul(sessionLength)
              .add(sessionBlockProgress)
          : undefined
    );
  }

  eraBlockRemaining = (): Observable<OptBN> => {
    return this.combine(
      [
        this.eraBlockLength(),
        this.eraBlockProgress()
      ],
      ([eraBlockLength, eraBlockProgress]: [OptBN, OptBN]): OptBN =>
        eraBlockLength && eraBlockProgress
          ? eraBlockLength.sub(eraBlockProgress)
          : undefined
    );
  }

  fees = (): Observable<RxFees> => {
    return this
      .rawStorageMulti(
        [storage.staking.public.transactionBaseFee],
        [storage.staking.public.transactionByteFee],
        [storage.staking.public.creationFee],
        [storage.staking.public.existentialDeposit ],
        [storage.staking.public.transferFee ]
      )
      .pipe(
        // @ts-ignore After upgrade to 6.3.2
        map(([baseFee = new BN(0), byteFee = new BN(0), creationFee = new BN(0), existentialDeposit = new BN(0), transferFee = new BN(0)]: [OptBN, OptBN, OptBN, OptBN, OptBN]) => ({
          baseFee,
          byteFee,
          creationFee,
          existentialDeposit,
          transferFee
        }))
      );
  }

  eraLastLengthChange = (): Observable<OptBN> => {
    return this.rawStorage(storage.staking.public.lastEraLengthChange);
  }

  sessionBlockProgress = (): Observable<OptBN> => {
    return this.combine(
      [
        this.bestNumber(),
        this.sessionLength(),
        this.sessionLastLengthChange()
      ],
      ([bestNumber, sessionLength, lastSessionLengthChange]: [OptBN, OptBN, OptBN]): OptBN =>
        bestNumber && sessionLength && lastSessionLengthChange
          ? bestNumber
              .sub(lastSessionLengthChange)
              .add(sessionLength)
              .mod(sessionLength)
          : undefined
    );
  }

  sessionBlockRemaining = (): Observable<OptBN> => {
    return this.combine(
      [
        this.sessionBlockProgress(),
        this.sessionLength()
      ],
      ([sessionBlockProgress, sessionLength]: [OptBN, OptBN]): OptBN =>
        sessionBlockProgress && sessionLength
          ? sessionLength.sub(sessionBlockProgress)
          : undefined
    );
  }

  sessionBrokenPercentLate = (): Observable<OptBN> => {
    return this.rawStorage(storage.session.public.brokenPercentLate);
  }

  sessionBrokenValue = (): Observable<OptBN> => {
    return this.combine(
      [
        this.timestampNow(),
        this.sessionTimeExpected(),
        this.sessionTimeRemaining(),
        this.sessionCurrentStart()
      ],
      ([now, sessionTimeExpected, sessionTimeRemaining, sessionCurrentStart]: [OptDate, OptBN, OptBN, OptDate]): OptBN =>
        sessionTimeExpected && sessionTimeRemaining && sessionCurrentStart && now
          ? new BN(
            Math.round(
              100 * (now.getTime() + sessionTimeRemaining.toNumber() - sessionCurrentStart.getTime()) / sessionTimeExpected.toNumber() - 100
            )
          )
          : undefined
    );
  }

  sessionCurrentIndex = (): Observable<OptBN> => {
    return this.rawStorage(storage.session.public.currentIndex);
  }

  sessionCurrentStart = (): Observable<OptBN> => {
    return this.rawStorage(storage.session.public.currentStart);
  }

  sessionLastLengthChange = (): Observable<OptBN> => {
    return this.rawStorage(storage.session.public.lastLengthChange);
  }

  sessionLength = (): Observable<OptBN> => {
    return this.rawStorage(storage.session.public.length);
  }

  sessionsPerEra = (): Observable<OptBN> => {
    return this.rawStorage(storage.staking.public.sessionsPerEra);
  }

  sessionTimeExpected = (): Observable<OptBN> => {
    return this.combine(
      [
        this.sessionLength(),
        this.timestampBlockPeriod()
      ],
      ([sessionLength, blockPeriod]: [OptBN, OptBN]): OptBN =>
        sessionLength && blockPeriod
          ? blockPeriod.mul(sessionLength).muln(1000)
          : undefined
    );
  }

  sessionTimeRemaining = (): Observable<Moment | undefined> => {
    return this.combine(
      [
        this.sessionBlockRemaining(),
        this.timestampBlockPeriod()
      ],
      ([sessionBlockRemaining, blockPeriod]: [OptBN, Moment | undefined]): Moment | undefined =>
        blockPeriod && sessionBlockRemaining
          ? new Moment(
            blockPeriod.toBn().mul(sessionBlockRemaining).muln(1000)
          )
          : undefined
    );
  }

  sessionValidators = (): Observable<Array<AccountId | string>> => {
    return this
      .rawStorage(storage.session.validators)
      .pipe(
        // @ts-ignore After upgrade to 6.3.2
        map((validators: Array<AccountId> = []) =>
          validators
        )
      );
  }

  stakingIntentions = (): Observable<Array<AccountId | string>> => {
    return this
      .rawStorage(storage.staking.intentions)
      .pipe(
        // @ts-ignore After upgrade to 6.3.2
        map((intentions: Array<AccountId> = []) =>
          intentions
        )
      );
  }

  stakingFreeBalanceOf = (address: AccountId | string): Observable<Balance | undefined> => {
    return this.rawStorage(storage.balances.freeBalance, address);
  }

  stakingNominatorsFor = (address: AccountId | string): Observable<Array<AccountId>> => {
    return this
      .rawStorage(storage.staking.nominatorsFor, address)
      .pipe(
        // @ts-ignore After upgrade to 6.3.2
        map((nominators: Array<AccountId> = []) =>
          nominators
        )
      );
  }

  stakingNominating = (address: AccountId | string): Observable<AccountId | undefined> => {
    return this.rawStorage(storage.staking.nominating, address);
  }

  stakingReservedBalanceOf = (address: AccountId | string): Observable<Balance | undefined> => {
    return this.rawStorage(storage.balances.reservedBalance, address);
  }

  timestampBlockPeriod = (): Observable<Moment | undefined> => {
    return this.rawStorage(storage.timestamp.blockPeriod);
  }

  timestampNow = (): Observable<Moment | undefined> => {
    return this.rawStorage(storage.timestamp.now);
  }

  systemAccountIndexOf = (address: AccountId | string): Observable<Index | undefined> => {
    return this.rawStorage(storage.system.accountNonce, address);
  }

  validatorCount = (): Observable<u32> => {
    return this.rawStorage(storage.staking.validatorCount);
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
        this.stakingFreeBalanceOf(address),
        this.stakingReservedBalanceOf(address)
      ],
      ([freeBalance = new Balance(0), reservedBalance = new Balance(0)]: [Balance | undefined, Balance | undefined]): RxBalance => ({
        address,
        freeBalance,
        nominatedBalance: new Balance(0),
        reservedBalance,
        stakingBalance: new Balance(0),
        votingBalance: new Balance(
          freeBalance.toBn().add(reservedBalance.toBn())
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
