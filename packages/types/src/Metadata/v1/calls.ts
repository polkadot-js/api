// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Struct from '../../codec/Struct';
import Vector from '../../codec/Vector';
import Text from '../../Text';
import Type from '../../Type';
import U16 from '../../U16';

export class CallArgumentMetadata extends Struct {
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

export class CallFunctionMetadata extends Struct {
  constructor (value?: any) {
    super({
      id: U16,
      name: Text,
      arguments: Vector.with(CallArgumentMetadata),
      documentation: Vector.with(Text)
    }, value);
  }

  /**
   * @description The [[CallArgumentMetadata]] for arguments
   */
  get arguments (): Vector<CallArgumentMetadata> {
    return this.get('arguments') as Vector<CallArgumentMetadata>;
  }

  /**
   * @description The [[Text]] documentation
   */
  get documentation (): Vector<Text> {
    return this.get('documentation') as Vector<Text>;
  }

  /**
   * @description The `[sectionIndex, methodIndex]` call id
   */
  get id (): U16 {
    return this.get('id') as U16;
  }

  /**
   * @description The call name
   */
  get name (): Text {
    return this.get('name') as Text;
  }
}

export class CallsMetadata extends Struct {
  constructor (value?: any) {
    super({
      index: U16,
      functions: Vector.with(CallFunctionMetadata)
    }, value);
  }

  /**
   * @description index for the module calls
   */
  get index (): U16 {
    return this.get('index') as U16;
  }

  /**
   * @description functions available in this module
   */
  get functions (): Vector<CallFunctionMetadata> {
    return this.get('functions') as Vector<CallFunctionMetadata>;
  }
}
