// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import fs from 'fs';
import path from 'path';

import { ContractAbi } from '@polkadot/types';
import testingPairs from '@polkadot/keyring/testingPairs';

import json from '../data/erc20.json';
import Api from '../../src/promise';

describe.skip('e2e contracts', () => {
  let keyring;
  let abi;
  let api;

  beforeEach(async (done) => {
    if (!api) {
      api = await Api.create();

      abi = new ContractAbi(json);
      keyring = testingPairs({ type: 'sr25519' });
    }

    jest.setTimeout(30000);
    done();
  });

  it('has the attached methods', () => {
    expect(Object.keys(abi.messages)).toEqual(
      ['totalSupply', 'balanceOf', 'allowance', 'transfer', 'approve', 'transferFrom']
    );
  });

  it('allows putCode', (done) => {
    const code = fs.readFileSync(path.join(__dirname, '../data/erc20.wasm')).toString('hex');

    api.tx.contract.putCode(12345, `0x${code}`).signAndSend(keyring.eve, (result) => {
      console.error(JSON.stringify(result));

      if (result.status.isFinalized) {
        done();
      }
    });
  });
});
