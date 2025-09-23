// Copyright 2017-2025 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@polkadot/util/types';
import type { ExtrinsicSignatureV5 } from '../../interfaces/extrinsics/index.js';
import type { Address, Call } from '../../interfaces/runtime/index.js';
import type { ExtrinsicPayloadValue, IExtrinsicV5Impl, IKeyringPair, Registry, SignatureOptions } from '../../types/index.js';
import type { ExtrinsicOptions, Preamble } from '../types.js';

import { Struct } from '@polkadot/types-codec';
import { isU8a } from '@polkadot/util';

import { GeneralExtrinsic } from './GeneralExtrinsic.js';

export const EXTRINSIC_VERSION = 5;

export interface ExtrinsicValueV5 {
  method?: Call;
  signature?: ExtrinsicSignatureV5;
}

/**
 * @name GenericExtrinsicV5
 * @description
 * The fourth generation of compact extrinsics
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
      console.log('lets go 🚀', value);

      // here we decode manually since we need to pull through the version information
      const signature = registry.createTypeUnsafe<ExtrinsicSignatureV5>('ExtrinsicSignatureV5', [value, { isSigned }]);

      console.log(signature, 'signature is working now...');

      // We add 2 here since the length of the TransactionExtension Version needs to be accounted for
      // HACK: Adding +1 does the trick, but I;m not sure why.
      const method = registry.createTypeUnsafe<Call>('Call', [value.subarray(signature.encodedLength + 1)]);

      console.log(signature.toHuman(), method.toHuman());

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
    return EXTRINSIC_VERSION;
  }

  /**
   * @description The [[Preamble]] for the extrinsic
   */
  public get preamble (): Preamble {
    return this.getT('preamble');
  }

  /**
   * @description Add an [[ExtrinsicSignatureV5]] to the extrinsic (already generated)
   *
   * [Disabled for ExtrinsicV5]
   */
  public addSignature (signer: Address | Uint8Array | string, signature: Uint8Array | HexString, payload: ExtrinsicPayloadValue | Uint8Array | HexString): GenericExtrinsicV5 {
    const extrinsic = new GeneralExtrinsic(this.registry);
    const signed = extrinsic.addSignature(signer, signature, payload);

    return new GenericExtrinsicV5(this.registry, signed.toU8a());
  }

  /**
   * @description Sign the extrinsic with a specific keypair
   *
   * [Disabled for ExtrinsicV5]
   */
  public sign (account: IKeyringPair, options: SignatureOptions): GenericExtrinsicV5 {
    // Handle signing for `bare` and `general` in GenericExtrinsicSignatureV5 class
    // this.signature.sign(this.method, account,options);

    // return this;

    console.log(this.method.toHuman(), 'in bare, this.method');

    // ✅ fixed types
    const extrinsic = new GeneralExtrinsic(this.registry, {
      // @ts-expect-error TODO: fix it later
      payload: {
        // ...options,
        // era: this.registry.createType('ExtrinsicEra', options.era?.toHex()),
        method: this.method.toHex()
        // transactionVersion: this.registry.getTransactionExtensionVersion()
      }
    });

    const signed = extrinsic.sign(account, options);

    // signed.delete('method');

    console.log('signed human', signed.toHuman());

    return new GenericExtrinsicV5(this.registry, signed.toU8a(true), { isSigned: true });

    // return new GeneralExtrinsic(this.registry ).sign(account, options) as unknown as GenericExtrinsicV5
  }

  /**
   * @describe Adds a fake signature to the extrinsic
   *
   * [Disabled for ExtrinsicV5]
   */
  public signFake (signer: Address | Uint8Array | string, options: SignatureOptions): GenericExtrinsicV5 {
    const extrinsic = new GeneralExtrinsic(this.registry);
    const signed = extrinsic.signFake(signer, options);

    return new GenericExtrinsicV5(this.registry, signed.toU8a());
  }
}
