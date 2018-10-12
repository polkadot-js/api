const Rpc = require('@polkadot/rpc-core').default;
const WsProvider = require('@polkadot/rpc-provider/ws').default;
const provider = new WsProvider('ws://127.0.0.1:9944');
const api = new Rpc(provider);

async function getChain () {
  return api.system.chain();
}

async function main () {
  const chain = await getChain();

  console.log('You are connected to chain:', chain);
}

main().finally(_ => process.exit());
