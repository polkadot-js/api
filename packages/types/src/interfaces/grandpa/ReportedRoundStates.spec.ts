// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

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
