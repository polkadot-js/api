// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

if (!Array.prototype.fill) {
  Array.prototype.fill = function fill (value: any, start: number = 0, end?: number) {
    // Steps 1-2.
    if (!this) {
      throw new TypeError('this is null or not defined');
    }

    const A = Object(this);

    // Steps 3-5.
    const len = A.length >>> 0;

    // Steps 6-7.
    const relativeStart = start >> 0;

    // Step 8.
    let k = relativeStart < 0
      ? Math.max(len + relativeStart, 0)
      : Math.min(relativeStart, len);

    // Steps 9-10.
    const relativeEnd = end === undefined
      ? len
      : end >> 0;

    // Step 11.
    const final = relativeEnd < 0
      ? Math.max(len + relativeEnd, 0)
      : Math.min(relativeEnd, len);

    // Step 12.
    while (k < final) {
      A[k] = value;
      k++;
    }

    // Step 13.
    return A;
  };
}

if (!Uint8Array.prototype.fill) {
  // @ts-ignore
  Uint8Array.prototype.fill = Array.prototype.fill;
}
