// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import staticSubstrate from './static-substrate.json';
import rpcData from './static';
import { decodeLatestSubstrate, defaultValues, toLatest } from '../util/testUtil';

describe('MetadataV1', (): void => {
  decodeLatestSubstrate(1, rpcData, staticSubstrate);

  toLatest(1, rpcData);

  defaultValues(rpcData);
});
