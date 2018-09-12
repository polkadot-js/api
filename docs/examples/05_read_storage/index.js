#!/usr/bin/env node

const Api        = require('@polkadot/api').default;
const WsProvider = require('@polkadot/api-provider/ws').default;
const storage    = require('@polkadot/storage').default;
const BN         = require('bn.js')

const provider = new WsProvider('ws://127.0.0.1:9944');
const api = new Api(provider);

async function getAccountIndex(address) {
  return await api.state.getStorage([storage.system.public.accountIndexOf, address])
}

async function getValidators() {
  return await api.state.getStorage([storage.session.public.validators])
}

async function getBlockPeriod() {
    return await api.state.getStorage([storage.timestamp.public.blockPeriod])
}

async function main() {
  const address = '5GoKvZWG5ZPYL1WUovuHW3zJBWBP5eT8CbqjdRY4Q6iMaDtZ'
  const validators = await getValidators()
  const bn = await getAccountIndex(address)
  const blockPeriod = await getBlockPeriod()

  const index = new BN(bn)
  console.log(`BlockPeriod: ${new BN(blockPeriod).toString(10)} seconds`)
  console.log(`Account Index of ${address}: ${index.toString(10)}`)
  console.log('Current validators', validators);
}

main().finally(_ => process.exit())
