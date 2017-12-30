// ISC, Copyright 2017 Jaco Greeff
// @flow

import type { FormatInputType, FormatOutputType } from '@polkadot/api-jsonrpc/types';
import type { FormatterFunction } from './types';

type FormattersFunctionType = FormatInputType | FormatOutputType;
type FormattersFunctionMap = {
  [FormattersFunctionType]: FormatterFunction
};

const isUndefined = require('@polkadot/util/is/undefined');
const echo = require('./echo');

const arrayTypeRegex = /\[\]$/;

function formatSingleType (formatters: FormattersFunctionMap, type: FormattersFunctionType, value: mixed): mixed {
  const formatter: FormatterFunction = formatters[type];

  if (isUndefined(formatter)) {
    console.warn(`Unable to find default formatter for '${type}', falling back to echo`);

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

function format (formatters: FormattersFunctionMap, type: FormattersFunctionType, value: mixed | Array<mixed>): mixed {
  if (arrayTypeRegex.test(type)) {
    // $FlowFixMe array type
    return formatArrayType(formatters, type, value);
  }

  return formatSingleType(formatters, type, value);
}

function formatArray (formatters: FormattersFunctionMap, types: Array<FormattersFunctionType>, values: Array<mixed>): Array<mixed> {
  return types.map((type, index): mixed => {
    return format(formatters, type, values[index]);
  });
}

module.exports = {
  format,
  formatArray
};
