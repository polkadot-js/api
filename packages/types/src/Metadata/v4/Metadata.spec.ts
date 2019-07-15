// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import latestSubstrate from './latest.substrate.v4.json';
import rpcData from './static';
import { decodeLatestSubstrate, defaultValues, toV6 } from '../util/testUtil';

describe('MetadataV4', (): void => {
  decodeLatestSubstrate(4, rpcData, latestSubstrate);

  toV6(4, rpcData);

  defaultValues(rpcData);
});
