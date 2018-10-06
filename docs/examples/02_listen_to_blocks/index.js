const BN = require('bn.js');
const Rpc = require('@polkadot/rpc-core').default;
const WsProvider = require('@polkadot/rpc-provider/ws').default;
const provider = new WsProvider('ws://127.0.0.1:9944');
const api = new Rpc(provider);

function main () {
  console.log('Blocks will be shown as they come in, CTRL+C to stop:');
  api.chain.newHead((_, header) => {
    const bnBlockNumber = new BN(header.number, 16);

    console.log('#' + bnBlockNumber.toString(10));
  });
}

main();
