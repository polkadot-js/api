// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@polkadot/util/types';
import type { ExtrinsicSignatureV5 } from '../../interfaces/extrinsics/index.js';
import type { Address, Call } from '../../interfaces/runtime/index.js';
import type { ExtrinsicPayloadValue, IExtrinsicV5Impl, IKeyringPair, Registry, SignatureV5Options } from '../../types/index.js';
import type { ExtrinsicOptions } from '../types.js';

import { Struct } from '@polkadot/types-codec';
import { isU8a, objectSpread } from '@polkadot/util';

export interface ExtrinsicValueV5 {
  method?: Call;
  signature?: ExtrinsicSignatureV5;
}

/**
 * @name GenericExtrinsicV5
 * @description
 * The third generation of compact extrinsics
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
    return this.getT('version');
  }

  public get subVersionV5 (): 'signed' | 'bare' | 'general' {
    return this.getT('subVersionV5');
  }

  /**
   * @description Add an [[ExtrinsicSignatureV5]] to the extrinsic (already generated)
   */
  public addSignature (signer: Address | Uint8Array | string, signature: Uint8Array | HexString, payload: ExtrinsicPayloadValue | Uint8Array | HexString): GenericExtrinsicV5 {
    this.signature.addSignature(signer, signature, payload);

    return this;
  }

  /**
   * @description Sign the extrinsic with a specific keypair
   */
  public sign (account: IKeyringPair, options: SignatureV5Options): GenericExtrinsicV5 {
    const subVersionV5 = this.subVersionV5;
    const newOpts = objectSpread({}, { ...options, subVersionV5 });

    this.signature.sign(this.method, account, newOpts);

    return this;
  }

  /**
   * @describe Adds a fake signature to the extrinsic
   */
  public signFake (signer: Address | Uint8Array | string, options: SignatureV5Options): GenericExtrinsicV5 {
    const subVersionV5 = this.subVersionV5;
    const newOpts = objectSpread({}, { ...options, subVersionV5 });

    this.signature.signFake(this.method, signer, newOpts);

    return this;
  }
}
