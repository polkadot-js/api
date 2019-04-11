// Copyright 2017-2019 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { assert, isNull } from '@plugnet/util';

import DeriveJunction from './DeriveJunction';
import keyExtractPath from './extractPath';

type ExtractResult = {
  password?: string,
  path: Array<DeriveJunction>,
  phrase: string
};

const RE_CAPTURE = /^(\w+( \w+)*)((\/\/?[^\/]+)*)(\/\/\/(.*))?$/;

/**
 * @description Extracts the phrase, path and password from a SURI format for specifying secret keys `<secret>/<soft-key>//<hard-key>///<password>` (the `///password` may be omitted, and `/<soft-key>` and `//<hard-key>` maybe repeated and mixed).
 */
export default function keyExtract (suri: string): ExtractResult {
  const matches = suri.match(RE_CAPTURE);

  assert(!isNull(matches), `Unable to match '${suri}' to a secret URI`);

  const [, phrase, , derivePath, , , password] = matches as Array<string>;
  const { path } = keyExtractPath(derivePath);

  return {
    password,
    path,
    phrase
  };
}
