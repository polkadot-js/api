// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/globals.d.ts" />

import staticLatest from '@polkadot/types-support/metadata/static-substrate';
import staticV13 from '@polkadot/types-support/metadata/v13/substrate-hex';

import { TypeRegistry } from '../../create/index.js';
import { Metadata } from '../Metadata.js';

describe('toCallsOnly', (): void => {
  const registry = new TypeRegistry();

  it('creates a calls-only version of the latest', (): void => {
    const stripped = new Metadata(registry, staticLatest).asCallsOnly;

    try {
      expect(stripped).toBeDefined();
    } catch (error) {
      console.error(JSON.stringify(stripped));

      throw error;
    }
  });

  it('creates a calls-only version of V13', (): void => {
    const stripped = new Metadata(registry, staticV13).asCallsOnly;

    try {
      expect(stripped).toBeDefined();
    } catch (error) {
      console.error(JSON.stringify(stripped));

      throw error;
    }
  });

  it('can serialize from the input', (): void => {
    const s1 = new Metadata(registry, staticLatest).asCallsOnly.toU8a();
    const s2 = new Metadata(registry, s1).asCallsOnly.toU8a();

    expect(s1).toEqual(s2);
  });
});
