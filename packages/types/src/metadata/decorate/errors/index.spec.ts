// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/globals.d.ts" />

import rpcMetadata from '@polkadot/types-support/metadata/static-substrate';

import { TypeRegistry } from '../../../create/index.js';
import { Metadata } from '../../Metadata.js';
import { decorateErrors } from '../index.js';

const registry = new TypeRegistry();
const metadata = new Metadata(registry, rpcMetadata);

registry.setMetadata(metadata);

const errors = decorateErrors(registry, metadata.asLatest, metadata.version);

describe('decorateErrors', (): void => {
  it('should return known errors', (): void => {
    expect(errors['balances']['InsufficientBalance']).toBeDefined();
    expect(errors['system']['FailedToExtractRuntimeVersion']).toBeDefined();
  });

  it('has the correct metadata for known errors', (): void => {
    expect(
      errors['proxy']['NotProxy'].meta.toJSON()
    ).toEqual({
      args: [],
      docs: ['Sender is not a proxy of the account to be proxied.'],
      fields: [],
      index: 2,
      name: 'NotProxy'
    });
  });

  it('should check against a specific error', (): void => {
    expect(
      errors['system']['InvalidSpecName'].is(
        registry.createType('DispatchErrorModule', {
          error: 0,
          index: 0
        })
      )
    ).toBe(true);
  });
});
