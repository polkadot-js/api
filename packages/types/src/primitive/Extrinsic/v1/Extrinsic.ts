// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { IExtrinsicImpl, IKeyringPair, SignatureOptions } from '../../../types';

import Compact from '../../../codec/Compact';
import Struct from '../../../codec/Struct';
import Method from '../../Method';
import Address from '../../Address';
import ExtrinsicSignature from './ExtrinsicSignature';

export interface ExtrinsicValueV1 {
  method?: Method;
  signature?: ExtrinsicSignature;
}

const TRANSACTION_VERSION = 1;

/**
 * @name ExtrinsicV1
 * @description
 * The first generation of compact extrinsics
 */
export default class ExtrinsicV1 extends Struct implements IExtrinsicImpl {
  public constructor (value?: Uint8Array | ExtrinsicValueV1) {
    super({
      signature: ExtrinsicSignature,
      method: Method
    }, value);
  }

  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  public get encodedLength (): number {
    const length = this.length;

    return length + Compact.encodeU8a(length).length;
  }

  /**
   * @description The length of the encoded value
   */
  public get length (): number {
    return this.toU8a(true).length;
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
  public addSignature (signer: Address | Uint8Array | string, signature: Uint8Array | string, payload: Uint8Array | string): ExtrinsicV1 {
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
