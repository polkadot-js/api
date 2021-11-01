// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { MetadataLatest, PalletCallMetadataV14, PalletMetadataV14, PortableRegistry, SiVariant } from '../../../interfaces';
import type { CallFunction, Registry } from '../../../types';
import type { Extrinsics, ModuleExtrinsics } from '../types';

import { stringCamelCase } from '@polkadot/util';

import { getSiName } from '../../util';
import { createUnchecked } from './createUnchecked';

export function filterCallsSome ({ calls }: PalletMetadataV14): boolean {
  return calls.isSome;
}

function createCallFunction (registry: Registry, lookup: PortableRegistry, variant: SiVariant, sectionIndex: number, sectionName: string): CallFunction {
  const { fields, index } = variant;
  const args = new Array<Record<string, unknown>>(fields.length);

  for (let a = 0; a < variant.fields.length; a++) {
    const { name, type, typeName } = variant.fields[a];

    args[a] = {
      name: stringCamelCase(name.unwrapOr(`param${a}`)),
      type: getSiName(lookup, type),
      ...(typeName.isSome
        ? { typeName: typeName.unwrap() }
        : {}
      )
    };
  }

  return createUnchecked(
    registry,
    sectionName,
    new Uint8Array([sectionIndex, index.toNumber()]),
    registry.createType('FunctionMetadataLatest', { ...variant, args })
  );
}

function lazyMethod (registry: Registry, lookup: PortableRegistry, result: ModuleExtrinsics, variant: SiVariant, sectionIndex: number, sectionName: string): void {
  let cached: CallFunction | null = null;

  Object.defineProperty(result, stringCamelCase(variant.name.toString()), {
    enumerable: true,
    get: (): CallFunction => {
      if (!cached) {
        cached = createCallFunction(registry, lookup, variant, sectionIndex, sectionName);
      }

      return cached;
    }
  });
}

function lazyMethods (registry: Registry, lookup: PortableRegistry, calls: PalletCallMetadataV14, sectionIndex: number, sectionName: string): ModuleExtrinsics {
  const result: ModuleExtrinsics = {};
  const { variants } = lookup.getSiType(calls.type).def.asVariant;

  for (let v = 0; v < variants.length; v++) {
    lazyMethod(registry, lookup, result, variants[v], sectionIndex, sectionName);
  }

  return result;
}

function lazySection (registry: Registry, lookup: PortableRegistry, result: Extrinsics, { calls, name }: PalletMetadataV14, sectionIndex: number, sectionName: string): void {
  let cached: ModuleExtrinsics | null = null;

  Object.defineProperty(result, stringCamelCase(name), {
    enumerable: true,
    get: (): ModuleExtrinsics => {
      if (!cached) {
        cached = lazyMethods(registry, lookup, calls.unwrap(), sectionIndex, sectionName);
      }

      return cached;
    }
  });
}

/** @internal */
export function decorateExtrinsics (registry: Registry, { lookup, pallets }: MetadataLatest, metaVersion: number): Extrinsics {
  const filtered = pallets.filter(filterCallsSome);
  const result: Extrinsics = {};

  for (let p = 0; p < filtered.length; p++) {
    const pallet = filtered[p];
    const sectionIndex = metaVersion >= 12
      ? filtered[p].index.toNumber()
      : p;

    lazySection(registry, lookup, result, pallet, sectionIndex, stringCamelCase(pallet.name));
  }

  return result;
}
