// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { TypeRegistry } from '../../create';
import { decodeLatestMeta, defaultValues, toLatest } from '../util/testUtil';
// eslint-disable-next-line import/no-duplicates
import substrateData from './static-substrate';
// eslint-disable-next-line import/no-duplicates
import substrateJson from './static-substrate.json';

describe('MetadataV10 (substrate)', (): void => {
  const registry = new TypeRegistry();

  decodeLatestMeta(registry, 10, substrateData, { substrate: substrateJson as Record<string, unknown> });

  toLatest(registry, 10, substrateData);

  defaultValues(registry, substrateData);
});
