// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { isString } from '@polkadot/util';
import Struct from '../codec/Struct';
import Text from '../primitive/Text';
import Type from '../primitive/Type';

export default class TypeName extends Struct {
  constructor (value?: any) {
    if (isString(value)) {
      super({
        typeName: Text,
        displayName: Type
      }, TypeName.decodeTypeName(value));
    } else {
      super({
        typeName: Text,
        displayName: Type
      }, value);
    }
  }

  static decodeTypeName (type: string | String) {
    const [displayName, typeName] = type.split('|');
    return { displayName, typeName };
  }

  get typeName (): Text {
    return this.get('typeName') as Text;
  }

  get displayName (): Type {
    return this.get('displayName') as Type;
  }

  toString () {
    return this.typeName.toString();
  }
}
