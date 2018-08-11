// Copyright 2017-2018 @polkadot/primitives authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Header } from '../../header';
import { JsonHeader } from '../types';

import bnEncode from '../bn/encode';
import bytesEncode from '../bytes/encode';
import hashEncode from '../hash/encode';

// tslint:disable-next-line:variable-name
export default function headerEncode ({ parentHash, number, stateRoot, extrinsicsRoot, digest }: Header): JsonHeader {
  return {
    digest: {
      logs: digest.logs.map(bytesEncode)
    },
    extrinsicsRoot: hashEncode(extrinsicsRoot, 256),
    number: bnEncode(number, 64),
    parentHash: hashEncode(parentHash, 256),
    stateRoot: hashEncode(stateRoot, 256)
  };
}
