// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DefinitionsCall } from '../../types';

export const runtime: DefinitionsCall = {
  GrandpaApi_current_set_id: {
    description: 'Get current GRANDPA authority set id.',
    params: [],
    type: 'SetId'
  },
  GrandpaApi_grandpa_authorities: {
    description: 'Get the current GRANDPA authorities and weights. This should not change except for when changes are scheduled and the corresponding delay has passed.',
    params: [],
    type: 'AuthorityList'
  }
};
