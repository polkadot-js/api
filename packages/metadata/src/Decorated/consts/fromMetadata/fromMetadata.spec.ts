// Copyright 2017-2020 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Constants } from '../../types';

import { Metadata, TypeRegistry } from '@polkadot/types';

import rpcMetadata from '../../../Metadata/static';
import rpcMetadataV10 from '../../../Metadata/v10/static';
import fromMetadata from '../fromMetadata';

function init (meta: string): [Constants, TypeRegistry] {
  const registry = new TypeRegistry();
  const metadata = new Metadata(registry, meta);

  registry.setMetadata(metadata);

  return [fromMetadata(registry, metadata), registry];
}

describe('fromMetadata', (): void => {
  it('should return constants with the correct type and value', (): void => {
    const [consts, registry] = init(rpcMetadata);

    expect(consts.democracy.cooloffPeriod).toBeInstanceOf(registry.createClass('BlockNumber'));
    // 3 second blocks, 28 days
    expect(consts.democracy.cooloffPeriod.toNumber()).toEqual(28 * 24 * 60 * (60 / 3));
  });

  // removed from session
  it('correctly handles bytes', (): void => {
    const [consts] = init(rpcMetadataV10);

    // 0x34 removes as the length prefix removed
    expect(consts.session.dedupKeyPrefix.toHex()).toEqual('0x3a73657373696f6e3a6b657973');
  });
});
