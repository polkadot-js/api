// Import the API Rx
const { ApiRx } = require('@polkadot/api');
const { WsProvider } = require('@polkadot/rpc-provider');

const wsProvider = new WsProvider('ws://127.0.0.1:9944');

// Known account we want to use (available on dev chain, with funds)
const Alice = '5GoKvZWG5ZPYL1WUovuHW3zJBWBP5eT8CbqjdRY4Q6iMaDtZ';

async function main () {
  // Here we pass the (optional) provider
  ApiRx.create(wsProvider).subscribe((api) => {
    // Use the Storage chain state (runtime) Node Interface.
    api.query.balances.freeBalance(Alice).subscribe((balance) => {
      console.log('new balance', balance);
    });
  });
}

main().catch(console.error).finally(_ => process.exit());
