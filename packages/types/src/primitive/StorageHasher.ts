// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Enum from '../codec/Enum';

export default class StorageHasher extends Enum {
  constructor (value?: any) {
    super([
      'Blake2_128',
      'Blake2_256',
      'Twox128',
      'Twox256',
      'Twox64Concat'
    ], value);
  }

  /**
   * @description Is the enum Blake2_128?
   */
  get isBlake2128 (): boolean {
    return this.toNumber() === 0;
  }

  /**
   * @description Is the enum Blake2_256?
   */
  get isBlake2256 (): boolean {
    return this.toNumber() === 1;
  }

  /**
   * @description Is the enum Twox128?
   */
  get isTwox128 (): boolean {
    return this.toNumber() === 2;
  }

  /**
   * @description Is the enum Twox256?
   */
  get isTwox256 (): boolean {
    return this.toNumber() === 3;
  }

  /**
   * @description Is the enum isTwox64Concat?
   */
  get isTwox64Concat (): boolean {
    return this.toNumber() === 4;
  }

  toJSON (): string {
    // This looks prettier in the generated JSON
    return this.toString();
  }
}
