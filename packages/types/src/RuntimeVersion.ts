// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AnyNumber, AnyU8a } from './types';

import Struct from './codec/Struct';
import Tuple from './codec/Tuple';
import U8aFixed from './codec/U8aFixed';
import Vector from './codec/Vector';
import Text from './Text';
import U32 from './U32';

/**
 * @name ApiId
 * @description
 * An identifier for the runtime API
 */
export class ApiId extends U8aFixed {
  constructor (value?: AnyU8a) {
    super(value, 64);
  }
}

type RuntimeVersionApiValue = {
  id?: AnyU8a,
  version?: AnyNumber
};

/**
 * @name RuntimeVersionApi
 * @description
 * A [[Tuple]] that conatins the [[ApiId]] and [[U32]] version
 */
export class RuntimeVersionApi extends Tuple {
  constructor (value?: RuntimeVersionApiValue | Uint8Array) {
    super({
      id: ApiId,
      version: U32
    }, value);
  }

  get id (): ApiId {
    return this.getAtIndex(0) as ApiId;
  }

  get version (): U32 {
    return this.getAtIndex(1) as U32;
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

/**
 * @name RuntimeVersion
 * @description
 * A defintion of the runtime and the associated versions thereof
 */
export default class RuntimeVersion extends Struct {
  constructor (value?: RuntimeVersionValue | Uint8Array) {
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
    return this.get('apis') as Vector<RuntimeVersionApi>;
  }

  get authoringVersion (): U32 {
    return this.get('authoringVersion') as U32;
  }

  get implName (): Text {
    return this.get('implName') as Text;
  }

  get implVersion (): U32 {
    return this.get('implVersion') as U32;
  }

  get specName (): Text {
    return this.get('specName') as Text;
  }

  get specVersion (): U32 {
    return this.get('specVersion') as U32;
  }
}
