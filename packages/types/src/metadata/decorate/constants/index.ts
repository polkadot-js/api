// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Registry } from '@polkadot/types-codec/types';
import type { MetadataLatest, PalletConstantMetadataLatest } from '../../../interfaces';
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
            const codec = registry.createTypeUnsafe(registry.createLookupType(constant.type), [hexToU8a(constant.value.toHex())]);

            (codec as unknown as Record<string, unknown>).meta = constant;

            return codec as ConstantCodec;
          },
          objectNameToCamel
        )
      );
    }
  }

  return result;
}
