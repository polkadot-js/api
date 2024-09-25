// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Call, MultiLocation } from '@polkadot/types/interfaces';
import type { ICompact, INumber, IOption, Registry } from '@polkadot/types-codec/types';
import type { GenericExtrinsicEra } from '../ExtrinsicEra.js';

import { Struct } from '@polkadot/types-codec';
import { objectProperties, objectSpread } from '@polkadot/util';

import { EMPTY_U8A } from '../constants.js';

export interface GeneralExtrinsicValueV5 {
  method?: Call;
}

export class GeneralExtrinsic extends Struct {
  readonly #transactionExtensionVersion: number;
  readonly #signKeys: string[];

  constructor (registry: Registry, value?: Call | Uint8Array) {
    const signTypes = registry.getSignedExtensionTypes();
    const signedVersion = registry.getTransactionExtensionVersion();

    super(
      registry,
      objectSpread(
        // eslint-disable-next-line sort-keys
        { transactionExtensionVersion: 'u8' },
        signTypes
      ),
      GeneralExtrinsic.decodeGeneralExtrinsic(value)
    );

    this.#transactionExtensionVersion = signedVersion;
    this.#signKeys = Object.keys(signTypes);

    objectProperties(this, this.#signKeys, (k) => this.get(k));
  }

  public static decodeGeneralExtrinsic (value?: Call | Uint8Array): GeneralExtrinsic | Uint8Array | Call {
    if (!value) {
      return EMPTY_U8A;
    } else if (value instanceof GeneralExtrinsic) {
      return value;
    }

    return value;
  }

  public get era (): GenericExtrinsicEra {
    return this.getT('era');
  }

  public get nonce (): ICompact<INumber> {
    return this.getT('nonce');
  }

  public get tip (): ICompact<INumber> {
    return this.getT('tip');
  }

  public get assetId (): IOption<INumber | MultiLocation> {
    return this.getT('assetId');
  }

  public get mode (): INumber {
    return this.getT('mode');
  }

  /**
   * @description The [[u8]] for the TransactionExtension version
   */
  public get transactionExtensionVersion (): INumber {
    return this.getT('transactionExtensionVersion');
  }
}
