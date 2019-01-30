// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Struct from '../../codec/Struct';
import Vector from '../../codec/Vector';
import Text from '../../Text';
import Type from '../../Type';
import u16 from '../../u16';

export class MetadataCallArg extends Struct {
  constructor (value?: any) {
    super({
      name: Text,
      type: Type
    }, value);
  }

  /**
   * @description The argument name
   */
  get name (): Text {
    return this.get('name') as Text;
  }

  /**
   * @description The [[Type]]
   */
  get type (): Type {
    return this.get('type') as Type;
  }
}

/**
 * @name MetadataCall
 * @description
 * The definition of a call
 */
export class MetadataCall extends Struct {
  constructor (value?: any) {
    super({
      // id: u16,
      name: Text,
      arguments: Vector.with(MetadataCallArg),
      documentation: Vector.with(Text)
    }, value);
  }

  /**
   * @description The [[MetadataCallArg]] for arguments
   */
  get arguments (): Vector<MetadataCallArg> {
    return this.get('arguments') as Vector<MetadataCallArg>;
  }

  /**
   * @description The [[Text]] documentation
   */
  get documentation (): Vector<Text> {
    return this.get('documentation') as Vector<Text>;
  }

  // NOTE Just commented out, not available in current, but an open question
  // around it remains
  // /**
  //  * @description The call function id
  //  */
  // get id (): u16 {
  //   return this.get('id') as u16;
  // }

  /**
   * @description The call name
   */
  get name (): Text {
    return this.get('name') as Text;
  }
}
