// Copyright 2017-2019 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Mock from './';

describe('send', () => {
  let mock: Mock;

  beforeEach(() => {
    mock = new Mock();
  });

  it('fails on non-supported methods', () => {
    return mock
      .send('something_invalid', [])
      .catch((error) => {
        expect(error.message).toMatch(/Invalid method/);
      });
  });

  it('returns values for mocked requests', () => {
    return mock
      .send('system_name', [])
      .then((result) => {
        expect(result).toBe('mockClient');
      });
  });
});
