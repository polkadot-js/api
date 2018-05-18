// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { Param$Type, Param$Type$Tuple, Param$Types } from '@polkadot/params/types';
import type { FormatterFunction } from './types';

type FormattersFunctionMap = $Shape<{
  [Param$Type]: FormatterFunction
}>;

const typeToString = require('@polkadot/params/typeToString');
const isUndefined = require('@polkadot/util/is/undefined');
const l = require('@polkadot/util/logger')('api-format');

const echo = require('./echo');

// flowlint-next-line unclear-type:off
function formatSingleType (formatters: FormattersFunctionMap, type: Param$Type, value: any): any {
  const formatter: FormatterFunction = formatters[type];

  if (isUndefined(formatter)) {
    l.warn(`Unable to find default formatter for '${type}', falling back to echo`);

    return echo(value);
  }

  try {
    return formatter(value);
  } catch (error) {
    throw new Error(`Error formatting '${value.toString()}' as '${typeToString(type)}': ${error.message}`);
  }
}

// flowlint-next-line unclear-type:off
function formatArrayType (formatters: FormattersFunctionMap, [ type ]: Param$Type$Tuple, value: Array<any>): any {
  return value.map((value) => {
    return formatSingleType(formatters, type, value);
  });
}

// flowlint-next-line unclear-type:off
module.exports = function format (formatters: FormattersFunctionMap, types: Array<Param$Types>, values: Array<any>): Array<any> {
  return values.map((value, index): mixed => {
    const type = types[index];

    if (Array.isArray(type)) {
      // FIXME we are currently not catering for tuples
      // $FlowFixMe assume that we are only passing a single type through
      return formatArrayType(formatters, type, value);
    }

    return formatSingleType(formatters, type, value);
  });
};
