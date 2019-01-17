// Import the API, Keyring and some utility functions
const { ApiPromise } = require('@polkadot/api');
const { Keyring } = require('@polkadot/keyring');
const { stringToU8a } = require('@polkadot/util');
const { switchMap, first } = require('rxjs/operators');

const ALICE_SEED = 'Alice'.padEnd(32, ' ');
const BOB_ADDR = '5Gw3s7q4QLkSWwknsiPtjujPv3XM4Trxi5d4PgKMMk3gfGTE';

async function main () {
  // Create an instance of the keyring
  const keyring = new Keyring();

  // Add Alice to our keyring (with the known seed for the account)
  const alice = keyring.addFromSeed(stringToU8a(ALICE_SEED));

  // Instantiate the API
  const api = await ApiRx.create().toPromise();

  // Retrieve the nonce for Alice, to be used to sign the transaction
  // and create a extrinsic, transferring 12345 units to Bob.
  api.query.system.accountNonce(alice.address()).pipe(first(),
    // pipe nonce into transfer
    switchMap(nonce => api.tx.balances
      // create transfer
      .transfer(BOB_ADDR, 12345)
      // Sign and send the transcation
      .signAndSend(alice)))
    .subscribe(({ status, type }) => {
      if (type === 'Finalised') {
        console.log(`Successful transfer of 12345 from Alice to Bob with hash ${status.value.toHex()}`);
      } else {
        console.log(`Pending transfer of 12345 from Alice to Bob`);
      }
    });
}

main().catch(console.error).finally(_ => process.exit());
