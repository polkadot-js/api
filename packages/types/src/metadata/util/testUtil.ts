// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Registry } from '@polkadot/types-codec/types';
import type { Check } from './types';

import * as fs from 'fs';
import * as path from 'path';

import { assert, hexToU8a, stringCamelCase, stringify, u8aToHex } from '@polkadot/util';

import { TypeRegistry } from '../../create';
import { unwrapStorageSi, unwrapStorageType } from '../../primitive/StorageKey';
import { Metadata } from '../Metadata';
import { getUniqTypes } from './getUniqTypes';

function writeJson (json: unknown, version: number, type: string, sub: 'json' | 'types'): void {
  fs.writeFileSync(
    path.join(process.cwd(), `packages/types-support/src/metadata/v${version}/${type}-${sub}.json`),
    stringify(json, 2),
    { flag: 'w' }
  );
}

/** @internal */
export function decodeLatestMeta (registry: Registry, type: string, version: number, { compare, data, types }: Check): void {
  const metadata = new Metadata(registry, data);

  registry.setMetadata(metadata);

  it('decodes latest substrate properly', (): void => {
    const json = metadata.toJSON() as Record<string, Record<string, Record<string, string>>>;

    delete json.metadata[`v${metadata.version}`].lookup;

    expect(metadata.version).toBe(version);

    try {
      expect(json).toEqual(compare);
    } catch (error) {
      if (process.env.GITHUB_REPOSITORY) {
        console.error(stringify(json));

        throw error;
      }

      writeJson(json, version, type, 'json');
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

        writeJson(json, version, type, 'types');
      }
    }
  });
}

/** @internal */
export function toLatest (registry: Registry, version: number, { data }: Check, withThrow = true): void {
  it(`converts v${version} to latest`, (): void => {
    const metadata = new Metadata(registry, data);

    registry.setMetadata(metadata);

    const latest = metadata.asLatest;

    if (metadata.version < 14) {
      getUniqTypes(registry, latest, withThrow);
    }
  });
}

/** @internal */
export function defaultValues (registry: Registry, { data, fails = [] }: Check, withThrow = true, withFallbackCheck = false): void {
  describe('storage with default values', (): void => {
    const metadata = new Metadata(registry, data);
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

              if (withThrow && !fails.some((f) => location.includes(f))) {
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

function serialize (registry: Registry, { data }: Check): void {
  const metadata = new Metadata(registry, data);

  it('serializes to hex in the same form as retrieved', (): void => {
    expect(metadata.toHex()).toEqual(data);
  });

  // NOTE Assuming the first passes this is actually something that doesn't test
  // anything new. If the first line in this function passed and the above values
  // are equivalent, this would be as well.
  it.skip('can construct from a re-serialized form', (): void => {
    expect(
      () => new Metadata(registry, metadata.toHex())
    ).not.toThrow();
  });

  // as used in the extension
  it('can construct from asCallsOnly.toHex()', (): void => {
    expect(
      () => new Metadata(registry, metadata.asCallsOnly.toHex())
    ).not.toThrow();
  });
}

export function testMeta (version: number, matchers: Record<string, Check>, withFallback = true): void {
  describe(`MetadataV${version}`, (): void => {
    describe.each(Object.keys(matchers))('%s', (type): void => {
      const matcher = matchers[type];
      const registry = new TypeRegistry();

      serialize(registry, matcher);
      decodeLatestMeta(registry, type, version, matcher);
      toLatest(registry, version, matcher);
      defaultValues(registry, matcher, true, withFallback);
    });
  });
}
