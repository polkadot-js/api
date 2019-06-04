// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import extrinsics from '@plugnet/extrinsics/static';

import Method from '../primitive/Method';
import Block from './Block';

describe('Block', () => {
  beforeEach(() => {
    Method.injectMethods(extrinsics);
  });

  it('has a valid toRawType', () => {
    expect(
      new Block().toRawType()
    ).toEqual(
      // each of the containing structures have been stringified on their own
      JSON.stringify({
        header: JSON.stringify({
          parentHash: 'H256',
          number: 'Compact<u64>',
          stateRoot: 'H256',
          extrinsicsRoot: 'H256',
          digest: JSON.stringify({
            logs: 'Vec<{"_enum":{"Other":"Bytes","AuthoritiesChange":"Vec<AccountId>","ChangesTrieRoot":"H256","Seal":"(u64,H512)","Consensus":"(u32,Bytes)"}}>'
          })
        }),
        extrinsics: 'Vec<Extrinsic>'
      })
    );
  });
});
