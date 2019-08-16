// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import '../../injector';

import extrinsicsFromMeta from '@polkadot/api-metadata/extrinsics/fromMetadata';

import { createTypeUnsafe } from '../../codec/create';
import Metadata from '../Metadata';
import Call from '../../primitive/Generic/Call';
import { MetadataInterface } from '../types';
import { Codec } from '../../types';

/**
 * Given the static `rpcData` and the `latestSubstrate` JSON file, Metadata
 * should decode `rpcData` and output `latestSubstrate`.
 */
export function decodeLatestSubstrate<Modules extends Codec> (
  version: number,
  rpcData: string,
  latestSubstrate: object
): void {
  it('decodes latest substrate properly', (): void => {
    const metadata = new Metadata(rpcData);

    console.error(JSON.stringify(metadata.toJSON()));

    expect(metadata.version).toBe(version);
    expect((metadata[`asV${version}` as keyof Metadata] as unknown as MetadataInterface<Modules>).modules.length).not.toBe(0);
    expect(metadata.toJSON()).toEqual(latestSubstrate);
  });
}

/**
 * Given a `version`, MetadataV7 and MetadataV{version} should output the same
 * unique types.
 */
export function toV7<Modules extends Codec> (version: number, rpcData: string): void {
  it('converts to V7', (): void => {
    const metadata = new Metadata(rpcData)[`asV${version}` as keyof Metadata];
    const metadataV7 = new Metadata(rpcData).asV7;

    expect(
      (metadata as unknown as MetadataInterface<Modules>).getUniqTypes(true)
    ).toEqual(metadataV7.getUniqTypes(true));
  });
}

/**
 * Given a Metadata, no type should throw when given its fallback value.
 */
export function defaultValues (rpcData: string): void {
  describe('storage with default values', (): void => {
    const metadata = new Metadata(rpcData);

    Call.injectMethods(extrinsicsFromMeta(metadata));

    metadata.asLatest.modules
      .filter(({ storage }): boolean => storage.isSome)
      .forEach((mod): void => {
        mod.storage.unwrap().items.forEach(({ fallback, name, type }): void => {
          it(`creates default types for ${mod.name}.${name}, type ${type}`, (): void => {
            expect(
              (): Codec => createTypeUnsafe(type.toString(), [fallback])
            ).not.toThrow();
          });
        });
      });
  });
}
