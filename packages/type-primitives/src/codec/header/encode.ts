// Copyright 2017-2018 @polkadot/primitives authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { UncheckedRaw } from '../../extrinsic';
import { Header } from '../../header';

import rootRaw from '../../create/extrinsic/rootRaw';
import bnToU8a from '@polkadot/util/bn/toU8a';
import u8aConcat from '@polkadot/util/u8a/concat';
import u8aToU8a from '@polkadot/util/u8a/toU8a';

import encodeArray from '../encoder/array';
import encodeU8a from '../encoder/u8a';

// tslint:disable-next-line:variable-name
export default function encodeHeader ({ digest: { logs }, extrinsicsRoot, parentHash, number, stateRoot }: Header, extrinsics?: Array<UncheckedRaw>): Uint8Array {
  return u8aConcat(
    u8aToU8a(parentHash),
    bnToU8a(number, 64, true),
    u8aToU8a(stateRoot),
    extrinsics
      ? rootRaw(extrinsics)
      : u8aToU8a(extrinsicsRoot),
    encodeArray(
      logs.map((log) =>
        encodeU8a(
          u8aToU8a(log)
        )
      )
    )
  );
}
