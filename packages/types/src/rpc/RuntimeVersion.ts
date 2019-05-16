// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AnyNumber, AnyU8a, RuntimeVersionInterface } from '../types';

import Struct from '../codec/Struct';
import Tuple from '../codec/Tuple';
import U8aFixed from '../codec/U8aFixed';
import Vector from '../codec/Vector';
import Text from '../primitive/Text';
import U32 from '../primitive/U32';

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
      ApiId,
      U32
    }, value);
  }

  /**
   * @description The [[ApiId]]
   */
  get id (): ApiId {
    return this[0] as ApiId;
  }

  /**
   * @description The specific version as [[U32]]
   */
  get version (): U32 {
    return this[1] as U32;
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
export default class RuntimeVersion extends Struct implements RuntimeVersionInterface {
  constructor (value?: RuntimeVersionValue | Uint8Array) {
    super({
      specName: Text,
      implName: Text,
      authoringVersion: U32,
      specVersion: U32,
      implVersion: U32,
      apis: Vector.with(RuntimeVersionApi)
    }, value);
  }

  /**
   * @description The available APIs as [[RuntimeVersionApi]]
   */
  get apis (): Vector<RuntimeVersionApi> {
    return this.get('apis') as Vector<RuntimeVersionApi>;
  }

  /**
   * @description The authoring version as [[U32]]
   */
  get authoringVersion (): U32 {
    return this.get('authoringVersion') as U32;
  }

  /**
   * @description The implementation name
   */
  get implName (): Text {
    return this.get('implName') as Text;
  }

  /**
   * @description The implementation version
   */
  get implVersion (): U32 {
    return this.get('implVersion') as U32;
  }

  /**
   * @description The specification name
   */
  get specName (): Text {
    return this.get('specName') as Text;
  }

  /**
   * @description The specification version
   */
  get specVersion (): U32 {
    return this.get('specVersion') as U32;
  }
}
