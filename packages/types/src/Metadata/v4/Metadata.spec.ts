// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

<<<<<<< HEAD
import extrinsicsFromMeta from '@plugnet/extrinsics/fromMetadata';

import createType from '../../codec/createType';
import Method from '../../primitive/Method';

=======
>>>>>>> 57715c50c0... Revert "Update extrinsics FromMetadata. Drop storages with doublemap type when converting v3 to v2 (#888)" (#903)
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
});
