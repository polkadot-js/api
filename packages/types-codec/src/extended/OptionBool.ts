// Copyright 2017-2022 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@polkadot/util/types';
import type { AnyBool, Inspect, Registry } from '../types';

import { isHex, isU8a, u8aToU8a } from '@polkadot/util';

import { Option } from '../base/Option';
import { bool as Bool } from '../native/Bool';

function decodeU8a (registry: Registry, value: Uint8Array): null | Bool {
  // Encoded as -
  //  - 0 = None
  //  - 1 = True
  //  - 2 = False
  return value[0] === 0
    ? null
    : new Bool(registry, value[0] === 1);
}

/**
 * @name OptionBool
 * @description A specific implementation of Option<bool> than allows for single-byte encoding
 */
export class OptionBool extends Option<Bool> {
  constructor (registry: Registry, value?: Option<Bool> | AnyBool | Uint8Array | HexString | null) {
    super(
      registry,
      Bool,
      isU8a(value) || isHex(value)
        ? decodeU8a(registry, u8aToU8a(value))
        : value
    );
  }

  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  public override get encodedLength (): number {
    return 1;
  }

  /**
   * @description The length of the initial encoded value (Only available when constructed from a Uint8Array)
   */
  public override get initialU8aLength (): number | undefined {
    return 1;
  }

  /**
   * @description Checks if the value is an empty value (always false)
   */
  public get isFalse (): boolean {
    return this.isSome
      ? !this.value.valueOf()
      : false;
  }

  /**
   * @description Checks if the value is an empty value (always false)
   */
  public get isTrue (): boolean {
    return this.isSome
      ? this.value.valueOf()
      : false;
  }

  /**
   * @description Returns a breakdown of the hex encoding for this Codec
   */
  public override inspect (): Inspect {
    return { outer: [this.toU8a()] };
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  public override toRawType (isBare?: boolean): string {
    return isBare
      ? 'bool'
      : 'Option<bool>';
  }

  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  public override toU8a (isBare?: boolean): Uint8Array {
    if (isBare) {
      return super.toU8a(true);
    }

    return this.isSome
      ? new Uint8Array([this.isTrue ? 1 : 2])
      : new Uint8Array([0]);
  }
}
