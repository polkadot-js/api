// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import extrinsicsFromMeta from '@polkadot/extrinsics/fromMetadata';

import createType from '../../codec/createType';
import Method from '../../primitive/Method';

import Metadata from '../Metadata';
import latestParsed from './latest.substrate.v4.json';
import rpcData from './static';

describe('MetadataV4', () => {
  const metadata = new Metadata(rpcData);

  it('decodes latest properly', () => {
    const str = JSON.stringify(metadata.toJSON());

    console.error(str);
    console.error(metadata.getUniqTypes(true));

    expect(metadata.version).toBe(4);
    expect(metadata.asV4.modules.length).not.toBe(0);
    expect(str).toEqual(JSON.stringify(latestParsed));
  });

  describe('storage with default values', () => {
    Method.injectMethods(extrinsicsFromMeta(metadata));

    metadata.asV4.modules
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
