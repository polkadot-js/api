import { switchMap } from 'rxjs/operators';

// Import the API, Keyring and some utility functions
const { ApiRx } = require('@polkadot/api');
const Keyring = require('@polkadot/keyring').default;
const u8aFromUtf8 = require('@polkadot/util/u8a/fromUtf8').default;

const ALICE_SEED = 'Alice'.padEnd(32, ' ');
const BOB_ADDR = '5Gw3s7q4QLkSWwknsiPtjujPv3XM4Trxi5d4PgKMMk3gfGTE';

async function main () {
  // Create an instance of the keyring
  const keyring = new Keyring();

  // Add Alice to our keyring (with the known seed for the account)
  const alice = keyring.addFromSeed(u8aFromUtf8(ALICE_SEED));

  // Instantiate the API via Promise
  const api = await ApiRx.create().toPromise();

  // Retrieve the nonce for Alice, to be used to sign the transaction.
  // Use the Storage chain state (runtime) Node Interface.
  api.query.system
    .accountNonce(alice.address())
    .pipe(
      // Pipe nonce into transfer.
      // Use the Extrinsics (runtime) Node Interface.
      switchMap((aliceNonce) =>
        api.tx.balances
          // Create an extrinsic, transferring 12345 units to Bob.
          .transfer(BOB_ADDR, 12345)
          // Sign the transaction using our account keypair, nonce,
          // and optionally the block hash
          .sign(alice, aliceNonce)
          // Send the transaction (optional status callback)
          .send((status) => {
            console.log(`current status ${status.type}`);
          })
      )
    )
    // Subscribe to overall resulting Hash
    .subscribe((hash) => {
      console.log(`submitted transfer 12345 to Bob with hash ${hash}`);
    });
}

main().catch(console.error).finally(_ => process.exit());
