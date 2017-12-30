// ISC, Copyright 2017 Jaco Greeff
// @flow

import type { FormatterFunction } from './types';

const isUndefined = require('@polkadot/util/is/undefined');
const echo = require('./echo');

const arrayTypeRegex = /\[\]$/;

function formatSingleType (formatters: { [string]: FormatterFunction }, type: string, value: mixed): mixed {
  const formatter: FormatterFunction = formatters[type];

  if (isUndefined(formatter)) {
    console.warn(`Unable to find default formatter for '${type}', falling back to echo`);

    return echo(value);
  }

  try {
    return formatter(value);
  } catch (error) {
    throw new Error(`Error formatting '${value}' as '${type}': ${error.message}`);
  }
}

function formatArrayType (formatters: { [string]: FormatterFunction }, type: string, value: Array<mixed>): mixed {
  type = type.replace(arrayTypeRegex, '');

  return value.map((value) => {
    return formatSingleType(formatters, type, value);
  });
}

function format (formatters: { [string]: FormatterFunction }, type: string, value: mixed): mixed {
  if (arrayTypeRegex.test(type)) {
    return formatArrayType(formatters, type, value);
  }

  return formatSingleType(formatters, type, value);
}

function formatArray (formatters: { [string]: FormatterFunction }, types: Array<string>, values: Array<mixed>): Array<mixed> {
  return types.map((type, index): mixed => {
    return format(formatters, type, values[index]);
  });
}

module.exports = {
  format,
  formatArray
};
