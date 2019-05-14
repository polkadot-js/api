// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Constructor } from '@polkadot/types/types';

import { EventRecord77, RuntimeVersion, getTypeRegistry } from '@polkadot/types';

type Type = {
  nodes: Array<{
    specName: string,
    specVersion: number,
    implVersion: number
  }>,
  override: Constructor,
  type: string
};

const types: Array<Type> = [
  {
    nodes: [{
      specName: 'node',
      specVersion: 77,
      implVersion: 77
    }],
    override: EventRecord77,
    type: 'EventRecord'
  }
];

export default function injectNodeTypes ({ specName, specVersion, implVersion }: RuntimeVersion): void {
  types
    .filter(({ nodes }) =>
      nodes.filter((node) =>
        specName.eq(node.specName) &&
        specVersion.gten(node.specVersion) &&
        implVersion.gten(node.implVersion)
      ).length !== 0
    )
    .forEach(({ override, type }) => {
      getTypeRegistry().register(type, override);
    });
}
