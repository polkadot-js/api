// Copyright 2017-2022 @polkadot/types-create authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { assert } from '@polkadot/util';

// safely split a string on ', ' while taking care of any nested occurences
export function typeSplit (type: string): string[] {
  const result: string[] = [];

  // these are the depths of the various tokens: <, [, {, (
  let c = 0;
  let f = 0;
  let s = 0;
  let t = 0;

  // current start position
  let start = 0;

  for (let i = 0; i < type.length; i++) {
    switch (type[i]) {
      // if we are not nested, add the type
      case ',': {
        if (!(c || f || s || t)) {
          result.push(type.substring(start, i).trim());
          start = i + 1;
        }

        break;
      }

      // adjust compact/vec (and friends) depth
      case '<': c++; break;
      case '>': c--; break;

      // adjust fixed vec depths
      case '[': f++; break;
      case ']': f--; break;

      // adjust struct depth
      case '{': s++; break;
      case '}': s--; break;

      // adjust tuple depth
      case '(': t++; break;
      case ')': t--; break;
    }
  }

  // ensure we have all the terminators taken care of
  assert(!(c || f || s || t), () => `Invalid definition (missing terminators) found in ${type}`);

  // the final leg of the journey
  result.push(type.substring(start, type.length).trim());

  return result;
}
