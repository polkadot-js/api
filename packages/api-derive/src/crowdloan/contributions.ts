// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { StorageKey } from '@polkadot/types';
import type { BN } from '@polkadot/util';
import type { DeriveContributions } from '../types';

import { BehaviorSubject, combineLatest, EMPTY, map, of, startWith, switchMap, tap, toArray } from 'rxjs';

import { arrayFlatten, isFunction } from '@polkadot/util';

import { memo } from '../util';
import { extractContributed } from './util';

interface Changes {
  added: string[];
  blockHash: string;
  removed: string[];
}

const PAGE_SIZE_K = 1000; // limit aligned with the 1k on the node (trie lookups are heavy)

function _getUpdates (api: ApiInterfaceRx, paraId: string | number | BN): Observable<Changes> {
  let added: string[] = [];
  let removed: string[] = [];

  return api.query.system.events().pipe(
    switchMap((events): Observable<Changes> => {
      const changes = extractContributed(paraId, events);

      if (changes.added.length || changes.removed.length) {
        added = added.concat(...changes.added);
        removed = removed.concat(...changes.removed);

        return of({ added, addedDelta: changes.added, blockHash: events.createdAtHash?.toHex() || '-', removed, removedDelta: changes.removed });
      }

      return EMPTY;
    }),
    startWith({ added, addedDelta: [], blockHash: '-', removed, removedDelta: [] })
  );
}

function _eventTriggerAll (api: ApiInterfaceRx, paraId: string | number | BN): Observable<string> {
  return api.query.system.events().pipe(
    switchMap((events): Observable<string> => {
      const items = events.filter(({ event: { data: [eventParaId], method, section } }) =>
        section === 'crowdloan' &&
        ['AllRefunded', 'Dissolved', 'PartiallyRefunded'].includes(method) &&
        eventParaId.eq(paraId)
      );

      return items.length
        ? of(events.createdAtHash?.toHex() || '-')
        : EMPTY;
    }),
    startWith('-')
  );
}

function _getKeysPaged (api: ApiInterfaceRx, childKey: string): Observable<StorageKey[]> {
  const startSubject = new BehaviorSubject<string | undefined>(undefined);

  return startSubject.pipe(
    switchMap((startKey) =>
      api.rpc.childstate.getKeysPaged(childKey, '0x', PAGE_SIZE_K, startKey)
    ),
    tap((keys): void => {
      setTimeout((): void => {
        keys.length === PAGE_SIZE_K
          ? startSubject.next(keys[PAGE_SIZE_K - 1].toHex())
          : startSubject.complete();
      }, 0);
    }),
    toArray(), // toArray since we want to startSubject to be completed
    map((keyArr: StorageKey[][]) => arrayFlatten(keyArr))
  );
}

function _getAll (api: ApiInterfaceRx, paraId: string | number | BN, childKey: string): Observable<string[]> {
  return _eventTriggerAll(api, paraId).pipe(
    switchMap(() =>
      isFunction(api.rpc.childstate.getKeysPaged)
        ? _getKeysPaged(api, childKey)
        : api.rpc.childstate.getKeys(childKey, '0x')
    ),
    map((keys) =>
      keys.map((k) => k.toHex())
    )
  );
}

function _contributions (api: ApiInterfaceRx, paraId: string | number | BN, childKey: string): Observable<DeriveContributions> {
  return combineLatest([
    _getAll(api, paraId, childKey),
    _getUpdates(api, paraId)
  ]).pipe(
    map(([keys, { added, blockHash, removed }]): DeriveContributions => {
      const contributorsMap: Record<string, boolean> = {};

      keys.forEach((k): void => {
        contributorsMap[k] = true;
      });

      added.forEach((k): void => {
        contributorsMap[k] = true;
      });

      removed.forEach((k): void => {
        delete contributorsMap[k];
      });

      return {
        blockHash,
        contributorsHex: Object.keys(contributorsMap)
      };
    })
  );
}

export function contributions (instanceId: string, api: ApiInterfaceRx): (paraId: string | number | BN) => Observable<DeriveContributions> {
  return memo(instanceId, (paraId: string | number | BN): Observable<DeriveContributions> =>
    api.derive.crowdloan.childKey(paraId).pipe(
      switchMap((childKey) =>
        childKey
          ? _contributions(api, paraId, childKey)
          : of({ blockHash: '-', contributorsHex: [] })
      )
    )
  );
}

