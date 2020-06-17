// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { TypeRegistry } from '../../create';
import json3 from '../../json/GrandpaRoundstate.001.json';

describe('ReportedRoundStates', (): void => {
  const registry = new TypeRegistry();

  it('decodes from an actual message', (): void => {
    const states = registry.createType('ReportedRoundStates', json3.result);

    expect(states.best.precommits.missing.size).toEqual(250);
  });
});
