// Import the API
const { ApiRx } = require('@polkadot/api');

async function main () {
  // Here we don't pass the (optional) provider, connecting directly to the default
  // node/port, i.e. `ws://127.0.0.1:9944`. Await for the isReady promise to ensure
  // the API has connected to the node and completed the initialisation process
  ApiRx.create().subscribe((api) => {
    const subscription = api.rpc.chain.subscribeNewHead().subscribe((header) => {
      console.log(`Chain is at block: #${header.blockNumber}`);
    });
    //  We can cleanup and unsubscribe using the unsubscribe() method of the API.
    // In this example we're calling the Overvables unsubscribe() function after 20s.
    setTimeout(() => {
      subscription.unsubscribe();
      console.log('Unsubscribed');
    }, 20000);
  });
}

main().catch(console.error);
