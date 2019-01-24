// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

// import extrinsicsFromMeta from '@polkadot/extrinsics/fromMetadata';

// import createType from '../codec/createType';
// import Method from '../Method';

import Metadata from './index';
import latestParsed from './v1/latest.substrate.json';
import rpcData from './static';

describe('Metadata', () => {
  const metadata = new Metadata(rpcData);

  it('decodes latest properly', () => {
    const str = JSON.stringify(metadata.toJSON());

    console.error(str);
    console.error(metadata.getUniqTypes());

    expect(metadata.version).toBe(1);
    expect(metadata.asV1.modules.length).not.toBe(0);
    expect(str).toEqual(JSON.stringify(latestParsed));
  });

  // describe('storage with default values', () => {
  //   Method.injectMethods(extrinsicsFromMeta(metadata));

  //   metadata.modules.forEach((mod) => {
  //     if (mod.storage.isNone) {
  //       return;
  //     }

  //     mod.storage.unwrap().functions.forEach((fn) => {
  //       it(`creates default types for ${mod.prefix}.${fn.name}, type ${fn.type}`, () => {
  //         expect(
  //           () => createType(fn.type.toString(), fn.default)
  //         ).not.toThrow();
  //       });
  //     });
  //   });
  // });
});
