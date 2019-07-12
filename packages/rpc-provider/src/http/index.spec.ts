// Copyright 2017-2019 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { TEST_HTTP_URL } from '../../test/mockHttp';
import Http from './';

describe('Http', (): void => {
  let http: Http;

  beforeEach((): void => {
    http = new Http(TEST_HTTP_URL);
  });

  it('requires an http:// prefixed endpoint', (): void => {
    expect(
      (): Http => new Http('ws://')
    ).toThrow(/with 'http/);
  });

  it('allows https:// endpoints', (): void => {
    expect(
      (): Http => new Http('https://')
    ).not.toThrow();
  });

  it('always returns isConnected true', (): void => {
    expect(http.isConnected()).toEqual(true);
  });

  it('does not (yet) support subscribe', (): Promise<number | void> => {
    return http.subscribe('', '', [], (cb): void => {
      expect(cb).toEqual(expect.anything());
    }).catch((error): void => {
      expect(error.message).toMatch(/does not have subscriptions/);
    });
  });

  it('does not (yet) support unsubscribe', (): Promise<boolean | void> => {
    return http.unsubscribe('', '', 0).catch((error): void => {
      expect(error.message).toMatch(/does not have subscriptions/);
    });
  });
});
