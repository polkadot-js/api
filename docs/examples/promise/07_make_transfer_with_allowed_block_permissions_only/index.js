// @ts-check
// Import the API, Keyring and some utility functions
const { ApiPromise } = require('@polkadot/api');
const { Keyring } = require('@polkadot/keyring');
const { ExtrinsicEra } = require('@polkadot/types/type');

const BOB = '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty';

async function main () {
  // Instantiate the API
  const api = await ApiPromise.create(); //remove provider

  // Constuct the keying after the API (crypto has an async init)
  const keyring = new Keyring({ type: 'sr25519' });

  // Add alice to our keyring with a hard-derived path (empty phrase, so uses dev)
  const alice = keyring.addFromUri('//Alice');

  // Get nonce for account
  const nonce = await api.query.system.accountNonce(alice.address);

  // get current block
  const signedBlock = await api.rpc.chain.getBlock();

  // get current block height
  const currentHeight = signedBlock.block.header.number;

  const exERA = new ExtrinsicEra({ current: currentHeight, period: 10 });

  // get the beggining of the current era
  const eraBirth = exERA.asMortalEra.birth(currentHeight.toNumber());

  // get the hash of the beginning of the current era
  const eraHash = await api.rpc.chain.getBlockHash(eraBirth);

  // Create an extrinsic, transferring 12345 units to Bob
  const transfer = api.tx.balances.transfer(BOB, 12345);

  // Sign and send the transaction using our account with a nonce and the length of blocks the transaction is valid for 
  const hash = await transfer.signAndSend(alice, { blockHash: eraHash, era: exERA, nonce });

  console.log('Transfer sent with hash', hash.toHex());
}

main().catch(console.error).finally(() => process.exit());
