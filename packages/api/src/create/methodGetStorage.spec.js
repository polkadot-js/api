// Copyright 2017-2018 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import storage from '@polkadot/storage';

import createApi from '../index';

describe('methodGetStorage', () => {
  let api;
  let provider;

  beforeEach(() => {
    provider = {
      send: jest.fn((method, params) => {
        return Promise.resolve('0x0102');
      })
    };
    api = createApi(provider);
  });

  it('sends without encoding/decoding when encoded key is provided', () => {
    return api.state.getStorage(new Uint8Array([1, 2, 3])).then((value) => {
      expect(value).toEqual(new Uint8Array([1, 2]));
    });
  });

  it('encodes key (with params), decoding response', () => {
    return api.state
      .getStorage(
        storage.staking.public.freeBalanceOf,
        '5EhmTa7fL6SdjgKXo9g6hetR6nHnRAmrtisoGFWEESjzECtY'
      )
      .then((value) => {
        expect(provider.send).toHaveBeenCalledWith('state_getStorage', ['0x11cf1094db4db43356b7787c3e59c39f']);
        expect(value.toNumber()).toEqual(513);
      });
  });
});
