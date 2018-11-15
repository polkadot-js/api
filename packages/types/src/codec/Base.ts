// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

/**
 * A type extends the Base class, when it holds a value
 */
export default class Base<T = any> {
  protected raw: T;

  constructor (value?: any) {
    this.raw = value;
  }
}
