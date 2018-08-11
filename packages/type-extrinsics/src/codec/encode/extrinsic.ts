// Copyright 2017-2018 @polkadot/extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { EncodingVersions, SectionItem } from '@polkadot/params/types';
import { Extrinsics } from '../../types';
import { ExtrinsicWithIndex } from '../types';

import encodeParams from '@polkadot/params/encode';
import u8aConcat from '@polkadot/util/u8a/concat';

export default function encodeExtrinsic (extrinsic: SectionItem<Extrinsics>, values: Array<any>, version: EncodingVersions): ExtrinsicWithIndex {
  return u8aConcat(
    extrinsic.index,
    encodeParams(extrinsic.params, values, version)
  );
}
