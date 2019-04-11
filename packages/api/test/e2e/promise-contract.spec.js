// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import fs from 'fs';
import path from 'path';

import { ContractAbi } from '@plugnet/types';
import testingPairs from '@plugnet/keyring/testingPairs';

import json from '../data/erc20.json';
import Api from '../../src/promise';

describe.skip('e2e contracts', () => {
  let address;
  let codeHash;
  let keyring;
  let abi;
  let api;

  beforeEach(async (done) => {
    if (!api) {
      api = await Api.create();

      abi = new ContractAbi(json);
      keyring = testingPairs({ type: 'sr25519' });
    }

    jest.setTimeout(10000);
    done();
  });

  it('has the attached methods', () => {
    expect(Object.keys(abi.messages)).toEqual(
      ['totalSupply', 'balanceOf', 'allowance', 'transfer', 'approve', 'transferFrom']
    );
  });

  it('allows putCode', (done) => {
    const code = fs.readFileSync(path.join(__dirname, '../data/erc20.wasm')).toString('hex');

    api.tx.contract
      .putCode(200000, `0x${code}`)
      .signAndSend(keyring.eve, (result) => {
        console.error('putCode', JSON.stringify(result));

        if (result.status.isFinalized) {
          const record = result.findRecord('contract', 'CodeStored');

          if (record) {
            codeHash = record.event.data[0];

            done();
          }
        }
      });
  });

  it('allows contract create', (done) => {
    expect(codeHash).toBeDefined();

    api.tx.contract
      .create(1234, 12345, codeHash, abi.deploy(12345))
      .signAndSend(keyring.bob, (result) => {
        console.error('create', JSON.stringify(result));

        if (result.status.isFinalized) {
          const record = result.findRecord('contract', 'Instantiated');

          if (record) {
            address = record.event.data[1];

            done();
          }
        }
      });
  });

  it('allows contract call', (done) => {
    expect(address).toBeDefined();

    api.tx.contract
      .call(address, 123, 12345, abi.messages.balanceOf(keyring.alice.address()))
      .signAndSend(keyring.bob, (result) => {
        console.error('call', JSON.stringify(result));

        if (result.status.isFinalized && result.findRecord('system', 'ExtrinsicSuccess')) {
          done();
        }
      });
  });
});
