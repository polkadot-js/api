/* eslint-disable header/header */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/unbound-method */

// Import the API
const { ApiRx } = require('@polkadot/api');
const { switchMap } = require('rxjs/operators');

async function main () {
  // Here we don't pass the (optional) provider, connecting directly to the default
  // node/port, i.e. `ws://127.0.0.1:9944`. Await for the isReady promise to ensure
  // the API has connected to the node and completed the initialisation process
  new ApiRx().isReady
    .pipe(
      switchMap((api) =>
        api.rpc.chain.subscribeNewHeads()
      ))
    .subscribe((header) => {
      console.log(`Chain is at block: #${header.number}`);
    });
}

main().catch(console.error);
