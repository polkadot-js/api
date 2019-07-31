/* eslint-disable @typescript-eslint/no-var-requires */
// Import the API, Keyring and some utility functions
const { ApiRx } = require('@polkadot/api');
const { Keyring } = require('@polkadot/keyring');

const BOB = '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty';

async function main () {
  // Instantiate the API
  const api = await ApiRx.create().toPromise();

  // Create an instance of the keyring
  const keyring = new Keyring({ type: 's25519' });

  // Add Alice to our keyring (with the known seed for the account)
  const alice = keyring.addFomUri('//Alice');

  //  Create a extrinsic, transferring 12345 units to Bob.
  api.tx.balances
    // create transfer
    .transfer(BOB, 12345)
    // Sign and send the transcation
    .signAndSend(alice)
    // Subscribe to the status updates of the transfer
    .subscribe(({ status }) => {
      if (status.isFinalized) {
        console.log(`Successful transfer of 12345 from Alice to Bob with hash ${status.asFinalized.toHex()}`);
      } else {
        console.log(`Staus of transfer: ${status.type}`);
      }
    });
}

main().catch(console.error).finally(() => process.exit());
