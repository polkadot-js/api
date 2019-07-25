// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { RuntimeVersion } from './types';

import createType from '../../codec/createType';
import rpc from '../../json/RuntimeVersion.002.json';
import { injectDefinitions } from '..';

describe('RuntimeVersion', (): void => {
  let version: RuntimeVersion;

  beforeEach((): void => {
    injectDefinitions();
    version = createType('RuntimeVersion', rpc.result);
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
