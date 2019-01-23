// Import the API, Keyring and some utility functions
const { ApiPromise } = require('@polkadot/api');
const { Keyring } = require('@polkadot/keyring');
const { stringToU8a } = require('@polkadot/util');

const ALICE_SEED = 'Alice'.padEnd(32, ' ');
const BOB_ADDR = '5Gw3s7q4QLkSWwknsiPtjujPv3XM4Trxi5d4PgKMMk3gfGTE';

async function main () {
  // Create an instance of the keyring
  const keyring = new Keyring();

  // Add Alice to our keyring (with the known seed for the account)
  const alice = keyring.addFromSeed(stringToU8a(ALICE_SEED));

  // Instantiate the API
  const api = await ApiRx.create().toPromise();

  //  Create a extrinsic, transferring 12345 units to Bob.
  api.tx.balances
    // create transfer
    .transfer(BOB, randomAmount)
    // Sign and send the transcation
    .signAndSend(alice)
    // Subscribe to the status updates of the transfer
    .subscribe(({ status, type }) => {
      if (type === 'Finalised') {
        console.log(`Successful transfer of 12345 from Alice to Bob with hash ${status.asFinalised.toHex()}`);
      } else {
        console.log(`Staus of transfer: ${type}`);
      }
    });
}

main().catch(console.error).finally(_ => process.exit());
