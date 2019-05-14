// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Constructor } from '@polkadot/types/types';

import { EventRecord77, RuntimeVersion, getTypeRegistry } from '@polkadot/types';

type Compat = {
  nodeSpecs: Array<{
    name: string,
    version: number
  }>,
  types: {
    [index: string]: Constructor
  }
};

const types: Array<Compat> = [
  {
    nodeSpecs: [
      {
        name: 'node',
        version: 77
      },
      {
        name: 'polkadot',
        version: 0xffff // don't have a spec version as of yet
      }
    ],
    types: {
      'EventRecord': EventRecord77
    }
  }
];

export default function injectNodeCompat ({ specName, specVersion }: RuntimeVersion): void {
  types
    .filter(({ nodeSpecs }) =>
      nodeSpecs.filter((spec) =>
        specName.eq(spec.name) &&
        specVersion.ltn(spec.version)
      ).length !== 0
    )
    .forEach(({ types }) => {
      getTypeRegistry().register(types);
    });
}
