// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { MetadataInterface } from './types';

import EnumType from '../codec/EnumType';
import Struct from '../codec/Struct';
import Null from '../Null';
import MetadataV0 from './v0';
import MetadataV1 from './v1';
import MagicNumber from './MagicNumber';

class MetadataEnum extends EnumType<Null | MetadataV1> {
  constructor (value?: any) {
    super({
      MetadataV0, // once rolled-out, can replace this with Null
      MetadataV1
    }, value);
  }

  /**
   * @description Returns the wrapped values as a V0 object
   */
  get asV0 (): MetadataV0 {
    return this.value as MetadataV0;
  }

  /**
   * @description Returns the wrapped values as a V1 object
   */
  get asV1 (): MetadataV1 {
    return this.value as MetadataV1;
  }
}

/**
 * @name MetadataVersioned
 * @description
 * The versioned runtime metadata as a decoded structure
 */
export default class MetadataVersioned extends Struct implements MetadataInterface {
  constructor (value?: any) {
    super({
      magicNumber: MagicNumber,
      metadata: MetadataEnum
    }, value);
  }

  /**
   * @description
   */
  get magicNumber (): MagicNumber {
    return this.get('magicNumber') as MagicNumber;
  }

  /**
   * @description the metadata wrapped
   */
  private get metadata (): MetadataEnum {
    return this.get('metadata') as MetadataEnum;
  }

  /**
   * @description the metadata version this structure represents
   */
  get version (): number {
    return this.metadata.index;
  }

  /**
   * @description Returns the wrapped metadata as a V0 object
   */
  get asV0 (): MetadataV0 {
    return this.metadata.asV0;
  }

  /**
   * @description Returns the wrapped values as a V1 object
   */
  get asV1 (): MetadataV1 {
    return this.metadata.asV1;
  }

  getUniqTypes (): Array<string> {
    return (this.metadata.value as any as MetadataInterface).getUniqTypes();
  }
}
