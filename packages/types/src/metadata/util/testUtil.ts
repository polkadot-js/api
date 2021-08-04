// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Registry } from '../../types';
import type { Check } from './types';

import fs from 'fs';
import path from 'path';

import { assert, hexToU8a, stringCamelCase, stringify, u8aToHex } from '@polkadot/util';

import { TypeRegistry } from '../../create';
import { unwrapStorageSi, unwrapStorageType } from '../../primitive/StorageKey';
import { Metadata } from '../Metadata';
import { getUniqTypes } from './getUniqTypes';

/** @internal */
export function decodeLatestMeta (registry: Registry, type: string, version: number, { compare, data, types }: Check): void {
  const metadata = new Metadata(registry, data);

  registry.setMetadata(metadata);

  it('decodes latest substrate properly', (): void => {
    const json = metadata.toJSON() as Record<string, Record<string, Record<string, string>>>;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    delete json.metadata?.[`v${metadata.version}`]?.lookup;

    expect(metadata.version).toBe(version);

    try {
      expect(metadata.toJSON()).toEqual(compare);
    } catch (error) {
      if (process.env.GITHUB_REPOSITORY) {
        console.error(stringify(metadata.toJSON()));

        throw error;
      }

      fs.writeFileSync(
        path.join(process.cwd(), `packages/types-support/src/metadata/v${version}/${type}-json.json`),
        stringify(metadata.toJSON(), 2),
        { flag: 'w' }
      );
    }
  });

  it('decodes latest types correctly', (): void => {
    if (types) {
      const json = metadata.asLatest.lookup.types.toJSON();

      try {
        expect(json).toEqual(types);
      } catch (error) {
        if (process.env.GITHUB_REPOSITORY) {
          console.error(stringify(metadata.toJSON()));

          throw error;
        }

        fs.writeFileSync(
          path.join(process.cwd(), `packages/types-support/src/metadata/v${version}/${type}-types.json`),
          stringify(json, 2),
          { flag: 'w' }
        );
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
    const { pallets } = metadata.asLatest;

    pallets.filter(({ storage }) => storage.isSome).forEach(({ name, storage }): void => {
      const sectionName = stringCamelCase(name);

      storage.unwrap().items.forEach(({ fallback, modifier, name, type }): void => {
        const inner = unwrapStorageType(registry, type, modifier.isOptional);
        const location = `${sectionName}.${stringCamelCase(name)}: ${inner}`;

        it(location, (): void => {
          expect((): void => {
            try {
              const instance = registry.createTypeUnsafe(
                registry.createLookupType(unwrapStorageSi(type)),
                [hexToU8a(fallback.toHex())],
                { isOptional: modifier.isOptional }
              );

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

export function testMeta (version: number, matchers: Record<string, Check>, withFallback = true): void {
  describe(`MetadataV${version}`, (): void => {
    describe.each(Object.keys(matchers))('%s', (type): void => {
      const matcher = matchers[type];
      const registry = new TypeRegistry();

      decodeLatestMeta(registry, type, version, matcher);

      toLatest(registry, version, matcher.data);

      defaultValues(registry, matcher.data, true, withFallback);
    });
  });
}
