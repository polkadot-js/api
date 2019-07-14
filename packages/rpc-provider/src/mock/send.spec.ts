// Copyright 2017-2019 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Mock from './';

describe('send', (): void => {
  let mock: Mock;

  beforeEach((): void => {
    mock = new Mock();
  });

  it('fails on non-supported methods', (): Promise<any> => {
    return mock
      .send('something_invalid', [])
      .catch((error): void => {
        expect(error.message).toMatch(/Invalid method/);
      });
  });

  it('returns values for mocked requests', (): Promise<void> => {
    return mock
      .send('system_name', [])
      .then((result): void => {
        expect(result).toBe('mockClient');
      });
  });
});
