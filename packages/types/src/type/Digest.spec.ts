// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import json from '../json/Header.002.json';
import Digest from './Digest';

describe('Digest', () => {
  it('decodes logs with seals', () => {
    const digest = new Digest(json.result.digest);

    expect(digest.logs.length).toEqual(1);

    const log = digest.logs[0];

    expect(log.type).toBe('Seal');
    expect(log.value.toJSON()).toEqual([
      256804359,
      '0x2c0e0ee8a5d1a073da3f8db002b8eaebcd7b1a7eb25662e09f9ef0ac58d96bf17896256cd5f0bc672f96aab49fe5163ca5cb4c1a0f047dc39e89cd4a9eb2ea05'
    ]);
  });
});
