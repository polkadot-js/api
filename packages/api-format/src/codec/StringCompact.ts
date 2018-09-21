// Copyright 2017-2018 @polkadot/api-format authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import LengthCompact from './base/LengthCompact';
import String from './String';

export default class StringCompact extends String {
  constructor (value: string = '') {
    super(value, LengthCompact);
  }
}
