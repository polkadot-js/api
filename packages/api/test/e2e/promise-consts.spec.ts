// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { BlockNumber } from '@polkadot/types';

import describeE2E from '../util/describeE2E';

describeE2E({
  except: ['remote-substrate-1.0', 'substrate-1.0']
})('e2e consts', (api) => {
  it('democracy.cooloffPeriod parameter type', () => {
    expect(api.consts.democracy.cooloffPeriod).toBeInstanceOf(BlockNumber);
    expect(api.consts.democracy.cooloffPeriod.eq(432000)).toBeTruthy();
  });
});
