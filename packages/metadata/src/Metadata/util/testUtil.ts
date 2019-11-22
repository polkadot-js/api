// Copyright 2017-2019 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Codec, Registry } from '@polkadot/types/types';
import { MetadataInterface } from '../types';

import { createTypeUnsafe } from '@polkadot/types/codec/create';
import { unwrapStorageType } from '@polkadot/types/primitive/StorageKey';

import getUniqTypes from './getUniqTypes';
import Metadata from '../Metadata';

/**
 * Given the static `rpcData` and the `staticSubstrate` JSON file, Metadata
 * should decode `rpcData` and output `staticSubstrate`.
 */
export function decodeLatestSubstrate<Modules extends Codec> (registry: Registry, version: number, rpcData: string, staticSubstrate: object): void {
  it('decodes latest substrate properly', (): void => {
    const metadata = new Metadata(registry, rpcData);

    try {
      expect(metadata.version).toBe(version);
      expect((metadata[`asV${version}` as keyof Metadata] as unknown as MetadataInterface<Modules>).modules.length).not.toBe(0);
      expect(metadata.toJSON()).toEqual(staticSubstrate);
    } catch (error) {
      console.error(JSON.stringify(metadata.toJSON()));

      throw error;
    }
  });
}

/**
 * Given a `version`, MetadataLatest and MetadataV{version} should output the same
 * unique types.
 */
export function toLatest<Modules extends Codec> (registry: Registry, version: number, rpcData: string): void {
  it(`converts v${version} to v8`, (): void => {
    const metadata = new Metadata(registry, rpcData)[`asV${version}` as keyof Metadata];
    const metadataV8 = new Metadata(registry, rpcData).asLatest;

    expect(
      getUniqTypes(registry, metadata as unknown as MetadataInterface<Modules>, true)
    ).toEqual(
      getUniqTypes(registry, metadataV8, true)
    );
  });
}

/**
 * Given a Metadata, no type should throw when given its fallback value.
 */
export function defaultValues (registry: Registry, rpcData: string): void {
  describe('storage with default values', (): void => {
    const metadata = new Metadata(registry, rpcData);

    metadata.asLatest.modules
      .filter(({ storage }): boolean => storage.isSome)
      .forEach((mod): void => {
        mod.storage.unwrap().items.forEach(({ fallback, name, type }): void => {
          const inner = unwrapStorageType(type);
          const location = `${mod.name}.${name}: type ${inner}`;

          it(`creates default types for ${location}`, (): void => {
            expect(
              (): Codec => {
                try {
                  return createTypeUnsafe(registry, inner, [fallback]);
                } catch (error) {
                  throw new Error(`${location}:: ${error.message}`);
                }
              }
            ).not.toThrow();
          });
        });
      });
  });
}
