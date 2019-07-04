// Copyright 2017-2019 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Metadata, BlockNumber } from '@polkadot/types';
import json from '@polkadot/types/Metadata/v6/static';

import fromMetadata from '../fromMetadata';

// Use the pre-generated metadata
const metadata = new Metadata(json);
const consts = fromMetadata(metadata);

describe('fromMetadata', () => {
  it('should return constants with the correct type and value', () => {
    expect(consts.democracy.enactmentPeriod).toBeInstanceOf(BlockNumber);
    expect(consts.democracy.enactmentPeriod.toHex(true)).toEqual('0x80f4030000000000');
  });
});
