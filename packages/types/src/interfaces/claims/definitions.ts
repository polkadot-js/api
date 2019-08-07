// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

export default {
  types: {
    // like in the Rust codebase, a workaround  since `[u8; 65]` adds length
    EcdsaSignature: '(H256, H256, u8)',
    // Workaround for `[u8; 20]` (it is not a Vec<u8>)
    EthereumAddress: 'H160'
  }
};
