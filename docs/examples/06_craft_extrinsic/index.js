const BN = require('bn.js');
const Api = require('@polkadot/api').default;
const WsProvider = require('@polkadot/api-provider/ws').default;
const extrinsics = require('@polkadot/extrinsics').default;
const encodeExtrinsic = require('@polkadot/extrinsics/codec/encode').default;
const encodeLength = require('@polkadot/extrinsics/codec/encode/length').default;
const Keyring = require('@polkadot/util-keyring').default;
const storage = require('@polkadot/storage').default;

const Encoder = new TextEncoder();
const keyring = new Keyring();
const provider = new WsProvider('ws://127.0.0.1:9944');
const api = new Api(provider);

async function getAccountIndex (address) {
  return api.state.getStorage([storage.system.public.accountIndexOf, address]);
}

async function transfer (keyRingFrom, addressTo, amount) {
  const accountIndex = await getAccountIndex(keyRingFrom.address());

  console.log(`Current accountIndex: ${accountIndex}`);

  // encode the call for signing
  const message = encodeExtrinsic(
    keyRingFrom.publicKey(),
    accountIndex,
    extrinsics.staking.public.transfer,
    [addressTo, amount]
  );

  // get the signature
  const signature = keyRingFrom.sign(message);

  // encode the extrinsic for submission, adding the length (prefix) and the
  // signature (postfix)Rödl
  const encoded = encodeLength(
    // When working with publicKeys, the prefix is 0xff for poc-2+
    new Uint8Array([0xff]),
    message,
    signature
  );

  return api.author.submitExtrinsic(encoded);
}

const Alice = keyring.addFromSeed(Encoder.encode('Alice                           '));
const addressBob = '5Gw3s7q4QLkSWwknsiPtjujPv3XM4Trxi5d4PgKMMk3gfGTE';
const amount = new BN(999); // on dev chain, the fee is 1, that makes it a round 1000

console.log(`Crafting and sending an extrinsic for Alice to send Bob ${amount} DOTs`);

transfer(Alice, addressBob, amount)
  .then(() => console.log('Sent'))
  .catch((error) => console.log('HINT: Make sure you wait for the storage to update before sending the next extrinsic', error))
  .finally(_ => process.exit(0));
