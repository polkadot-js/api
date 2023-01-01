// Copyright 2017-2023 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Hash, ReferendumInfoTo239, Tally } from '@polkadot/types/interfaces';
import type { FrameSupportPreimagesBounded, PalletDemocracyReferendumInfo, PalletDemocracyReferendumStatus, PalletDemocracyVoteThreshold } from '@polkadot/types/lookup';
import type { Option } from '@polkadot/types-codec';
import type { HexString } from '@polkadot/util/types';
import type { DeriveReferendum, DeriveReferendumVote, DeriveReferendumVotes, DeriveReferendumVoteState } from '../types';

import { BN, bnSqrt, isHex, isString, isU8a, objectSpread, stringToHex, u8aToHex } from '@polkadot/util';

interface ApproxState {
  votedAye: BN;
  votedNay: BN;
  votedTotal: BN;
}

function isOldInfo (info: PalletDemocracyReferendumInfo | ReferendumInfoTo239): info is ReferendumInfoTo239 {
  return !!(info as ReferendumInfoTo239).proposalHash;
}

function isCurrentStatus (status: PalletDemocracyReferendumStatus | ReferendumInfoTo239): status is PalletDemocracyReferendumStatus {
  return !!(status as PalletDemocracyReferendumStatus).tally;
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

function calcPassingOther (threshold: PalletDemocracyVoteThreshold, sqrtElectorate: BN, { votedAye, votedNay, votedTotal }: ApproxState): boolean {
  const sqrtVoters = bnSqrt(votedTotal);

  return sqrtVoters.isZero()
    ? false
    : threshold.isSuperMajorityApprove
      ? compareRationals(votedNay, sqrtVoters, votedAye, sqrtElectorate)
      : compareRationals(votedNay, sqrtElectorate, votedAye, sqrtVoters);
}

export function calcPassing (threshold: PalletDemocracyVoteThreshold, sqrtElectorate: BN, state: ApproxState): boolean {
  return threshold.isSimpleMajority
    ? state.votedAye.gt(state.votedNay)
    : calcPassingOther(threshold, sqrtElectorate, state);
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
  }, { allAye: [], allNay: [], voteCount: 0, voteCountAye: 0, voteCountNay: 0, votedAye: new BN(0), votedNay: new BN(0), votedTotal: new BN(0) });
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

  return objectSpread({}, state, {
    isPassing: calcPassing(referendum.status.threshold, sqrtElectorate, state),
    votes
  });
}

export function getStatus (info: Option<PalletDemocracyReferendumInfo | ReferendumInfoTo239>): PalletDemocracyReferendumStatus | ReferendumInfoTo239 | null {
  if (info.isNone) {
    return null;
  }

  const unwrapped = info.unwrap();

  return isOldInfo(unwrapped)
    ? unwrapped
    : unwrapped.isOngoing
      ? unwrapped.asOngoing
      // done, we don't include it here... only currently active
      : null;
}

export function getImageHashBounded (hash: Uint8Array | string | Hash | FrameSupportPreimagesBounded): HexString {
  return (hash as FrameSupportPreimagesBounded).isLegacy
    ? (hash as FrameSupportPreimagesBounded).asLegacy.hash_.toHex()
    : (hash as FrameSupportPreimagesBounded).isLookup
      ? (hash as FrameSupportPreimagesBounded).asLookup.hash_.toHex()
      // for inline, use the actual Bytes hash
      : (hash as FrameSupportPreimagesBounded).isInline
        ? (hash as FrameSupportPreimagesBounded).asInline.hash.toHex()
        : isString(hash)
          ? isHex(hash)
            ? hash
            : stringToHex(hash)
          : isU8a(hash)
            ? u8aToHex(hash)
            : hash.toHex();
}

export function getImageHash (status: PalletDemocracyReferendumStatus | ReferendumInfoTo239): HexString {
  return getImageHashBounded(
    (status as PalletDemocracyReferendumStatus).proposal ||
    (status as ReferendumInfoTo239).proposalHash
  );
}
