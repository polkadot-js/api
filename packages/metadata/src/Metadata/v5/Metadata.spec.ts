// Copyright 2017-2020 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

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
