// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ModuleMetadataV0 } from '../../interfaces/types';

import Option from '../../codec/Option';
import Struct from '../../codec/Struct';
import Text from '../../primitive/Text';

import { StorageMetadataV0 } from './Storage';

export class RuntimeModuleMetadataV0 extends Struct {
  public constructor (value?: any) {
    super({
      prefix: Text,
      module: 'ModuleMetadataV0',
      storage: Option.with(StorageMetadataV0)
    }, value);
  }

  /**
   * @description The [[ModuleMetadataV0]]
   */
  public get module (): ModuleMetadataV0 {
    return this.get('module') as ModuleMetadataV0;
  }

  /**
   * @description The prefix
   */
  public get prefix (): Text {
    return this.get('prefix') as Text;
  }

  /**
   * @description The optional [[StorageMetadataV0]]
   */
  public get storage (): Option<StorageMetadataV0> {
    return this.get('storage') as Option<StorageMetadataV0>;
  }
}
