// Copyright 2017-2018 @polkadot/rpc-core authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import Api from './index';

describe('Api', () => {
  let api: any;
  let provider: any;
  let sendSpy: any;

  beforeEach(() => {
    provider = {
      send: (method: any, params: any[]) => {
        return Promise.resolve(params[0]);
      }
    };
    sendSpy = jest.spyOn(provider, 'send');
    api = new Api(provider);
  });

  afterEach(() => {
    sendSpy.mockRestore();
  });

  it('requires a provider with a send method', () => {
    expect(
      // @ts-ignore The expectation is that with no provider it throws
      () => new Api({})
    ).toThrow(/Expected Provider/);
  });

  it('sets up the chain interface', () => {
    expect(api.chain).toBeDefined();
  });

  it('sets up the state interface', () => {
    expect(api.state).toBeDefined();
  });
});
