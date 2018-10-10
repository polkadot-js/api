const Rpc = require('@polkadot/rpc-core').default;
const WsProvider = require('@polkadot/rpc-provider/ws').default;
const provider = new WsProvider('ws://127.0.0.1:9944');
const api = new Rpc(provider);

api.chain
  .newHead((error, header) => {
    if (error) {
      console.error('error:', error);
    }

    console.log(`best #${header.blockNumber.toString()}`);
  })
  .then((subscriptionId) => {
    console.log(`subscriptionId: ${subscriptionId}`);
    // id for the subscription, can unsubscribe via
    // api.chain.newHead.unsubscribe(subscriptionId);
  })
  .catch((error) => {
    console.error('error subscribing:', error);
  });
