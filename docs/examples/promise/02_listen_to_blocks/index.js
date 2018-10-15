// Import the API
const { ApiPromise } = require('@polkadot/api');

async function main () {
  // Here we don't pass the (optional) provider, connecting directly to the default
  // node/port, i.e. `ws://127.0.0.1:9944`. Await for the isReady promise to ensure
  // the API has connected to the node and completed the initialisation process
  const api = await ApiPromise.create();

  // Subscribe to the new headers on-chain. The callback is fired when new headers
  // are found, the call itself returns a promise with a subscription that can be
  // used to unsubscribe from the newHead subscription.
  // Use the RPC Node Interface
  const subscriptionId = await api.rpc.chain.newHead((header) => {
    console.log(`best #${header.blockNumber}`);
  });

  // Id for the subscription, we can cleanup and unsubscribe via
  // `api.chain.newHead.unsubscribe(subscriptionId)`
  console.log(`subscriptionId: ${subscriptionId}`);
}

main().catch(console.error).finally(_ => process.exit());
