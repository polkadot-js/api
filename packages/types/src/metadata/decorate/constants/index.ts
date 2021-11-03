// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { MetadataLatest, PalletConstantMetadataLatest, PalletMetadataLatest } from '../../../interfaces';
import type { Registry } from '../../../types';
import type { ConstantCodec, Constants } from '../types';

import { hexToU8a, stringCamelCase } from '@polkadot/util';

import { lazyMethod, lazyMethods } from '../../../create/lazy';
import { objectNameToCamel } from '../util';

function createConstantCodec (registry: Registry, constant: PalletConstantMetadataLatest): ConstantCodec {
  const codec = registry.createTypeUnsafe(registry.createLookupType(constant.type), [hexToU8a(constant.value.toHex())]) as ConstantCodec;

  (codec as unknown as Record<string, unknown>).meta = constant;

  return codec;
}

/** @internal */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function decorateConstants (registry: Registry, { pallets }: MetadataLatest, _version: number): Constants {
  const result: Constants = {};

  const lazySection = ({ constants, name }: PalletMetadataLatest): void => {
    lazyMethod(result, stringCamelCase(name), () =>
      lazyMethods(
        {},
        constants,
        (constant: PalletConstantMetadataLatest) =>
          createConstantCodec(registry, constant),
        objectNameToCamel
      )
    );
  };

  for (let p = 0; p < pallets.length; p++) {
    const pallet = pallets[p];

    if (!pallet.constants.isEmpty) {
      lazySection(pallet);
    }
  }

  return result;
}
