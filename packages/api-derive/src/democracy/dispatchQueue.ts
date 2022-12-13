// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { Bytes, Option, u8, u32, Vec } from '@polkadot/types';
import type { BlockNumber, Call, Hash, ReferendumIndex, Scheduled } from '@polkadot/types/interfaces';
import type { FrameSupportPreimagesBounded, PalletSchedulerScheduled } from '@polkadot/types/lookup';
import type { Codec, ITuple } from '@polkadot/types/types';
import type { HexString } from '@polkadot/util/types';
import type { DeriveApi, DeriveDispatch, DeriveProposalImage } from '../types';

import { catchError, combineLatest, map, of, switchMap } from 'rxjs';

import { Enum } from '@polkadot/types';
import { isFunction, objectSpread, stringToHex } from '@polkadot/util';

import { memo } from '../util';
import { getImageHashBounded } from './util';

const DEMOCRACY_ID = stringToHex('democrac');

// included here for backwards compat
interface PalletSchedulerScheduledV3 extends Codec {
  maybeId: Option<Bytes>;
  priority: u8;
  call: FrameSupportScheduleMaybeHashed;
  maybePeriodic: Option<ITuple<[u32, u32]>>;
  origin: Codec;
}

// included here for backwards compat
interface FrameSupportScheduleMaybeHashed extends Codec {
  isHash: boolean;
  isValue: boolean;
  asValue: Call;
  asHash: Hash;
}

interface SchedulerInfo {
  at: BlockNumber;
  imageHash: HexString;
  index: ReferendumIndex;
}

function isMaybeHashedOrBounded (call: FrameSupportPreimagesBounded | FrameSupportScheduleMaybeHashed | Call): call is FrameSupportScheduleMaybeHashed | FrameSupportPreimagesBounded {
  // check for enum
  return call instanceof Enum;
}

function isBounded (call: FrameSupportPreimagesBounded | FrameSupportScheduleMaybeHashed): call is FrameSupportPreimagesBounded {
  // check for type
  return (call as FrameSupportPreimagesBounded).isInline || (call as FrameSupportPreimagesBounded).isLegacy || (call as FrameSupportPreimagesBounded).isLookup;
}

function queryQueue (api: DeriveApi): Observable<DeriveDispatch[]> {
  return api.query.democracy.dispatchQueue<Vec<ITuple<[BlockNumber, Hash, ReferendumIndex]>>>().pipe(
    switchMap((dispatches) =>
      combineLatest([
        of(dispatches),
        api.derive.democracy.preimages(
          dispatches.map(([, hash]) => hash))
      ])
    ),
    map(([dispatches, images]) =>
      dispatches.map(([at, imageHash, index], dispatchIndex): DeriveDispatch => ({
        at,
        image: images[dispatchIndex],
        imageHash: getImageHashBounded(imageHash),
        index
      }))
    )
  );
}

function schedulerEntries (api: DeriveApi): Observable<[BlockNumber[], Option<PalletSchedulerScheduled | PalletSchedulerScheduledV3 | Scheduled>[][]]> {
  // We don't get entries, but rather we get the keys (triggered via finished referendums) and
  // the subscribe to those keys - this means we pickup when the schedulers actually executes
  // at a block, the entry for that block will become empty
  return api.derive.democracy.referendumsFinished().pipe(
    switchMap(() =>
      api.query.scheduler.agenda.keys()
    ),
    switchMap((keys) => {
      const blockNumbers = keys.map(({ args: [blockNumber] }) => blockNumber);

      return blockNumbers.length
        ? combineLatest([
          of(blockNumbers),
          // this should simply be api.query.scheduler.agenda.multi,
          // however we have had cases on Darwinia where the indices have moved around after an
          // upgrade, which results in invalid on-chain data
          api.query.scheduler.agenda.multi(blockNumbers).pipe(
            catchError(() => of(blockNumbers.map(() => [])))
          )
        ])
        : of<[BlockNumber[], Option<PalletSchedulerScheduledV3 | Scheduled>[][]]>([[], []]);
    })
  );
}

function queryScheduler (api: DeriveApi): Observable<DeriveDispatch[]> {
  return schedulerEntries(api).pipe(
    switchMap(([blockNumbers, agendas]): Observable<[SchedulerInfo[], (DeriveProposalImage | undefined)[]]> => {
      const result: SchedulerInfo[] = [];

      blockNumbers.forEach((at, index): void => {
        (agendas[index] || []).filter((o) => o.isSome).forEach((o): void => {
          const scheduled = o.unwrap();

          if (scheduled.maybeId.isSome) {
            const id = scheduled.maybeId.unwrap().toHex();

            if (id.startsWith(DEMOCRACY_ID)) {
              const imageHash = isMaybeHashedOrBounded(scheduled.call)
                ? isBounded(scheduled.call)
                  ? getImageHashBounded(scheduled.call)
                  : scheduled.call.isHash
                    ? scheduled.call.asHash.toHex()
                    : scheduled.call.asValue.args[0].toHex()
                : scheduled.call.args[0].toHex();

              result.push({ at, imageHash, index: api.$registry.createType('(u64, ReferendumIndex)', id)[1] });
            }
          }
        });
      });

      return combineLatest([
        of(result),
        result.length
          ? api.derive.democracy.preimages(result.map(({ imageHash }) => imageHash))
          : of([])
      ]);
    }),
    map(([infos, images]): DeriveDispatch[] =>
      infos.map((info, index) => objectSpread({ image: images[index] }, info))
    )
  );
}

export function dispatchQueue (instanceId: string, api: DeriveApi): () => Observable<DeriveDispatch[]> {
  return memo(instanceId, (): Observable<DeriveDispatch[]> =>
    isFunction(api.query.scheduler?.agenda)
      ? queryScheduler(api)
      : api.query.democracy.dispatchQueue
        ? queryQueue(api)
        : of([])
  );
}
