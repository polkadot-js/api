// Copyright 2017-2018 @polkadot/params authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { EncodingVersions, Param$Types, Param$Decoded } from '../types';

export type Decoder = (type: Param$Types, input: Uint8Array, version: EncodingVersions, isStorage: boolean) => Param$Decoded;
