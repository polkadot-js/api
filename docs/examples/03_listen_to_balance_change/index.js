#!/usr/bin/env node

const Api        = require('@polkadot/api').default;
const WsProvider = require('@polkadot/api-provider/ws').default;
const extrinsics = require('@polkadot/extrinsics').default
const storage    = require('@polkadot/storage').default
const BN         = require('bn.js');
const provider   = new WsProvider('ws://127.0.0.1:9944');
const api        = Api(provider);
const Alice      = '5GoKvZWG5ZPYL1WUovuHW3zJBWBP5eT8CbqjdRY4Q6iMaDtZ'

console.log('You may let this example running and start the example 06');
api.state.storage([[storage.staking.public.freeBalanceOf, Alice]], (_, values) => {
  console.log(values.map(v => new BN(v).toString(10)))
}).then((subscriptionId) => {
  console.log('Balance changes subscription id:', subscriptionId)
})
