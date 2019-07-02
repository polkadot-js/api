// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { KeyringPair } from '@polkadot/keyring/types';

import fs from 'fs';
import path from 'path';

import { Abi } from '@polkadot/api-contract';
import testingPairs from '@polkadot/keyring/testingPairs';
import { Address, Hash } from '@polkadot/types';

import flipperAbi from '../../../api-contract/test/contracts/flipper.json';

import { ApiPromise, SubmittableResult } from '../../src';

const flipperCode = fs.readFileSync(path.join(__dirname, '../../../api-contract/test/contracts/flipper-pruned.wasm')).toString('hex');

describe.skip('Promise e2e contracts', () => {
  let address: Address;
  let codeHash: Hash;
  let keyring: {
    [index: string]: KeyringPair
  };
  let api: ApiPromise;

  beforeEach(async (done) => {
    if (!api) {
      api = await ApiPromise.create();

      keyring = testingPairs({ type: 'sr25519' });
    }

    jest.setTimeout(10000);
    done();
  });

  describe('flipper', () => {
    const MAX_GAS = 500000;
    let abi: Abi;

    beforeEach(() => {
      abi = new Abi(flipperAbi);
    });

    it('allows putCode', (done) => {
      return (
        api.tx.contracts
          .putCode(MAX_GAS, `0x${flipperCode}`)
          .signAndSend(keyring.eve, (result: SubmittableResult) => {
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
        api.tx.contracts
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
        api.tx.contracts
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
});
