// Required imports
const { combineLatest } = require('rxjs');
const { switchMap } = require('rxjs/operators');
const { ApiRx } = require('@polkadot/api');
const { WsProvider } = require('@polkadot/rpc-provider');

// Initialise the provider to connect to the local node
const wsProvider = new WsProvider('ws://127.0.0.1:9944');

async function main () {
  // Create the API and wait until ready. Subscribe to API changes.
  // Here we pass the (optional) provider
  // Subscribe to the chain, node name, and node version.
  // Using the JSON-RPC Node Interface.
  const subscriptionApiRx = ApiRx.create(wsProvider)
    .pipe(
      switchMap((api) =>
        combineLatest([
          api.rpc.system.chain(),
          api.rpc.system.name(),
          api.rpc.system.version()
        ])
      )
    )
    .subscribe(([chain, name, version]) => {
      console.log(`You are connected to chain #${chain.toString()} ` +
                  `with node name #${name.toString()} ` +
                  `and node version v#${version.toString()}`);
    });

  // Id of the subscription
  console.log(`subscriptionApiRx: ${subscriptionApiRx}`);

  setTimeout(() => {
    // Cleanup and unsubscribe from the subscription
    subscriptionApiRx.unsubscribe();
  }, 5000);
}

main().catch(console.error).finally(_ => process.exit());
