// Copyright 2017-2020 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Metadata, TypeRegistry } from '@polkadot/types';

import rpcMetadata from '../../../Metadata/static';
import fromMetadata from '../fromMetadata';

// Use the pre-generated metadata
const registry = new TypeRegistry();
const metadata = new Metadata(registry, rpcMetadata);
const consts = fromMetadata(registry, metadata);

describe('fromMetadata', (): void => {
  it('should return constants with the correct type and value', (): void => {
    expect(consts.democracy.cooloffPeriod).toBeInstanceOf(registry.createClass('BlockNumber'));
    // 3 second blocks, 28 days
    expect(consts.democracy.cooloffPeriod.toNumber()).toEqual(28 * 24 * 60 * (60 / 3));
  });

  // removed from session
  it.skip('correctly handles bytes', (): void => {
    // 0x34 removes as the length prefix removed
    expect(consts.session.dedupKeyPrefix.toHex()).toEqual('0x3a73657373696f6e3a6b657973');
  });
});
