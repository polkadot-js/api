// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Metadata from '../../Metadata';
import latestSubstrate from '../../Metadata/v7/latest.substrate.v7.json';
import Event from './Event';

describe('Event', (): void => {
  it('handles extracting the event data type from the runtime metadata', (): void => {
    const runtimeMetadata = new Metadata(latestSubstrate);

    const event = new Event(new Uint8Array([2, 1]), { metadata: runtimeMetadata });
    const { section, method } = event.data;

    expect(section).toEqual('balances');
    expect(method).toEqual('ReapedAccount');
  });
});
