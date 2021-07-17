// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Registry } from '../../types';

import { assert, hexToU8a, stringCamelCase, stringify, u8aToHex } from '@polkadot/util';

import { unwrapStorageSi, unwrapStorageType } from '../../primitive/StorageKey';
import { Metadata } from '../Metadata';
import { getUniqTypes } from './getUniqTypes';

/** @internal */
export function decodeLatestSubstrate (registry: Registry, version: number, rpcData: string, staticSubstrate: Record<string, unknown>, staticTypes?: Record<string, unknown>): void {
  const metadata = new Metadata(registry, rpcData);
  let hasError = false;

  registry.setMetadata(metadata);

  it('decodes latest substrate properly', (): void => {
    const json = metadata.toJSON();

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    delete (json as Record<string, Record<string, Record<string, string>>>).metadata?.[`v${metadata.version}`]?.lookup;

    try {
      expect(metadata.version).toBe(version);
      expect(json).toEqual(staticSubstrate);
    } catch (error) {
      hasError = true;
      console.error(stringify(json));

      throw error;
    }
  });

  it('decodes latest types correctly', (): void => {
    if (staticTypes && !hasError) {
      const json = metadata.asLatest.lookup.types.toJSON();

      try {
        expect(json).toEqual(staticTypes);
      } catch (error) {
        console.error(stringify(json));

        throw error;
      }
    }
  });
}

/** @internal */
export function toLatest (registry: Registry, version: number, rpcData: string, withThrow = true): void {
  it(`converts v${version} to latest`, (): void => {
    const metadata = new Metadata(registry, rpcData);

    registry.setMetadata(metadata);

    const latest = metadata.asLatest;

    if (metadata.version < 14) {
      getUniqTypes(registry, latest, withThrow);
    }
  });
}

/** @internal */
export function defaultValues (registry: Registry, rpcData: string, withThrow = true, withFallbackCheck = false): void {
  describe('storage with default values', (): void => {
    const metadata = new Metadata(registry, rpcData);
    const { lookup, pallets } = metadata.asLatest;

    pallets.filter(({ storage }) => storage.isSome).forEach(({ name, storage }): void => {
      const sectionName = stringCamelCase(name);

      storage.unwrap().items.forEach(({ fallback, modifier, name, type }): void => {
        const inner = unwrapStorageType(registry, type, modifier.isOptional);
        const location = `${sectionName}.${stringCamelCase(name)}: ${inner}`;

        it(`creates default types for ${location}`, (): void => {
          expect((): void => {
            try {
              const instance = lookup.createType(unwrapStorageSi(type), [hexToU8a(fallback.toHex())], {
                isOptional: modifier.isOptional
              });

              if (withFallbackCheck) {
                const [hexType, hexOrig] = [u8aToHex(instance.toU8a()), u8aToHex(fallback.toU8a(true))];

                assert(hexType === hexOrig, () => `Fallback does not match (${((hexOrig.length - 2) / 2) - ((hexType.length - 2) / 2)} bytes missing): ${hexType} !== ${hexOrig}`);
              }
            } catch (error) {
              const message = `${location}:: ${(error as Error).message}`;

              if (withThrow) {
                throw new Error(message);
              } else {
                console.warn(message);
              }
            }
          }).not.toThrow();
        });
      });
    });
  });
}
