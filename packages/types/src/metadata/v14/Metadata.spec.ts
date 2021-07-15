// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { MetadataAll } from '../../interfaces/metadata';

import { TypeRegistry } from '../../create';
import { Metadata } from '../Metadata';
import substrateData from './static';

describe('MetadataV14 (substrate)', (): void => {
  it('parses', (): void => {
    const registry = new TypeRegistry();
    const metadata = new Metadata(registry, substrateData);
    const all = metadata.get('metadata') as MetadataAll;

    expect(all).toBeDefined();

    // console.error(JSON.stringify(all.toJSON()));
    // console.error(JSON.stringify(
    //   all.asV14.types.types.map((t, __INDEX) => ({
    //     __INDEX,
    //     ...t.toJSON()
    //   }))
    // ));
  });
});
