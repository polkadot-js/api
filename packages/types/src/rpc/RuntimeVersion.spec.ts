// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import rpc from '../json/RuntimeVersion.002.json';
import RuntimeVersion from './RuntimeVersion';

describe('RuntimeVersion', () => {
  const version = new RuntimeVersion(rpc.result);

  it('has the correct authoring', () => {
    expect(version.authoringVersion.toNumber()).toEqual(10);
  });

  it('has the apis', () => {
    const api = version.apis[0];

    expect(api.id.toHex()).toEqual('0xdf6acb689907609b');
    expect(api.version.toNumber()).toEqual(2);
  });

  it('has the correct implementation', () => {
    expect(version.implName.toString()).toEqual('substrate-node');
    expect(version.implVersion.toNumber()).toEqual(60);
  });

  it('has the correct spec', () => {
    expect(version.specName.toString()).toEqual('node');
    expect(version.specVersion.toNumber()).toEqual(60);
  });
});
