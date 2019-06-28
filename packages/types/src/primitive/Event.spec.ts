// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Metadata from '../Metadata';
import latestSubstrate from '../Metadata/v5/latest.substrate.v5.json';
import Event from './Event';

describe('Event', () => {
  it('handles extracting the event data type from the runtime metadata', () => {
    const runtimeMetadata = new Metadata(latestSubstrate);

    const DataTypeConstructor = Event.getDataType(new Uint8Array([2, 1]), runtimeMetadata) as any;
    const { section, method } = new DataTypeConstructor([]);

    expect(section).toEqual('balances');
    expect(method).toEqual('ReapedAccount');
  });
});
