// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { InterfaceTypes } from '../../types';

/**
 * A mapping of the known signed extensions to the extra fields that they contain. Unlike in the actual extensions,
 * we define the extra fields not as a Tuple, but rather as a struct so they can be named. These will be expanded
 * into the various fields when added to the payload (we only support V4 onwards with these, V3 and earlier are
 * deemded fixed and non-changeable)
 */
export default {
  ChargeTransactionPayment: {},
  CheckBlockGasLimit: {},
  CheckEra: {
    blockHash: 'Hash'
  },
  CheckGenesis: {
    genesisHash: 'Hash'
  },
  CheckNonce: {},
  CheckVersion: {
    specVersion: 'u32'
  },
  CheckWeight: {}
} as Record<string, Record<string, InterfaceTypes>>;
