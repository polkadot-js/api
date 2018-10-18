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
      console.log(`Connected to chain ${chain}`);
      console.log(`Connected to node name ${name}`);
      console.log(`Connected to node version ${version}`);

      const isReceived = !!chain && !!name && !!version;

      // Cleanup and unsubscribe from the subscription if all data received
      if (isReceived) {
        subscriptionApiRx.unsubscribe();
        console.log(`Unsubscribing successful? ${subscriptionApiRx.closed}`);
      }
    });
}

main().catch(console.error);
