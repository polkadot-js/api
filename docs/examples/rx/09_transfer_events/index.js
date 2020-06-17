/* eslint-disable header/header */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/unbound-method */

// Import the API and some utility functions
const { ApiRx } = require('@polkadot/api');

// Import the test keyring (already has dev keys for Alice, Bob, Charlie, Eve & Ferdie)
const testKeyring = require('@polkadot/keyring/testing');

// Utility function for random values
const { randomAsU8a } = require('@polkadot/util-crypto');

// Some constants we are using in this sample
const ALICE = '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY';
const AMOUNT = 10000;

async function main () {
  // Create our API with a connection to the node
  const api = await ApiRx.create().toPromise();

  // Create an instance of our testign keyring
  // If you're using ES6 module imports instead of require, just change this line to:
  // const keyring = testKeyring();
  const keyring = testKeyring.default();

  // Find the actual keypair in the keyring
  const alicePair = keyring.getPair(ALICE);

  // Create a new random recipient
  const recipient = keyring.addFromSeed(randomAsU8a(32)).address;

  console.log('Sending', AMOUNT, 'from', alicePair.address, 'to', recipient);

  // Get the nonce for the admin key
  // Create a extrinsic, transferring 12345 units to Bob.
  api.tx.balances
    // Do the transfer
    .transfer(recipient, AMOUNT)
    // Sign and send it
    .signAndSend(alicePair)
    // And subscribe to the actual status
    .subscribe(({ events = [], status }) => {
      // Log transfer events
      console.log('Transfer status:', status.type);

      // Log system events once the transfer is finalised
      if (status.isInBlock) {
        console.log('Included at block hash', status.asInBlock.toHex());
        console.log('Events:');

        events.forEach(({ event: { data, method, section }, phase }) => {
          console.log('\t', phase.toString(), `: ${section}.${method}`, data.toString());
        });
      } else if (status.isFinalized) {
        console.log('Finalized block hash', status.asFinalized.toHex());

        process.exit(0);
      }
    });
}

main().catch(console.error);
