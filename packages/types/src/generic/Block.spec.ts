// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/globals.d.ts" />

/* eslint-disable sort-keys */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import type { BlockValue } from './Block.js';

import block00300 from '@polkadot/types-support/json/SignedBlock.003.00.json' assert { type: 'json' };
import metadataStatic from '@polkadot/types-support/metadata/static-substrate';
import { stringify } from '@polkadot/util';

import { TypeRegistry } from '../create/index.js';
import { Metadata } from '../metadata/index.js';
import { GenericBlock as Block } from './Block.js';

interface BlockJson {
  result: {
    block: BlockValue;
  };
}

const registry = new TypeRegistry();
const metadata = new Metadata(registry, metadataStatic);

registry.setMetadata(metadata);

describe('Block', (): void => {
  it('has a valid toRawType', (): void => {
    expect(
      new Block(registry).toRawType()
    ).toEqual(
      // each of the containing structures have been stringified on their own
      stringify({
        header: 'Header',
        extrinsics: 'Vec<Extrinsic>'
      })
    );
  });

  it('re-encodes digest items correctly', (): void => {
    const digest = new Block(registry, (block00300 as BlockJson).result.block).header.digest;

    expect(digest.logs[0].toHex()).toEqual((block00300 as BlockJson).result.block.header?.digest?.logs[0]);
    expect(digest.logs[1].toHex()).toEqual((block00300 as BlockJson).result.block.header?.digest?.logs[1]);
  });
});
