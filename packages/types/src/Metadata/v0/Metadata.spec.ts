// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import extrinsicsFromMeta from '@polkadot/extrinsics/fromMetadata';

import createType from '../../codec/createType';
import Method from '../../primitive/Method';

import Metadata from './Metadata';
import latestParsed from './latest.substrate.json';
import rpcData from './static';

describe('Metadata', () => {
  it('decodes latest properly', () => {
    const metadata = new Metadata(rpcData);
    const str = JSON.stringify(metadata.toJSON());

    expect(metadata.events.length).not.toBe(0);
    expect(str).toEqual(JSON.stringify(latestParsed));
  });

  describe('storage with default values', () => {
    const metadata = new Metadata(rpcData);

    Method.injectMethods(extrinsicsFromMeta(metadata));

    metadata.modules.forEach((mod) => {
      if (mod.storage.isNone) {
        return;
      }

      mod.storage.unwrap().functions.forEach((fn) => {
        it(`creates default types for ${mod.prefix}.${fn.name}, type ${fn.type}`, () => {
          expect(
            () => createType(fn.type.toString(), fn.default)
          ).not.toThrow();
        });
      });
    });
  });
});
