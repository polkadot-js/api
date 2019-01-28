// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Struct from '../../codec/Struct';
import Text from '../../Text';
import U16 from '../../U16';

export class OuterDispatchCall extends Struct {
  constructor (value?: any) {
    super({
      name: Text,
      index: U16
    }, value);
  }

  /**
   * @description The [[U16]] index for the call
   */
  get index (): U16 {
    return this.get('index') as U16;
  }

  /**
   * @description The name for the call
   */
  get name (): Text {
    return this.get('name') as Text;
  }
}
