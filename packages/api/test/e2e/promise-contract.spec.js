// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import testingPairs from '@polkadot/keyring/testingPairs';

import abi from '../data/erc20.json';
import Api from '../../src/promise';

describe.skip('e2e contracts', () => {
  let keyring;
  let api;

  beforeEach(async (done) => {
    if (!api) {
      api = await Api.create();
      keyring = testingPairs({ type: 'sr25519' });
    }

    jest.setTimeout(30000);
    done();
  });

  it('deploys a contrract', async () => {
    const contract = api.contract(abi);
  });
});
