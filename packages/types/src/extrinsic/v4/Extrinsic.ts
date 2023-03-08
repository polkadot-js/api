// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@polkadot/util/types';
import type { ExtrinsicSignatureV4 } from '../../interfaces/extrinsics';
import type { Address, Call } from '../../interfaces/runtime';
import type { ExtrinsicPayloadValue, IExtrinsicImpl, IKeyringPair, Registry, SignatureOptions } from '../../types/index.js';
import type { ExtrinsicOptions } from '../types.js';

import { Struct } from '@polkadot/types-codec';
import { isU8a } from '@polkadot/util';

export const EXTRINSIC_VERSION = 4;

export interface ExtrinsicValueV4 {
  method?: Call;
  signature?: ExtrinsicSignatureV4;
}

/**
 * @name GenericExtrinsicV4
 * @description
 * The third generation of compact extrinsics
 */
export class GenericExtrinsicV4 extends Struct implements IExtrinsicImpl {
  constructor (registry: Registry, value?: Uint8Array | ExtrinsicValueV4 | Call, { isSigned }: Partial<ExtrinsicOptions> = {}) {
    super(registry, {
      signature: 'ExtrinsicSignatureV4',
      // eslint-disable-next-line sort-keys
      method: 'Call'
    }, GenericExtrinsicV4.decodeExtrinsic(registry, value, isSigned));
  }

  /** @internal */
  public static decodeExtrinsic (registry: Registry, value?: Call | Uint8Array | ExtrinsicValueV4, isSigned = false): ExtrinsicValueV4 {
    if (value instanceof GenericExtrinsicV4) {
      return value;
    } else if (value instanceof registry.createClassUnsafe('Call')) {
      return { method: value as Call };
    } else if (isU8a(value)) {
      // here we decode manually since we need to pull through the version information
      const signature = registry.createTypeUnsafe<ExtrinsicSignatureV4>('ExtrinsicSignatureV4', [value, { isSigned }]);
      const method = registry.createTypeUnsafe<Call>('Call', [value.subarray(signature.encodedLength)]);

      return {
        method,
        signature
      };
    }

    return (value as ExtrinsicValueV4) || {};
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
   * @description The [[ExtrinsicSignatureV4]]
   */
  public get signature (): ExtrinsicSignatureV4 {
    return this.getT('signature');
  }

  /**
   * @description The version for the signature
   */
  public get version (): number {
    return EXTRINSIC_VERSION;
  }

  /**
   * @description Add an [[ExtrinsicSignatureV4]] to the extrinsic (already generated)
   */
  public addSignature (signer: Address | Uint8Array | string, signature: Uint8Array | HexString, payload: ExtrinsicPayloadValue | Uint8Array | HexString): GenericExtrinsicV4 {
    this.signature.addSignature(signer, signature, payload);

    return this;
  }

  /**
   * @description Sign the extrinsic with a specific keypair
   */
  public sign (account: IKeyringPair, options: SignatureOptions): GenericExtrinsicV4 {
    this.signature.sign(this.method, account, options);

    return this;
  }

  /**
   * @describe Adds a fake signature to the extrinsic
   */
  public signFake (signer: Address | Uint8Array | string, options: SignatureOptions): GenericExtrinsicV4 {
    this.signature.signFake(this.method, signer, options);

    return this;
  }
}
