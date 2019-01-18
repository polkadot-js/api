// Import the API
const { ApiRx } = require('@polkadot/api');

async function main () {
  
  // Create a new instance of the api
  const api = await new ApiRx;

  // Subscribe to chain updates and log the current block  number on update.
  const subscription = api.rpc.chain.subscribeNewHead().subscribe((header) => {
    console.log(`Chain is at block: #${header.blockNumber}`);
  });

  // We can cleanup and unsubscribe from a subscription using
  // the unsubscribe() method of the API.
  // In this example we're calling the Overvables unsubscribe() //
  // function after 20s.
  setTimeout(() => {
    subscription.unsubscribe();
    console.log('Unsubscribed');
  }, 20000);
}

main().catch(console.error);
