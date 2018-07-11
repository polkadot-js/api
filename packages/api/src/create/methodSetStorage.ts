// Copyright 2017-2018 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Interfaces } from '@polkadot/jsonrpc/types';
import { SectionItem } from '@polkadot/params/types';
import { Storages } from '@polkadot/storage/types';
import { ProviderInterface } from '@polkadot/api-provider/types';
import { ApiInterface$Section$Method } from '../types';

import decodeParams from '@polkadot/params/decode';
import createStorageKey from '@polkadot/storage/key';
import ExtError from '@polkadot/util/ext/error';
import isUndefined from '@polkadot/util/is/undefined';
import signature from '@polkadot/params/signature';

import methodSend from './methodSend';

type KeyValues = [SectionItem<Storages>, any];
export default function createMethodSetStorage (provider: ProviderInterface, rpcName: string, name: string, method: SectionItem<Interfaces>): ApiInterface$Section$Method {
  const send = methodSend(provider, rpcName, name, method);
  const tryCatch = (fn: () => any): any => {
    try {
      return fn();
    } catch (error) {
      throw new ExtError(`${signature(method)}:: ${error.message}`, (error as ExtError).code, undefined);
    }
  };

  const call = async (...values: Array<any>): Promise<any> => {
    if (isUndefined(values[0]) || isUndefined(values[0].params)) {
      return send.apply(null, values);
    }

    const [keyType, ...params] = values as KeyValues;
    const key: Uint8Array = tryCatch(() =>
      createStorageKey(keyType).apply(null, params)
    );

    const result = await send(key);

    return tryCatch(() =>
      // FIXME We don't do any conversion checks for the type, currently not an issue, but _could_ turn out to be problematic (since this is storage, apply no transforms)
      decodeParams(keyType.type, result, 'poc-1').value
    );
  };

  return call as ApiInterface$Section$Method;
}
