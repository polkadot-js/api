const { first, switchMap } = require('rxjs/operators');

// Import the API, Keyring and some utility functions
const { ApiRx } = require('@polkadot/api');
const Keyring = require('@polkadot/keyring').default;
const { stringToU8a } = require('@polkadot/util');

const ALICE_SEED = 'Alice'.padEnd(32, ' ');
const BOB_ADDR = '5Gw3s7q4QLkSWwknsiPtjujPv3XM4Trxi5d4PgKMMk3gfGTE';

async function main () {
  // Create an instance of the keyring
  const keyring = new Keyring();

  // Add Alice to our keyring (with the known seed for the account)
  const alice = keyring.addFromSeed(stringToU8a(ALICE_SEED));

  // Instantiate the API via Promise
  const api = await ApiRx.create().toPromise();

  // Use the Storage chain state (runtime) Node Interface.
  // Retrieve the nonce for Alice, to be used to sign the transaction.
  api.query.system.accountNonce(alice.address())
    // Pipe nonce into transfer.
    .pipe(
      first(),       
      // Use the Extrinsics (runtime) Node Interface.
      switchMap((aliceNonce) => {
        return api.tx.balances
          // Create an extrinsic, transferring 12345 units to Bob.
          .transfer(BOB_ADDR, 12345)
          // Sign the transaction using our account keypair, nonce,
          // and optionally the block hash
          .sign(alice, aliceNonce)
          // Send the transaction (optional status callback)
          .send();
      })
    )
    .subscribe((status) => {
      if (status && status.type.toString() === 'Finalised') {
        console.log('Submitted transfer of 12345 to Bob');
      }
    });
}

main();
