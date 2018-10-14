// Import the API Rx
const { ApiRx } = require('@polkadot/api');
const { WsProvider } = require('@polkadot/rpc-provider');
const testingPairs = require('@polkadot/keyring/testingPairs').default;

const wsProvider = new WsProvider('ws://127.0.0.1:9944');

// Create an instance of the keyring that includes test accounts
const keyring = testingPairs();

// Known account we want to use (available on dev chain, with funds)
const addressAlice = keyring.alice.address();

export default async function exampleApiRx () {
  // Here we pass the (optional) provider
  ApiRx.create(wsProvider).subscribe((api) => {
    // Use the Storage chain state (runtime) Node Interface.
    api.query.balances.freeBalance(addressAlice).subscribe((balance) => {
      console.log('new balance', balance);
    });
  });
}
