// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { TypeRegistry } from '../../create';
import { decodeLatestMeta, defaultValues, toLatest } from '../util/testUtil';
import substrateData from './hex/static-substrate';
import substrateJson from './json/static-substrate.json';

describe('MetadataV10 (substrate)', (): void => {
  const registry = new TypeRegistry();

  decodeLatestMeta(registry, 10, substrateData, { substrate: substrateJson as Record<string, unknown> });

  toLatest(registry, 10, substrateData);

  defaultValues(registry, substrateData);
});
