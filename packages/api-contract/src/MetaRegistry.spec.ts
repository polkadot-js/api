// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import MetaRegistry from './MetaRegistry';

import v2ABI from './test/contracts/V2.json';

describe('MetaRegistry', (): void => {
  describe('construction', (): void => {
    it('initializes from a contract ABI', (): void => {
      const metaRegistry = new MetaRegistry(v2ABI);

      expect(
        true
      ).toEqual(true);
    });
  });
});
