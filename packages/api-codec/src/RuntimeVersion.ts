// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { AnyNumber, AnyU8a } from './types';

import Struct from './codec/Struct';
import Tuple from './codec/Tuple';
import Vector from './codec/Vector';
import Text from './Text';
import U32 from './U32';
import U8aFixed from '@polkadot/api-codec/codec/U8aFixed';

class ApiId extends U8aFixed {
  constructor (value?: AnyU8a) {
    super(value, 64);
  }
}

type RuntimeVersionApiValue = {
  id?: AnyU8a,
  version?: AnyNumber
};

class RuntimeVersionApi extends Tuple {
  constructor (value?: RuntimeVersionApiValue) {
    super({
      id: ApiId,
      version: U32
    }, value);
  }

  get id (): ApiId {
    return this.raw.id as ApiId;
  }

  get version (): U32 {
    return this.raw.version as U32;
  }
}

type RuntimeVersionValue = {
  specName?: string,
  implName?: string,
  authoringVersion?: AnyNumber,
  specVersion?: AnyNumber,
  implVersion?: AnyNumber,
  apis?: Array<RuntimeVersionApiValue>
};

export default class RuntimeVersion extends Struct {
  constructor (value?: RuntimeVersionValue) {
    super({
      specName: Text,
      implName: Text,
      authoringVersion: U32,
      specVersion: U32,
      implVersion: U32,
      apis: Vector.with(RuntimeVersionApi)
    }, value, new Map([
      ['authoringVersion', 'authoring_version'],
      ['implName', 'impl_name'],
      ['implVersion', 'impl_version'],
      ['specName', 'spec_name'],
      ['specVersion', 'spec_version']
    ]));
  }

  get apis (): Vector<RuntimeVersionApi> {
    return this.raw.apis as Vector<RuntimeVersionApi>;
  }

  get authoringVersion (): U32 {
    return this.raw.authoringVersion as U32;
  }

  get implName (): Text {
    return this.raw.implName as Text;
  }

  get implVersion (): U32 {
    return this.raw.implVersion as U32;
  }

  get specName (): Text {
    return this.raw.specName as Text;
  }

  get specVersion (): U32 {
    return this.raw.specVersion as U32;
  }
}
