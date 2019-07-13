// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Constructor } from '@polkadot/types/types';

import { EventRecord_0_76, RuntimeVersion, getTypeRegistry } from '@polkadot/types';

type Compat = {
  // an array of the spec-name and spec_version that denotes the first version that
  // does not support this feature. i.e. for EventRecord between 0-76, the new version
  // went live at 77 - hence the version here denotes 77
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
      ['polkadot', 1000],
      ['node-template', ANY_VERSION]
    ],
    types: {
      'EventRecord': EventRecord_0_76
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
