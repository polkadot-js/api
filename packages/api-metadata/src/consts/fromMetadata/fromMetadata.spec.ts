// Copyright 2017-2019 @polkadot/api-metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Metadata, BlockNumber } from '@polkadot/types';
import json from '@polkadot/types/Metadata/v6/static';
import { injectDefinitions } from '@polkadot/types/srml';

import fromMetadata from '../fromMetadata';

injectDefinitions();

// Use the pre-generated metadata
const metadata = new Metadata(json);
const consts = fromMetadata(metadata);

describe('fromMetadata', (): void => {
  it('should return constants with the correct type and value', (): void => {
    expect(consts.democracy.cooloffPeriod).toBeInstanceOf(BlockNumber);
    expect(consts.democracy.cooloffPeriod.eq(432000)).toBeTruthy();
  });
});
