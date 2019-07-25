// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Struct from '../../codec/Struct';
import Vec from '../../codec/Vec';
import Text from '../../primitive/Text';
import Type from '../../primitive/Type';

export class FunctionArgumentMetadata extends Struct {
  public constructor (value?: any) {
    super({
      name: Text,
      type: Type
    }, value);
  }

  /**
   * @description The argument name
   */
  public get name (): Text {
    return this.get('name') as Text;
  }

  /**
   * @description The [[Type]]
   */
  public get type (): Type {
    return this.get('type') as Type;
  }
}

/**
 * @name FunctionMetadata
 * @description
 * The definition of a call
 */
export class FunctionMetadata extends Struct {
  public constructor (value?: any) {
    super({
      name: Text,
      args: Vec.with(FunctionArgumentMetadata),
      documentation: Vec.with(Text)
    }, value);
  }

  /**
   * @description The [[FunctionArgumentMetadata]] for arguments
   */
  public get args (): Vec<FunctionArgumentMetadata> {
    return this.get('args') as Vec<FunctionArgumentMetadata>;
  }

  /**
   * @description The [[Text]] documentation
   */
  public get documentation (): Vec<Text> {
    return this.get('documentation') as Vec<Text>;
  }

  /**
   * @description The [[Text]] documentation
   * @deprecated Use `.documentation` instead.
   */
  public get docs (): Vec<Text> {
    return this.documentation;
  }

  /**
   * @description The call name
   */
  public get name (): Text {
    return this.get('name') as Text;
  }
}
