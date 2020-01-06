// Copyright 2017-2020 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { TypeRegistry } from '@polkadot/types';

import polkadotJson from './static-polkadot.json';
import substrateJson from './static-substrate.json';
import polkadotData from './static.polkadot';
import substrateData from './static';
import { decodeLatestSubstrate, defaultValues, toLatest } from '../util/testUtil';

describe('MetadataV10 (substrate)', (): void => {
  const registry = new TypeRegistry();

  decodeLatestSubstrate(registry, 10, substrateData, substrateJson);

  toLatest(registry, 10, substrateData);

  defaultValues(registry, substrateData);
});

describe('MetadataV10 (polkadot)', (): void => {
  const registry = new TypeRegistry();

  decodeLatestSubstrate(registry, 10, polkadotData, polkadotJson);

  toLatest(registry, 10, polkadotData);

  defaultValues(registry, polkadotData);
});
