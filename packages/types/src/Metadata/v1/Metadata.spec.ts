// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import latestSubstrate from './latest.substrate.v1.json';
import rpcData from './static';
import { decodeLatestSubstrate, defaultValues, toV4 } from '../util/testUtil';

describe('MetadataV1', () => {
  decodeLatestSubstrate(1, rpcData, latestSubstrate);

  toV4(1, rpcData);

  defaultValues(rpcData);
});
