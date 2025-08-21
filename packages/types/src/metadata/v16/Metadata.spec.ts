// Copyright 2017-2025 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* import assetHubKusamaData from '@polkadot/types-support/metadata/v16/asset-hub-kusama-hex';
import assetHubPolkadotData from '@polkadot/types-support/metadata/v16/asset-hub-polkadot-hex';
import kusamaData from '@polkadot/types-support/metadata/v16/kusama-hex';
import polkadotData from '@polkadot/types-support/metadata/v16/polkadot-hex';*/
import substrateData from '@polkadot/types-support/metadata/v16/substrate-hex';

import { testMeta } from '../util/testUtil.js';

// TODO: Once MetadataV16 lands in an official release, pull the
// latest metadata for each chain and update the tests
testMeta(16, {
/*   'asset-hub-kusama': {
    data: assetHubKusamaData
  },
  'asset-hub-polkadot': {
    data: assetHubPolkadotData
  },
  kusama: {
    data: kusamaData
  },
  polkadot: {
    data: polkadotData
  },*/
  substrate: {
    data: substrateData
  }
});
