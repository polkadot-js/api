// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import json3 from '@polkadot/types-support/json/GrandpaRoundstate.001.json';

import { TypeRegistry } from '../../create';

describe('ReportedRoundStates', (): void => {
  const registry = new TypeRegistry();

  it('decodes from an actual message', (): void => {
    const states = registry.createType('ReportedRoundStates', json3.result);

    expect(states.best.precommits.missing.size).toEqual(250);
  });
});
