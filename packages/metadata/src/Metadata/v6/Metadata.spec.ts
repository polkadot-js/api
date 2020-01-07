// Copyright 2017-2020 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { TypeRegistry } from '@polkadot/types';

import polkadotJson from './static-polkadot.json';
import substrateJson from './static-substrate.json';
import polkadotData from './static.polkadot';
import substrateData from './static';
import { decodeLatestSubstrate, defaultValues, toLatest } from '../util/testUtil';

describe('MetadataV6 (substrate)', (): void => {
  const registry = new TypeRegistry();

  decodeLatestSubstrate(registry, 6, substrateData, substrateJson);

  toLatest(registry, 6, substrateData);

  defaultValues(registry, substrateData);
});

describe('MetadataV6 (polkadot)', (): void => {
  const registry = new TypeRegistry();

  decodeLatestSubstrate(registry, 6, polkadotData, polkadotJson);

  toLatest(registry, 6, polkadotData);

  defaultValues(registry, polkadotData);
});
