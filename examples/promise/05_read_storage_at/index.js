/* eslint-disable header/header */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/unbound-method */

// Import the API
const { ApiPromise } = require('@polkadot/api');

// Our address for Alice on the dev chain
const ALICE = '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY';
const BOB = '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty';

async function main () {
  // Create our API with a default connection to the local node
  const api = await ApiPromise.create();

  // Retrieve the last block header, extracting the hash and parentHash
  const { hash, parentHash } = await api.rpc.chain.getHeader();

  console.log(`last header hash ${hash.toHex()}`);

  // Retrieve the balance at the preceding block for Alice. For at queries
  // the format is always `.at(<blockhash>, ...params)`
  const balance = await api.query.system.account.at(parentHash, ALICE);

  console.log(`Alice's balance at ${parentHash.toHex()} was ${balance.data.free}`);

  // Now perform a multi query, returning multiple balances at once
  const balances = await api.query.system.account.multi([ALICE, BOB]);

  console.log(`Current balances for Alice and Bob are ${balances[0].data.free} and ${balances[1].data.free}`);
}

main().catch(console.error).finally(() => process.exit());
