// Import the API and WebSockets provider
const { ApiPromise } = require('@polkadot/api');
const { WsProvider } = require('@polkadot/rpc-provider');

// Initialise the provider to connect to the local node
const wsProvider = new WsProvider('ws://127.0.0.1:9944');

// Known account we want to use (available on dev chain, with funds)
// FIXME: How are we associating Alice's account with funding the contract creation
const Alice = '5GoKvZWG5ZPYL1WUovuHW3zJBWBP5eT8CbqjdRY4Q6iMaDtZ';

async function main () {
  // Declare value to send to smart contract, gas limit, initial code, and data
  const contractValue = 1000;
  const gasLimit = 0.1;
  const initCode = new Uint8Array([4 << 2, 0xde, 0xad, 0xbe, 0xef]);
  const data = new Uint8Array([4 << 2, 0xde, 0xad, 0xbe, 0xef]);

  // Create API using default provider and wait until ready
  const api = await ApiPromise.create(wsProvider);

  // Create Smart Contract
  let chainDeploymentHash = await api.tx.contract.create(contractValue, gasLimit, initCode, data);
  console.log(`Contract deployed for Alice: ${chainDeploymentHash}`);

  // Retrieve Smart Contract
  // FIXME: Error: Method: cannot decode value ""0x2001000310deadbeef"".
  // let contractRetrievedHash = await api.tx.contract.call(Alice, contractValue, gasLimit, data);
  // console.log(`Retrieved hash of smart contract deployed by Alice:: ${contractRetrievedHash}`);
}

main().catch(console.error).finally(_ => process.exit());
