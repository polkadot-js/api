// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@polkadot/util/types';
import type { ExtrinsicSignatureV5, Preamble } from '../../interfaces/extrinsics/index.js';
import type { Address, Call } from '../../interfaces/runtime/index.js';
import type { ExtrinsicPayloadValue, IExtrinsicV5Impl, IKeyringPair, Registry, SignatureOptions } from '../../types/index.js';
import type { ExtrinsicOptions, PreambleKind } from '../types.js';

import { Struct } from '@polkadot/types-codec';
import { isU8a } from '@polkadot/util';
import { DEFAULT_PREAMBLE_KIND } from '../constants.js';

export const EXTRINSIC_VERSION = 5;

export interface ExtrinsicValueV5 {
  method?: Call;
  preamble?: Preamble;
}

/**
 * @name GenericExtrinsicV5
 * @description
 * The third generation of compact extrinsics
 */
export class GenericExtrinsicV5 extends Struct implements IExtrinsicV5Impl {
  constructor(registry: Registry, value?: Uint8Array | ExtrinsicValueV5 | Call, { preambleKind }: Partial<ExtrinsicOptions> = {}) {

    super(registry, {
      preamble: 'Preamble',
      // eslint-disable-next-line sort-keys
      method: 'Call'
    }, GenericExtrinsicV5.decodeExtrinsic(registry, value, preambleKind));
  }

  /** @internal */
  public static decodeExtrinsic(registry: Registry, value?: Call | Uint8Array | ExtrinsicValueV5, preambleKind = DEFAULT_PREAMBLE_KIND): ExtrinsicValueV5 {
    if (value instanceof GenericExtrinsicV5) {
      return value;
    } else if (value instanceof registry.createClassUnsafe<Call>('Call')) {
      return { method: value };
    } else if (isU8a(value)) {
      let preamble: Preamble;
      // here we decode manually since we need to pull through the version information
      if (preambleKind === 'bare') {
        preamble = registry.createTypeUnsafe<Preamble>('Preamble', [{
          type: 'Bare',
          asBare: EXTRINSIC_VERSION
        }])
      } else if (preambleKind === 'signed') {
        preamble = registry.createTypeUnsafe<Preamble>('Preamble', [{
          type: 'Signed',
          asSigned: value
        }])
      } else {
        preamble = registry.createTypeUnsafe<Preamble>('Preamble', [{
          type: 'General',
          asSigned: value
        }])
      }
      const method = registry.createTypeUnsafe<Call>('Call', [value.subarray(preamble.encodedLength)]);

      return {
        method,
        preamble
      };
    }

    return value || {};
  }

  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  public override get encodedLength(): number {
    return this.toU8a().length;
  }

  /**
   * @description The [[Call]] this extrinsic wraps
   */
  public get method(): Call {
    return this.getT('method');
  }

  /**
   * @description The [[ExtrinsicSignatureV5]]
   */
  public get signature(): ExtrinsicSignatureV5 {
    return this.getT('signature');
  }

  /**
   * @description The version for the signature
   */
  public get version(): number {
    return EXTRINSIC_VERSION;
  }

  public get preamble(): Preamble {
    return this.getT('preamble');
  }

  /**
   * @description Add an [[ExtrinsicSignatureV5]] to the extrinsic (already generated)
   */
  public addSignature(signer: Address | Uint8Array | string, signature: Uint8Array | HexString, payload: ExtrinsicPayloadValue | Uint8Array | HexString): GenericExtrinsicV5 {
    this.signature.addSignature(signer, signature, payload);

    return this;
  }

  /**
   * @description Sign the extrinsic with a specific keypair
   */
  public sign(account: IKeyringPair, options: SignatureOptions): GenericExtrinsicV5 {
    this.signature.sign(this.method, account, options);

    return this;
  }

  /**
   * @describe Adds a fake signature to the extrinsic
   */
  public signFake(signer: Address | Uint8Array | string, options: SignatureOptions): GenericExtrinsicV5 {
    this.signature.signFake(this.method, signer, options);

    return this;
  }
}
