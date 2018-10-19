const { combineLatest } = require('rxjs');
const { switchMap } = require('rxjs/operators');

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
  const api = await ApiRx.create();

  // Use the Storage chain state (runtime) Node Interface.
  api
    .pipe(
      switchMap((api) =>
        combineLatest([
          // Retrieve the nonce for Alice, to be used to sign the transaction.
          api.query.system.accountNonce(alice.address()),
          api.rpc.chain.getBlockHash(0)
            .pipe(
              // Pipe nonce into transfer.
              // Use the Extrinsics (runtime) Node Interface.
              switchMap((aliceNonce, blockHash) => {
                return api.tx.balances
                  // Create an extrinsic, transferring 12345 units to Bob.
                  .transfer(BOB_ADDR, 12345)
                  // Sign the transaction using our account keypair, nonce,
                  // and optionally the block hash
                  .sign(alice, aliceNonce, blockHash);
                  // Send the transaction (optional status callback)
                  // .send((status) => {
                  //   console.log(`current status ${status.type}`);
                  // })
              })
            )
        ])
      )
    )
    // Subscribe to overall resulting Hash
    .subscribe(([hash]) => {
      console.log(`submitted transfer 12345 to Bob with hash ${hash}`);
    });
}

main().catch(console.error);
