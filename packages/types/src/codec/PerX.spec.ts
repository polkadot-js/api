// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { TypeRegistry } from './create/registry';
import PerX, { MAX_BILL, MAX_MILL} from './PerX';

describe('PerX', (): void => {
  const registry = new TypeRegistry();

  it('works with toPercentage', (): void => {
    const pm = new PerX(registry, 500000, MAX_MILL);

    expect(pm.toPercentage().toFixed(2)).toEqual('50.00');
  });

  it('works with fromPercentage', (): void => {
    const pb = new PerX(registry, 12345678, MAX_BILL);

    // JS rounding at the end...
    expect(pb.fromPercentage(26.78).toNumber()).toEqual(267800001);
  });

  it('caps fromPercentage at 100', (): void => {
    const pb = new PerX(registry, 12345678, MAX_BILL);

    // JS rounding at the end...
    expect(pb.fromPercentage(126.78).toNumber()).toEqual(MAX_BILL);
  });

  it('does not allow fromPercentage nagatives', (): void => {
    const pb = new PerX(registry, 12345678, MAX_BILL);

    // JS rounding at the end...
    expect(pb.fromPercentage(-126.78).toNumber()).toEqual(0);
  });
});
