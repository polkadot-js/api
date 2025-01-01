// Copyright 2017-2025 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@polkadot/util/types';
import type { ExtrinsicSignatureV5 } from '../../interfaces/extrinsics/index.js';
import type { Address, Call } from '../../interfaces/runtime/index.js';
import type { ExtrinsicPayloadValue, IExtrinsicV5Impl, IKeyringPair, Registry, SignatureOptions } from '../../types/index.js';
import type { ExtrinsicOptions, Preamble } from '../types.js';

import { Struct } from '@polkadot/types-codec';
import { isU8a } from '@polkadot/util';

export const EXTRINSIC_VERSION = 5;

export interface ExtrinsicValueV5 {
  method?: Call;
  signature?: ExtrinsicSignatureV5;
}

/**
 * @name GenericExtrinsicV5
 * @description
 * The fourth generation of compact extrinsics
 */
export class GenericExtrinsicV5 extends Struct implements IExtrinsicV5Impl {
  constructor (registry: Registry, value?: Uint8Array | ExtrinsicValueV5 | Call, { isSigned }: Partial<ExtrinsicOptions> = {}) {
    super(registry, {
      signature: 'ExtrinsicSignatureV5',
      // eslint-disable-next-line sort-keys
      method: 'Call'
    }, GenericExtrinsicV5.decodeExtrinsic(registry, value, isSigned));
  }

  /** @internal */
  public static decodeExtrinsic (registry: Registry, value?: Call | Uint8Array | ExtrinsicValueV5, isSigned = false): ExtrinsicValueV5 {
    if (value instanceof GenericExtrinsicV5) {
      return value;
    } else if (value instanceof registry.createClassUnsafe<Call>('Call')) {
      return { method: value };
    } else if (isU8a(value)) {
      // here we decode manually since we need to pull through the version information
      const signature = registry.createTypeUnsafe<ExtrinsicSignatureV5>('ExtrinsicSignatureV5', [value, { isSigned }]);
      // We add 2 here since the length of the TransactionExtension Version needs to be accounted for
      const method = registry.createTypeUnsafe<Call>('Call', [value.subarray(signature.encodedLength)]);

      return {
        method,
        signature
      };
    }

    return value || {};
  }

  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  public override get encodedLength (): number {
    return this.toU8a().length;
  }

  /**
   * @description The [[Call]] this extrinsic wraps
   */
  public get method (): Call {
    return this.getT('method');
  }

  /**
   * @description The [[ExtrinsicSignatureV5]]
   */
  public get signature (): ExtrinsicSignatureV5 {
    return this.getT('signature');
  }

  /**
   * @description The version for the signature
   */
  public get version (): number {
    return EXTRINSIC_VERSION;
  }

  /**
   * @description The [[Preamble]] for the extrinsic
   */
  public get preamble (): Preamble {
    return this.getT('preamble');
  }

  /**
   * @description Add an [[ExtrinsicSignatureV5]] to the extrinsic (already generated)
   *
   * [Disabled for ExtrinsicV5]
   */
  public addSignature (_signer: Address | Uint8Array | string, _signature: Uint8Array | HexString, _payload: ExtrinsicPayloadValue | Uint8Array | HexString): GenericExtrinsicV5 {
    throw new Error('Extrinsic: ExtrinsicV5 does not include signing support');
  }

  /**
   * @description Sign the extrinsic with a specific keypair
   *
   * [Disabled for ExtrinsicV5]
   */
  public sign (_account: IKeyringPair, _options: SignatureOptions): GenericExtrinsicV5 {
    throw new Error('Extrinsic: ExtrinsicV5 does not include signing support');
  }

  /**
   * @describe Adds a fake signature to the extrinsic
   *
   * [Disabled for ExtrinsicV5]
   */
  public signFake (_signer: Address | Uint8Array | string, _options: SignatureOptions): GenericExtrinsicV5 {
    throw new Error('Extrinsic: ExtrinsicV5 does not include signing support');
  }
}
