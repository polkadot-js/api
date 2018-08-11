// Copyright 2017-2018 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Interfaces } from '@polkadot/jsonrpc/types';
import { SectionItem } from '@polkadot/params/types';
import { Storages } from '@polkadot/storage/types';

import formatOutput from '@polkadot/api-format/output';
import decodeParams from '@polkadot/params/decode';

function formatStorageOutput (key: SectionItem<Storages>, result?: any): any {
  return decodeParams(key.type, result, 'latest', true).value;
}

export default function formatResult (method: SectionItem<Interfaces>, inputs: Array<any>, result?: any): any {
  if (method.type === 'StorageResult') {
    return formatStorageOutput(inputs[0][0], result);
  }

  if (Array.isArray(method.type) && method.type[0] === 'StorageResult') {
    return inputs[0].map((input: Array<any>, index: number) =>
      formatStorageOutput(input[0], result[index])
    );
  }

  return formatOutput(method.type, result);
}
