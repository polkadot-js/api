/* eslint-disable header/header */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/unbound-method */

// Required imports
const { zip } = require('rxjs');
const { ApiRx } = require('@polkadot/api');
const { WsProvider } = require('@polkadot/rpc-provider');

async function main () {
  // Initialise the provider to connect to the local node
  const provider = new WsProvider('ws://127.0.0.1:9944');

  // Create the API and wait until ready
  const api = await ApiRx.create({ provider }).toPromise();

  // We're using RxJs 'zip()' combination operator to get the emitted values
  // of multiple observables as an array
  zip(
    api.rpc.system.chain(),
    api.rpc.system.name(),
    api.rpc.system.version()
  ).subscribe(([chain, nodeName, nodeVersion]) => {
    console.log(`You are connected to chain ${chain} using ${nodeName} v${nodeVersion}`);
  });
}

main().catch(console.error).finally(() => process.exit());
