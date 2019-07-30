// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Bytes from './Bytes';

// NOTE Seperate class so StorageData !== Bytes, but rather an extension of it.
// Alternatively the construction check in Bytes will yield false positives for
// eg. StorageKey (which extends Bytes)

/**
 * @name StorageData
 * @description
 * Data retrieved via Storage queries and data for key-value pairs
 */
export default class StorageData extends Bytes {
}
