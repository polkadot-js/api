// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import fs from 'fs';
import path from 'path';

import { ContractAbi } from '@polkadot/types';
import testingPairs from '@polkadot/keyring/testingPairs';

import incrementer from '../data/incrementer.json';
import erc20 from '../data/erc20.json';
import Dummy from '../data/Dummy.json';
import Api from '../../src/promise';

describe('e2e contracts', () => {
  let address;
  let codeHash;
  let keyring;
  let api;

  beforeEach(async (done) => {
    if (!api) {
      api = await Api.create();

      keyring = testingPairs({ type: 'sr25519' });
    }

    jest.setTimeout(10000);
    done();
  });

  describe.skip('incrementer', () => {
    let abi;

    beforeAll(() => {
      abi = new ContractAbi(incrementer);
    });

    it('allows putCode', (done) => {
      const code = fs.readFileSync(path.join(__dirname, '../data/incrementer-opt.wasm')).toString('hex');

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
        .create(12345, 500000, codeHash, abi.deploy(12345))
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
        .call(address, 12345, 500000, abi.messages.inc(123))
        .signAndSend(keyring.bob, (result) => {
          console.error('call', JSON.stringify(result));

          if (result.status.isFinalized && result.findRecord('system', 'ExtrinsicSuccess')) {
            done();
          }
        });
    });
  });

  describe.skip('erc20', () => {
    let abi;

    beforeAll(() => {
      abi = new ContractAbi(erc20);
    });

    it('has the attached methods', () => {
      expect(Object.keys(abi.messages)).toEqual(
        ['totalSupply', 'balanceOf', 'allowance', 'transfer', 'approve', 'transferFrom']
      );
    });
  });

  // A Tuple ret_type from the contract is represented as a JS array of types
    // e.g. Basic Tuple
    // "return_type": [
    //   "u32",
    //   "u32"
    // ]
  // A Vector ret_type from the contract is represented as as JS array of objects of paramName and the generic types
    // e.g. Nested Vector
    // "return_type": {
    //   "Vec<T>": {
    //     "T": {
    //       "Vec<T>": {
    //         "T": "i32"
    //       }
    //     }
    //   }
    // }
  describe.only('generic vec and tuple return types', () => {
    let address;
    let codeHash;
    let keyring;
    let api;
    let abi;

    beforeAll(() => {
      abi = new ContractAbi(Dummy);
    });

    it.only('allows putCode', (done) => {
      const code = fs.readFileSync(path.join(__dirname, '../data/dummy-opt.wasm')).toString('hex');

      api.tx.contract
        .putCode(200000, `0x${code}`)
        .signAndSend(keyring.alice, (result) => {
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
        // create(endowment: Compact<BalanceOf>, gas_limit: Compact<Gas>, code_hash: CodeHash, data: Bytes)
        .create(12345, 500000, codeHash, abi.deploy())
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

    it('should decode tuple return type', () => {
      expect(address).toBeDefined();

      // expected return type: 
      // "Vec<T>": {
      //  "T": "u32"
      // }
      api.tx.contract
        .call(address, 12345, 500000, abi.messages.vector_basic())
        .signAndSend(keyring.bob, (result) => {
          console.error('call to vector_basic()', JSON.stringify(result));

          if (result.status.isFinalized && result.findRecord('system', 'ExtrinsicSuccess')) {
            console.log('here is the result then... ---> ', result);
            done();
          }
        });
    });

    it('should decode nested tuple return type', () => {

    });

    it('should decode tuple of arrays return type', () => {

    });

    it('should decode array return type', () => {

    });

    
    it('should decode nested array return type', () => {

    });

    it('should decode array of tuples return type', () => {

    });
  });
});
