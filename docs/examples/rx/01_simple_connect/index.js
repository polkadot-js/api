// Required imports
const { ApiRx } = require('@polkadot/api');
const { WsProvider } = require('@polkadot/rpc-provider');

function main () {
  // Initialise the provider to connect to the local node
  const provider = new WsProvider('ws://127.0.0.1:9944');

  // Create the API and wait until ready
  const api = await ApiRx.create(provider).toPromise();

  // Use toPromise() with async/await to emit the last Observable value as a Promise
  const [chain, nodeName, nodeVersion] = await Promise.all([
    api.rpc.system.chain().toPromise(),
    api.rpc.system.name().toPromise(),
    api.rpc.system.version().toPromise(),
  ]);

  console.log(`You are connected to chain ${chain} using ${nodeName} v${nodeVersion}`);
}

main().catch(console.error).finally(() => process.exit());
