// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { FunctionArgumentMetadataV1 } from '../../interfaces/metadata/types';

import Struct from '../../codec/Struct';
import Vec from '../../codec/Vec';
import Text from '../../primitive/Text';

/**
 * @name FunctionMetadata
 * @description
 * The definition of a call
 */
export class FunctionMetadata extends Struct {
  public constructor (value?: any) {
    super({
      name: Text,
      args: Vec.with('FunctionArgumentMetadataV1'),
      documentation: Vec.with(Text)
    }, value);
  }

  /**
   * @description The [[FunctionArgumentMetadata]] for arguments
   */
  public get args (): Vec<FunctionArgumentMetadataV1> {
    return this.get('args') as Vec<FunctionArgumentMetadataV1>;
  }

  /**
   * @description The [[Text]] documentation
   */
  public get documentation (): Vec<Text> {
    return this.get('documentation') as Vec<Text>;
  }

  /**
   * @description The call name
   */
  public get name (): Text {
    return this.get('name') as Text;
  }
}
