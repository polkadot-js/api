const createApi = require('@polkadot/api').default;
const WsProvider = require('@polkadot/api-provider/ws').default;
const provider = new WsProvider('ws://127.0.0.1:9944');
const BN = require('bn.js');

const api = createApi(provider);

api.chain.newHead((_, header)=>  {
  const bnBlockNumber = new BN(header.number, 16)
  console.log('#' + bnBlockNumber.toString(10))
})
