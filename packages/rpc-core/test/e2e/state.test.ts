// Copyright 2017-2019 @polkadot/rpc-core authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

// import fs from 'fs';
// import path from 'path';

import { Address, Balance, Bytes, ContractAbi, Hash, Metadata, Moment } from '@polkadot/types';
import storage from '@polkadot/storage/static';
import WsProvider from '@polkadot/rpc-provider/ws';

// import ApiRx from '@polkadot/api/rx/Api';
// import { ApiInterface$Rx } from '@polkadot/api/types';
// import { SubmittableResult } from '@polkadot/api';
// import { KeyringPair } from '@polkadot/keyring/types';
// import testingPairs from '@polkadot/keyring/testingPairs';

import Rpc from '../../src';
// import flipperAbi from '../../../api/test/data/flipper.json';

const ALICE = '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY';

describe('e2e state', () => {
  let api: Rpc;

  beforeEach(() => {
    jest.setTimeout(30000);
    api = new Rpc(new WsProvider('ws://127.0.0.1:9944'));
  });

  it('getMetadata(): retrieves the wasm metadata', () => {
    return api.state
      .getMetadata()
      .then((meta: Metadata) => {
        console.error(JSON.stringify(meta.toJSON()));
      })
      .catch((error) => {
        console.error(error);

        throw error;
      });
  });

  it('getKeys(): retrieves all child storage keys', () => {
    console.log('1212test'):
    // @TODO
    return api.state
      .getKeys('0x3a6368696c645f73746f726167653a')
      .then((keys: []) => {
        console.log('1212testkeys')
        console.log(keys)
        // expect(keys).toBeInstanceOf(Array);
      })
      .catch((error) => {
        console.error(error);

        throw error;
      });
  });

  describe('test-suite getStorage()', () => {
    it('retrieves code', () => {
      return api.state
        .getStorage([
          storage.substrate.code
        ])
        .then((code: Bytes) => {
          console.error(code.toHex().substr(0, 256), '...');
        })
        .catch((error) => {
          console.error(error);

          throw error;
        });
    });

    it('retrieves balances', () => {
      return api.state
        .getStorage([
          storage.balances.freeBalance, ALICE
        ])
        .then((balance: Balance) => {
          console.error(balance);

          expect(balance.isZero()).not.toEqual(true);
        })
        .catch((error) => {
          console.error(error);

          throw error;
        });
    });

    it('retrieves timestamp', () => {
      return api.state
        .getStorage([
          storage.timestamp.now
        ])
        .then((moment: Moment) => {
          console.error(moment);

          expect(moment.toNumber()).not.toEqual(0);
        })
        .catch((error) => {
          console.error(error);

          throw error;
        });
    });
  });

  it('getChildStorage(): retrieves the flipper smart contract value', () => {

    beforeEach(async (done) => {
      // `child_storage` is currently not used anywhere in substrate, that's why we need to
      // add a Smart Contract that is using `child_storage` before being able to test it.
      // const code: string = fs.readFileSync(path.join(__dirname, '../../../api/test/data/flipper-pruned.wasm')).toString('hex');
      // const apiRx: ApiInterface$Rx = await ApiRx.create(new WsProvider('ws://127.0.0.1:9944')).toPromise();
      // const keyring: {
      //   [index: string]: KeyringPair
      // } = testingPairs({ type: 'sr25519' });

      // apiRx.tx.contract
      //   .putCode(500000, `0x${code}`)
      //   .signAndSend(keyring.eve, (result: SubmittableResult) => {});

      // apiRx.query.balances.freeBalance(Alice).pipe(
      //   // since pairwise only starts emitting values on the second emission, we prepend an
      //   // initial value with the startWith() operator to be able to also receive the first value
      //   startWith('first'),
      //   pairwise()
      // )
      // .subscribe((balance) => {
      //   if (balance[0] === 'first') {
      //     // Now we know that if the previous value emitted as balance[0] is `first`,
      //     // then balance[1] is the initial value of Alice account.
      //     console.log(`Alice ${Alice} has a balance of ${balance[1]}`);
      //     console.log('You may leave this example running and start the "Make a transfer" example or transfer any value to Alice address');
      //     return;
      //   }

      //   const change = balance[1].sub(balance[0]);
      //   // Only display value changes
      //   if (!change.isZero()) {
      //     console.log(`New balance change of: ${change}`);
      //   }
      // });

      // const abi: ContractAbi = new ContractAbi(flipperAbi);
      //

      // apiRx.tx.contract.putCode(500000, `0x${code}`).signAndSend(keyring.eve, (result: SubmittableResult) => {
      //   if (result.status.isFinalized && result.findRecord('contract', 'CodeStored')) {
      //     apiRx.tx.contract.create(12345, 500000, result, abi.deploy()).signAndSend(keyring.bob);
      //   }
      // });

      // apiRx.tx.contract.call(address, 12345, MAX_GAS, abi.messages.flip()).signAndSend(keyring.bob);

      done();
    });

  });
});
