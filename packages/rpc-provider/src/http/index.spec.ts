// Copyright 2017-2020 @polkadot/rpc-provider authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { TEST_HTTP_URL } from '../../test/mockHttp';
import { HttpProvider } from './';

describe('Http', (): void => {
  let http: HttpProvider;

  beforeEach((): void => {
    http = new HttpProvider(TEST_HTTP_URL);
  });

  it('requires an http:// prefixed endpoint', (): void => {
    expect(
      () => new HttpProvider('ws://')
    ).toThrow(/with 'http/);
  });

  it('allows https:// endpoints', (): void => {
    expect(
      () => new HttpProvider('https://')
    ).not.toThrow();
  });

  it('allows custom headers', (): void => {
    expect(
      () => new HttpProvider('https://', { foo: 'bar' })
    ).not.toThrow();
  });

  it('always returns isConnected true', (): void => {
    expect(http.isConnected).toEqual(true);
  });

  it('does not (yet) support subscribe', (): Promise<number | void> => {
    return http.subscribe('', '', [], (cb): void => {
      expect(cb).toEqual(expect.anything());
    }).catch((error): void => {
      expect((error as Error).message).toMatch(/does not have subscriptions/);
    });
  });

  it('does not (yet) support unsubscribe', (): Promise<boolean | void> => {
    return http.unsubscribe('', '', 0).catch((error): void => {
      expect((error as Error).message).toMatch(/does not have subscriptions/);
    });
  });
});
