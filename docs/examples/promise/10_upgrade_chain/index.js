// Import the API & Provider and some utility functions
const { ApiPromise } = require('@polkadot/api');
const { WsProvider } = require('@polkadot/rpc-provider');

// import the test keyring (already has dev keys for Alice, Bob, Charlie, Eve & Ferdie)
const testKeyring = require('@polkadot/keyring/testing');

// utility functions
const { compactAddLength, hexToU8a } = require('@polkadot/util');

async function main () {
  // Initialise the provider to connect to the local node
  const provider = new WsProvider('ws://127.0.0.1:9944');

  // Create the API and wait until ready (optional provider passed through)
  const api = await ApiPromise.create(provider);

  // retrieve the upgrade key from the chain state
  const adminId = await api.query.upgradeKey.key();

  // get the nonce for the admin key
  const adminNonce = await api.query.system.accountNonce(adminId);

  // find the actual keypair in the keyring (if this is an changed value, the key
  // needs to be added to the keyring before - this assumes we have defaults, i.e.
  // Alice as the key - and this exists on the test keyring)
  const keyring = testKeyring.default();
  const adminPair = keyring.getPair(adminId.toString());

  console.log('Upgrading from', adminId.toString(), 'with nonce', adminNonce.toString());

  // create a properly encoded code array from the hex with length prefix - since we have a
  // hex string, we can actuall;y pass it through directly (i.e. `.upgrade('0x...'))` below),
  // however here we show how to pass an actual Uint8Array with encoded length
  const code = compactAddLength(hexToU8a('0xdeadbeef'));

  // preform a chain upgrade, effectively bricking the chain, passing through
  // a hex value, although a valid Uint8Array will also work here (in this case
  // ensure it has a length prefix added, e.g. compact)
  api.tx.upgradeKey
    .upgrade(code)
    .sign(adminPair, adminNonce)
    .send(({ events = [], status, type }) => {
      console.log('Transaction status:', type);

      if (type === 'Finalised') {
        console.error('You have just upgraded your chain');

        console.log('Completed at block hash', status.value.toHex());
        console.log('Events:');

        events.forEach(({ phase, event: { data, method, section } }) => {
          console.log('\t', phase.toString(), `: ${section}.${method}`, data.toString());
        });

        process.exit(0);
      }
    });
}

main().catch(console.error);
