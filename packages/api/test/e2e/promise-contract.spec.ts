// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import fs from 'fs';
import path from 'path';

import { ContractAbi } from '@polkadot/types';
import { KeyringPair } from '@polkadot/keyring/types';
import { SubmittableResult } from '@polkadot/api';
import testingPairs from '@polkadot/keyring/testingPairs';

import incrementer from '../data/incrementer.json';
import erc20 from '../data/erc20.json';
import Api from '@polkadot/api/promise';

describe.skip('e2e contracts', () => {
  let address: any;
  let codeHash: any;
  let keyring: {
    [index: string]: KeyringPair
  };
  let api: Api;

  beforeEach(async (done) => {
    if (!api) {
      api = await Api.create();

      keyring = testingPairs({ type: 'sr25519' });
    }

    jest.setTimeout(10000);
    done();
  });

  describe('incrementer', () => {
    let abi: ContractAbi;

    beforeEach(() => {
      abi = new ContractAbi(incrementer);
    });

    it('allows putCode', (done) => {
      const code = fs.readFileSync(path.join(__dirname, '../data/incrementer-opt.wasm')).toString('hex');

      api.tx.contract
        .putCode(200000, `0x${code}`)
        .signAndSend(keyring.eve, (result: SubmittableResult) => {
          console.error('putCode', JSON.stringify(result));

          if (result.status.isFinalized) {
            const record = result.findRecord('contract', 'CodeStored');

            if (record) {
              codeHash = record.event.data[0];
            }
            done();
          }
        }).catch();
    });

    it('allows contract create', (done) => {
      expect(codeHash).toBeDefined();

      api.tx.contract.create(12345, 500000, codeHash, abi.deploy(12345), (contract: any) => {
        contract.signAndSend(keyring.bob, (result: SubmittableResult) => {
          console.error('create', JSON.stringify(result));

          if (result.status.isFinalized) {
            const record = result.findRecord('contract', 'Instantiated');

            if (record) {
              address = record.event.data[1];

              done();
            }
          }
        }).catch();
      });
    });

    it('allows contract call', (done) => {
      expect(address).toBeDefined();

      api.tx.contract.call(address, 12345, 500000, abi.messages.inc(123), (contract: any) => {
        contract.signAndSend(keyring.bob, (result: SubmittableResult) => {
          console.error('call', JSON.stringify(result));

          if (result.status.isFinalized && result.findRecord('system', 'ExtrinsicSuccess')) {
            done();
          }
        }).catch();
      });
    });
  });

  describe('erc20', () => {
    let abi: ContractAbi;

    beforeEach(() => {
      abi = abi = new ContractAbi(erc20);
    });

    it('has the attached methods', () => {
      expect(Object.keys(abi.messages)).toEqual(
        ['totalSupply', 'balanceOf', 'allowance', 'transfer', 'approve', 'transferFrom']
      );
    });
  });
});
