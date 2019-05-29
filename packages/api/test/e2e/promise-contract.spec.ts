// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import fs from 'fs';
import path from 'path';

import { ContractAbi, Address, Hash } from '@plugnet/types';
import { KeyringPair } from '@plugnet/keyring/types';
import testingPairs from '@plugnet/keyring/testingPairs';

import Api from './../../src/promise';
import flipperAbi from '../data/flipper.json';
import erc20Abi from '../data/erc20.json';
import { SubmittableResult } from './../../src';

describe.skip('Promise e2e contracts', () => {
  let address: Address;
  let codeHash: Hash;
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

  describe('flipper', () => {
    const MAX_GAS = 500000;
    let abi: ContractAbi;

    beforeEach(() => {
      abi = new ContractAbi(flipperAbi);
    });

    it('allows putCode', (done) => {
      const code = fs.readFileSync(path.join(__dirname, '../data/flipper-pruned.wasm')).toString('hex');

      return (
        api.tx.contract
        .putCode(MAX_GAS, `0x${code}`)
        .signAndSend(keyring.eve, (result: SubmittableResult) => {
          console.error('putCode', JSON.stringify(result));

          if (result.status.isFinalized) {
            const record = result.findRecord('contract', 'CodeStored');

            if (record) {
              codeHash = record.event.data[0] as Hash;

              done();
            }
          }
        })
      );
    });

    it('allows contract create', (done) => {
      expect(codeHash).toBeDefined();

      return (
        api.tx.contract
          .create(12345, MAX_GAS, codeHash, abi.deploy())
          .signAndSend(keyring.bob, (result: SubmittableResult) => {
            console.error('create', JSON.stringify(result));

            if (result.status.isFinalized) {
              const record = result.findRecord('contract', 'Instantiated');

              if (record) {
                address = record.event.data[1] as Address;

                done();
              }
            }
          })
      );
    });

    it('allows contract call', (done) => {
      expect(address).toBeDefined();

      return (
        api.tx.contract
          .call(address, 12345, MAX_GAS, abi.messages.flip())
          .signAndSend(keyring.bob, (result: SubmittableResult) => {
            console.error('call', JSON.stringify(result));

            if (result.status.isFinalized && result.findRecord('system', 'ExtrinsicSuccess')) {
              done();
            }
          })
      );
    });
  });

  describe('erc20', () => {
    let abi: ContractAbi;

    beforeEach(() => {
      abi = new ContractAbi(erc20Abi);
    });

    it('has the attached methods', () => {
      expect(Object.keys(abi.messages)).toEqual(
        ['totalSupply', 'balanceOf', 'allowance', 'transfer', 'approve', 'transferFrom']
      );
    });
  });
});
