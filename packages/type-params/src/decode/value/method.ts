// Copyright 2017-2018 @polkadot/params authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Extrinsics } from '@polkadot/extrinsics/types';
import { EncodingVersions, ExtrinsicDecoded, Param, Param$Decoded, Section } from '../../types';
import { Decoder } from '../types';

import assert from '@polkadot/util/assert';
import extrinsics from '@polkadot/extrinsics/index';
import isUndefined from '@polkadot/util/is/undefined';

// type Section =
type Result = {
  length: number,
  value: ExtrinsicDecoded
};

export default function call (decode: Decoder, input: Uint8Array | null, isPublic: boolean, version: EncodingVersions, isStorage: boolean): Param$Decoded {
  if (input === null) {
    return {
      length: 0
    } as Param$Decoded;
  }

  const section: Section<Extrinsics> | undefined = Object.values(extrinsics).find(({ index }) =>
    index[0] === input[0]
  );

  assert(!isUndefined(section), `Unable to find extrinsic section ${input[0]}`);

  // @ts-ignore checked above
  const methods = section[isPublic ? 'public' : 'private'];
  const extrinsic = Object.values(methods).find(({ index }) =>
    index[1] === input[1]
  );

  assert(!isUndefined(extrinsic), `Unable to find method ${input[1]}`);

  // @ts-ignore checked above
  const params = extrinsic.params;
  const result = {
    length: 2, // sectionId + methodId
    value: ({
      extrinsic,
      params: []
    } as ExtrinsicDecoded)
  };

  return params.reduce(({ length, value }: Result, { type }: Param) => {
    const decoded = decode(type, input.subarray(length), version, isStorage);

    value.params.push(decoded.value);

    return {
      length: length + decoded.length,
      value
    };
  }, result);
}
