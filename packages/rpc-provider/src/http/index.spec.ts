// Copyright 2017-2019 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { TEST_HTTP_URL } from '../../test/mockHttp';
import Http from './';

describe('Http', (): void => {
  let http: Http;

  beforeEach(() => {
    http = new Http(TEST_HTTP_URL);
  });

  it('requires an http:// prefixed endpoint', (): void => {
    expect(
      () => new Http('ws://')
    ).toThrow(/with 'http/);
  });

  it('allows https:// endpoints', (): void => {
    expect(
      () => new Http('https://')
    ).not.toThrow();
  });

  it('always returns isConnected true', (): void => {
    expect(http.isConnected()).toEqual(true);
  });

  it('does not (yet) support subscribe', (): void => {
    return http.subscribe('', '', [], (cb) => { expect(cb).toEqual(expect.anything()); }).catch((error) => {
      expect(error.message).toMatch(/does not have subscriptions/);
    });
  });

  it('does not (yet) support unsubscribe', (): void => {
    return http.unsubscribe('', '', 0).catch((error) => {
      expect(error.message).toMatch(/does not have subscriptions/);
    });
  });
});
