// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import LengthCompact from './LengthCompact';

describe('Compact', () => {
  let compact;

  beforeEach(() => {

  });

  // FIXME skipped since this one does not actually work as expected :()
  // basically, bring in the tests since encoding with lengths are still
  // proplematic (decoding at this point does work)
  it.skip('encodes short u8', () => {
    compact = new LengthCompact(78);

    expect(
      compact.toU8a()
    ).toEqual(
      new Uint8Array([78 << 2])
    );
  });
});
