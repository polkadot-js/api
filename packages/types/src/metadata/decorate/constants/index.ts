// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { MetadataLatest, PalletConstantMetadataV14, PalletMetadataV14 } from '../../../interfaces';
import type { Registry } from '../../../types';
import type { ConstantCodec, Constants, ModuleConstants } from '../types';

import { hexToU8a, stringCamelCase } from '@polkadot/util';

function createConstantCodec (registry: Registry, meta: PalletConstantMetadataV14): ConstantCodec {
  const codec = registry.createTypeUnsafe(registry.createLookupType(meta.type), [hexToU8a(meta.value.toHex())]) as ConstantCodec;

  (codec as unknown as Record<string, unknown>).meta = meta;

  return codec;
}

function createLazyMethod (registry: Registry, result: ModuleConstants, meta: PalletConstantMetadataV14): void {
  let cached: ConstantCodec | null = null;

  function get (): ConstantCodec {
    if (!cached) {
      cached = createConstantCodec(registry, meta);
    }

    return cached;
  }

  Object.defineProperty(result, stringCamelCase(meta.name), { enumerable: true, get });
}

function createLazySection (registry: Registry, result: Constants, { constants, name }: PalletMetadataV14): void {
  if (constants.isEmpty) {
    return;
  }

  let cached: ModuleConstants | null = null;

  function get (): ModuleConstants {
    if (!cached) {
      cached = {};

      for (let c = 0; c < constants.length; c++) {
        createLazyMethod(registry, cached, constants[c]);
      }
    }

    return cached;
  }

  Object.defineProperty(result, stringCamelCase(name), { enumerable: true, get });
}

/** @internal */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function decorateConstants (registry: Registry, { pallets }: MetadataLatest, _metaVersion: number): Constants {
  const result: Constants = {};

  for (let p = 0; p < pallets.length; p++) {
    createLazySection(registry, result, pallets[p]);
  }

  return result;
}
