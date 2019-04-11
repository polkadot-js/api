// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { logger } from '.';
import { format } from './logger';

describe('logger', () => {
  let dateMatch: any;
  let prefixMatch: any;
  let l: any;
  let ln: any;
  let spy: any;
  let oldEnv: any;

  beforeEach(() => {
    oldEnv = process.env;
    process.env.NODE_ENV = 'development';

    ln = logger('notDebug');

    process.env.DEBUG = 'test';

    l = logger('test');

    spy = {
      error: jest.fn(),
      log: jest.fn(),
      warn: jest.fn()
    };
    (global as any).console = spy;

    dateMatch = expect.stringMatching(/20[0-9]{2}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}:[0-9]{2}/);
    prefixMatch = expect.stringMatching(/TEST:/);
  });

  afterEach(() => {
    process.env = oldEnv;
    jest.restoreAllMocks();
  });

  describe('format', () => {
    it('returns null as-is', () => {
      expect(format(null)).toEqual(null);
    });

    it('returns undefined as-is', () => {
      expect(format(undefined)).toEqual(undefined);
    });
  });

  it('logs to console.log with .log', () => {
    l.log('console.log test');

    expect(spy.log).toHaveBeenCalledWith(
      dateMatch,
      prefixMatch,
      expect.stringMatching('console.log test')
    );
  });

  it('logs with mulptiple values', () => {
    l.log('test', 'a', 2);

    expect(spy.log).toHaveBeenCalledWith(
      dateMatch,
      prefixMatch,
      expect.stringMatching('test'),
      expect.stringMatching('a'),
      2
    );
  });

  it('logs when called with function', () => {
    l.log(() => 'a function test');

    expect(spy.log).toHaveBeenCalledWith(
      dateMatch,
      prefixMatch,
      expect.stringMatching('a function test')
    );
  });

  it('logs to console.error with .error', () => {
    l.error('console.error test');

    expect(spy.error).toHaveBeenCalledWith(
      dateMatch,
      prefixMatch,
      expect.stringMatching('console.error test')
    );
  });

  it('logs to console.warn with .warn', () => {
    l.warn('console.warn test');

    expect(spy.warn).toHaveBeenCalledWith(
      dateMatch,
      prefixMatch,
      expect.stringMatching('console.warn test')
    );
  });

  it('does debug log when DEBUG specified', () => {
    l.debug('test');

    expect(spy.log).toHaveBeenCalledWith(
      dateMatch,
      prefixMatch,
      expect.stringMatching('test')
    );
  });

  it('does debug log when DEBUG partial specified', () => {
    l = logger('testing');
    l.debug('test');

    expect(spy.log).toHaveBeenCalledWith(
      dateMatch,
      expect.stringMatching(/TESTING:/),
      expect.stringMatching('test')
    );
  });

  it('does not debug log when non-matching DEBUG specified', () => {
    process.env.DEBUG = 'blah';

    l = logger('test');
    l.debug('test');

    expect(spy.log).not.toHaveBeenCalled();
  });

  it('does debug log when NODE_ENV=test specified', () => {
    process.env.DEBUG = 'blah';
    process.env.NODE_ENV = 'test';

    l = logger('test');
    l.debug('test');

    expect(spy.log).toHaveBeenCalled();
  });

  it('does not debug log when no process.env', () => {
    process.env = void 0 as any;

    l = logger('test');
    l.debug('test');

    expect(spy.log).not.toHaveBeenCalled();
  });

  it('does not debug log when no DEBUG specified', () => {
    ln.debug('test');

    expect(spy.log).not.toHaveBeenCalled();
  });
});
