// Copyright 2017-2019 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Mock from '.';
import ApiPromise from '@polkadot/api/promise';
import { Metadata } from '@polkadot/types';

describe('pre bundle testing', () => {
  let mock: Mock;

  beforeEach(() => {
    mock = new Mock();
  });

  it('returns values for mocked requests', () => {
    return mock
      .send('system_name', [])
      .then((result) => {
        expect(result).toBe('mockClient');
      });
  });

  it('Create API instance with metadata map and makes the runtime, rpc, state & extrinsics available', async () => {
    const rpcData = await mock.get('rpcData');
    const genesisHash = await mock.get('genesisHash');
    const specVersion = await mock.get('specVersion');
    const prebundles: any = {};
    const key = `${genesisHash}-${specVersion}`;
    prebundles[key] = rpcData;
    const api = await ApiPromise.create({
      prebundles
    });

    expect(api.genesisHash).toBeDefined();
    expect(api.runtimeMetadata).toEqual(new Metadata(rpcData));
    expect(api.runtimeVersion).toBeDefined();
    expect(api.rpc).toBeDefined();
    expect(api.query).toBeDefined();
    expect(api.tx).toBeDefined();
    expect(api.derive).toBeDefined();
  });

  it('Create API instance without metadata and makes the runtime, rpc, state & extrinsics available', async () => {
    const prebundles = {};
    const api = await ApiPromise.create({
      prebundles
    });

    expect(api.genesisHash).toBeDefined();
    expect(api.runtimeMetadata).toBeDefined();
    expect(api.runtimeVersion).toBeDefined();
    expect(api.rpc).toBeDefined();
    expect(api.query).toBeDefined();
    expect(api.tx).toBeDefined();
    expect(api.derive).toBeDefined();
  });

  it('Create API instance with incorect metadata map and makes the runtime, rpc, state & extrinsics available', async () => {
    const rpcData = 'invalid data';
    const genesisHash = await mock.get('genesisHash');
    const specVersion = await mock.get('specVersion');
    const prebundles: any = {};
    const key = `${genesisHash}-${specVersion}`;
    prebundles[key] = rpcData;
    const api = await ApiPromise.create({
      prebundles
    });

    expect(api.genesisHash).toBeDefined();
    expect(api.runtimeMetadata).toBeDefined();
    expect(api.runtimeVersion).toBeDefined();
    expect(api.rpc).toBeDefined();
    expect(api.query).toBeDefined();
    expect(api.tx).toBeDefined();
    expect(api.derive).toBeDefined();
  });
});
