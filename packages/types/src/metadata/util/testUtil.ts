// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Codec, Registry } from '../../types';
import type { MetadataInterface } from '../types';

import { assert, hexToU8a, stringify, u8aToHex } from '@polkadot/util';

import { unwrapStorageType } from '../../primitive/StorageKey';
import { Metadata } from '../Metadata';
import { getUniqTypes } from './getUniqTypes';

/** @internal */
export function decodeLatestMeta<Modules extends Codec> (registry: Registry, version: number, staticMeta: string, staticJson: Record<string, unknown>): void {
  it('decodes metadata properly', (): void => {
    const metadata = new Metadata(registry, staticMeta);

    registry.setMetadata(metadata);

    try {
      expect(metadata.version).toBe(version);
      expect((metadata[`asV${version}` as keyof Metadata] as unknown as MetadataInterface<Modules>).modules.length).not.toBe(0);
      expect(metadata.toJSON()).toEqual(staticJson);
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
        const inner = unwrapStorageType(registry, type, modifier.isOptional);
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