0x2c0204068a0e42d190d3ecaebf11d3834f4b992e0fab469e6bf17056d402cb172b827a22ba910d0100000000000000000000000000020d0cfa2ba6b6b12dad99c248578f2034f8704e5e57fe4e200a357e3fd2a543c73caf8a0e42d190d3ecaebf11d3834f4b992e0fab469e6bf17056d402cb172b827a22ba910d01000000000000000000000000000263010000000100a10f04060202286bee880103ba2a4c7b68b7549df87e47b32639fe60a9735bcd7dca1db9e20ed99b04ce38d700020d078b0000000000021d023014930000000000013064656d6f637261638b000000000000000000000000c05a86090000000002000000010000003501d0070000523dfe044da70c70bca9edbb7df8c248697c36101936673278de808215fa07bf743f110ebfac950d830a9f7412bf23a6cf4d98ff238c7a9846dba9cc2df8630706f339ce10fd4af566a43c4e136486ae14986b004a9bc2f01e09a629c76fcbdeda9da0869df0ae45ff4f41912f2b417a7a5323f3e628e6b786afbee2611f72f63b389f8e2dddca9859a0b34f816274a6e6b55a46bd1e4a8de5607c2748fe7604c22f20c97a4ff4137931e5c78fb2041ad7271299af72618777eeab5980d1bb58488b7fcbb316cd365ecbb9acd60a46392503155e72ce4cb91fceb139e0580c83a2f92a5f8eb62a7a57411623c63e2491db7b7e4a5845ce266ad74133b1d4b371b3b3c05df889115452d3129e76a2f67f538f3c77e2b7cb284a810293678366aa68854bc82eeab0310d0b30893069d37ff7f7db5a4ccb3a3a2a4bd8153af52ebce902

eacc19af51c15609ce68dedeb8005fab78ac15ee350e0810e15617f8e039f9f856512d0013feec8680a0d6648daed5af7f4cb84d5e52e770dde0eda06f104fb0f0cbae26ea8199a62e550fdd51a8065e3236fa3a0fdf99bbde1aa6e066e37d2d12cf5c09d83bb566c94fc6742e61646507d07a5b8c01000000050000000000010000003501d4070000523dfe044da70c70bcaef4dda27722c82c3b0b08066175726120f0e91d0800000000056175726101018eadcb5c87e60646979f69ccd391f992630cec4474558c5fd35fe3fc021607066a299b6453b9edbb7df8c248697c36101936673278de808215fa07bf4c57d627d773fe3d6ab2cea08fd4d825ae6c086349a31ecda23f2aadb7f19706ad4d9ead02bfa8adb282836e6979eaa6ba05fc0ffc3f949c7d8e3cbb18d3ef6e7e556ec35a1fed773d7695f4204b4290e9a7c21cb85f230b39c42df9fc66d302259451fd5373872b3db468d9fe790b46c2f4a10f44007405a7157233f8f3c5f3380afa1d4b5117034508dc1447b87cbec528144d7a4d7862223e67219e89df6ae7be27a81f4d163d36bd27d21e6fb0b41bde438c6f13c775522afe68cd4d238079be5330c3f925b60bd0c749edd6f9b1ab87f068f0cbd4b123a94b83859808f912fdf7e32d3e6017192a55bf3d53279cb28a5e3694e103df97d428f06c791c41144e8e306518d3ca41105b427fde3cffaed588a68593f2d00785a58e013e9be5e90268282eb9cb6881e6678418dfeb3be498f702371d1529327de193fea02569cd4606382200f310f9f311f2d98d42e1049b69226c1737f557832cf97dbdc4bccb2261ff7d04a5b22034c820bcc39d8b6c621724802e3a4ba8bb412d4585c9c560dc99c12e6208066175726120f0e91d080000000005617572610101b87709b431ade2842f6246881d607aee98b0e1e29be9758f3ffe499f69a3c237771d545f523e23f3b59d10e3f0f9c5783436ba2bde880b8f4754de59c7f3a5850300000007000000000001000000350124080000523dfe044da70c70bca9edbb7df8c248697c36101936673278de808215fa07bf2eba64c07fb08bf02d140e702c6dc59d31e5f09e207e219f681165744f65e53826acb6686185b002ba9693648be8b43b2c9ba43bb3bb88ae8698aa4b5fa816a2ded2038809779cc7bfdb85b9b05fbf9fd052dac3b945a5620998b1ccc1cca6826522a5bd8c0ffaa2ec2b8ffba5440732a431088742bdddcd1153cfe25c2229f4e2eee99b459e7042020ee57d4c3ea68921cda908914339c1fa454b8b057a056dda39a451d0e83495f0b98c8dd99a1ff1502c0f45bc702950e97d68384772ac8718e0bb25d1b781d358c949cd4678ebb3d37edf3080bae7c2a36a06e958d3f44d30c1315695496bc41efa1ddf97eb97c6ed8ee8f6f7bbbfd75649cd08194113515e9b3ff146a6d670792e42a8e5e65c76419292fb6fe867a8efb42ba710a37edfe9023508c54ca384bdf4d0d25f1d082eb966090f02ccf0fb6808136872adc84382c536fb0a00abec58bbaa522be40d3d161b0d05520dd74df7d65e88c764e0525e1002f668efe0805f7402a01c39f82eb48a73545e7f925f14c9a4151842e086ea2888f2d60c08066175726120f0e91d08000000000561757261010126916cb2d59ec9ee97ed2bc00be80916059fd1a5795bd63ca8eb60495187953962c236bb51b0a28f01d2bb605ff0f134eeaefabf3de611e4b6fd6f80b7ce1b80060000000a000000000001000000350128080000523dfe044da70c70bca9edbb7df8c248697c36101936673278de808215fa07bf6243ec825dc44cc21867fc383825ec09e13b8d1dbc91e4b71f3
