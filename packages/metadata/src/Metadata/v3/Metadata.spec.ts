// Copyright 2017-2020 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { TypeRegistry } from '@polkadot/types';

import staticSubstrate from './static-substrate.json';
import rpcData from './static';
import { decodeLatestSubstrate, defaultValues, toLatest } from '../util/testUtil';

describe('MetadataV3', (): void => {
  const registry = new TypeRegistry();

  decodeLatestSubstrate(registry, 3, rpcData, staticSubstrate);

  toLatest(registry, 3, rpcData, false);

  defaultValues(registry, rpcData, false);
});
