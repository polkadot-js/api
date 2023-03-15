// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/node.d.ts" />

/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import type { RuntimeVersion } from './types.js';

import rpc from '@polkadot/types-support/json/RuntimeVersion.002.json' assert { type: 'json' };

import { TypeRegistry } from '../../create/index.js';

describe('RuntimeVersion', (): void => {
  const registry = new TypeRegistry();
  let version: RuntimeVersion;

  beforeEach((): void => {
    version = registry.createType('RuntimeVersion', rpc.result);
  });

  it('has the correct authoring', (): void => {
    expect(version.authoringVersion.toNumber()).toEqual(10);
  });

  it('has the apis', (): void => {
    const [apiId, apiVersion] = version.apis[0];

    expect(apiId.toHex()).toEqual('0xdf6acb689907609b');
    expect(apiVersion.toNumber()).toEqual(2);
  });

  it('has the correct implementation', (): void => {
    expect(version.implName.toString()).toEqual('substrate-node');
    expect(version.implVersion.toNumber()).toEqual(60);
  });

  it('has the correct spec', (): void => {
    expect(version.specName.toString()).toEqual('node');
    expect(version.specVersion.toNumber()).toEqual(60);
  });
});
