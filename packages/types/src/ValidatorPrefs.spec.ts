// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import ValidatorPrefs from './ValidatorPrefs';

describe('ValidatorPrefs', () => {
  it('starts with empty values', () => {
    expect(
      new ValidatorPrefs().validatorPayment.toNumber()
    ).toEqual(0);
  });

  it('exposes the internal values via get', () => {
    const prefs = new ValidatorPrefs({
      unstakeThreshold: 3,
      validatorPayment: 12345
    });

    expect(prefs.unstakeThreshold.toNumber()).toEqual(3);
    expect(prefs.validatorPayment.toNumber()).toEqual(12345);
  });
});
