// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/globals.d.ts" />

import metadataStatic from '@polkadot/types-support/metadata/static-substrate';
import { compactAddLength, u8aToU8a } from '@polkadot/util';

import { TypeRegistry } from '../../../create/index.js';
import { Metadata } from '../../Metadata.js';
import { substrate } from './substrate.js';

const registry = new TypeRegistry();
const metadata = new Metadata(registry, metadataStatic);

registry.setMetadata(metadata);

// console.log(JSON.stringify(registry.lookup.types));

describe('substrate', (): void => {
  const code = substrate['code'](registry);

  it('creates a well-known :code key', (): void => {
    expect(
      code()
    ).toEqual(
      compactAddLength(u8aToU8a(':code'))
    );
  });

  it('has the correct metadata', (): void => {
    expect(
      code.meta.type.isPlain
    ).toEqual(true);
  });
});
