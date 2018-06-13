// Copyright 2017-2018 @polkadot/api-rx authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

const createObservable = require('./subject');

describe('subject', () => {
  const params = [123, false];
  let callback;
  let section;
  let subscription;
  let observable;

  beforeEach(() => {
    const subMethod = jest.fn((name, ...params) => {
      callback = params.pop();

      return Promise.resolve(12345);
    });

    subMethod.unsubscribe = jest.fn(() => {
      return Promise.resolve(true);
    });

    section = {
      subMethod
    };

    observable = createObservable('subMethod', params, section);
  });

  afterEach(() => {
    if (subscription) {
      subscription.unsubscribe();
    }
  });

  it('subscribes via the api section', (done) => {
    observable.subscribe((value) => {
      if (value) {
        expect(
          section.subMethod
        ).toHaveBeenCalledWith(123, false, expect.anything());

        done();
      }
    });
    callback(null, 'test');
  });

  it('returns the observable value', (done) => {
    subscription = observable.subscribe((value) => {
      if (value) {
        expect(value).toEqual('test');
        done();
      }
    });

    callback(null, 'test');
  });

  it('ignores errors, returns the observable value', (done) => {
    subscription = observable.subscribe((value) => {
      if (value) {
        expect(value).toEqual('test');
        done();
      }
    });

    callback(new Error('error'));
    callback(null, 'test');
  });
});
