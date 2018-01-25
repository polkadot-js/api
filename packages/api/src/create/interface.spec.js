// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

const isFunction = require('@polkadot/util/is/function');

const createInterface = require('./interface');

describe('createInterface', () => {
  let container;
  let provider;

  beforeEach(() => {
    const definition = {
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
    };
    provider = {
      send: jest.fn((method, params) => {
        return Promise.resolve(params[0]);
      })
    };
    container = createInterface(provider, definition, 'test');
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
