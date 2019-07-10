// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Struct from '../../codec/Struct';
import Vector from '../../codec/Vector';
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
      args: Vector.with(FunctionArgumentMetadata),
      documentation: Vector.with(Text)
    }, value);
  }

  /**
   * @description The [[FunctionArgumentMetadata]] for arguments
   */
  public get args (): Vector<FunctionArgumentMetadata> {
    return this.get('args') as Vector<FunctionArgumentMetadata>;
  }

  /**
   * @description The [[Text]] documentation
   */
  public get documentation (): Vector<Text> {
    return this.get('documentation') as Vector<Text>;
  }

  /**
   * @description The [[Text]] documentation
   * @deprecated Use `.documentation` instead.
   */
  public get docs (): Vector<Text> {
    return this.documentation;
  }

  /**
   * @description The call name
   */
  public get name (): Text {
    return this.get('name') as Text;
  }
}
