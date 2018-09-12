const createKeyring = require('@polkadot/util-keyring').default;
const Encoder = new TextEncoder(); // always utf-8
const crypto = require('crypto');

function buf2hex(buffer) {
  return '0x' + Array.prototype.map.call(new Uint8Array(buffer), x => ('00' + x.toString(16)).slice(-2)).join('');
}

// A fixed seed from an array
const SEED1 = new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 0, 0]);

// A fixed seed from a 32 chars string
const SEED2 = Encoder.encode("correct horse battery and staple")

const msg = Encoder.encode("I am your father")

const keyring = createKeyring();
const pair1 = keyring.addFromSeed(SEED1);
const pair2 = keyring.addFromSeed(SEED2);

console.log(pair1.publicKey());
console.log('Address 1\t', pair1.address(), '\tSeed: ' + buf2hex(SEED1));
console.log('Address 2\t', pair2.address(), '\tSeed: ' + buf2hex(SEED2));

// A random seed
const SEED = new Uint8Array(32);
console.log('Random Addresses:');
const NUM=10
for (var i = 3; i < 3+NUM; i++) {
  Buffer.from(crypto.randomFillSync(SEED));
  const pair3 = keyring.addFromSeed(SEED);
  console.log('Address ' + i + '\t',
    pair3.address(),
    '\tSeed: ' + buf2hex(SEED));
}
