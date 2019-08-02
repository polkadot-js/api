// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ExtrinsicPayloadValue, IExtrinsicImpl, IKeyringPair, SignatureOptions } from '../../../types';
import { ExtrinsicOptions } from '../types';

import { isU8a } from '@polkadot/util';

import Struct from '../../../codec/Struct';
import Call from '../../Generic/Call';
import Address from '../../Generic/Address';
import ExtrinsicSignature from './ExtrinsicSignature';

const TRANSACTION_VERSION = 3;

export interface ExtrinsicValueV3 {
  method?: Call;
  signature?: ExtrinsicSignature;
}

/**
 * @name ExtrinsicV3
 * @description
 * The second generation of compact extrinsics
 */
export default class ExtrinsicV3 extends Struct implements IExtrinsicImpl {
  public constructor (value?: Uint8Array | ExtrinsicValueV3 | Call, { isSigned }: ExtrinsicOptions = {}) {
    super({
      signature: ExtrinsicSignature,
      method: Call
    }, ExtrinsicV3.decodeExtrinsic(value, isSigned));
  }

  public static decodeExtrinsic (value?: Call | Uint8Array | ExtrinsicValueV3, isSigned: boolean = false): ExtrinsicValueV3 {
    if (!value) {
      return {};
    } else if (value instanceof ExtrinsicV3) {
      return value;
    } else if (value instanceof Call) {
      return { method: value };
    } else if (isU8a(value)) {
      // here we decode manually since we need to pull through the version information
      const signature = new ExtrinsicSignature(value, { isSigned });
      const method = new Call(value.subarray(signature.encodedLength));

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
  public addSignature (signer: Address | Uint8Array | string, signature: Uint8Array | string, payload: ExtrinsicPayloadValue | Uint8Array | string): ExtrinsicV3 {
    this.signature.addSignature(signer, signature, payload);

    return this;
  }

  /**
   * @description Sign the extrinsic with a specific keypair
   */
  public sign (account: IKeyringPair, options: SignatureOptions): ExtrinsicV3 {
    this.signature.sign(this.method, account, options);

    return this;
  }
}
