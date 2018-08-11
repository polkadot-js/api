// Copyright 2017-2018 @polkadot/jsonrpc authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import interfaces from './index';

describe('jsonrpc', () => {
  it('exports the available interfaces', () => {
    expect(interfaces).toBeDefined();
    expect(Object.keys(interfaces).length).toBeGreaterThan(0);
  });
});
