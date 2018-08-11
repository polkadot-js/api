// Copyright 2017-2018 @polkadot/primitives authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Header } from '../../header';
import { JsonHeader } from '../types';

import headerBuilder from '../../create/header';

import hashDecode from '../hash/decode';
import bnDecode from '../bn/decode';
import bytesDecode from '../bytes/decode';

// tslint:disable-next-line:variable-name
export default function headerDecode ({ digest, extrinsicsRoot, number, parentHash, stateRoot }: JsonHeader): Header {
  return headerBuilder({
    digest: {
      logs: digest.logs.map(bytesDecode)
    },
    extrinsicsRoot: hashDecode(extrinsicsRoot, 256),
    number: bnDecode(number, 64),
    parentHash: hashDecode(parentHash, 256),
    stateRoot: hashDecode(stateRoot, 256)
  });
}
