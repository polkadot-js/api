// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { TypeRegistry } from '../../create';
import { decodeLatestMeta, defaultValues, toLatest } from '../util/testUtil';
import polkadotData from './hex/static-polkadot';
import substrateData from './hex/static-substrate';
import polkadotJson from './json/static-polkadot.json';
import polkadotTypes from './json/static-polkadot-types.json';
import substrateJson from './json/static-substrate.json';
import substrateTypes from './json/static-substrate-types.json';

describe('MetadataV14 (substrate)', (): void => {
  const registry = new TypeRegistry();

  decodeLatestMeta(registry, 14, substrateData, {
    substrate: substrateJson as Record<string, unknown>,
    types: substrateTypes as Record<string, unknown>
  });

  toLatest(registry, 14, substrateData);

  defaultValues(registry, substrateData, true, true);
});

describe('MetadataV14 (polkadot)', (): void => {
  const registry = new TypeRegistry();

  decodeLatestMeta(registry, 14, polkadotData, {
    substrate: polkadotJson as Record<string, unknown>,
    types: polkadotTypes as Record<string, unknown>
  });

  toLatest(registry, 14, polkadotData);

  defaultValues(registry, polkadotData, true, true);
});
