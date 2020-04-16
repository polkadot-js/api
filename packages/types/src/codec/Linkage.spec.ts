// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { TypeRegistry } from '../create/registry';
import Linkage from './Linkage';

const registry = new TypeRegistry();

describe('Linkage', (): void => {
  it('decodes with ValidatorPrefs', (): void => {
    const LINKA = { next: '5GznmRvdi5htUJKnMSWJgJUzSJJXSvWuHRSEdyUbHJZDNcwU', previous: null };
    const PREFS = { commission: '100,000,000' };

    // prefs sanity check
    expect(
      registry.createType(
        'ValidatorPrefs',
        '0x0284d717'
      ).toHuman()
    ).toEqual(PREFS);

    // linkage sanity checks
    expect(
      new Linkage(registry, 'AccountId', '0x0001da30b68f54f686f586ddb29de12b682dd8bd1404566fb8a8db5dec20aa5b6b36').toHuman()
    ).toEqual(LINKA);
    expect(
      registry.createType(
        'Linkage<AccountId>' as any,
        '0x0001da30b68f54f686f586ddb29de12b682dd8bd1404566fb8a8db5dec20aa5b6b36'
      ).toHuman()
    ).toEqual(LINKA);

    // actual check
    expect(
      registry.createType(
        '(ValidatorPrefs, Linkage<AccountId>)' as any,
        '0x0284d7170001da30b68f54f686f586ddb29de12b682dd8bd1404566fb8a8db5dec20aa5b6b36'
      ).toHuman()
    ).toEqual([PREFS, LINKA]);
  });
});
