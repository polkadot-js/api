// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { AccountId, Balance, BlockNumber, PreimageStatus, Proposal, ReferendumInfo, ReferendumInfoTo239, ReferendumStatus, Tally, VoteThreshold } from '@polkadot/types/interfaces';
import { ITuple } from '@polkadot/types/types';
import { DeriveProposalImage, DeriveReferendum, DeriveReferendumVote, DeriveReferendumVotes, DeriveReferendumVoteState } from '../types';

import BN from 'bn.js';
import { Bytes, Option } from '@polkadot/types';
import { bnSqrt } from '@polkadot/util';

type PreimageInfo = [Bytes, AccountId, Balance, BlockNumber];
type OldPreimage = ITuple<PreimageInfo>;

interface ApproxState {
  votedAye: BN;
  votedNay: BN;
  votedTotal: BN;
}

function isOldInfo (info: ReferendumInfo | ReferendumInfoTo239): info is ReferendumInfoTo239 {
  return !!(info as ReferendumInfoTo239).proposalHash;
}

function isCurrentStatus (status: ReferendumStatus | ReferendumInfoTo239): status is ReferendumStatus {
  return !!(status as ReferendumStatus).tally;
}

function isCurrentPreimage (api: ApiInterfaceRx, imageOpt: Option<OldPreimage> | Option<PreimageStatus>): imageOpt is Option<PreimageStatus> {
  return !!imageOpt && !api.query.democracy.dispatchQueue;
}

export function compareRationals (n1: BN, d1: BN, n2: BN, d2: BN): boolean {
  while (true) {
    const q1 = n1.div(d1);
    const q2 = n2.div(d2);

    if (q1.lt(q2)) {
      return true;
    } else if (q2.lt(q1)) {
      return false;
    }

    const r1 = n1.mod(d1);
    const r2 = n2.mod(d2);

    if (r2.isZero()) {
      return false;
    } else if (r1.isZero()) {
      return true;
    }

    n1 = d2;
    n2 = d1;
    d1 = r2;
    d2 = r1;
  }
}

export function calcPassing (threshold: VoteThreshold, sqrtElectorate: BN, { votedAye, votedNay, votedTotal }: ApproxState): boolean {
  const sqrtVoters = bnSqrt(votedTotal);

  return sqrtVoters.isZero()
    ? false
    : threshold.isSimplemajority
      ? votedAye.gt(votedNay)
      : threshold.isSupermajorityapproval
        ? compareRationals(votedNay, sqrtVoters, votedAye, sqrtElectorate)
        : compareRationals(votedNay, sqrtElectorate, votedAye, sqrtVoters);
}

function calcVotesPrev (votesFor: DeriveReferendumVote[]): DeriveReferendumVoteState {
  return votesFor.reduce((state: DeriveReferendumVoteState, derived): DeriveReferendumVoteState => {
    const { balance, vote } = derived;
    const isDefault = vote.conviction.index === 0;
    const counted = balance
      .muln(isDefault ? 1 : vote.conviction.index)
      .divn(isDefault ? 10 : 1);

    if (vote.isAye) {
      state.allAye.push(derived);
      state.voteCountAye++;
      state.votedAye.iadd(counted);
    } else {
      state.allNay.push(derived);
      state.voteCountNay++;
      state.votedNay.iadd(counted);
    }

    state.voteCount++;
    state.votedTotal.iadd(counted);

    return state;
  }, {
    allAye: [],
    allNay: [],
    voteCount: 0,
    voteCountAye: 0,
    voteCountNay: 0,
    votedAye: new BN(0),
    votedNay: new BN(0),
    votedTotal: new BN(0)
  });
}

function calcVotesCurrent (tally: Tally, votes: DeriveReferendumVote[]): DeriveReferendumVoteState {
  const allAye: DeriveReferendumVote[] = [];
  const allNay: DeriveReferendumVote[] = [];

  votes.forEach((derived): void => {
    if (derived.vote.isAye) {
      allAye.push(derived);
    } else {
      allNay.push(derived);
    }
  });

  return {
    allAye,
    allNay,
    voteCount: allAye.length + allNay.length,
    voteCountAye: allAye.length,
    voteCountNay: allNay.length,
    votedAye: tally.ayes,
    votedNay: tally.nays,
    votedTotal: tally.turnout
  };
}

export function calcVotes (sqrtElectorate: BN, referendum: DeriveReferendum, votes: DeriveReferendumVote[]): DeriveReferendumVotes {
  const state = isCurrentStatus(referendum.status)
    ? calcVotesCurrent(referendum.status.tally, votes)
    : calcVotesPrev(votes);

  return {
    ...state,
    isPassing: calcPassing(referendum.status.threshold, sqrtElectorate, state),
    votes
  };
}

export function getStatus (info: Option<ReferendumInfo | ReferendumInfoTo239>): ReferendumStatus | ReferendumInfoTo239 | null {
  if (info.isNone) {
    return null;
  }

  const unwrapped = info.unwrap();

  if (isOldInfo(unwrapped)) {
    return unwrapped;
  } else if (unwrapped.isOngoing) {
    return unwrapped.asOngoing;
  }

  // done, we don't include it here... only currently active
  return null;
}

function constructProposal (api: ApiInterfaceRx, [bytes, proposer, balance, at]: PreimageInfo): DeriveProposalImage {
  let proposal: Proposal | undefined;

  try {
    proposal = api.registry.createType('Proposal', bytes.toU8a(true));
  } catch (error) {
    console.error(error);
  }

  return { at, balance, proposal, proposer };
}

export function parseImage (api: ApiInterfaceRx, imageOpt: Option<OldPreimage> | Option<PreimageStatus>): DeriveProposalImage | undefined {
  if (imageOpt.isNone) {
    return;
  }

  if (isCurrentPreimage(api, imageOpt)) {
    const status = imageOpt.unwrap();

    if (status.isMissing) {
      return;
    }

    const { data, deposit, provider, since } = status.asAvailable;

    return constructProposal(api, [data, provider, deposit, since]);
  }

  return constructProposal(api, imageOpt.unwrap());
}
