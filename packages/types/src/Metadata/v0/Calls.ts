// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Struct from '../../codec/Struct';
import Vector from '../../codec/Vector';
import Text from '../../primitive/Text';
import U16 from '../../primitive/U16';

export class OuterDispatchCall extends Struct {
  constructor (value?: any) {
    super({
      name: Text,
      prefix: Text,
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

  /**
   * @description The call prefix (or section)
   */
  get prefix (): Text {
    return this.get('prefix') as Text;
  }
}

export class OuterDispatchMetadata extends Struct {
  constructor (value?: any) {
    super({
      name: Text,
      calls: Vector.with(OuterDispatchCall)
    }, value);
  }

  /**
   * @description The [[OuterDispathCall]] wrapped
   */
  get calls (): Vector<OuterDispatchCall> {
    return this.get('calls') as Vector<OuterDispatchCall>;
  }

  /**
   * @description The name for the dispatch
   */
  get name (): Text {
    return this.get('name') as Text;
  }
}
