// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import hexToU8a from '@polkadot/util/hex/toU8a';
import u8aConcat from '@polkadot/util/u8a/concat';
import u8aToHex from '@polkadot/util/u8a/toHex';

import Compact from './codec/Compact';
import Method from './Method';

// A proposal in the system. It contains the same data as an extrinsic, but the encoding
// does not allow for signatures or versions, only the callindex & parameters required
export default class Proposal extends Method {
  get length (): number {
    return this.toU8a(true).length;
  }

  byteLength (): number {
    const length = this.length;

    return length + Compact.encode(length).length;
  }

  fromJSON (input: any): Proposal {
    super.fromU8a(hexToU8a(input));

    return this;
  }

  fromU8a (input: Uint8Array): Proposal {
    const [offset, length] = Compact.decode(input);

    super.fromU8a(input.subarray(offset, offset + length.toNumber()));

    return this;
  }

  toU8a (isBare?: boolean): Uint8Array {
    const encoded = super.toU8a();

    return isBare
      ? encoded
      : u8aConcat(
        Compact.encode(encoded.length),
        encoded
      );
  }

  toHex (): string {
    return u8aToHex(this.toU8a());
  }

  toJSON (): any {
    return this.toHex();
  }
}
