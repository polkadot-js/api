// Copyright 2017-2018 @polkadot/primitives authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Header } from '../header';
import { UncheckedRaw } from '../extrinsic';
import { HeaderIncomplete } from './types';

import bnToBn from '@polkadot/util/bn/toBn';

import extrinsicsRawRoot from './extrinsic/rootRaw';

// tslint:disable-next-line:variable-name
export default function header ({ digest: { logs = [] } = {}, extrinsicsRoot, number, parentHash = new Uint8Array(32), stateRoot = new Uint8Array(32) }: HeaderIncomplete, extrinsics?: Array<UncheckedRaw>): Header {
  return {
    digest: {
      logs
    },
    extrinsicsRoot: extrinsics
      ? extrinsicsRawRoot(extrinsics)
      : (extrinsicsRoot || extrinsicsRawRoot([])),
    number: bnToBn(number || 0),
    parentHash,
    stateRoot
  };
}
