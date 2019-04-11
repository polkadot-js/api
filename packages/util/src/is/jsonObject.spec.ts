// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { isJsonObject } from '.';

const jsonObject = `{
    "Test": "1234",
    "NestedTest": {
      "Test": "5678"
    }
  }`;

describe('isJsonObject', () => {
  it('returns true on empty objects', () => {
    expect(
      isJsonObject({})
    ).toEqual(true);
  });

  it('returns true on JSON objects', () => {
    expect(
      isJsonObject(jsonObject)
    ).toEqual(true);
  });

  it('returns false on JSON parsable value typeof number', () => {
    expect(
      isJsonObject(1234)
    ).toEqual(false);
  });

  it('returns false on JSON parsable value null', () => {
    expect(
      isJsonObject(null)
    ).toEqual(false);
  });

  it('returns false on invalid objects', () => {
    expect(
      isJsonObject('notAnObject')
    ).toEqual(false);
  });

  it('returns false on invalid JSON', () => {
    expect(
      isJsonObject(`{"abc", "def"}`)
    ).toEqual(false);
  });
});
