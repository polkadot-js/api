// Copyright 2017-2019 @polkadot/keyring authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { KeyringPairs, KeyringPair } from './types';

import { assert, isHex, isU8a, u8aToHex, u8aToU8a } from '@plugnet/util';

import addressDecode from './address/decode';

type KeyringPairMap = {
  // @ts-ignore we use coercion :(
  [index: Uint8Array]: KeyringPair
};

export default class Pairs implements KeyringPairs {
  private _map: KeyringPairMap;

  constructor () {
    this._map = {};
  }

  add (pair: KeyringPair): KeyringPair {
    // @ts-ignore we use coercion :(
    this._map[pair.publicKey()] = pair;

    return pair;
  }

  all (): Array<KeyringPair> {
    return Object.values(this._map);
  }

  get (address: string | Uint8Array): KeyringPair {
    // @ts-ignore we use coercion :(
    const pair = this._map[addressDecode(address)];

    assert(pair, () => {
      const formatted: string = isU8a(address) || isHex(address)
        ? u8aToHex(u8aToU8a(address))
        : address;

      return `Unable to retrieve keypair '${formatted}'`;
    });

    return pair;
  }

  remove (address: string | Uint8Array): void {
    // @ts-ignore we use coercion :(
    delete this._map[addressDecode(address)];
  }
}
