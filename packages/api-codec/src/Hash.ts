// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import H256 from './H256';

// The default hash that is used accross the system. It is basically just a thin
// wrapper around H256, representing a 32-byte blake2b (Substrate) value
export default class Hash extends H256 {
}
