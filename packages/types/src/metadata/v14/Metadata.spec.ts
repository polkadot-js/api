// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { TypeRegistry } from '../../create';
import { decodeLatestSubstrate, defaultValues, toLatest } from '../util/testUtil';
import substrateData from './static';
import substrateJson from './static-substrate.json';
import substrateTypes from './static-types.json';

describe('MetadataV14 (substrate)', (): void => {
  const registry = new TypeRegistry();

  decodeLatestSubstrate(registry, 14, substrateData, {
    substrate: substrateJson as Record<string, unknown>,
    types: substrateTypes as Record<string, unknown>
  });

  toLatest(registry, 14, substrateData);

  defaultValues(registry, substrateData, true, true);
});
