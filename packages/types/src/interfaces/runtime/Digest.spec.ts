// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/globals.d.ts" />

/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import json3 from '@polkadot/types-support/json/Header.003.json' assert { type: 'json' };

import { TypeRegistry } from '../../create/index.js';

describe('Digest', (): void => {
  const registry = new TypeRegistry();

  it('has the correct JSON representation', (): void => {
    const digest = registry.createType('Digest', json3.result.digest);

    expect(digest.logs.map((l) => l.toHex())).toEqual(json3.result.digest.logs);
  });

  it('decodes logs with consensus', (): void => {
    const digest = registry.createType('Digest', json3.result.digest);

    expect(digest.logs.length).toEqual(1);

    const log = digest.logs[0];

    expect(log.type).toBe('Consensus');
    expect(log.value.toJSON()).toEqual([
      '0x61757261',
      '0x69c97e0f00000000479c09f7ace12ed3e1af2dba6cca6831e257e80feef56c7474d6c69bae6f4e8a6e0045a87afe14296992c38b7d55abcbe617c441cd35e8667abbcb1678f31802'
    ]);
  });
});
