// Copyright 2017-2019 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import polkadotJson from './static-polkadot.json';
import substrateJson from './static-substrate.json';
import polkadotData from './static.polkadot';
import substrateData from './static';
import { decodeLatestSubstrate, defaultValues, toLatest } from '../util/testUtil';

describe('MetadataV6 (substrate)', (): void => {
  decodeLatestSubstrate(6, substrateData, substrateJson);

  toLatest(6, substrateData);

  defaultValues(substrateData);
});

describe('MetadataV6 (polkadot)', (): void => {
  decodeLatestSubstrate(6, polkadotData, polkadotJson);

  toLatest(6, polkadotData);

  defaultValues(polkadotData);
});
