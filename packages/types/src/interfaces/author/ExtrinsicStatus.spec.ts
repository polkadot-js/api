// Copyright 2017-2025 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/globals.d.ts" />

/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import type { ExtrinsicStatus } from './types.js';

import rpc from '@polkadot/types-support/json/ExtrinsicStatus.001.json' assert { type: 'json' };

import { TypeRegistry } from '../../create/index.js';

describe('ExtrinsicStatus', (): void => {
  const registry = new TypeRegistry();
  let status: ExtrinsicStatus;

  beforeEach((): void => {
    status = registry.createType('ExtrinsicStatus', rpc.params.result);
  });

  it('has the correct type', (): void => {
    expect(
      status.type
    ).toEqual('Finalized');
  });

  it('has the correct hash', (): void => {
    expect(
      status.value.toString()
    ).toEqual('0xc465b92a72b1d20918d64cd4effa70c2bb58b53a3f8c24c3ac8fd8f465f059b4');
  });
});
