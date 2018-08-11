// Copyright 2017-2018 @polkadot/params authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { EncodingVersions, Param, Param$Type } from '../types';

import assert from '@polkadot/util/assert';
import u8aConcat from '@polkadot/util/u8a/concat';
import bnToU8a from '@polkadot/util/bn/toU8a';

import typeToString from '../typeToString';
import encodeType from './type';

export default function encodeParam (param: Param, value: any, version: EncodingVersions = 'latest'): Uint8Array {
  if (Array.isArray(param.type)) {
    assert(Array.isArray(value), () => `Expected array values of type '${typeToString(param.type)}'`);

    const arr = (value as Array<any>);
    const types = (param.type as Array<Param$Type>);

    if (types.length === 1) {
      return u8aConcat(
        bnToU8a(arr.length, 32, true),
        u8aConcat.apply(null, arr.map((v, index) =>
          encodeType(types[0], v, version)
        ))
      );
    }

    return u8aConcat(
      bnToU8a(arr.length, 32, true),
      u8aConcat.apply(null, arr.map((v, index) =>
        // NOTE since we may have embedded again, move to Param shape
        encodeParam(({ type: types[index] } as Param), v, version)
      ))
    );
  }

  return encodeType(param.type, value, version);
}
