// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ExtrinsicPayloadValue, IExtrinsicImpl, IKeyringPair, SignatureOptions } from '../../../types';

import { isU8a } from '@polkadot/util';

import Struct from '../../../codec/Struct';
import Call from '../../Generic/Call';
import Address from '../../Generic/Address';
import ExtrinsicSignature from './ExtrinsicSignature';
import Metadata from '../../../Metadata';

export interface ExtrinsicValueV1 {
  method?: Call;
  signature?: ExtrinsicSignature;
}

interface ExtrinsicV1Options {
  isSigned?: boolean;
  meta?: Metadata;
}

const TRANSACTION_VERSION = 1;

/**
 * @name ExtrinsicV1
 * @description
 * The first generation of compact extrinsics
 */
export default class ExtrinsicV1 extends Struct implements IExtrinsicImpl {
  public constructor (value?: Uint8Array | ExtrinsicValueV1, options: ExtrinsicV1Options = {}) {
    super({
      signature: ExtrinsicSignature,
      method: Call
    }, ExtrinsicV1.decodeExtrinsic(value, options));
  }

  public static decodeExtrinsic (value?: Uint8Array | ExtrinsicValueV1, options: ExtrinsicV1Options = {}): ExtrinsicValueV1 {
    const isSigned = !!options.isSigned;
    if (!value) {
      return {};
    } else if (value instanceof ExtrinsicV1) {
      return value;
    } else if (isU8a(value)) {
      // here we decode manually since we need to pull through the version information
      const signature = new ExtrinsicSignature(value, { isSigned });
      const method = new Call(value.subarray(signature.encodedLength), { meta: options.meta });

      return {
        method,
        signature
      };
    }

    return value;
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
   * @description The [[ExtrinsicSignature]]
   */
  public get signature (): ExtrinsicSignature {
    return this.get('signature') as ExtrinsicSignature;
  }

  /**
   * @description The version for the signature
   */
  public get version (): number {
    return TRANSACTION_VERSION;
  }

  /**
   * @description Add an [[ExtrinsicSignature]] to the extrinsic (already generated)
   */
  public addSignature (signer: Address | Uint8Array | string, signature: Uint8Array | string, payload: ExtrinsicPayloadValue | Uint8Array | string): ExtrinsicV1 {
    this.signature.addSignature(signer, signature, payload);

    return this;
  }

  /**
   * @description Sign the extrinsic with a specific keypair
   */
  public sign (account: IKeyringPair, options: SignatureOptions): ExtrinsicV1 {
    this.signature.sign(this.method, account, options);

    return this;
  }
}
