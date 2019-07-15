// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Option from '../../codec/Option';
import Struct from '../../codec/Struct';
import Vector from '../../codec/Vector';
import Text from '../../primitive/Text';
import Type from '../../primitive/Type';
import U16 from '../../primitive/U16';

import { StorageMetadata } from './Storage';

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

export class FunctionMetadata extends Struct {
  public constructor (value?: any) {
    super({
      id: U16,
      name: Text,
      args: Vector.with(FunctionArgumentMetadata),
      documentation: Vector.with(Text)
    }, value);
  }

  /**
   * @description The arguments of [[Type]]
   */
  public get args (): Vector<FunctionArgumentMetadata> {
    return this.get('args') as Vector<FunctionArgumentMetadata>;
  }

  /**
   * @description The [[FunctionArgumentMetadata]] for arguments
   * @deprecated Use `.args` instead
   */
  public get arguments (): Vector<FunctionArgumentMetadata> {
    return this.get('arguments') as Vector<FunctionArgumentMetadata>;
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
   * @description The `[sectionIndex, methodIndex]` call id
   */
  public get id (): U16 {
    return this.get('id') as U16;
  }

  /**
   * @description The call name
   */
  public get name (): Text {
    return this.get('name') as Text;
  }
}

export class CallMetadata extends Struct {
  public constructor (value?: any) {
    super({
      name: Text,
      functions: Vector.with(FunctionMetadata)
    }, value);
  }

  /**
   * @description The functions available as [[FunctionMetadata]]
   */
  public get functions (): Vector<FunctionMetadata> {
    return this.get('functions') as Vector<FunctionMetadata>;
  }

  /**
   * @description The section name
   */
  public get name (): Text {
    return this.get('name') as Text;
  }
}
export class ModuleMetadata extends Struct {
  public constructor (value?: any) {
    super({
      name: Text,
      call: CallMetadata
    }, value);
  }

  /**
   * @description The calls as [[FunctionMetadata]]
   */
  public get call (): CallMetadata {
    return this.get('call') as CallMetadata;
  }

  /**
   * @description The name
   */
  public get name (): Text {
    return this.get('name') as Text;
  }
}

export class RuntimeModuleMetadata extends Struct {
  public constructor (value?: any) {
    super({
      prefix: Text,
      module: ModuleMetadata,
      storage: Option.with(StorageMetadata)
    }, value);
  }

  /**
   * @description The [[ModuleMetadata]]
   */
  public get module (): ModuleMetadata {
    return this.get('module') as ModuleMetadata;
  }

  /**
   * @description The prefix
   */
  public get prefix (): Text {
    return this.get('prefix') as Text;
  }

  /**
   * @description The optional [[StorageMetadata]]
   */
  public get storage (): Option<StorageMetadata> {
    return this.get('storage') as Option<StorageMetadata>;
  }
}
