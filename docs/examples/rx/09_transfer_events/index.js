// Import the API and some utility functions
const { ApiRx } = require('@polkadot/api');
// Import RxJs operators
const { switchMap, first } = require('rxjs/operators');

// import the test keyring (already has dev keys for Alice, Bob, Charlie, Eve & Ferdie)
const testKeyring = require('@polkadot/keyring/testing');

// utility function for random values
const { randomAsU8a } = require('@polkadot/util-crypto');

// some constants we are using in this sample
const ALICE = '5GoKvZWG5ZPYL1WUovuHW3zJBWBP5eT8CbqjdRY4Q6iMaDtZ';
const AMOUNT = 10000;

async function main () {
  // create an instance of our testign keyring
  // If you're using ES6 module imports instead of require, just change this line to:
  // const keyring = testKeyring();
  const keyring = testKeyring.default();

  // Create our API with a connection to the node
  const api = await ApiRx.create(provider).toPromise();

  // find the actual keypair in the keyring
  const alicePair = keyring.getPair(ALICE);

  // create a new random recipient
  const recipient = keyring.addFromSeed(randomAsU8a(32)).address();

  console.log('Sending', AMOUNT, 'from', alicePair.address(), 'to', recipient);

  // get the nonce for the admin key
  api.query.system.accountNonce(ALICE).pipe(first(),
    // pipe nonce into transfer
    switchMap(aliceNonce => api.tx.balances
      // Do the transfer, sign and send it and subscribe to the actual status
      .transfer(recipient, AMOUNT)
      // sign the transcation
      .sign(alicePair, aliceNonce)
      // send the transaction
      .send()))
    // subscribe to overall result
    .subscribe(({ events = [], status, type }) => {
      // Log transfer events
      console.log('Transaction status:', type);

      // Log system events once the transfer is finalised
      if (type === 'Finalised') {
        console.log('Completed at block hash', status.value.toHex());
        console.log('Events:');

        events.forEach(({ phase, event: { data, method, section } }) => {
          console.log('\t', phase.toString(), `: ${section}.${method}`, data.toString());
        });
      }
    });
}

main().catch(console.error);
