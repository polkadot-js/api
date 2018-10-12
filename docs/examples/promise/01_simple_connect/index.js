// required imports
const { ApiPromise } = require('@polkadot/api');
const { WsProvider } = require('@polkadot/rpc-provider');

async function main () {
  // initialise the provider to connect to the local node
  const provider = new WsProvider('ws://127.0.0.1:9944');

  // create the API and wait until ready
  const api = await ApiPromise.create(provider);

  // retrieve the chain & node information information via rpc calls
  const [chain, nodeName, nodeVersion] = await Promise.all([
    api.rpc.system.chain(),
    api.rpc.system.name(),
    api.rpc.system.version()
  ]);

  console.log(`You are connected to chain ${chain} using ${nodeName} v${nodeVersion}`);
}

main().catch(console.error).finally(() => process.exit());
