// Required imports
const { switchMap } = require('rxjs/operators');
const { ApiRx } = require('@polkadot/api');
const { WsProvider } = require('@polkadot/rpc-provider');

// Initialise the provider to connect to the local node
const wsProvider = new WsProvider('ws://127.0.0.1:9944');

// Known account we want to use (available on dev chain, with funds)
// FIXME: How are we associating Alice's account with funding the contract creation
const Alice = '5GoKvZWG5ZPYL1WUovuHW3zJBWBP5eT8CbqjdRY4Q6iMaDtZ';

function main () {
  // Declare value to send to smart contract, gas limit, initial code, and data
  const contractValue = 1000;
  const gasLimit = 0.1;
  const initCode = new Uint8Array([4 << 2, 0xde, 0xad, 0xbe, 0xef]);
  const data = new Uint8Array([4 << 2, 0xde, 0xad, 0xbe, 0xef]);

  const api = ApiRx.create(wsProvider);

  // Create API. Wait until ready. Subscribe to API changes. Pass optional provider.
  api
    .pipe(
      switchMap((api) =>
        // Create Smart Contract. Use the Extrinsics (runtime) Node Interface.
        api.tx.contract.create(contractValue, gasLimit, initCode, data)
      )
    )
    // Subscribe to creation of the smart contract.
    .subscribe((contractDeployedHash) => {
      // FIXME: Error since undefined response: `Contract deployed for Alice: undefined`
      console.log(`Contract deployed for Alice: ${contractDeployedHash}`);
    });
}

main();
