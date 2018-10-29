// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import json from './json/Header.002.json';
import Digest from './Digest';

describe('Digest', () => {
  it('decodes logs with seals', () => {
    const digest = new Digest(json.result.digest);

    expect(digest.logs.length).toEqual(1);

    const log = digest.logs.get(0);

    expect(log.type).toBe('Seal');
    expect(log.value.toJSON()).toEqual([
      256802739,
      '0x7f8635f18fc5ecb82b39eca5b44b7e824e24870e2452ff4e71759ca673b422cbdc767fbb8bf9f7ab2a9b883ad14e62f56ae0c48ed405575a71bbb1e9d5c69301'
    ]);
  });
});
