// Import the API & Provider and some utility functions
const { ApiRx } = require('@polkadot/api');
const { WsProvider } = require('@polkadot/rpc-provider');
// import the test keyring (already has dev keys for Alice, Bob, Charlie, Eve & Ferdie)
const testKeyring = require('@polkadot/keyring/testing');
const fs = require('fs');

async function main () {
  // Initialise the provider to connect to the local node
  const provider = new WsProvider('ws://127.0.0.1:9944');

  // Create the API and wait until ready (optional provider passed through)
  const api = await ApiRx.create(provider).toPromise();

  // retrieve the upgrade key from the chain state
  const adminId = await api.query.sudo.key().toPromise();

  // find the actual keypair in the keyring (if this is an changed value, the key
  // needs to be added to the keyring before - this assumes we have defaults, i.e.
  // Alice as the key - and this already exists on the test keyring)
  const keyring = testKeyring.default();
  const adminPair = keyring.getPair(adminId.toString());

  // retrieve the runtime to upgrade to
  const code = fs.readFileSync('./test.wasm').toString('hex');
  const proposal = api.tx.consensus.setCode(`0x${code}`);

  console.log(`Upgrading chain runtime from ${adminId}`);

  api.tx.sudo
    // preform the actual chain upgrade via the sudo module
    .sudo(proposal)
    // sign and send the proposal
    .signAndSend(adminPair)
    // subscribe to overall result
    .subscribe(({ events = [], status, type }) => {
      // Log transfer events
      console.log('Proposal status:', type);

      if (type === 'Finalised') {
        console.error('You have just upgraded your chain');

        console.log('Completed at block hash', status.asFinalised.toHex());
        console.log('Events:');

        // Log system events once the chain update is finalised
        events.forEach(({ phase, event: { data, method, section } }) => {
          console.log('\t', phase.toString(), `: ${section}.${method}`, data.toString());
        });

        process.exit(0);
      }
    });
}

main().catch((error) => {
  console.error(error);
  process.exit(-1);
});
