// Copyright 2017-2018 @polkadot/primitives authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { BlockNumber, Hash, HeaderHash } from '../base';
import { Digest$Log } from '../digest';
import { UncheckedRaw } from '../extrinsic';

export type HeaderIncomplete = {
  digest?: {
    logs?: Array<Digest$Log>
  },
  extrinsicsRoot?: Hash,
  parentHash?: HeaderHash,
  number?: BlockNumber | number,
  stateRoot?: Hash
};

export type BlockIncomplete = {
  header?: HeaderIncomplete,
  extrinsics?: Array<UncheckedRaw>
};
