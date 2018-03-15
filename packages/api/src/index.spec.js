// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

const createApi = require('./index');

describe('Api', () => {
  let api;
  let provider;
  let sendSpy;

  beforeEach(() => {
    provider = {
      send: (method, params) => {
        return Promise.resolve(params[0]);
      }
    };
    sendSpy = jest.spyOn(provider, 'send');
    api = createApi(provider);
  });

  afterEach(() => {
    sendSpy.mockRestore();
  });

  it('requires a provider with a send method', () => {
    expect(
      () => createApi({})
    ).toThrow(/Expected Provider/);
  });

  it('sets up the chain interface', () => {
    expect(api.chain).toBeDefined();
  });

  it('sets up the state interface', () => {
    expect(api.state).toBeDefined();
  });
});
