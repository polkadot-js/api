/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-var-requires */
// Import the API & Provider and some utility functions
const { ApiPromise } = require('@polkadot/api');

// Import the test keyring (already has dev keys for Alice, Bob, Charlie, Eve & Ferdie)
const testKeyring = require('@polkadot/keyring/testing');

// Utility function for random values
const { randomAsU8a } = require('@polkadot/util-crypto');

// Some constants we are using in this sample
const ALICE = '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY';
const AMOUNT = 10000;

async function main () {
  // Create the API and wait until ready
  const api = await ApiPromise.create();

  // Create an instance of our testing keyring
  // If you're using ES6 module imports instead of require, just change this line to:
  // const keyring = testKeyring();
  const keyring = testKeyring.default();

  // Get the nonce for the admin key
  const nonce = await api.query.system.accountNonce(ALICE);

  // Find the actual keypair in the keyring
  const alicePair = keyring.getPair(ALICE);

  // Create a new random recipient
  const recipient = keyring.addFromSeed(randomAsU8a(32)).address;

  console.log('Sending', AMOUNT, 'from', alicePair.address, 'to', recipient, 'with nonce', nonce.toString());

  // Do the transfer and track the actual status
  api.tx.balances
    .transfer(recipient, AMOUNT)
    .signAndSend(alicePair, { nonce }, ({ events = [], status }) => {
      console.log('Transaction status:', status.type);

      if (status.isFinalized) {
        console.log('Completed at block hash', status.asFinalized.toHex());
        console.log('Events:');

        events.forEach(({ phase, event: { data, method, section } }) => {
          console.log('\t', phase.toString(), `: ${section}.${method}`, data.toString());
        });

        process.exit(0);
      }
    });
}

main().catch(console.error);
