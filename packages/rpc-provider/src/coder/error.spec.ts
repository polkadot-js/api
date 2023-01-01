// Copyright 2017-2023 @polkadot/rpc-provider authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { isError } from '@polkadot/util/is/error';

import RpcError from './error';

describe('RpcError', (): void => {
  describe('constructor', (): void => {
    it('constructs an Error that is still an Error', (): void => {
      expect(
        isError(
          new RpcError()
        )
      ).toEqual(true);
    });
  });

  describe('static', (): void => {
    it('exposes the .CODES as a static', (): void => {
      expect(
        Object.keys(RpcError.CODES)
      ).not.toEqual(0);
    });
  });

  describe('constructor properties', (): void => {
    it('sets the .message property', (): void => {
      expect(
        new RpcError('test message').message
      ).toEqual('test message');
    });

    it("sets the .message to '' when not set", (): void => {
      expect(
        new RpcError().message
      ).toEqual('');
    });

    it('sets the .code property', (): void => {
      expect(
        new RpcError('test message', 1234).code
      ).toEqual(1234);
    });

    it('sets the .code to UKNOWN when not set', (): void => {
      expect(
        new RpcError('test message').code
      ).toEqual(RpcError.CODES.UNKNOWN);
    });

    it('sets the .data property', (): void => {
      const data = 'here';

      expect(
        new RpcError('test message', 1234, data).data
      ).toEqual(data);
    });

    it('sets the .data property to generic value', (): void => {
      const data = { custom: 'value' } as const;

      expect(
        new RpcError('test message', 1234, data).data
      ).toEqual(data);
    });
  });

  describe('stack traces', (): void => {
    // eslint-disable-next-line @typescript-eslint/ban-types
    let captureStackTrace: (targetObject: Record<string, any>, constructorOpt?: Function | undefined) => void;

    beforeEach((): void => {
      captureStackTrace = Error.captureStackTrace;

      Error.captureStackTrace = function (error): void {
        Object.defineProperty(error, 'stack', {
          configurable: true,
          get: function getStack (): string {
            const value = 'some stack returned';

            Object.defineProperty(this, 'stack', { value });

            return value;
          }
        });
      };
    });

    afterEach((): void => {
      Error.captureStackTrace = captureStackTrace;
    });

    it('captures via captureStackTrace when available', (): void => {
      expect(
        new RpcError().stack
      ).toEqual('some stack returned');
    });

    it('captures via stack when captureStackTrace not available', (): void => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      Error.captureStackTrace = null as any;

      expect(
        new RpcError().stack.length
      ).not.toEqual(0);
    });
  });
});
