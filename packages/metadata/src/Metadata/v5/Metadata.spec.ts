// Copyright 2017-2020 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { TypeRegistry } from '@polkadot/types';

import substrateJson from './static-substrate.json';
import substrateData from './static';
import { decodeLatestSubstrate, defaultValues, toLatest } from '../util/testUtil';

describe('MetadataV5 (substrate)', (): void => {
  const registry = new TypeRegistry();

  decodeLatestSubstrate(registry, 5, substrateData, substrateJson);

  toLatest(registry, 5, substrateData, false);

  defaultValues(registry, substrateData, false);
});
