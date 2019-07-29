// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Bytes from '../../primitive/Bytes';
import Text from '../../primitive/Text';
import Type from '../../primitive/Type';
import Struct from '../../codec/Struct';
import Vec from '../../codec/Vec';

export class ModuleConstantMetadata extends Struct {
  public constructor (value?: any) {
    super({
      name: Text,
      type: Type,
      value: Bytes,
      documentation: Vec.with(Text)
    }, value);
  }

  /**
   * @description The argument name
   */
  public get name (): Text {
    return this.get('name') as Text;
  }

  /**
   * @description The [[Type]]
   */
  public get type (): Type {
    return this.get('type') as Type;
  }

  /**
   * @description The value as [[Bytes]]
   */
  public get value (): Bytes {
    return this.get('value') as Bytes;
  }

  /**
   * @description The documentation
   */
  public get documentation (): Vec<Text> {
    return this.get('documentation') as Vec<Text>;
  }
}
