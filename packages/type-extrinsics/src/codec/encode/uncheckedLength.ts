// Copyright 2017-2018 @polkadot/extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import BN from 'bn.js';
import { EncodingVersions, SectionItem } from '@polkadot/params/types';
import { UncheckedRaw } from '@polkadot/primitives/extrinsic';
import { KeyringPair } from '@polkadot/util-keyring/types';
import { Extrinsics } from '../../types';

import encodeUnchecked from './unchecked';
import encodeLength from './length';

export default function uncheckedLength (pair: KeyringPair, index: number | BN, extrinsic: SectionItem<Extrinsics>, values: Array<any>, version: EncodingVersions = 'latest'): UncheckedRaw {
  return encodeLength(
    encodeUnchecked(
      pair,
      index,
      extrinsic,
      values,
      version
    )
  );
}
