// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable sort-keys */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import Metadata from '@polkadot/metadata/Metadata';
import metadataStatic from '@polkadot/metadata/Metadata/static';

import { TypeRegistry } from '../create';
import block00300 from '../json/SignedBlock.003.00.json';
import Block from './Block';

const registry = new TypeRegistry();
const metadata = new Metadata(registry, metadataStatic);

registry.setMetadata(metadata);

describe('Block', (): void => {
  it('has a valid toRawType', (): void => {
    expect(
      new Block(registry).toRawType()
    ).toEqual(
      // each of the containing structures have been stringified on their own
      JSON.stringify({
        header: 'Header',
        extrinsics: 'Vec<Extrinsic>'
      })
    );
  });

  it('re-encodes digest items correctly', (): void => {
    const digest = new Block(registry, block00300.result.block).header.digest;

    expect(digest.logs[0].toHex()).toEqual(block00300.result.block.header.digest.logs[0]);
    expect(digest.logs[1].toHex()).toEqual(block00300.result.block.header.digest.logs[1]);
  });
});
