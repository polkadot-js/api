// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ExtrinsicSignatureV2 } from '../../interfaces/extrinsics';
import { Address, Call } from '../../interfaces/runtime';
import { ExtrinsicPayloadValue, IExtrinsicImpl, IKeyringPair, Registry, SignatureOptions } from '../../types';
import { ExtrinsicOptions } from '../types';

import { isU8a } from '@polkadot/util';

import Struct from '../../codec/Struct';

const TRANSACTION_VERSION = 2;

export interface ExtrinsicValueV2 {
  method?: Call;
  signature?: ExtrinsicSignatureV2;
}

/**
 * @name GenericExtrinsicV2
 * @description
 * The second generation of compact extrinsics
 */
export default class ExtrinsicV2 extends Struct implements IExtrinsicImpl {
  constructor (registry: Registry, value?: Uint8Array | ExtrinsicValueV2 | Call, { isSigned }: Partial<ExtrinsicOptions> = {}) {
    super(registry, {
      signature: 'ExtrinsicSignatureV2',
      // eslint-disable-next-line sort-keys
      method: 'Call'
    }, ExtrinsicV2.decodeExtrinsic(registry, value, isSigned));
  }

  /** @internal */
  public static decodeExtrinsic (registry: Registry, value?: Call | Uint8Array | ExtrinsicValueV2, isSigned = false): ExtrinsicValueV2 {
    if (value instanceof ExtrinsicV2) {
      return value;
    } else if (value instanceof registry.createClass('Call')) {
      return { method: value };
    } else if (isU8a(value)) {
      // here we decode manually since we need to pull through the version information
      const signature = registry.createType('ExtrinsicSignatureV2', value, { isSigned });
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
   * @description The [[ExtrinsicSignatureV2]]
   */
  public get signature (): ExtrinsicSignatureV2 {
    return this.get('signature') as ExtrinsicSignatureV2;
  }

  /**
   * @description The version for the signature
   */
  public get version (): number {
    return TRANSACTION_VERSION;
  }

  /**
   * @description Add an [[ExtrinsicSignatureV2]] to the extrinsic (already generated)
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

  /**
   * @describe Adds a fake signature to the extrinsic
   */
  public signFake (signer: Address | Uint8Array | string, options: SignatureOptions): ExtrinsicV2 {
    this.signature.signFake(this.method, signer, options);

    return this;
  }
}
