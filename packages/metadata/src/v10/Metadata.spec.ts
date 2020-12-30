// Copyright 2017-2020 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { TypeRegistry } from '@polkadot/types/create';

import { decodeLatestSubstrate, defaultValues, toLatest } from '../util/testUtil';
import substrateData from './static';
import substrateJson from './static-substrate.json';

describe('MetadataV10 (substrate)', (): void => {
  const registry = new TypeRegistry();

  decodeLatestSubstrate(registry, 10, substrateData, substrateJson);

  toLatest(registry, 10, substrateData);

  defaultValues(registry, substrateData);
});
