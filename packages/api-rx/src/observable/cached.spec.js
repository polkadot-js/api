// Copyright 2017-2018 @polkadot/api-rx authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import cachedSubscription from './cached';

describe('cached', () => {
  let creator;
  let section;

  beforeEach(() => {
    const subMethod = jest.fn((name, ...params) => {
      return Promise.resolve(12345);
    });

    subMethod.unsubscribe = jest.fn(() => {
      return Promise.resolve(true);
    });

    const resMethod = jest.fn((name, ...params) => {
      return Promise.resolve(12345);
    });

    section = {
      resMethod,
      subMethod
    };

    creator = cachedSubscription('test', 'subMethod', section);
  });

  it('creates a single observable', () => {
    creator(123).subscribe((value) => {});

    expect(
      section.subMethod
    ).toHaveBeenCalledWith(123, expect.anything());
  });

  it('creates a single observable (multiple calls)', () => {
    const observable1 = creator(123);

    observable1.subscribe((value) => {});

    const observable2 = creator(123);

    observable2.subscribe((value) => {});

    expect(
      observable2
    ).toEqual(observable1);
  });

  it('creates multiple observers for different values', () => {
    const observable1 = creator(123);

    observable1.subscribe((value) => {});

    const observable2 = creator(456);

    observable2.subscribe((value) => {});

    expect(
      observable2
    ).not.toEqual(observable1);
  });

  it('functions as an subject', (done) => {
    const subject = creator(123);

    subject.subscribe((value) => {
      if (value) {
        expect(value).toEqual('test');
        done();
      }
    });

    subject.next('test');
  });
});
