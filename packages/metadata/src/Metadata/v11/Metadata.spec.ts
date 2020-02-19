// Copyright 2017-2020 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { TypeRegistry } from '@polkadot/types';

import polkadotJson from './static-polkadot.json';
import polkadotData from './static.polkadot';
import substrateJson from './static-substrate.json';
import substrateData from './static';
import { decodeLatestSubstrate, defaultValues, toLatest } from '../util/testUtil';

describe('MetadataV11 (substrate)', (): void => {
  const registry = new TypeRegistry();

  decodeLatestSubstrate(registry, 11, substrateData, substrateJson);

  toLatest(registry, 11, substrateData);

  defaultValues(registry, substrateData);
});

describe('MetadataV11 (polkadot)', (): void => {
  const registry = new TypeRegistry();

  decodeLatestSubstrate(registry, 11, polkadotData, polkadotJson);

  toLatest(registry, 11, polkadotData);

  defaultValues(registry, polkadotData);
});
