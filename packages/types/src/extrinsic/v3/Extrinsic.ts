// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ExtrinsicSignatureV3 } from '../../interfaces/extrinsics';
import { Address, Call } from '../../interfaces/runtime';
import { ExtrinsicPayloadValue, IExtrinsicImpl, IKeyringPair, Registry, SignatureOptions } from '../../types';
import { ExtrinsicOptions } from '../types';

import { isU8a } from '@polkadot/util';

import Struct from '../../codec/Struct';

const TRANSACTION_VERSION = 3;

export interface ExtrinsicValueV3 {
  method?: Call;
  signature?: ExtrinsicSignatureV3;
}

/**
 * @name GenericExtrinsicV3
 * @description
 * The third generation of compact extrinsics
 */
export default class ExtrinsicV3 extends Struct implements IExtrinsicImpl {
  constructor (registry: Registry, value?: Uint8Array | ExtrinsicValueV3 | Call, { isSigned }: Partial<ExtrinsicOptions> = {}) {
    super(registry, {
      signature: 'ExtrinsicSignatureV3',
      // eslint-disable-next-line sort-keys
      method: 'Call'
    }, ExtrinsicV3.decodeExtrinsic(registry, value, isSigned));
  }

  /** @internal */
  public static decodeExtrinsic (registry: Registry, value?: Call | Uint8Array | ExtrinsicValueV3, isSigned = false): ExtrinsicValueV3 {
    if (value instanceof ExtrinsicV3) {
      return value;
    } else if (value instanceof registry.createClass('Call')) {
      return { method: value };
    } else if (isU8a(value)) {
      // here we decode manually since we need to pull through the version information
      const signature = registry.createType('ExtrinsicSignatureV3', value, { isSigned });
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
   * @description The [[ExtrinsicSignatureV3]]
   */
  public get signature (): ExtrinsicSignatureV3 {
    return this.get('signature') as ExtrinsicSignatureV3;
  }

  /**
   * @description The version for the signature
   */
  public get version (): number {
    return TRANSACTION_VERSION;
  }

  /**
   * @description Add an [[ExtrinsicSignatureV3]] to the extrinsic (already generated)
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

  /**
   * @describe Adds a fake signature to the extrinsic
   */
  public signFake (signer: Address | Uint8Array | string, options: SignatureOptions): ExtrinsicV3 {
    this.signature.signFake(this.method, signer, options);

    return this;
  }
}
