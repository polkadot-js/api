// Copyright 2017-2022 @polkadot/api-augment authors & contributors
// SPDX-License-Identifier: Apache-2.0

import '@polkadot/api-augment/kusama';

import type { PolkadotRuntimeParachainsUmpPalletEvent, XcmV2TraitsOutcome } from '@polkadot/types/lookup';

import { Metadata, TypeRegistry } from '@polkadot/types';
import metadataStatic from '@polkadot/types-support/metadata/static-kusama';

const registry = new TypeRegistry();
const metadata = new Metadata(registry, metadataStatic);

registry.setMetadata(metadata);

describe('correct types', (): void => {
  it('correctly creates XcmV2TraitsOutcome', (): void => {
    const test = registry.createType<XcmV2TraitsOutcome>('XcmV2TraitsOutcome', {
      Incomplete: [3_000_000_000, 'BadOrigin']
    });

    expect(test.toHuman()).toEqual({
      Incomplete: [
        '3,000,000,000',
        'BadOrigin'
      ]
    });
    expect(test.isIncomplete).toEqual(true);
    expect(test.asIncomplete.toHuman()).toEqual([
      '3,000,000,000',
      'BadOrigin'
    ]);
  });

  it('correctly creates PolkadotRuntimeParachainsUmpPalletEvent', (): void => {
    const test = registry.createType<PolkadotRuntimeParachainsUmpPalletEvent>('PolkadotRuntimeParachainsUmpPalletEvent', '0x02112233445566778811223344556677881122334455667788112233445566778801005ed0b20000000006');

    expect(test.asExecutedUpward[1].asIncomplete.toHuman()).toEqual([
      '3,000,000,000',
      'BadOrigin'
    ]);
  });
});
