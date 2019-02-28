// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Struct from '../../codec/Struct';
import Vector from '../../codec/Vector';
import Text from '../../primitive/Text';
import TypeName from './TypeName';

/**
 * @name MetadataEvent
 * @description
 * The definition of an event
 */
export class MetadataEvent extends Struct {
  constructor (value?: any) {
    super({
      name: Text,
      args: Vector.with(TypeName),
      docs: Vector.with(Text)
    }, value);
  }

  /**
   * @description The [[TypeName]] for args
   */
  get args (): Vector<TypeName> {
    return this.get('args') as Vector<TypeName>;
  }

  /**
   * @description The [[Text]] documentation
   */
  get docs (): Vector<Text> {
    return this.get('docs') as Vector<Text>;
  }

  /**
   * @description The call name
   */
  get name (): Text {
    return this.get('name') as Text;
  }
}
