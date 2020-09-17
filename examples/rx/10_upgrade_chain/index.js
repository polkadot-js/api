/* eslint-disable header/header */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/unbound-method */

// Import the API & Provider and some utility functions
const { ApiRx, WsProvider } = require('@polkadot/api');
// Import the test keyring (already has dev keys for Alice, Bob, Charlie, Eve & Ferdie)
const testKeyring = require('@polkadot/keyring/testing');
const fs = require('fs');

async function main () {
  // Initialise the provider to connect to the local node
  const provider = new WsProvider('ws://127.0.0.1:9944');

  // Create the API and wait until ready (optional provider passed through)
  const api = await ApiRx.create({ provider }).toPromise();

  // Retrieve the upgrade key from the chain state
  // TODO It seems like this promise doesn't resolve
  const adminId = await api.query.sudo.key().toPromise();

  // Find the actual keypair in the keyring (if this is an changed value, the key
  // needs to be added to the keyring before - this assumes we have defaults, i.e.
  // Alice as the key - and this already exists on the test keyring)
  const keyring = testKeyring.default();
  const adminPair = keyring.getPair(adminId.toString());

  // Retrieve the runtime to upgrade to
  const code = fs.readFileSync('./test.wasm').toString('hex');
  const proposal = api.tx.consensus.setCode(`0x${code}`);

  console.log(`Upgrading chain runtime from ${adminId}`);

  api.tx.sudo
    // Perform the actual chain upgrade via the sudo module
    .sudo(proposal)
    // Sign and send the proposal
    .signAndSend(adminPair)
    // Subscribe to overall result
    .subscribe(({ events = [], status }) => {
      // Log transfer events
      console.log('Proposal status:', status.type);

      if (status.isInBlock) {
        console.error('You have just upgraded your chain');

        console.log('Included at block hash', status.asInBlock.toHex());
        console.log('Events:');

        // Log system events once the chain update is finalised
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
