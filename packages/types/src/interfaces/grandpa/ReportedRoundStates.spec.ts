// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/globals.d.ts" />

/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import json3 from '@polkadot/types-support/json/GrandpaRoundstate.001.json' assert { type: 'json' };

import { TypeRegistry } from '../../create/index.js';

describe('ReportedRoundStates', (): void => {
  const registry = new TypeRegistry();

  it('decodes from an actual message', (): void => {
    const states = registry.createType('ReportedRoundStates', json3.result);

    expect(states.best.precommits.missing.size).toEqual(250);
  });
});
