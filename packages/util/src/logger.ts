// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Logger, Logger$Data } from './types';

import chalk from 'chalk';
import moment from 'moment';

import isBn from './is/bn';
import isBuffer from './is/buffer';
import isFunction from './is/function';
import isObject from './is/object';
import isU8a from './is/u8a';
import u8aToHex from './u8a/toHex';

type ConsoleType = 'error' | 'log' | 'warn';
type LogType = ConsoleType | 'debug';

const logTo = {
  debug: 'log',
  error: 'error',
  log: 'log',
  warn: 'warn'
};

const chalked = {
  debug: chalk.gray,
  error: chalk.red,
  log: chalk.reset,
  warn: chalk.yellow
};

function formatObject (value: { [index: string]: any }): any {
  return Object.keys(value).reduce((result, key) => {
    result[key] = format(value[key]);

    return result;
  }, {} as { [index: string]: any });
}

export function format (value: any): any {
  if (Array.isArray(value)) {
    return value.map(format);
  }

  if (isBn(value)) {
    return value.toString();
  }

  if (isBuffer(value)) {
    return `0x${value.toString('hex')}`;
  }

  if (isU8a(value)) {
    return u8aToHex(value);
  }

  if (value && isObject(value) && value.constructor === Object) {
    return formatObject(value);
  }

  return value;
}

function apply (log: LogType, type: string, values: Logger$Data): void {
  if (values.length === 1 && isFunction(values[0])) {
    const fnResult = (values[0] as Function)();

    return apply(log, type, Array.isArray(fnResult) ? fnResult : [fnResult]);
  }

  const chalk = (value: string): string =>
    chalked[log](value);

  // @ts-ignore Not sure how to coax TS here...
  console[logTo[log]].apply(
    console, [
      chalk(moment().format('YYYY-MM-DD HH:mm:ss')), chalk(type)
    ].concat(
      values.map(format)
    )
  );
}

function noop (...values: Logger$Data): void {
  // noop
}

/**
 * @name Logger
 * @summary Creates a consistent log interface for messages
 * @description
 * Returns a `Logger` that has `.log`, `.error`, `.warn` and `.debug` (controlled with environment `DEBUG=typeA,typeB`) methods. Logging is done with a consistent prefix (type of logger, date) followed by the actual message using the underlying console.
 * @example
 * <BR>
 *
 * ```javascript
 * const l from '@plugnet/util/logger')('test');
 *
 * l.log('blah'); // <date>     TEST: blah
 * ```
 */
export default function logger (_type: string): Logger {
  const type = `${_type.toUpperCase()}:`.padStart(16);
  let isDebug;

  try {
    const isTest = process.env.NODE_ENV === 'test';
    const debugList = (process.env.DEBUG || '').split(',');

    isDebug = isTest || !!debugList.find((entry) => _type.indexOf(entry) === 0);
  } catch (error) {
    isDebug = false;
  }

  return {
    debug: isDebug
      ? (...values: Logger$Data): void => apply('debug', type, values)
      : noop,
    error: (...values: Logger$Data): void => apply('error', type, values),
    log: (...values: Logger$Data): void => apply('log', type, values),
    noop,
    warn: (...values: Logger$Data): void => apply('warn', type, values)
  };
}
