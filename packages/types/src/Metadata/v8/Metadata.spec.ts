// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import substrateJson from './static-substrate.json';
import substrateData from './static';
import { decodeLatestSubstrate, defaultValues, toLatest } from '../util/testUtil';

describe('MetadataV8 (substrate)', (): void => {
  decodeLatestSubstrate(8, substrateData, substrateJson);

  toLatest(8, substrateData);

  defaultValues(substrateData);
});
