// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Struct from '../../codec/Struct';
import Vector from '../../codec/Vector';
import Bytes from '../../primitive/Bytes';
import Text from '../../primitive/Text';
import { StorageFunctionMetadataValue, StorageFunctionType } from './Storage';
import { StorageFunctionModifier } from '../v0/Modules';

export class StorageFunctionMetadata extends Struct {
  constructor(value?: StorageFunctionMetadataValue | Uint8Array) {
    super({
      name: Text,
      modifier: StorageFunctionModifier,
      type: StorageFunctionType,
      fallback: Bytes,
      documentation: Vector.with(Text)
    }, value);
  }

  /**
   * @description The default value of the storage function
   */
  get fallback(): Bytes {
    return this.get('fallback') as Bytes;
  }

  /**
   * @description The [[Text]] documentation
   */
  get documentation(): Vector<Text> {
    return this.get('documentation') as Vector<Text>;
  }

  /**
   * @description The key name
   */
  get name(): Text {
    return this.get('name') as Text;
  }

  /**
   * @description The modifier
   */
  get modifier(): StorageFunctionModifier {
    return this.get('modifier') as StorageFunctionModifier;
  }

  /**
   * @description The [[StorageFunctionType]]
   */
  get type(): StorageFunctionType {
    return this.get('type') as StorageFunctionType;
  }
}
