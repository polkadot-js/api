const createApi = require('@polkadot/api').default;
const WsProvider = require('@polkadot/api-provider/ws').default;
const provider = new WsProvider('ws://127.0.0.1:9944');
const api = createApi(provider);

api.system.chain()
  .then((chain) => {
    console.log('You are connected to chain:', chain)
    process.exit(0)
  })
