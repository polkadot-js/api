// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import ApiPromise from '../promise';
import { ApiOptions } from '../types';
import Mock from '@polkadot/rpc-provider/mock/index';
import Metadata from '../../../types/src/Metadata';

describe('Metadata queries', () => {
  let mock: Mock;

  beforeEach(() => {
    jest.setTimeout(3000000);
    mock = new Mock();
  });

  it('Create API instance with metadata map and makes the runtime, rpc, state & extrinsics available', async () => {
    const rpcData = await mock.send('state_getMetadata',[]);
    const genesisHash = await mock.send('chain_getBlockHash',[]);
    const specVersion = await mock.send('chain_getRuntimeVersion', []);
    const prebundles: any = {};
    const key = `${genesisHash}-${specVersion}`;
    prebundles[key] = rpcData;
    const api = await ApiPromise.create({provider: mock, prebundles} as ApiOptions);
    expect(api.genesisHash).toBeDefined();
    const metadata: Metadata = new Metadata(rpcData);
    expect(api.runtimeMetadata.toString()).toEqual(metadata.toString());
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
    const genesisHash = await mock.send('chain_getBlockHash',[]);
    const specVersion = await mock.send('chain_getRuntimeVersion', []);
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
