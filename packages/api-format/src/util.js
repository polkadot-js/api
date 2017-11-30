// ISC, Copyright 2017 Jaco Greeff
// @flow

import type { FormatterFunction } from './types';

const { isUndefined } = require('@polkadot/util/is');
const formatNoop = require('./noop');

const arrayTypeRegex = /\[\]$/;

function formatSingleType (formatters: { [any]: FormatterFunction }, type: string, value: any): any {
  const formatter: FormatterFunction = formatters[type];

  if (isUndefined(formatter)) {
    console.warn(`Unable to find default formatter for '${type}', falling back to noop`);

    return formatNoop(value);
  }

  try {
    return formatter(value);
  } catch (error) {
    throw new Error(`Error formatting '${value}' as '${type}': ${error.message}`);
  }
}

function formatArrayType (formatters: { [any]: FormatterFunction }, type: string, value: any): any {
  if (!Array.isArray(value)) {
    throw new Error(`Unable to format non-array '${value}' as '${type}'`);
  }

  type = type.replace(arrayTypeRegex, '');

  return (value: Array<any>).map((value) => {
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
    const value = values[index];

    return format(formatters, type, value);
  });
}

module.exports = {
  format,
  formatArray
};
