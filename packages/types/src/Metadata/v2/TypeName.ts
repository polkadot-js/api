// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Struct from '../../codec/Struct';
import Type from '../../primitive/Type';
import { MetadataName } from './MetadataRegistry';

export default class TypeName extends Struct {
  constructor (value?: any) {
    super({
      typeName: MetadataName,
      displayName: Type
    }, value);
  }

  get typeName (): MetadataName {
    return this.get('typeName') as MetadataName;
  }

  get displayName (): Type {
    return this.get('displayName') as Type;
  }

  toString () {
    return `${this.displayName}|${this.typeName.toString()}`;
  }
}
