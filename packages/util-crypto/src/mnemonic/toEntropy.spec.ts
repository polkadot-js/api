// Copyright 2017-2019 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { u8aToHex } from '@plugnet/util';

import toEntropy from './toEntropy';
import tests from '../schnorrkel/keypair/testing';
import { cryptoWaitReady } from '..';

describe('mnemonicToEntropy', () => {
  beforeEach(async () => {
    await cryptoWaitReady();
  });

  tests.forEach(([mnemonic, entropy], index) => {
    it(`Created correct entropy for ${index}`, () => {
      expect(u8aToHex(toEntropy(mnemonic))).toEqual(entropy);
    });
  });
});
