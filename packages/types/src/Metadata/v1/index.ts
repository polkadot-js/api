// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Struct from '../../codec/Struct';
import MagicNumber from './MagicNumber';

export default class MetadataV1 extends Struct {
  constructor (value?: any) {
    super({
      magicNumber: MagicNumber
    }, value);
  }
}
