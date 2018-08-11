// Copyright 2017-2018 @polkadot/api-format authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

// import { SectionItem, Params, Param$Types } from '@polkadot/params/types';
import { Storages } from '@polkadot/storage/types';
import { SectionItem, Param$Types, Param$Type$Array } from '@polkadot/params/types';
import { FormattersFunctionMap } from './types';

import typeToString from '@polkadot/params/typeToString';
import isUndefined from '@polkadot/util/is/undefined';
import logger from '@polkadot/util/logger';
import u8aToHex from '@polkadot/util/u8a/toHex';
import createStorageKey from '@polkadot/storage/key';

import echo from './echo';

const l = logger('api-format');

function formatSingleType (formatters: FormattersFunctionMap, type: Param$Types, value: any): any {
  if (type === 'StorageKey') {
    const [key, ...params]: [SectionItem<Storages>, Array<any>] = value;

    return u8aToHex(
      createStorageKey(key).apply(null, params)
    );
  }

  const formatter = formatters.get(type);

  if (isUndefined(formatter)) {
    l.warn(`Unable to find default formatter for '${typeToString(type)}', falling back to echo`);

    return echo(value);
  }

  try {
    return formatter(value);
  } catch (error) {
    throw new Error(`Error formatting '${value.toString()}' as '${typeToString(type)}': ${error.message}`);
  }
}

function formatArrayType (formatters: FormattersFunctionMap, [ type ]: Param$Type$Array, value: Array<any>): any {
  return value.map((value) => {
    return formatSingleType(formatters, type, value);
  });
}

export default function format (formatters: FormattersFunctionMap, types: Array<Param$Types>, values: Array<any>): Array<any> {
  return values.map((value, index): any => {
    const type = types[index];

    if (Array.isArray(type)) {
      // FIXME we are currently not catering for tuples
      return formatArrayType(formatters, type, value);
    }

    return formatSingleType(formatters, type, value);
  });
}
