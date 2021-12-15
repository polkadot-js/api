// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { CodecRegistry } from '@polkadot/types-codec/types';
import type { BN } from '@polkadot/util';
import type { HexString } from '@polkadot/util/types';

import { Base } from '@polkadot/types-codec';
import { isBigInt, isBn, isHex, isNumber, isU8a, u8aConcat, u8aToBn, u8aToHex, u8aToU8a } from '@polkadot/util';
import { decodeAddress } from '@polkadot/util-crypto';

import { GenericAccountId } from './AccountId';
import { GenericAccountIndex } from './AccountIndex';

// eslint-disable-next-line no-use-before-define
type AnyAddress = bigint | BN | GenericLookupSource | GenericAccountId | GenericAccountIndex | number[] | Uint8Array | number | string;

export const ACCOUNT_ID_PREFIX = new Uint8Array([0xff]);

/** @internal */
function decodeString (registry: CodecRegistry, value: string): GenericAccountId | GenericAccountIndex {
  const decoded = decodeAddress(value);

  return decoded.length === 32
    ? registry.createTypeUnsafe('AccountId', [decoded])
    : registry.createTypeUnsafe('AccountIndex', [u8aToBn(decoded, true)]);
}

/** @internal */
function decodeU8a (registry: CodecRegistry, value: Uint8Array): GenericAccountId | GenericAccountIndex {
  // This allows us to instantiate an address with a raw publicKey. Do this first before
  // we checking the first byte, otherwise we may split an already-existent valid address
  if (value.length === 32) {
    return registry.createTypeUnsafe('AccountId', [value]);
  } else if (value[0] === 0xff) {
    return registry.createTypeUnsafe('AccountId', [value.subarray(1)]);
  }

  const [offset, length] = GenericAccountIndex.readLength(value);

  return registry.createTypeUnsafe('AccountIndex', [u8aToBn(value.subarray(offset, offset + length), true)]);
}

/**
 * @name LookupSource
 * @description
 * A wrapper around an AccountId and/or AccountIndex that is encoded with a prefix.
 * Since we are dealing with underlying publicKeys (or shorter encoded addresses),
 * we extend from Base with an AccountId/AccountIndex wrapper. Basically the Address
 * is encoded as `[ <prefix-byte>, ...publicKey/...bytes ]` as per spec
 */
export class GenericLookupSource extends Base<GenericAccountId | GenericAccountIndex> {
  constructor (registry: CodecRegistry, value: AnyAddress = new Uint8Array()) {
    super(registry, GenericLookupSource._decodeAddress(registry, value));
  }

  /** @internal */
  private static _decodeAddress (registry: CodecRegistry, value: AnyAddress): GenericAccountId | GenericAccountIndex {
    return value instanceof GenericLookupSource
      ? value.inner
      : value instanceof GenericAccountId || value instanceof GenericAccountIndex
        ? value
        : isBn(value) || isNumber(value) || isBigInt(value)
          ? registry.createTypeUnsafe('AccountIndex', [value])
          : Array.isArray(value) || isHex(value) || isU8a(value)
            ? decodeU8a(registry, u8aToU8a(value))
            : decodeString(registry, value);
  }

  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  public override get encodedLength (): number {
    const rawLength = this._rawLength;

    return rawLength + (
      // for 1 byte AccountIndexes, we are not adding a specific prefix
      rawLength > 1
        ? 1
        : 0
    );
  }

  /**
   * @description The length of the raw value, either AccountIndex or AccountId
   */
  protected get _rawLength (): number {
    return this.inner instanceof GenericAccountIndex
      ? GenericAccountIndex.calcLength(this.inner)
      : this.inner.encodedLength;
  }

  /**
   * @description Returns a hex string representation of the value
   */
  public override toHex (): HexString {
    return u8aToHex(this.toU8a());
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  public override toRawType (): string {
    return 'Address';
  }

  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  public override toU8a (isBare?: boolean): Uint8Array {
    const encoded = this.inner.toU8a().subarray(0, this._rawLength);

    return isBare
      ? encoded
      : u8aConcat(
        this.inner instanceof GenericAccountIndex
          ? GenericAccountIndex.writeLength(encoded)
          : ACCOUNT_ID_PREFIX,
        encoded
      );
  }
}
