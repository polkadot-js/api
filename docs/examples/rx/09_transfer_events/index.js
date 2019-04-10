// Import the API and some utility functions
const { ApiRx } = require('@polkadot/api');

// import the test keyring (already has dev keys for Alice, Bob, Charlie, Eve & Ferdie)
const testKeyring = require('@polkadot/keyring/testing');

// utility function for random values
const { randomAsU8a } = require('@polkadot/util-crypto');

// some constants we are using in this sample
const ALICE = '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY';
const AMOUNT = 10000;

async function main () {
  // Create our API with a connection to the node
  const api = await ApiRx.create().toPromise();

  // create an instance of our testign keyring
  // If you're using ES6 module imports instead of require, just change this line to:
  // const keyring = testKeyring();
  const keyring = testKeyring.default();

  // find the actual keypair in the keyring
  const alicePair = keyring.getPair(ALICE);

  // create a new random recipient
  const recipient = keyring.addFromSeed(randomAsU8a(32)).address();

  console.log('Sending', AMOUNT, 'from', alicePair.address(), 'to', recipient);

  // get the nonce for the admin key
  //  Create a extrinsic, transferring 12345 units to Bob.
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
      if (status.isFinalized) {
        console.log('Completed at block hash', status.asFinalized.toHex());
        console.log('Events:');

        events.forEach(({ phase, event: { data, method, section } }) => {
          console.log('\t', phase.toString(), `: ${section}.${method}`, data.toString());
        });
      }
    });
}

main().catch(console.error);
