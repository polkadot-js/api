// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { TypeRegistry } from '../../create';
import { decodeLatestMeta, defaultValues, toLatest } from '../util/testUtil';
// eslint-disable-next-line import/no-duplicates
import polkadotData from './static-polkadot';
// eslint-disable-next-line import/no-duplicates
import polkadotJson from './static-polkadot.json';
// eslint-disable-next-line import/no-duplicates
import substrateData from './static-substrate';
// eslint-disable-next-line import/no-duplicates
import substrateJson from './static-substrate.json';

describe('MetadataV13 (substrate)', (): void => {
  const registry = new TypeRegistry();

  decodeLatestMeta(registry, 13, substrateData, substrateJson);

  toLatest(registry, 13, substrateData);

  defaultValues(registry, substrateData, true, true);
});

describe('MetadataV13 (polkadot)', (): void => {
  const registry = new TypeRegistry();

  decodeLatestMeta(registry, 13, polkadotData, polkadotJson);

  toLatest(registry, 13, polkadotData);

  defaultValues(registry, polkadotData, true, true);
});
