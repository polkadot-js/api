// Import our API, Keyring and some utility functions
const { ApiPromise } = require('@polkadot/api');
const Keyring = require('@polkadot/util-keyring').default;
const u8aFromUtf8 = require('@polkadot/util/u8a/fromUtf8').default;

const ALICE_SEED = 'Alice'.padEnd(32, ' ');
const BOB_ADDR = '5Gw3s7q4QLkSWwknsiPtjujPv3XM4Trxi5d4PgKMMk3gfGTE';

async function main () {
  // create an instance of the keyring
  const keyring = new Keyring();

  // Add Alice to our keyring (with the known seed for the account)
  const alice = keyring.addFromSeed(u8aFromUtf8(ALICE_SEED));

  // instantiate the API
  const api = await ApiPromise.create();

  // retrieve the nonce for Alice, used to sign the transaction
  const aliceNonce = await api.query.system.accountNonce(alice.address());

  // Create a extrinsic, transferring 12345 units to Bob. We can also create,
  // sign and send in one operation (as per the samples in the Api documentation),
  // here we split it out for the sake of readability
  const transfer = api.tx.balances.transfer(BOB_ADDR, 12345);

  // sign the transaction using our account
  transfer.sign(alice, aliceNonce);

  // send the transaction and retrieve the resulting Hash
  const hash = await transfer.send();

  console.log(`transfer 12345 to Bob with hash ${hash}`);
}

main().catch(console.error).finally(_ => process.exit());
