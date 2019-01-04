// Copyright 2017-2019 @polkadot/api-observable authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { RxFees } from './types';

import BN from 'bn.js';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AccountId, AccountIndex, Balance, bool as Bool, BlockNumber, EventRecord, Index, Moment, Perbill, PropIndex, ReferendumIndex, ReferendumInfo, u32 } from '@polkadot/types/index';
import { Tuple } from '@polkadot/types/codec';

import ApiBase from './Base';
import { RxProposal, RxProposalDeposits } from './classes';

// Perform storage queries to the API endpoints.
export default class ApiQueries extends ApiBase {
  accountNonce = (address: AccountId | string): Observable<Index | undefined> => {
    return this.rawStorage(ApiBase.storage.system.accountNonce, address);
  }

  balanceFree = (address: AccountId | string): Observable<Balance | undefined> => {
    return this.rawStorage(ApiBase.storage.balances.freeBalance, address);
  }

  balanceReserved = (address: AccountId | string): Observable<Balance | undefined> => {
    return this.rawStorage(ApiBase.storage.balances.reservedBalance, address);
  }

  blockPeriod = (): Observable<Moment | undefined> => {
    return this.rawStorage(ApiBase.storage.timestamp.blockPeriod);
  }

  blockNow = (): Observable<Moment | undefined> => {
    return this.rawStorage(ApiBase.storage.timestamp.now);
  }

  democracyLaunchPeriod = (): Observable<BlockNumber | undefined> => {
    return this.rawStorage(ApiBase.storage.democracy.launchPeriod);
  }

  democracyNextTally = (): Observable<ReferendumIndex | undefined> => {
    return this.rawStorage(ApiBase.storage.democracy.nextTally);
  }

  getAccountEnumSet = (index: AccountIndex | BN | number): Observable<Array<AccountId> | undefined> => {
    return this
      .rawStorage(ApiBase.storage.balances.enumSet, index)
      .pipe(
        // @ts-ignore After upgrade to 6.3.2
        map((accounts: Array<AccountId> | null | undefined) =>
          accounts || ([] as Array<AccountId>)
        )
      );
  }

  nextAccountEnumSet = (): Observable<AccountIndex | undefined> => {
    return this.rawStorage(ApiBase.storage.balances.nextEnumSet);
  }

  proposalDeposits = (proposalId: PropIndex | BN | number): Observable<RxProposalDeposits | undefined> => {
    return this
      .rawStorage(ApiBase.storage.democracy.depositOf, proposalId)
      .pipe(
        // @ts-ignore After upgrade to 6.3.2
        map((result: Tuple): RxProposalDeposits | undefined =>
          result
            ? new RxProposalDeposits(result)
            : undefined
        )
      );
  }

  publicProposals = (): Observable<Array<RxProposal>> => {
    return this
      .rawStorage(ApiBase.storage.democracy.publicProps)
      .pipe(
        // @ts-ignore After upgrade to 6.3.2
        map((proposals: Array<Tuple> | null | undefined) =>
          (proposals || ([] as Array<Tuple>))
            .map((result: Tuple): RxProposal | undefined =>
              result
                ? new RxProposal(result)
                : undefined
            )
            .filter((proposal) =>
              proposal
            )
        )
    );
  }

  referendumCount = (): Observable<ReferendumIndex | undefined> => {
    return this.rawStorage(ApiBase.storage.democracy.referendumCount);
  }

  referendumInfo = (referendumId: ReferendumIndex | BN | number): Observable<ReferendumInfo | undefined> => {
    return this
      .rawStorage(ApiBase.storage.democracy.referendumInfoOf, referendumId)
      .pipe(
        // @ts-ignore After upgrade to 6.3.2
        map((result: Tuple) =>
          result
            ? result[0]
            : undefined
        )
      );
  }

  referendumVote = (index: ReferendumIndex | BN | number, address: AccountId | string): Observable<Bool | undefined> => {
    return this.rawStorage(ApiBase.storage.democracy.voteOf, [index, address]);
  }

  referendumVoters = (index: ReferendumIndex | BN | number): Observable<Array<AccountId>> => {
    return this
      .rawStorage(ApiBase.storage.democracy.votersFor, index)
      .pipe(
        // @ts-ignore After upgrade to 6.3.2
        map((voters: Array<AccountId> | null | undefined) =>
          voters || ([] as Array<AccountId>)
        )
      );
  }

