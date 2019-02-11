// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Struct from '../../codec/Struct';
import Vector from '../../codec/Vector';
import Text from '../../primitive/Text';
import { MetadataName } from './MetadataRegistry';

export class MetadataCallArg extends Struct {
  constructor (value?: any) {
    super({
      name: Text,
      type: MetadataName
    }, value);
  }

  /**
   * @description The argument name
   */
  get name (): Text {
    return this.get('name') as Text;
  }

  /**
   * @description The [[MetadataName]]
   */
  get type (): MetadataName {
    return this.get('type') as MetadataName;
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
      name: Text,
      args: Vector.with(MetadataCallArg),
      docs: Vector.with(Text)
    }, value);
  }

  /**
   * @description The [[MetadataCallArg]] for arguments
   */
  get args (): Vector<MetadataCallArg> {
    return this.get('args') as Vector<MetadataCallArg>;
  }

  /**
   * @description The [[Text]] documentation
   */
  get docs (): Vector<Text> {
    return this.get('docs') as Vector<Text>;
  }

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
