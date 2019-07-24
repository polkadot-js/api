// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import latestSubstrate from './latest.substrate.v3.json';
import rpcData from './static';
import { decodeLatestSubstrate, defaultValues, toV7 } from '../util/testUtil';

describe('MetadataV3', (): void => {
  decodeLatestSubstrate(3, rpcData, latestSubstrate);

  toV7(3, rpcData);

  defaultValues(rpcData);
});
