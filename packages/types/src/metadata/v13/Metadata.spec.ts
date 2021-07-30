// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { TypeRegistry } from '../../create';
import { decodeLatestMeta, defaultValues, toLatest } from '../util/testUtil';
import polkadotData from './hex/static-polkadot';
import substrateData from './hex/static-substrate';
import polkadotJson from './json/static-polkadot.json';
import substrateJson from './json/static-substrate.json';

describe('MetadataV13 (substrate)', (): void => {
  const registry = new TypeRegistry();

  decodeLatestMeta(registry, 13, substrateData, { substrate: substrateJson as Record<string, unknown> });

  toLatest(registry, 13, substrateData);

  defaultValues(registry, substrateData, true, true);
});

describe('MetadataV13 (polkadot)', (): void => {
  const registry = new TypeRegistry();

  decodeLatestMeta(registry, 13, polkadotData, { substrate: polkadotJson as Record<string, unknown> });

  toLatest(registry, 13, polkadotData);

  defaultValues(registry, polkadotData, true, true);
});
