// Copyright 2017-2018 @polkadot/primitives authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import txRoot from './extrinsic/rootRaw';
import { extrinsicsLegacy as extrinsics } from '@polkadot/extrinsics';
import encodeUnchecked from '@polkadot/extrinsics/codec/encode/unchecked';
import testingPairs from '@polkadot/util-keyring/testingPairs';

import header from './header';

const keyring = testingPairs();

describe('header', () => {
  it('applies the all transactions (no timestamp)', () => {
    expect(
      header({}).extrinsicsRoot
    ).toEqual(
      txRoot([])
    );
  });

  it('applies the all transactions (extrinsicsRoot)', () => {
    const transactions = [
      encodeUnchecked(
        keyring.nobody, 0,
        extrinsics.timestamp.public.set,
        [54321]
      ),
      encodeUnchecked(
        keyring.one, 0,
        extrinsics.timestamp.public.set,
        [12345]
      )
    ];

    expect(
      header({}, transactions).extrinsicsRoot
    ).toEqual(
      txRoot(transactions)
    );
  });
});
