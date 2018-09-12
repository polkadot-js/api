const createApi = require('@polkadot/api').default;
const WsProvider = require('@polkadot/api-provider/ws').default;
const provider = new WsProvider('ws://127.0.0.1:9944');
const storage = require('@polkadot/storage').default
const extrinsics = require('@polkadot/extrinsics').default
const BN = require('bn.js');

const api = createApi(provider);
console.log('start');

const Alice = '5GoKvZWG5ZPYL1WUovuHW3zJBWBP5eT8CbqjdRY4Q6iMaDtZ'
const Bob = '5Gw3s7q4QLkSWwknsiPtjujPv3XM4Trxi5d4PgKMMk3gfGTE'

function alicePaysBob() {
  console.log('Alice pays 1000 DOTs to Bob');
  // console.log(api);
  console.log(extrinsics.staking.public.transfer);
  api.author.submitExtrinsic(
    extrinsics.staking.public.transfer(Bob, new BN(1000))
  )
}

api.state.storage([
  [storage.staking.public.freeBalanceOf, Alice]
], (_, values) => {
  console.log(values.map(v => new BN(v).toString(10)))
}).then((subscriptionId) => {
  console.log('balance changes subscription id:', subscriptionId)
})

setInterval(alicePaysBob, 3000)
