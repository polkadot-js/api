// Copyright 2017-2018 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Interfaces } from '@polkadot/jsonrpc/types';
import { Param$Types, SectionItem } from '@polkadot/params/types';
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

export function formatOutput (type: Param$Types, value?: any): any | null {
  return null;
}

export default function createMethodGetStorage (provider: ProviderInterface, rpcName: string, method: SectionItem<Interfaces>): ApiInterface$Section$Method {
  const send = methodSend(provider, rpcName, method);
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

// // Copyright 2017-2018 @polkadot/api-format authors & contributors
// // This software may be modified and distributed under the terms
// // of the ISC license. See the LICENSE file for details.

// import { Param$Types } from '@polkadot/params/types';
// import { FormatterFunction } from './types';

// import addressEncode from '@polkadot/util-keyring/address/encode';
// import bnDecode from '@polkadot/primitives/json/bn/decode';
// import bytesDecode from '@polkadot/primitives/json/bytes/decode';
// import hashDecode from '@polkadot/primitives/json/hash/decode';
// import headerDecode from '@polkadot/primitives/json/header/decode';
// import isNull from '@polkadot/util/is/null';
// import isUndefined from '@polkadot/util/is/undefined';

// import format from './format';

// const formatters = new Map<Param$Types, FormatterFunction>([
//   // publicKey -> address
//   ['AccountId', addressEncode],
//   ['BlockNumber', bnDecode],
//   ['Bytes', bytesDecode],
//   ['Hash', hashDecode],
//   ['Header', headerDecode],
//   ['u64', bnDecode]
// ]);
