// ISC, Copyright 2017 Jaco Greeff
// @flow

import type { FormatterFunction } from './types';

const isUndefined = require('@polkadot/util/is/undefined');
const echo = require('./echo');

const arrayTypeRegex = /\[\]$/;

function formatSingleType (formatters: { [any]: FormatterFunction }, type: string, value: any): any {
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

function formatArrayType (formatters: { [any]: FormatterFunction }, type: string, value: Array<any>): any {
  type = type.replace(arrayTypeRegex, '');

  return value.map((value) => {
    return formatSingleType(formatters, type, value);
  });
}

function format (formatters: { [any]: FormatterFunction }, type: string, value: any): any {
  if (arrayTypeRegex.test(type)) {
    return formatArrayType(formatters, type, value);
  }

  return formatSingleType(formatters, type, value);
}

function formatArray (formatters: { [any]: FormatterFunction }, types: Array<string>, values: Array<any>): Array<any> {
  return types.map((type, index) => {
    return format(formatters, type, values[index]);
  });
}

module.exports = {
  format,
  formatArray
};
