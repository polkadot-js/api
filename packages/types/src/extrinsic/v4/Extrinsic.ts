// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ExtrinsicSignatureV4 } from '../../interfaces/extrinsics';
import { Address, Call } from '../../interfaces/runtime';
import { ExtrinsicPayloadValue, IExtrinsicImpl, IKeyringPair, Registry, SignatureOptions } from '../../types';
import { ExtrinsicOptions } from '../types';

import { isU8a } from '@polkadot/util';

import Struct from '../../codec/Struct';

export const TRANSACTION_VERSION = 4;

export interface ExtrinsicValueV4 {
  method?: Call;
  signature?: ExtrinsicSignatureV4;
}

/**
 * @name GenericExtrinsicV4
 * @description
 * The third generation of compact extrinsics
 */
export default class ExtrinsicV4 extends Struct implements IExtrinsicImpl {
  constructor (registry: Registry, value?: Uint8Array | ExtrinsicValueV4 | Call, { isSigned }: Partial<ExtrinsicOptions> = {}) {
    super(registry, {
      signature: 'ExtrinsicSignatureV4',
      // eslint-disable-next-line sort-keys
      method: 'Call'
    }, ExtrinsicV4.decodeExtrinsic(registry, value, isSigned));
  }

  /** @internal */
  public static decodeExtrinsic (registry: Registry, value?: Call | Uint8Array | ExtrinsicValueV4, isSigned = false): ExtrinsicValueV4 {
    if (value instanceof ExtrinsicV4) {
      return value;
    } else if (value instanceof registry.createClass('Call')) {
      return { method: value };
    } else if (isU8a(value)) {
      // here we decode manually since we need to pull through the version information
      const signature = registry.createType('ExtrinsicSignatureV4', value, { isSigned });
      const method = registry.createType('Call', value.subarray(signature.encodedLength));

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
  public get encodedLength (): number {
    return this.toU8a().length;
  }

  /**
   * @description The [[Call]] this extrinsic wraps
   */
  public get method (): Call {
    return this.get('method') as Call;
  }

  /**
   * @description The [[ExtrinsicSignatureV4]]
   */
  public get signature (): ExtrinsicSignatureV4 {
    return this.get('signature') as ExtrinsicSignatureV4;
  }

  /**
   * @description The version for the signature
   */
  public get version (): number {
    return TRANSACTION_VERSION;
  }

  /**
   * @description Add an [[ExtrinsicSignatureV4]] to the extrinsic (already generated)
   */
  public addSignature (signer: Address | Uint8Array | string, signature: Uint8Array | string, payload: ExtrinsicPayloadValue | Uint8Array | string): ExtrinsicV4 {
    this.signature.addSignature(signer, signature, payload);

    return this;
  }

  /**
   * @description Sign the extrinsic with a specific keypair
   */
  public sign (account: IKeyringPair, options: SignatureOptions): ExtrinsicV4 {
    this.signature.sign(this.method, account, options);

    return this;
  }

  /**
   * @describe Adds a fake signature to the extrinsic
   */
  public signFake (signer: Address | Uint8Array | string, options: SignatureOptions): ExtrinsicV4 {
    this.signature.signFake(this.method, signer, options);

    return this;
  }
}
