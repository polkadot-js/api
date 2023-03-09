// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev/node/test/node.d.ts" />

import rpcMetadata from '@polkadot/types-support/metadata/static-substrate';

import { TypeRegistry } from '../../../create/index.js';
import { Metadata } from '../../Metadata.js';
import { decorateEvents } from '../index.js';

const registry = new TypeRegistry();
const metadata = new Metadata(registry, rpcMetadata);

registry.setMetadata(metadata);

const events = decorateEvents(registry, metadata.asLatest, metadata.version);

describe('decorateEvents', (): void => {
  it('should return known errors', (): void => {
    expect(events.balances.Transfer).toBeDefined();
    expect(events.system.CodeUpdated).toBeDefined();
  });

  it('has the correct metadata for known errors', (): void => {
    expect(
      events.staking.Rewarded.meta.toJSON()
    ).toEqual({
      args: ['AccountId32', 'u128'],
      docs: [
        'The nominator has been rewarded by this amount.'
      ],
      fields: [
        { docs: [], name: 'stash', type: 0, typeName: 'T::AccountId' },
        { docs: [], name: 'amount', type: 6, typeName: 'BalanceOf<T>' }
      ],
      index: 1,
      name: 'Rewarded'
    });
  });

  it('should check against a specific error', (): void => {
    expect(
      events.system.ExtrinsicSuccess.is(registry.createType('Event', { index: [0, 0] }))
    ).toBe(true);
  });
});
