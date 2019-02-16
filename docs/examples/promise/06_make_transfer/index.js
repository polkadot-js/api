// @ts-check
// Import the API, Keyring and some utility functions
const { ApiPromise } = require('@polkadot/api');
const { Keyring } = require('@polkadot/keyring');
const { stringToU8a } = require('@polkadot/util');

// Important to note that we pad the seed to a length of 32 bytes using ' '
// The underlying seed needs to be exactly 32 bytes in length
const ALICE_SEED = 'Alice'.padEnd(32, ' ');
const BOB_ADDR = '5Gw3s7q4QLkSWwknsiPtjujPv3XM4Trxi5d4PgKMMk3gfGTE';

async function main () {
  // Create an instance of the keyring
  const keyring = new Keyring();

  // Add Alice to our keyring (with the known seed for the account)
  const alice = keyring.addFromSeed(stringToU8a(ALICE_SEED));

  // Instantiate the API
  const api = await ApiPromise.create();

  // Create a extrinsic, transferring 12345 units to Bob
  const transfer = api.tx.balances.transfer(BOB_ADDR, 12345);

  // Sign and send the transaction using our account
  transfer.signAndSend(alice, ({ status, type }) => {
    // retrieve the hash once we are finalised
    if (type === 'Finalised') {
      console.log(`Successful transfer of 12345 from Alice to Bob with hash ${status.asFinalised.toHex()}`);
    } else {
      console.log(`Transaction status: ${type}`);
    }
  });
}

main().catch(console.error).finally(_ => process.exit());
