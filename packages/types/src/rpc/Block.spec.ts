// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import extrinsics from '@polkadot/api-metadata/extrinsics/static';

import block00300 from '../json/SignedBlock.003.00.json';
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
            logs: 'Vec<{"_enum":{"Other":"Bytes","AuthoritiesChange":"Vec<AccountId>","ChangesTrieRoot":"H256","SealV0":"(u64,H512)","Consensus":"(u32,Bytes)","Seal":"(u32,Bytes)","PreRuntime":"(u32,Bytes)"}}>'
          })
        }),
        extrinsics: 'Vec<Extrinsic>'
      })
    );
  });

  it('re-encodes digest items correctly', () => {
    const digest = new Block(block00300.result.block).header.digest;

    expect(digest.logs[0].toHex()).toEqual(block00300.result.block.header.digest.logs[0]);
    expect(digest.logs[1].toHex()).toEqual(block00300.result.block.header.digest.logs[1]);
  });
});