  democracyVotingPeriod = (): Observable<BlockNumber | undefined> => {
    return this.rawStorage(ApiBase.storage.democracy.votingPeriod);
  }

  fees = (): Observable<RxFees> => {
    return this
      .rawStorageMulti(
        [ApiBase.storage.balances.transactionBaseFee],
        [ApiBase.storage.balances.transactionByteFee],
        [ApiBase.storage.balances.creationFee],
        [ApiBase.storage.balances.existentialDeposit],
        [ApiBase.storage.balances.transferFee]
      )
      .pipe(
        // @ts-ignore After upgrade to 6.3.2
        map(([baseFee, byteFee, creationFee, existentialDeposit, transferFee]: [Balance | undefined, Balance | undefined, Balance | undefined, Balance | undefined, Balance | undefined]) => ({
          baseFee: baseFee || new Balance(0),
          byteFee: byteFee || new Balance(0),
          creationFee: creationFee || new Balance(0),
          existentialDeposit: existentialDeposit || new Balance(0),
          transferFee: transferFee || new Balance(0)
        }))
      );
  }

  eraLastLengthChange = (): Observable<BlockNumber | undefined> => {
    return this.rawStorage(ApiBase.storage.staking.lastEraLengthChange);
  }

  sessionReward = (): Observable<Perbill | undefined> => {
    return this.rawStorage(ApiBase.storage.staking.sessionReward);
  }

  sessionRewardCurrent = (): Observable<Balance | undefined> => {
    return this.rawStorage(ApiBase.storage.staking.currentSessionReward);
  }

  sessionCurrentIndex = (): Observable<BlockNumber | undefined> => {
    return this.rawStorage(ApiBase.storage.session.currentIndex);
  }

  sessionCurrentStart = (): Observable<Moment | undefined> => {
    return this.rawStorage(ApiBase.storage.session.currentStart);
  }

  sessionLastLengthChange = (): Observable<BlockNumber | undefined> => {
    return this.rawStorage(ApiBase.storage.session.lastLengthChange);
  }

  sessionLength = (): Observable<BlockNumber | undefined> => {
    return this.rawStorage(ApiBase.storage.session.sessionLength);
  }

  sessionsPerEra = (): Observable<BlockNumber | undefined> => {
    return this.rawStorage(ApiBase.storage.staking.sessionsPerEra);
  }

  sessionValidators = (): Observable<Array<AccountId>> => {
    return this
      .rawStorage(ApiBase.storage.session.validators)
      .pipe(
        // @ts-ignore After upgrade to 6.3.2
        map((validators: Array<AccountId> | null | undefined) =>
          validators || ([] as Array<AccountId>)
        )
      );
  }

  stakingIntentions = (): Observable<Array<AccountId>> => {
    return this
      .rawStorage(ApiBase.storage.staking.intentions)
      .pipe(
        // @ts-ignore After upgrade to 6.3.2
        map((intentions: Array<AccountId> | null | undefined) =>
          intentions || ([] as Array<AccountId>)
        )
      );
  }

  stakingNominatorsFor = (address: AccountId | string): Observable<Array<AccountId>> => {
    return this
      .rawStorage(ApiBase.storage.staking.nominatorsFor, address)
      .pipe(
        // @ts-ignore After upgrade to 6.3.2
        map((nominators: Array<AccountId> | null | undefined) =>
          nominators || ([] as Array<AccountId>)
        )
      );
  }

  stakingNominating = (address: AccountId | string): Observable<AccountId | undefined> => {
    return this.rawStorage(ApiBase.storage.staking.nominating, address);
  }

  systemEvents = (): Observable<Array<EventRecord>> => {
    return this
      .rawStorage(ApiBase.storage.system.events)
      .pipe(
        // @ts-ignore After upgrade to 6.3.2
        map((events: Array<EventRecord> | null | undefined) =>
          events || ([] as Array<EventRecord>)
        )
      );
  }

  validatorCount = (): Observable<u32 | undefined> => {
    return this.rawStorage(ApiBase.storage.staking.validatorCount);
  }
}
