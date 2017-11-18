// ISC, Copyright 2017 Jaco Greeff
// @flow

import type { FormatterFunction } from './types';

const { isUndefined } = require('@polkadot/util/lib/is');
const formatNoop = require('./noop');

function format (formatters: { [any]: FormatterFunction }, type: string, value: any): any {
  const formatter = formatters[type];

  if (isUndefined(formatter)) {
    console.warn(`Unable to find default formatter for '${type}', falling back to noop`);

    return formatNoop(value);
  }

  try {
    return formatter(value);
  } catch (error) {
    throw new Error(`Error formatting '${value}' as '${type}'': ${error.message}`);
  }
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
