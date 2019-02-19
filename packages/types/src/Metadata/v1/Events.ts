// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Struct from '../../codec/Struct';
import Vector from '../../codec/Vector';
import Text from '../../primitive/Text';
import Type from '../../primitive/Type';

/**
 * @name MetadataEvent
 * @description
 * The definition of an event
 */
export class MetadataEvent extends Struct {
  constructor (value?: any) {
    super({
      name: Text,
      args: Vector.with(Type),
      docs: Vector.with(Text)
    }, value);
  }

  /**
   * @description The [[Type]] for args
   */
  get args (): Vector<Type> {
    return this.get('args') as Vector<Type>;
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
