// Copyright 2017-2019 @polkadot/keyring authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Prefix } from './types';

import defaults from './defaults';

export default function setPrefix (prefix: Prefix): void {
  defaults.prefix = prefix;
}
