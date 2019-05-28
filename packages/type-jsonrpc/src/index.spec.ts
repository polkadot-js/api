// Copyright 2017-2019 @polkadot/jsonrpc authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import interfaces from './';

describe('jsonrpc', () => {
  it('exports the available interfaces', () => {
    expect(interfaces).toBeDefined();
    expect(Object.keys(interfaces).length).toBeGreaterThan(0);
  });
});
