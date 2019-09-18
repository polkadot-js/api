// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

/**
 * Indent a string with `n` spaces before.
 */
export function indent(n: number, char = ''): (str: string) => string {
  return function (str: string): string {
    return `${char.repeat(n)}${str}`;
  }
}
