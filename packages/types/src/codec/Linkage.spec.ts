// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { TypeRegistry } from '../create/registry';

const registry = new TypeRegistry();

describe('Linkage', (): void => {
  it('decodes with ValidatorPrefs', (): void => {
    // prefs sanity check
    expect(
      registry.createType(
        'ValidatorPrefs',
        '0x0284d717'
      ).toHuman()
    ).toEqual({ commission: '100,000,000' });

    // linkage sanity check
    expect(
      registry.createType(
        'Linkage<AccountId>' as any,
        '0x0001da30b68f54f686f586ddb29de12b682dd8bd1404566fb8a8db5dec20aa5b6b36'
      ).toHuman()
    ).toEqual({ next: null, previous: '5GznmRvdi5htUJKnMSWJgJUzSJJXSvWuHRSEdyUbHJZDNcwU' });

    // actual check
    expect(
      registry.createType(
        '(ValidatorPrefs, Linkage<AccountId>)' as any,
        '0x0284d7170001da30b68f54f686f586ddb29de12b682dd8bd1404566fb8a8db5dec20aa5b6b36'
      ).toHuman()
    ).toEqual([
      { commission: '100,000,000' },
      { next: null, previous: '5GznmRvdi5htUJKnMSWJgJUzSJJXSvWuHRSEdyUbHJZDNcwU' }
    ]);
  });
});
