const crypto = require('crypto');
const Keyring = require('@polkadot/keyring').default;
const u8aToHex = require('@polkadot/util/u8a/toHex').default;
const Encoder = new TextEncoder(); // Always utf-8

// A fixed seed from an array
const SEED1 = new Uint8Array([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24, 25, 26, 27, 28, 29, 30, 0, 0
]);

// A fixed seed from a 32 chars string
const SEED2 = Encoder.encode('correct horse battery and staple');

const keyring = new Keyring();
const pair1 = keyring.addFromSeed(SEED1);
const pair2 = keyring.addFromSeed(SEED2);

console.log('\nDeterministic addresses (same for each run):\n');
console.log(`Address 1\t ${pair1.address()}\t Seed: ${u8aToHex(SEED1)}`);
console.log(`Address 2\t ${pair2.address()}\t Seed: ${u8aToHex(SEED2)}`);

// A random seed
const SEED = new Uint8Array(32);

console.log('\nRandom Addresses (random for each run):\n');

for (var i = 3; i < 13; i++) {
  Buffer.from(crypto.randomFillSync(SEED));
  const pair3 = keyring.addFromSeed(SEED);
  console.log(`Address ${i}\t ${pair3.address()}\t Seed: ${u8aToHex(SEED)}`);
}
