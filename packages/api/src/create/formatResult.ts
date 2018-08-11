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

export default function formatResult (method: SectionItem<Interfaces>, params: Array<any>, inputs: Array<any>, result?: any): any {
  if (method.type === 'StorageResult') {
    return formatStorageOutput(inputs[0][0], result);
  }

  if (method.type === 'StorageResultSet') {
    return params[0].map((key: string, index: number) => {
      const input = inputs[0][index][0];
      const { changes = [] }: { block: string, changes: Array<[string, string]> } = result || {};
      const value = changes.find(([_key]) => key === _key);

      if (!value) {
        return undefined;
      }

      return formatStorageOutput(input, value[1]);
    });
  }

  return formatOutput(method.type, result);
}
