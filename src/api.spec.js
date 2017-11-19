// ISC, Copyright 2017 Jaco Greeff

/* eslint-disable no-unused-expressions */

const sinon = require('sinon');

const { isFunction } = require('@polkadot/util/is');

const Api = require('./api');

describe('Api', () => {
  let api;
  let provider;

  beforeEach(() => {
    provider = {
      send: (method, params) => {
        return Promise.resolve(params[0]);
      }
    };
    sinon.spy(provider, 'send');
    api = new Api(provider);
  });

  afterEach(() => {
    provider.send.restore();
  });

  describe('constructor', () => {
    it('requires a provider', () => {
      expect(
        () => new Api()
      ).to.throw(/Instantiate the Api/);
    });

    it('requires a provider with a send method', () => {
      expect(
        () => new Api({})
      ).to.throw(/does not expose send/);
    });

    it('sets up the chain interface', () => {
      expect(api.chain).to.be.ok;
    });

    it('sets up the state interface', () => {
      expect(api.state).to.be.ok;
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
        expect(Object.keys(container)).to.deep.equal(['blah', 'bleh']);
      });

      it('had function calls for the attached methods', () => {
        expect(isFunction(container.blah)).to.be.true;
        expect(isFunction(container.bleh)).to.be.true;
      });
    });

    describe('calling', () => {
      it('wraps errors with the call signature', () => {
        return container
          .blah()
          .catch((error) => {
            expect(error).to.match(/test_blah\(foo: Address\) => Address/);
          });
      });

      it('checks for mismatched parameters', () => {
        return container
          .bleh(1)
          .catch((error) => {
            expect(error).to.match(/0 params expected, found 1 instead/);
          });
      });

      it('calls the provider with the correct parameters', () => {
        return container
          .blah('0x123')
          .then(() => {
            expect(provider.send).to.have.been.calledWith('test_blah', [
              '0x0000000000000000000000000000000000000123'
            ]);
          });
      });
    });
  });
});
