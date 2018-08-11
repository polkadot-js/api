// Copyright 2017-2018 @polkadot/primitives authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Header } from '../../header';

import BN from 'bn.js';

import createHeader from '../../create/header';
import decodeRaw from './decodeRaw';
import { OFF_PARENT_HASH, OFF_STATE_ROOT, OFF_TX_ROOT } from './offsets';

export default function decodeHeader (u8a: Uint8Array | null): Header {
  // tslint:disable-next-line:variable-name
  const { number, logs } = u8a
    ? decodeRaw(u8a)
    : {
      number: new BN(0),
      logs: []
    };

  return createHeader({
    digest: {
      logs
    },
    extrinsicsRoot: u8a
      ? u8a.subarray(OFF_TX_ROOT, OFF_TX_ROOT + 32)
      : new Uint8Array(),
    number,
    parentHash: u8a
      ? u8a.subarray(OFF_PARENT_HASH, OFF_PARENT_HASH + 32)
      : new Uint8Array(),
    stateRoot: u8a
      ? u8a.subarray(OFF_STATE_ROOT, OFF_STATE_ROOT + 32)
      : new Uint8Array()
  });
}
