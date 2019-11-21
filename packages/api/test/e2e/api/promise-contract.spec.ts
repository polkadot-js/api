// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import fs from 'fs';
import path from 'path';
import { Abi } from '@polkadot/api-contract';
import testingPairs from '@polkadot/keyring/testingPairs';
import WsProvider from '@polkadot/rpc-provider/ws';

import { Address, Hash } from '@polkadot/types/interfaces';

import { ApiPromise, SubmittableResult } from '../../../src';
import { describeE2E } from '../../util';

// Backwards compatibility:
// A breaking change was introduced by substrate runtime spec version 97. https://github.com/paritytech/substrate/pull/2911/files
// The change had to be implemented in ink! which changed the structure of the Wasm files.
// The Polkadot JS API is only supporting srml-contracts module of substrate version greater or equal spec_version 97.

import incrementerAbi from '../../../../api-contract/test/contracts/Incrementer.json'; // eslint-disable-line
const incrementerCode = fs.readFileSync(path.join(__dirname, '../../../../api-contract/test/contracts/incrementer-pruned.wasm')).toString('hex'); // eslint-disable-line

describeE2E({
  except: [
    'docker-polkadot-master',
    'docker-polkadot-alexander',
    'docker-substrate-1.0',
    'remote-polkadot-alexander',
    'remote-substrate-1.0'
  ]
})('Promise e2e contracts', (wsUrl: string): void => {
  let address: Address;
  let codeHash: Hash;
  const keyring = testingPairs({ type: 'sr25519' });
  let api: ApiPromise;
  let CREATION_FEE: number;

  beforeEach(async (done): Promise<void> => {
    api = await ApiPromise.create({ provider: new WsProvider(wsUrl) });
    CREATION_FEE = 123456789123456;

    done();
  });

  describe('incrementer', (): void => {
    const MAX_GAS = 50000;
    let abi: Abi;

    beforeEach((): void => {
      abi = new Abi(api.registry, incrementerAbi);
    });

    it('allows putCode', (done): Promise<() => void> => {
      return (
        api.tx.contracts
          .putCode(MAX_GAS, `0x${incrementerCode}`)
          .signAndSend(keyring.eve, (result: SubmittableResult): void => {
            if (result.status.isFinalized) {
              const record = result.findRecord('contracts', 'CodeStored');
              if (record) {
                codeHash = record.event.data[0] as Hash;
                done();
              }
            }
          })
      );
    });

    it('Verifies that codeHash is defined', (): void => {
      expect(codeHash).toBeDefined();
    });

    it('allows contract create', (done): Promise<() => void> => {
      // An instance of a contract can only be deployed once by one specific account.
      // That's why we need a random starting point for our incrementer contract to be
      // able to run this test multiple times without the need of pruning the database
      const randomStart = Math.floor(Date.now() / 1000);

      return (
        api.tx.contracts
          .create(CREATION_FEE, MAX_GAS, codeHash, abi.constructors[0](randomStart))
          .signAndSend(keyring.dave, (result: SubmittableResult): void => {
            // console.error('create', JSON.stringify(result));

            if (result.status.isFinalized) {
              const record = result.findRecord('contracts', 'Instantiated');

              if (record) {
                address = record.event.data[1] as Address;

                done();
              }
            }
          })
      );
    });

    it('Verifies that the contract address is defined', (): void => {
      expect(address).toBeDefined();
    });

    it('allows contract call', (done): Promise<() => void> => {
      return (
        api.tx.contracts
          .call(address, CREATION_FEE, MAX_GAS, abi.messages.inc(3))
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
