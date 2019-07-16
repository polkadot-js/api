// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import fs from 'fs';
import path from 'path';

import { Abi } from '@polkadot/api-contract';
import testingPairs from '@polkadot/keyring/testingPairs';
import WsProvider from '@polkadot/rpc-provider/ws';
import { Address, Hash } from '@polkadot/types';

import { SubmittableResult } from '../../../src';
import ApiPromise from '../../../src/promise';
import describeE2E from '../../util/describeE2E';

import flipperAbi from '../../../../api-contract/test/contracts/flipper.json';
const flipperCode = fs.readFileSync(path.join(__dirname, '../../../../api-contract/test/contracts//flipper-pruned.wasm')).toString('hex');

describeE2E()('Promise e2e contracts', (wsUrl): void => {
  let address: Address;
  let codeHash: Hash;
  const keyring = testingPairs({ type: 'sr25519' });
  let api: ApiPromise;

  beforeEach(async (done): Promise<void> => {
    api = await ApiPromise.create(new WsProvider(wsUrl));

    done();
  });

  describe('flipper', (): void => {
    const MAX_GAS = 500000;
    let abi: Abi;

    beforeEach((): void => {
      abi = new Abi(flipperAbi);
    });

    it('allows putCode', (done): Promise<() => void> => {
      return (
        api.tx.contracts
          .putCode(MAX_GAS, `0x${flipperCode}`)
          .signAndSend(keyring.eve, (result: SubmittableResult): void => {
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

    it('allows contract create', (done): Promise<() => void> => {
      expect(codeHash).toBeDefined();

      return (
        api.tx.contracts
          .create(12345, MAX_GAS, codeHash, abi.deploy())
          .signAndSend(keyring.bob, (result: SubmittableResult): void => {
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

    it('allows contract call', (done): Promise<() => void> => {
      expect(address).toBeDefined();

      return (
        api.tx.contracts
          .call(address, 12345, MAX_GAS, abi.messages.flip())
          .signAndSend(keyring.bob, (result: SubmittableResult): void => {
            console.error('call', JSON.stringify(result));

            if (result.status.isFinalized && result.findRecord('system', 'ExtrinsicSuccess')) {
              done();
            }
          })
      );
    });
  });
});
