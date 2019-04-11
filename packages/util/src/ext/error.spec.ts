// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import isError from '../is/error';
import { ExtError } from '.';

describe('ExtError', () => {
  describe('constructor', () => {
    it('constructs an Error that is still an Error', () => {
      expect(
        isError(
          new ExtError()
        )
      ).toEqual(true);
    });
  });

  describe('static', () => {
    it('exposes the .CODES as a static', () => {
      expect(
        Object.keys(ExtError.CODES)
      ).not.toEqual(0);
    });
  });

  describe('constructor properties', () => {
    it('sets the .message property', () => {
      expect(
        new ExtError('test message').message
      ).toEqual('test message');
    });

    it("sets the .message to '' when not set", () => {
      expect(
        new ExtError().message
      ).toEqual('');
    });

    it('sets the .code property', () => {
      expect(
        new ExtError('test message', 1234).code
      ).toEqual(1234);
    });

    it('sets the .code to UKNOWN when not set', () => {
      expect(
        new ExtError('test message').code
      ).toEqual(ExtError.CODES.UNKNOWN);
    });

    it('sets the .data property', () => {
      const data = { some: { value: 'here' } };

      expect(
        new ExtError('test message', 1234, data).data
      ).toEqual(data);
    });
  });

  describe('stack traces', () => {
    let captureStackTrace: any;

    beforeEach(() => {
      captureStackTrace = Error.captureStackTrace;

      Error.captureStackTrace = function (error) {
        Object.defineProperty(error, 'stack', {
          configurable: true,
          get: function getStack () {
            const value = 'some stack returned';

            Object.defineProperty(this, 'stack', { value });

            return value;
          }
        });
      };
    });

    afterEach(() => {
      Error.captureStackTrace = captureStackTrace;
    });

    it('captures via captureStackTrace when available', () => {
      expect(
        new ExtError().stack
      ).toEqual('some stack returned');
    });

    it('captures via stack when captureStackTrace not available', () => {
      Error.captureStackTrace = null as any; // grrr

      expect(
        new ExtError().stack.length
      ).not.toEqual(0);
    });
  });
});
