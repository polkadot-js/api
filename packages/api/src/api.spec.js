// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

const isFunction = require('@polkadot/util/is/function');

const Api = require('./api');

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
    api = new Api(provider);
  });

  afterEach(() => {
    sendSpy.mockRestore();
  });

  describe('constructor', () => {
    it('requires a provider with a send method', () => {
      expect(
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

  describe('_createInterface', () => {
    let container;

    beforeEach(() => {
      container = api._createInterface({
        test: {
          methods: {
            blah: {
              inputs: [
                { name: 'foo', type: 'Address' }
              ],
              output: { type: 'Address' }
            },
            bleh: {
              inputs: [],
              output: { type: 'Address' }
            }
          }
        }
      }, 'test');
    });

    describe('method expansion', () => {
      it('adds the specified methods to the interface', () => {
        expect(Object.keys(container)).toEqual(['blah', 'bleh']);
      });

      it('had function calls for the attached methods', () => {
        expect(isFunction(container.blah)).toEqual(true);
        expect(isFunction(container.bleh)).toEqual(true);
      });
    });

    describe('calling', () => {
      it('wraps errors with the call signature', () => {
        return container
          .blah()
          .catch((error) => {
            expect(error.message).toMatch(/test_blah \(foo: Address\): Address/);
          });
      });

      it('checks for mismatched parameters', () => {
        return container
          .bleh(1)
          .catch((error) => {
            expect(error.message).toMatch(/0 params expected, found 1 instead/);
          });
      });

      it('calls the provider with the correct parameters', () => {
        return container
          .blah('0x123')
          .then(() => {
            expect(provider.send).toHaveBeenCalledWith('test_blah', [
              '0x0123'
            ]);
          });
      });
    });
  });
});
