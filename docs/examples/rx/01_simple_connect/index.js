// Required imports
const { ApiRx } = require('@polkadot/api');
const { WsProvider } = require('@polkadot/rpc-provider');

// Initialise the provider to connect to the local node
const wsProvider = new WsProvider('ws://127.0.0.1:9944');

async function main () {
  // Create the API and wait until ready. Subscribe to API changes.
  // Here we pass the (optional) provider
  ApiRx.create(wsProvider).subscribe((api) => {
    // Subscribe to the chain, node name, and node version. The callback's are fired
    // when changes are found, the calls themselves each return a promise with a
    // subscription that can be used to unsubscribe from the respective subscription.
    // Use the RPC Node Interface
    const subscriptionIdChain = api.rpc.system.chain().subscribe((chain) => {
      console.log(`You are connected to chain #${chain.toString()}`);
    });

    const subscriptionIdName = api.rpc.system.name().subscribe((name) => {
      console.log(`You are connected to node name v#${name.toString()}`);
    });

    const subscriptionIdVersion = api.rpc.system.version().subscribe((version) => {
      console.log(`You are connected to node version v#${version.toString()}`);
    });

    // Id for each subscription
    console.log(`subscriptionIdChain: ${subscriptionIdChain}`);
    console.log(`subscriptionIdName: ${subscriptionIdName}`);
    console.log(`subscriptionIdVersion: ${subscriptionIdVersion}`);

    // Cleanup and unsubscribe from each subscription
    api.rpc.system.chain().unsubscribe(subscriptionIdChain);
    api.rpc.system.name().unsubscribe(subscriptionIdName);
    api.rpc.system.version().unsubscribe(subscriptionIdVersion);
  });
}

main().catch(console.error).finally(_ => process.exit());
