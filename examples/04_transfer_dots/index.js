const createApi       = require('@polkadot/api').default;
const WsProvider      = require('@polkadot/api-provider/ws').default;
const extrinsics      = require('@polkadot/extrinsics').default;
const encodeExtrinsic = require('@polkadot/extrinsics/codec/encode/extrinsic').default;
const encodeCall      = require('@polkadot/extrinsics/codec/encode/call').default;
const encodeLength    = require('@polkadot/extrinsics/codec/encode/length').default;
const Keyring         = require('@polkadot/util-keyring').default;
// const bnToU8a         = require('@polkadot/util/bn/toU8a').default;
const u8aConcat       = require('@polkadot/util/u8a/concat').default;
const storage         = require('@polkadot/storage').default;
const BN              = require('bn.js')

const Encoder         = new TextEncoder();
const keyring         = new Keyring();
const provider        = new WsProvider('ws://127.0.0.1:9944');
const api             = createApi(provider);

async function getAccountIndex(address) {
  return await api.state.getStorage([storage.system.public.accountIndexOf, address])
}

async function transfer(keyRingFrom, addressTo, amount) {
  const nextAccountIndex = (await getAccountIndex(keyRingFrom.address()))

  // create an encoded extrinsic from the data provided
  const encoded = encodeExtrinsic(
    extrinsics.staking.public.transfer, [addressTo, amount]
  );

  // encode the call for signing
  const message = encodeCall(keyRingFrom.publicKey(), nextAccountIndex, encoded);

  // get the signature
  const signature = keyRingFrom.sign(message);

  const submitMessage = encodeLength(u8aConcat(
    new Uint8Array([0xff]), // When working with publicKeys, this prefix is 0xff for poc-2+
    message,
    signature
  ));

  await api.author.submitExtrinsic(submitMessage)
    .catch(e => {
      console.log(e);
    })
}

// Alice = 5GoKvZWG5ZPYL1WUovuHW3zJBWBP5eT8CbqjdRY4Q6iMaDtZ
const Alice = keyring.addFromSeed(Encoder.encode("Alice                           "));
const addressBob = '5Gw3s7q4QLkSWwknsiPtjujPv3XM4Trxi5d4PgKMMk3gfGTE'

// value we wish to transfer
const amount = new BN(999); // on dev chain, the fee is 1, that makes it round

transfer(Alice, addressBob, amount).then(() => {
  console.log('DONE');
  process.exit(0)
}).catch((e) => {
  console.log(e);
  process.exit(1)
})
