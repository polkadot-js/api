const { switchMap } = require('rxjs/operators');
const readline = require('readline');

// Import the API Rx
const { ApiRx } = require('@polkadot/api');
const { WsProvider } = require('@polkadot/rpc-provider');

const wsProvider = new WsProvider('ws://127.0.0.1:9944');

async function main () {
  // Here we pass the (optional) provider
  const subscriptionApiRx = ApiRx
    .create(wsProvider)
    .pipe(
      // Here we subscribe to the chain header. Use the RPC Node Interface
      switchMap((api) => api.rpc.chain.subscribeNewHead())
    )
    .subscribe((header) => {
      console.log(`Chain is at best block #${header.blockNumber.toNumber()}`);
    });

  // Support for detecting when CTRL+C (interrupt signal) received on Windows
  if (process.platform === 'win32') {
    var rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.on('SIGINT', function () {
      process.emit('SIGINT');
    });
  }

  // Gracefully exist upon receiving interrupt signal (CTRL+C)
  process.on('SIGINT', function () {
    console.log(`\nReceived interrupt signal`);

    // Cleanup and unsubscribe from the subscription
    subscriptionApiRx.unsubscribe();
    console.log(`Unsubscribing successful? ${subscriptionApiRx.closed}`);

    process.exit();
  });
}

main().catch(console.error);
