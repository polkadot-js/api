// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import extrinsicsFromMeta from '@polkadot/extrinsics/fromMetadata';

import createType from '../../codec/createType';
import Method from '../../primitive/Method';

import Metadata from '../Metadata';
import latestParsed from './latest.substrate.v1.json';
import rpcData from './static';

describe('MetadataV1', () => {
  const metadata = new Metadata(rpcData);

  it('decodes latest properly', () => {
    const str = JSON.stringify(metadata.toJSON());

    expect(metadata.version).toBe(1);
    expect(metadata.asV1.modules.length).not.toBe(0);
    expect(str).toEqual(JSON.stringify(latestParsed));
  });

  it('converts v1 to V0', () => {
    const v0 = metadata.asV0;

    expect(metadata.getUniqTypes(true)).toEqual(v0.getUniqTypes(true));
  });

  describe('storage with default values', () => {
    Method.injectMethods(extrinsicsFromMeta(metadata));

    metadata.asV1.modules
      .filter(({ storage }) => storage.isSome)
      .map((mod) =>
        mod.storage.unwrap().forEach(({ fallback, name, type }) => {
          it(`creates default types for ${mod.prefix}.${name}, type ${type}`, () => {
            expect(
              () => createType(type.toString(), fallback)
            ).not.toThrow();
          });
        })
      );
  });
});
