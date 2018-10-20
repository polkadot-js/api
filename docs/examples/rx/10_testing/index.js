// const { combineLatest } = require('rxjs');
// const { switchMap } = require('rxjs/operators');
const { ApiRx } = require('@polkadot/api');
const { WsProvider } = require('@polkadot/rpc-provider');

// Initialise the provider to connect to the local node
const wsProvider = new WsProvider('ws://127.0.0.1:9944');

async function main () {
  // Creates new RxJS Observable wrapper over RPC, Exrinsics and Chain storage
  // See: https://www.learnrxjs.io/operators/creation/create.html
  const api = await ApiRx.create(wsProvider);

  api.subscribe(val => console.log(val));
}

main().catch(console.error);
