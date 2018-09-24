// Copyright 2017-2018 @polkadot/api-format authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import String from './String';

const REPLACE_TYPE_PREFIX = /T\:\:/g;

// This is a extended version of String, specifically to handle types. Here we rely full on
// what string provides us, however we also "tweak" the types received from the runtime, i.e.
// we remove the `T::` prefixes found in some types for consistency accross implementation.
export default class Type extends String {
  fromU8a (input: Uint8Array): String {
    super.fromU8a(input);

    this.raw = this.raw.replace(REPLACE_TYPE_PREFIX, '');

    return this;
  }
}
