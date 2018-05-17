// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { FormatInputType, FormatOutputType } from '@polkadot/jsonrpc/types';
import type { FormatterFunction } from './types';

type FormattersFunctionType = FormatInputType | FormatOutputType;
type FormattersFunctionMap = {
  [FormattersFunctionType]: FormatterFunction
};

const isUndefined = require('@polkadot/util/is/undefined');
const l = require('@polkadot/util/logger')('api-format');

const echo = require('./echo');

const arrayTypeRegex = /\[\]$/;

function formatSingleType (formatters: FormattersFunctionMap, type: FormattersFunctionType, value: mixed): mixed {
  const formatter: FormatterFunction = formatters[type];

  if (isUndefined(formatter)) {
    l.warn(`Unable to find default formatter for '${type}', falling back to echo`);

    return echo(value);
  }

  try {
    return formatter(value);
  } catch (error) {
    // $FlowFixMe just let JS coerce all it wants to
    throw new Error(`Error formatting '${value}' as '${type}': ${error.message}`);
  }
}

function formatArrayType (formatters: FormattersFunctionMap, type: FormattersFunctionType, value: Array<mixed>): mixed {
  // flowlint-next-line unclear-type:off
  type = ((type.replace(arrayTypeRegex, ''): any): FormattersFunctionType);

  return value.map((value) => {
    return formatSingleType(formatters, type, value);
  });
}

module.exports = function format (formatters: FormattersFunctionMap, types: Array<FormattersFunctionType>, values: Array<mixed>): Array<mixed> {
  return values.map((value, index): mixed => {
    const type = types[index];

    if (arrayTypeRegex.test(type)) {
      // $FlowFixMe array type
      return formatArrayType(formatters, type, value);
    }

    return formatSingleType(formatters, type, value);
  });
};
