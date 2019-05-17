// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Constructor } from '@polkadot/types/types';

import { EventRecord77, RuntimeVersion, getTypeRegistry } from '@polkadot/types';

type Compat = {
  nodeSpecs: Array<[string, number]>,
  types: {
    [index: string]: Constructor
  }
};

const ANY_VERSION = 0xffffff;

const types: Array<Compat> = [
  {
    nodeSpecs: [
      ['node', 77],
      ['node-template', ANY_VERSION],
      ['polkadot', ANY_VERSION],
      ['edgeware', ANY_VERSION]
    ],
    types: {
      'EventRecord': EventRecord77
    }
  }
];

export default function injectNodeCompat ({ specName, specVersion }: RuntimeVersion): void {
  types
    .filter(({ nodeSpecs }) =>
      nodeSpecs.some(([name, version]) =>
        specName.eq(name) &&
        specVersion.ltn(version)
      )
    )
    .forEach(({ types }) => {
      getTypeRegistry().register(types);
    });
}
