// Copyright 2017-2021 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Codec, Registry } from '@polkadot/types/types';
import type { MetadataInterface } from '../types';

import { unwrapStorageType } from '@polkadot/types/primitive/StorageKey';
import { assert, hexToU8a, stringify, u8aToHex } from '@polkadot/util';

import { Metadata } from '../Metadata';
import { getUniqTypes } from './getUniqTypes';

/** @internal */
export function decodeLatestSubstrate<Modules extends Codec> (registry: Registry, version: number, rpcData: string, staticSubstrate: Record<string, unknown>): void {
  it('decodes latest substrate properly', (): void => {
    const metadata = new Metadata(registry, rpcData);

    registry.setMetadata(metadata);

    try {
      expect(metadata.version).toBe(version);
      expect((metadata[`asV${version}` as keyof Metadata] as unknown as MetadataInterface<Modules>).modules.length).not.toBe(0);
      expect(metadata.toJSON()).toEqual(staticSubstrate);
    } catch (error) {
      console.error(stringify(metadata.toJSON()));

      throw error;
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
        const inner = unwrapStorageType(type, modifier.isOptional);
        const location = `${mod.name.toString()}.${name.toString()}: ${inner}`;

        it(`creates default types for ${location}`, (): void => {
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
