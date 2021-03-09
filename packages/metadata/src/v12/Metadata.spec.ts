// Copyright 2017-2021 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { TypeRegistry } from '@polkadot/types/create';

import { decodeLatestSubstrate, defaultValues, toLatest } from '../util/testUtil';
import substrateData from './static';
import substrateJson from './static-substrate.json';

describe('MetadataV12 (substrate)', (): void => {
  const registry = new TypeRegistry();

  decodeLatestSubstrate(registry, 12, substrateData, substrateJson);

  toLatest(registry, 12, substrateData);

  defaultValues(registry, substrateData, true, true);
});
