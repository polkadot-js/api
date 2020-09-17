// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { assert } from '@polkadot/util';

function isNotNested (...counters: number[]): boolean {
  return !counters.some((counter): boolean => counter !== 0);
}

// safely split a string on ', ' while taking care of any nested occurences
export function typeSplit (type: string): string[] {
  let [cDepth, fDepth, sDepth, tDepth, start] = [0, 0, 0, 0, 0];
  const result = [];

  const extract = (index: number): void => {
    if (isNotNested(cDepth, fDepth, sDepth, tDepth)) {
      result.push(type.substr(start, index - start).trim());
      start = index + 1;
    }
  };

  for (let index = 0; index < type.length; index++) {
    switch (type[index]) {
      // if we are not nested, add the type
      case ',': extract(index); break;

      // adjust compact/vec (and friends) depth
      case '<': cDepth++; break;
      case '>': cDepth--; break;

      // adjust fixed vec depths
      case '[': fDepth++; break;
      case ']': fDepth--; break;

      // adjust struct depth
      case '{': sDepth++; break;
      case '}': sDepth--; break;

      // adjust tuple depth
      case '(': tDepth++; break;
      case ')': tDepth--; break;
    }
  }

  assert(isNotNested(cDepth, fDepth, sDepth, tDepth), `Invalid defintion (missing terminators) found in ${type}`);

  // the final leg of the journey
  result.push(type.substr(start, type.length - start).trim());

  return result;
}
