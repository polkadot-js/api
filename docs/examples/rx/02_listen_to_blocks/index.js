const { switchMap } = require('rxjs/operators');

// Import the API Rx
const { ApiRx } = require('@polkadot/api');
const { WsProvider } = require('@polkadot/rpc-provider');

const provider = new WsProvider('ws://127.0.0.1:9944');

function main () {
  // Here we pass the (optional) provider
  const subscriptionApiRx = ApiRx
    .create(provider)
    .pipe(
      // Here we subscribe to the chain header. Use the RPC Node Interface
      switchMap((api) => api.rpc.chain.subscribeNewHead())
    )
    .subscribe((header) => {
      console.log(`Chain is at best block #${header.blockNumber.toNumber()}`);
    });
}

main();
