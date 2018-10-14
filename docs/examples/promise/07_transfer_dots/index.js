// Import the API, Keyring and some utility functions
const { ApiPromise } = require('@polkadot/api');
const testingPairs = require('@polkadot/keyring/testingPairs').default;
const u8aFromUtf8 = require('@polkadot/util/u8a/fromUtf8').default;

const ALICE_SEED = 'Alice'.padEnd(32, ' ');

async function main () {
  // Create an instance of the keyring that includes test accounts
  const keyring = testingPairs();

  // Known account we want to use (available on dev chain, with funds)
  const addressBob = keyring.bob.address();

  // Add Alice to our keyring (with the known seed for the account)
  const alice = keyring.addFromSeed(u8aFromUtf8(ALICE_SEED));

  // Instantiate the API
  const api = await ApiPromise.create();

  // Retrieve the nonce for Alice, to be used to sign the transaction.
  // Use the Storage chain state (runtime) Node Interface.
  const aliceNonce = await api.query.system.accountNonce(alice.address());

  // Create an extrinsic, transferring 12345 units to Bob. We can also create,
  // sign and send in one operation (as per the samples in the Api documentation),
  // here we split it out for the sake of readability.
  // Use the Extrinsics (runtime) Node Interface.
  const transfer = api.tx.balances.transfer(addressBob, 12345);

  // Sign the transaction using our account keypair, nonce, and optionally the
  // block hash
  transfer.sign(alice, aliceNonce);

  // Send the transaction and retrieve the resulting Hash
  const hash = await transfer.send();

  console.log(`submitted transfer 12345 to Bob with hash ${hash}`);
}

main().catch(console.error).finally(_ => process.exit());
