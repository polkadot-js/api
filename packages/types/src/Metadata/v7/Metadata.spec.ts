// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import polkadotJson from './static-polkadot.json';
import substrateJson from './static-substrate.json';
import polkadotData from './static.polkadot';
import substrateData from './static';
import { decodeLatestSubstrate, defaultValues, toV7 } from '../util/testUtil';

describe('MetadataV7 (substrate)', (): void => {
  decodeLatestSubstrate(7, substrateData, substrateJson);

  toV7(7, substrateData);

  defaultValues(substrateData);
});

describe('MetadataV7 (polkadot)', (): void => {
  decodeLatestSubstrate(7, polkadotData, polkadotJson);

  toV7(7, polkadotData);

  defaultValues(polkadotData);
});
