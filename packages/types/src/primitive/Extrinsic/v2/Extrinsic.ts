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

const TRANSACTION_VERSION = 2;

export interface ExtrinsicValueV2 {
  method?: Call;
  signature?: ExtrinsicSignature;
}

interface ExtrinsicV2Options {
  isSigned?: boolean;
  metadata?: Metadata;
}

/**
 * @name ExtrinsicV2
 * @description
 * The second generation of compact extrinsics
 */
export default class ExtrinsicV2 extends Struct implements IExtrinsicImpl {
  public constructor (value?: Uint8Array | ExtrinsicValueV2 | Call, options: ExtrinsicV2Options = {}) {
    super({
      signature: ExtrinsicSignature,
      method: Call
    }, ExtrinsicV2.decodeExtrinsic(value, options));
  }

  public static decodeExtrinsic(value?: Call | Uint8Array | ExtrinsicValueV2, options: ExtrinsicV2Options = {}): ExtrinsicValueV2 {
    const isSigned = !!options.isSigned;
    if (!value) {
      return {};
    } else if (value instanceof ExtrinsicV2) {
      return value;
    } else if (value instanceof Call) {
      return { method: value };
    } else if (isU8a(value)) {
      // here we decode manually since we need to pull through the version information
      const signature = new ExtrinsicSignature(value, { isSigned });
      const method = new Call(value.subarray(signature.encodedLength), { metadata: options.metadata });

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
