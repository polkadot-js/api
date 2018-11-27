// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Data from './Data';

// Data retrieve via storage queries. This basically is just a blob, so it
// extends Data instead of Bytes
export default class StorageData extends Data {
}
