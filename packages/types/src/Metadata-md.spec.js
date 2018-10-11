// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import Metadata from './Metadata';
import rpcdata from './Metadata.rpc';
import { addIntro, addStorage, addExtrinsics } from './Metadata-md';

const metadata = new Metadata().fromJSON(rpcdata);

console.error(addIntro(), addStorage(metadata), addExtrinsics(metadata));

describe('Metadata (md)', () => {
  it('does something', () => {
    expect(true).toBe(true);
  });
});
