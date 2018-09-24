// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import CodecU8aFixed from './base/U8aFixed';

export default class H256 extends CodecU8aFixed {
  constructor (value?: Uint8Array) {
    super(value, 256);
  }
}
