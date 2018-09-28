// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import BN from 'bn.js';
import * as Classes from './index';

import U8a from './codec/U8a';
import UInt from './codec/UInt';

export type AnyNumber = UInt | BN | Uint8Array | number | string;

export type AnyU8a = U8a | Uint8Array | Array<number> | string;

export type CodecTypes = keyof typeof Classes;
