
/* eslint-disable header/header */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/unbound-method */

// Import the API, Keyring and some utility functions
const { ApiRx } = require('@polkadot/api');
const { Keyring } = require('@polkadot/keyring');

const BOB = '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty';

async function main () {
  // Instantiate the API
  const api = await ApiRx.create().toPromise();

  // Create an instance of the keyring
  const keyring = new Keyring({ type: 'sr25519' });

  // Add Alice to our keyring (with the known seed for the account)
  const alice = keyring.addFromUri('//Alice');

  // Create a extrinsic, transferring 12345 units to Bob.
  const subscription = api.tx.balances
    // create transfer
    .transfer(BOB, 12345)
    // Sign and send the transcation
    .signAndSend(alice)
    // Subscribe to the status updates of the transfer
    .subscribe(({ status }) => {
      if (status.isInBlock) {
        console.log(`Successful transfer of 12345 from Alice to Bob at block ${status.asInBlock.toHex()}`);
      } else if (status.isFinalized) {
        console.log('Finalized block hash', status.asFinalized.toHex());

        subscription.unsubscribe();

        process.exit(0);
      } else {
        console.log(`Status of transfer: ${status.type}`);
      }
    });
}

main().catch(console.error);
