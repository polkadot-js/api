// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Constructor } from '@polkadot/types/types';

import { EventRecord77 } from '@polkadot/types';

type NodeOverrides = {
  // type name
  [index: string]: {
    // any version name
    [version: string]: {
      // array of spec name & version
      nodes: Array<{
        name: string,
        spec: number
      }>,
      override: Constructor
    }
  }
};

const overrides: NodeOverrides = {
  'EventRecord': {
    '77': {
      nodes: [{
        name: 'node',
        spec: 77
      }],
      override: EventRecord77
    }
  }
};

export default overrides;
