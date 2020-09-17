/* eslint-disable header/header */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-floating-promises */

// Import the API & Provider and some utility functions
const { ApiPromise, WsProvider } = require('@polkadot/api');

// import the test keyring (already has dev keys for Alice, Bob, Charlie, Eve & Ferdie)
const testKeyring = require('@polkadot/keyring/testing');

const fs = require('fs');

async function main () {
  // Initialise the provider to connect to the local node
  const provider = new WsProvider('ws://127.0.0.1:9944');

  // Create the API and wait until ready (optional provider passed through)
  const api = await ApiPromise.create({ provider });

  // Retrieve the upgrade key from the chain state
  const adminId = await api.query.sudo.key();

  // Find the actual keypair in the keyring (if this is a changed value, the key
  // needs to be added to the keyring before - this assumes we have defaults, i.e.
  // Alice as the key - and this already exists on the test keyring)
  const keyring = testKeyring.default();
  const adminPair = keyring.getPair(adminId.toString());

  // Retrieve the runtime to upgrade
  const code = fs.readFileSync('./test.wasm').toString('hex');
  const proposal = api.tx.system && api.tx.system.setCode
    ? api.tx.system.setCode(`0x${code}`) // For newer versions of Substrate
    : api.tx.consensus.setCode(`0x${code}`); // For previous versions

  console.log(`Upgrading from ${adminId}, ${code.length / 2} bytes`);

  // Perform the actual chain upgrade via the sudo module
  api.tx.sudo
    .sudo(proposal)
    .signAndSend(adminPair, ({ events = [], status }) => {
      console.log('Proposal status:', status.type);

      if (status.isInBlock) {
        console.error('You have just upgraded your chain');

        console.log('Included at block hash', status.asInBlock.toHex());
        console.log('Events:');

        console.log(JSON.stringify(events.toHuman(), null, 2));
      } else if (status.isFinalized) {
        console.log('Finalized block hash', status.asFinalized.toHex());

        process.exit(0);
      }
    });
}

main().catch((error) => {
  console.error(error);
  process.exit(-1);
});
