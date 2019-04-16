// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Struct from '../../codec/Struct';
import Vector from '../../codec/Vector';
import Bytes from '../../primitive/Bytes';
import Text from '../../primitive/Text';
import { MetadataStorageModifier } from '../v1/Storage';
import { MetadataStorageType } from '../v2/Storage';

/**
 * @name MetadataModule
 * @description
 * The definition of a storage function
 */
export class MetadataStorage extends Struct {
  constructor (value?: any) {
    super({
      name: Text,
      modifier: MetadataStorageModifier,
      type: MetadataStorageType,
      fallback: Bytes,
      docs: Vector.with(Text)
    }, value);
  }

  /**
   * @description The [[Text]] documentation
   */
  get docs (): Vector<Text> {
    return this.get('docs') as Vector<Text>;
  }

  /**
   * @description The [[Bytes]] fallback default
   */
  get fallback (): Bytes {
    return this.get('fallback') as Bytes;
  }

  /**
   * @description The [[MetadataArgument]] for arguments
   */
  get modifier (): MetadataStorageModifier {
    return this.get('modifier') as MetadataStorageModifier;
  }

  /**
   * @description The call name
   */
  get name (): Text {
    return this.get('name') as Text;
  }

  /**
   * @description The [[MetadataStorageType]]
   */
  get type (): MetadataStorageType {
    return this.get('type') as MetadataStorageType;
  }
}
