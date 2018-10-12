// required imports
const { ApiPromise } = require('@polkadot/api');
const { WsProvider } = require('@polkadot/rpc-provider');

async function main () {
  // initialise the provider to connect to the local node
  const provider = new WsProvider('ws://127.0.0.1:9944');

  // create the API and wait until ready
  const api = await ApiPromise.create(provider);

  // retrieve the chain information (rpc call)
  const chain = await api.rpc.system.chain();

  console.log(`You are connected to chain: ${chain}`);
}

main().catch(console.error).finally(() => process.exit());
