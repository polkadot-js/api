// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ExtrinsicPayloadValue, IExtrinsicImpl, IKeyringPair, SignatureOptions } from '../../../types';

import { isU8a } from '@polkadot/util';

import Struct from '../../../codec/Struct';
import Method from '../../Method';
import Address from '../../Address';
import ExtrinsicSignature from './ExtrinsicSignature';

const TRANSACTION_VERSION = 2;

export interface ExtrinsicValueV2 {
  method?: Method;
  signature?: ExtrinsicSignature;
}

interface ExtrinsicV2Options {
  isSigned?: boolean;
}

/**
 * @name ExtrinsicV1
 * @description
 * The first generation of compact extrinsics
 */
export default class ExtrinsicV2 extends Struct implements IExtrinsicImpl {
  public constructor (value?: Uint8Array | ExtrinsicValueV2 | Method, { isSigned }: ExtrinsicV2Options = {}) {
    super({
      signature: ExtrinsicSignature,
      method: Method
    }, ExtrinsicV2.decodeExtrinsic(value, isSigned));
  }

  public static decodeExtrinsic (value?: Method | Uint8Array | ExtrinsicValueV2, isSigned: boolean = false): ExtrinsicValueV2 {
    if (!value) {
      return {};
    } else if (value instanceof ExtrinsicV2) {
      return value;
    } else if (value instanceof Method) {
      return { method: value };
    } else if (isU8a(value)) {
      // here we decode manually since we need to pull through the version information
      const signature = new ExtrinsicSignature(value, { isSigned });
      const method = new Method(value.subarray(signature.encodedLength));

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
   * @description The [[Method]] this extrinsic wraps
   */
  public get method (): Method {
    return this.get('method') as Method;
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
  public addSignature (signer: Address | Uint8Array | string, signature: Uint8Array | string, payload: ExtrinsicPayloadValue | Uint8Array | string): ExtrinsicV2 {
    this.signature.addSignature(signer, signature, payload);

    return this;
  }

  /**
   * @description Sign the extrinsic with a specific keypair
   */
  public sign (account: IKeyringPair, options: SignatureOptions): ExtrinsicV2 {
    this.signature.sign(this.method, account, options);

    return this;
  }
}
