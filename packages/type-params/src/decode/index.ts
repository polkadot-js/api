// Copyright 2017-2018 @polkadot/params authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { EncodingVersions, Param$Decoded, Param$Type$Array, Param$Types, Param$Value, Param$Value$Array } from '../types';

import u8aToBn from '@polkadot/util/u8a/toBn';
import toU8a from '@polkadot/util/u8a/toU8a';
import isNull from '@polkadot/util/is/null';
import isUndefined from '@polkadot/util/is/undefined';

import decodeValue from './value';

function decodeTuple (type: Param$Type$Array, input: Uint8Array | null | undefined, version: EncodingVersions, isStorage: boolean): Param$Decoded {
  if (!input) {
    return {
      length: 0,
      value: []
    };
  }

  const value: Param$Value$Array = [];
  let length = 0;

  type.forEach((_type: Param$Types) => {
    const decoded = decode(_type, input.subarray(length), version, isStorage);

    // NOTE small TS hack, since we don't have recursive arrays, assume primitives to push
    value.push(decoded.value as Param$Value);
    length += decoded.length;
  });

  return {
    length,
    value
  };
}

function decodeArray ([ type ]: Param$Type$Array, input: Uint8Array | null | undefined, version: EncodingVersions, isStorage: boolean): Param$Decoded {
  if (!input) {
    return {
      length: 0,
      value: []
    };
  }

  const arrayLength = u8aToBn(input.subarray(0, 4), true).toNumber();
  const value: Param$Value$Array = [];
  let length = 4;

  for (let index = 0; index < arrayLength; index++) {
    const decoded = decode(type, input.subarray(length), version, isStorage);

    // NOTE small TS hack, since we don't have recursive arrays, assume primitives to push
    value.push(decoded.value as Param$Value);
    length += decoded.length;
  }

  return {
    length,
    value
  };
}

export default function decode (type: Param$Types, _input: Uint8Array | string | null | undefined, version: EncodingVersions, isStorage: boolean = false): Param$Decoded {
  const input: Uint8Array | null | undefined = isUndefined(_input) || isNull(_input)
    ? _input
    : toU8a(_input);

  if (Array.isArray(type)) {
    // Arrays have single entries, Tuples will have multiple types
    if (type.length === 1) {
      return decodeArray(type, input, version, isStorage);
    } else {
      return decodeTuple(type, input, version, isStorage);
    }
  }

  return decodeValue(decode, type, input, version, isStorage);
}
