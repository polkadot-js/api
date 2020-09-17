// Copyright 2017-2020 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { TypeRegistry } from '@polkadot/types';

import staticSubstrate from './static-substrate.json';
import rpcData from './static';
import { decodeLatestSubstrate, defaultValues, toLatest } from '../util/testUtil';

describe('MetadataV4', (): void => {
  const registry = new TypeRegistry();

  decodeLatestSubstrate(registry, 4, rpcData, staticSubstrate);

  toLatest(registry, 4, rpcData, false);

  defaultValues(registry, rpcData, false);
});
