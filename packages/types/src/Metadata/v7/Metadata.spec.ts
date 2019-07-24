// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import substrateJson from './latest.substrate.v7.json';
import substrateData from './static';
import { decodeLatestSubstrate, defaultValues, toV7 } from '../util/testUtil';

describe('MetadataV7 (substrate)', (): void => {
  decodeLatestSubstrate(7, substrateData, substrateJson);

  toV7(7, substrateData);

  defaultValues(substrateData);
});
