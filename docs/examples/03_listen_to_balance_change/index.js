const BN = require('bn.js');
const Api = require('@polkadot/api').default;
const WsProvider = require('@polkadot/api-provider/ws').default;
const storage = require('@polkadot/storage').default;
const provider = new WsProvider('ws://127.0.0.1:9944');
const api = new Api(provider);
const Alice = '5GoKvZWG5ZPYL1WUovuHW3zJBWBP5eT8CbqjdRY4Q6iMaDtZ';

console.log('You may leave this example running and start example 06 or send DOTs to ' + Alice);

api.state
  .storage([[storage.staking.public.freeBalanceOf, Alice]], (_, values) => {
    console.log(`Balance of ${Alice}: ${new BN(values[0]).toString(10)} DOTs`);
  })
  .then((subscriptionId) => {
    console.log('Balance changes subscription id:', subscriptionId);
  });
