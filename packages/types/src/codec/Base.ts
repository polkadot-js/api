// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

/**
 * @name Base
 * @description A type extends the Base class, when it holds a value
 */
export default class Base<T> {
  protected raw: T;

  constructor (value?: any) {
    this.raw = value;
  }
}
