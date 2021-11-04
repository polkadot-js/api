// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { MetadataLatest, PalletConstantMetadataLatest } from '../../../interfaces';
import type { Registry } from '../../../types';
import type { ConstantCodec, Constants } from '../types';

import { hexToU8a, lazyMethod, lazyMethods, stringCamelCase } from '@polkadot/util';

import { objectNameToCamel } from '../util';

/** @internal */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function decorateConstants (registry: Registry, { pallets }: MetadataLatest, _version: number): Constants {
  const result: Constants = {};

  for (let i = 0; i < pallets.length; i++) {
    const { constants, name } = pallets[i];

    if (!constants.isEmpty) {
      lazyMethod(result, stringCamelCase(name), () =>
        lazyMethods(
          {},
          constants,
          (constant: PalletConstantMetadataLatest): ConstantCodec => {
            const codec = registry.createTypeUnsafe(registry.createLookupType(constant.type), [hexToU8a(constant.value.toHex())]) as ConstantCodec;

            (codec as unknown as Record<string, unknown>).meta = constant;

            return codec;
          },
          objectNameToCamel
        )
      );
    }
  }

  return result;
}
