// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import substrateJson from './latest.substrate.v6.json';
import substrateData from './static';
import { decodeLatestSubstrate, defaultValues, toV6 } from '../util/testUtil';

describe('MetadataV6 (substrate)', () => {
  decodeLatestSubstrate(6, substrateData, substrateJson);

  toV6(6, substrateData);

  defaultValues(substrateData);
});
