// Copyright 2017-2019 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { TEST_HTTP_URL } from '../../test/mockHttp';
import Http from './';

describe('Http', () => {
  let http: Http;

  beforeEach(() => {
    http = new Http(TEST_HTTP_URL);
  });

  it('requires an http:// prefixed endpoint', () => {
    expect(
      () => new Http('ws://')
    ).toThrow(/with 'http/);
  });

  it('allows https:// endpoints', () => {
    expect(
      () => new Http('https://')
    ).not.toThrow();
  });

  it('always returns isConnected true', () => {
    expect(http.isConnected()).toEqual(true);
  });

  it('does not (yet) support subscribe', () => {
    return http.subscribe('', '', [], (cb) => { expect(cb).toEqual(expect.anything()); }).catch((error) => {
      expect(error.message).toMatch(/does not have subscriptions/);
    });
  });

  it('does not (yet) support unsubscribe', () => {
    return http.unsubscribe('', '', 0).catch((error) => {
      expect(error.message).toMatch(/does not have subscriptions/);
    });
  });
});
