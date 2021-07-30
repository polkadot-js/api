// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { TypeRegistry } from '../../create';
import { decodeLatestMeta, defaultValues, toLatest } from '../util/testUtil';
// eslint-disable-next-line import/no-duplicates
import polkadotData from './static-polkadot';
// eslint-disable-next-line import/no-duplicates
import polkadotJson from './static-polkadot.json';
import polkadotTypes from './static-polkadot-types.json';
// eslint-disable-next-line import/no-duplicates
import substrateData from './static-substrate';
// eslint-disable-next-line import/no-duplicates
import substrateJson from './static-substrate.json';
import substrateTypes from './static-substrate-types.json';

describe('MetadataV14 (substrate)', (): void => {
  const registry = new TypeRegistry();

  decodeLatestMeta(registry, 14, substrateData, {
    substrate: substrateJson as Record<string, unknown>,
    types: substrateTypes as Record<string, unknown>
  });

  toLatest(registry, 14, substrateData);

  defaultValues(registry, substrateData, true, true);
});

describe('MetadataV15 (substrate)', (): void => {
  const registry = new TypeRegistry();

  decodeLatestMeta(registry, 14, polkadotData, {
    substrate: polkadotJson as Record<string, unknown>,
    types: polkadotTypes as Record<string, unknown>
  });

  toLatest(registry, 14, polkadotData);

  defaultValues(registry, polkadotData, true, true);
});
