/* eslint-disable header/header */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/unbound-method */

// Import the API
const { ApiRx } = require('@polkadot/api');
const { switchMap } = require('rxjs/operators');

async function main () {
  // Create a new instance of the api
  // Subscribe to chain updates and log the current block number on update.
  const subscription = new ApiRx().isReady
    .pipe(
      switchMap((api) =>
        api.rpc.chain.subscribeNewHeads()
      ))
    .subscribe((header) => {
      console.log(`Chain is at block: #${header.number}`);
    });

  // In this example we're calling the Overvables unsubscribe() //
  // function after 20s.
  setTimeout(() => {
    subscription.unsubscribe();
    console.log('Unsubscribed');
  }, 20000);
}

main().catch(console.error);
