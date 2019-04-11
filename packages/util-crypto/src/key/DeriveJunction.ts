// Copyright 2017-2019 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';
import { bnToHex, compactAddLength, hexToU8a, isBn, isHex, isNumber, isString, stringToU8a } from '@plugnet/util';

import blake2AsU8a from '../blake2/asU8a';

const RE_NUMBER = /^\d+$/;

const JUNCTION_ID_LEN: number = 32;
const BN_OPTIONS = {
  bitLength: 256,
  isLe: true
};

export default class DeriveJunction {
  private _chainCode: Uint8Array = new Uint8Array(32);
  private _isHard: boolean = false;

  static from (value: string): DeriveJunction {
    const [code, isHard] = value[0] === '/'
      ? [value.substr(1), true]
      : [value, false];
    const result = new DeriveJunction();

    result.soft(
      RE_NUMBER.test(code)
        ? parseInt(code, 10)
        : code
    );

    return isHard
      ? result.harden()
      : result;
  }

  get chainCode (): Uint8Array {
    return this._chainCode;
  }

  get isHard (): boolean {
    return this._isHard;
  }

  get isSoft (): boolean {
    return !this._isHard;
  }

  hard (value: number | BN | string | Uint8Array): DeriveJunction {
    return this.soft(value).harden();
  }

  harden (): DeriveJunction {
    this._isHard = true;

    return this;
  }

  soft (value: number | BN | string | Uint8Array): DeriveJunction {
    if (isNumber(value) || isBn(value)) {
      return this.soft(bnToHex(value, BN_OPTIONS));
    } else if (isString(value)) {
      return isHex(value)
        ? this.soft(hexToU8a(value))
        : this.soft(compactAddLength(stringToU8a(value)));
    }

    if (value.length > JUNCTION_ID_LEN) {
      return this.soft(blake2AsU8a(value));
    }

    this._chainCode.fill(0);
    this._chainCode.set(value, 0);

    return this;
  }

  soften (): DeriveJunction {
    this._isHard = false;

    return this;
  }
}
