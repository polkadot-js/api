// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Call } from '../../interfaces/runtime/index.js';
import type { Registry, SignatureOptions as EncodingOptions } from '../../types/index.js';
import type { Preamble } from '../types.js';
import type { GeneralExtrinsicEncoded } from './GeneralExtrinsicEncoded.js';

import { Struct } from '@polkadot/types-codec';
import { isU8a } from '@polkadot/util';

export const EXTRINSIC_VERSION = 5;

export interface GeneralExtrinsicValue {
  method?: Call;
}

export class GeneralExtrinsic extends Struct {
  constructor (registry: Registry, value?: Uint8Array | GeneralExtrinsicValue | Call) {
    super(registry, {
      method: 'Call'
    }, GeneralExtrinsic.decodeExtrinsic(registry, value));
  }

  /** @internal */
  public static decodeExtrinsic (registry: Registry, value?: Call | Uint8Array | GeneralExtrinsicValue): GeneralExtrinsicValue {
    if (value instanceof GeneralExtrinsic) {
      return value;
    } else if (value instanceof registry.createClassUnsafe<Call>('Call')) {
      return { method: value };
    } else if (isU8a(value)) {
      const method = registry.createTypeUnsafe<Call>('Call', [value]);

      return {
        method
      };
    }

    return value || {};
  }

  public override get encodedLength (): number {
    return this.toU8a().length;
  }

  public get method (): Call {
    return this.getT('method');
  }

  public get encoded (): GeneralExtrinsicEncoded {
    return this.getT('encoded');
  }

  public get version (): number {
    return EXTRINSIC_VERSION;
  }

  public get preamble (): Preamble {
    return this.getT('preamble');
  }

  public encode (options: EncodingOptions): GeneralExtrinsic {
    this.encoded.encode(this.method, options);

    return this;
  }
}
