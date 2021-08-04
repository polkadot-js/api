// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import metadataStatic from '@polkadot/types-support/metadata/static-substrate';

import { TypeRegistry } from '../create';
import { Metadata } from '../metadata';
import { GenericCall as Call } from '.';

const registry = new TypeRegistry();
const metadata = new Metadata(registry, metadataStatic);

registry.setMetadata(metadata);

describe('Call', (): void => {
  it('handles decoding correctly (bare)', (): void => {
    expect(
      new Call(registry, {
        args: ['0x0000000000000000000000000000000000000000000000000000000000000000', 0, 0],
        callIndex: [6, 1] // balances.setBalance
      }).toU8a()
    ).toEqual(
      new Uint8Array([6, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    );
  });

  it('handles creation from a hex value properly', (): void => {
    expect(
      new Call(registry, '0x06010000000000000000000000000000000000000000000000000000000000000000').toU8a()
    ).toEqual(
      new Uint8Array([6, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    ); // balances.setBalance
  });
});
