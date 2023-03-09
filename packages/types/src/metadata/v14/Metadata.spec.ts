// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import kusamaData from '@polkadot/types-support/metadata/v14/kusama-hex';
import kusamaJson from '@polkadot/types-support/metadata/v14/kusama-json.json' assert { type: 'json' };
import kusamaTypes from '@polkadot/types-support/metadata/v14/kusama-types.json' assert { type: 'json' };
import polkadotData from '@polkadot/types-support/metadata/v14/polkadot-hex';
import polkadotJson from '@polkadot/types-support/metadata/v14/polkadot-json.json' assert { type: 'json' };
import polkadotTypes from '@polkadot/types-support/metadata/v14/polkadot-types.json' assert { type: 'json' };
import substrateData from '@polkadot/types-support/metadata/v14/substrate-hex';
import substrateJson from '@polkadot/types-support/metadata/v14/substrate-json.json' assert { type: 'json' };
import substrateTypes from '@polkadot/types-support/metadata/v14/substrate-types.json' assert { type: 'json' };

import { testMeta } from '../util/testUtil.js';

testMeta(14, {
  kusama: {
    compare: kusamaJson as Record<string, unknown>,
    data: kusamaData,
    types: kusamaTypes as unknown[]
  },
  polkadot: {
    compare: polkadotJson as Record<string, unknown>,
    data: polkadotData,
    types: polkadotTypes as unknown[]
  },
  substrate: {
    compare: substrateJson as Record<string, unknown>,
    data: substrateData,
    types: substrateTypes as unknown[]
  }
});
