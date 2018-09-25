// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import Metadata from './Metadata';
import rpcdata from './Metadata.rpc.json';

describe('Metadata', () => {
  it('decodes properly', () => {
    const decoded = new Metadata().fromJSON(
      rpcdata.result
    );

    const str = JSON.stringify(decoded.toJSON());

    console.error(str);
    console.error(decoded.getUniqTypes());

    expect(str).not.toBe(null);
  });
});
