// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

export default {
  types: {
    UncleEntryItem: {
      _enum: {
        InclusionHeight: 'BlockNumber',
        Uncle: '(Hash, Option<AccountId>)'
      }
    }
  }
};
