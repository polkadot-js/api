// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { RuntimeVersion } from './types';

import { TypeRegistry } from '../../create';
import rpc from '../../json/RuntimeVersion.002.json';

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
