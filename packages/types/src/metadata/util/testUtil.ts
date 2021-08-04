// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Codec, Registry } from '../../types';
import type { MetadataInterface } from '../types';
import type { Check } from './types';

import fs from 'fs';
import path from 'path';

import { assert, hexToU8a, stringify, u8aToHex } from '@polkadot/util';

import { TypeRegistry } from '../../create';
import { unwrapStorageType } from '../../primitive/StorageKey';
import { Metadata } from '../Metadata';
import { getUniqTypes } from './getUniqTypes';

/** @internal */
export function decodeLatestMeta<Modules extends Codec> (registry: Registry, type: string, version: number, { compare, data }: Check): void {
  it('decodes metadata properly', (): void => {
    const metadata = new Metadata(registry, data);

    registry.setMetadata(metadata);

    expect(metadata.version).toBe(version);
    expect((metadata[`asV${version}` as keyof Metadata] as unknown as MetadataInterface<Modules>).modules.length).not.toBe(0);

    try {
      expect(metadata.toJSON()).toEqual(compare);
    } catch (error) {
      if (process.env.GITHUB_REPOSITORY) {
        console.error(stringify(metadata.toJSON()));

        throw error;
      } else {
        fs.writeFileSync(
          path.join(process.cwd(), `packages/types-support/src/metadata/v${version}/${type}-json.json`),
          JSON.stringify(metadata.toJSON(), null, 2),
          { flag: 'w' }
        );
      }
    }
  });
}

/** @internal */
export function toLatest<Modules extends Codec> (registry: Registry, version: number, rpcData: string, withThrow = true): void {
  it(`converts v${version} to latest`, (): void => {
    const metadata = new Metadata(registry, rpcData);

    registry.setMetadata(metadata);

    const metadataInit = metadata[`asV${version}` as keyof Metadata];
    const metadataLatest = metadata.asLatest;

    expect(
      getUniqTypes(registry, metadataInit as unknown as MetadataInterface<Modules>, withThrow)
    ).toEqual(
      getUniqTypes(registry, metadataLatest, withThrow)
    );
  });
}

/** @internal */
export function defaultValues (registry: Registry, rpcData: string, withThrow = true, withFallbackCheck = false): void {
  describe('storage with default values', (): void => {
    const metadata = new Metadata(registry, rpcData);

    metadata.asLatest.modules.filter(({ storage }): boolean => storage.isSome).forEach((mod): void => {
      mod.storage.unwrap().items.forEach(({ fallback, modifier, name, type }): void => {
        const inner = unwrapStorageType(registry, type, modifier.isOptional);
        const location = `${mod.name.toString()}.${name.toString()}: ${inner}`;

        it(location, (): void => {
          expect((): void => {
            try {
              const type = registry.createType(inner, hexToU8a(fallback.toHex()));

              if (withFallbackCheck) {
                const [hexType, hexOrig] = [u8aToHex(type.toU8a()), u8aToHex(fallback.toU8a(true))];

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
