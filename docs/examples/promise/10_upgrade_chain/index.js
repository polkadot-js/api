// @ts-check
// Import the API & Provider and some utility functions
const { ApiPromise, WsProvider } = require('@polkadot/api');

// import the test keyring (already has dev keys for Alice, Bob, Charlie, Eve & Ferdie)
const testKeyring = require('@polkadot/keyring/testing');

const fs = require('fs');

async function main () {
  // Initialise the provider to connect to the local node
  const provider = new WsProvider('ws://127.0.0.1:9944');

  // Create the API and wait until ready (optional provider passed through)
  const api = await ApiPromise.create(provider);

  // retrieve the upgrade key from the chain state
  const adminId = await api.query.sudo.key();

  // find the actual keypair in the keyring (if this is an changed value, the key
  // needs to be added to the keyring before - this assumes we have defaults, i.e.
  // Alice as the key - and this already exists on the test keyring)
  const keyring = testKeyring.default();
  const adminPair = keyring.getPair(adminId.toString());

  // retrieve the runtime to upgrade to
  const code = fs.readFileSync('./test.wasm').toString('hex');
  const proposal = api.tx.consensus.setCode(`0x${code}`);

  console.log(`Upgrading from ${adminId}, ${code.length / 2} bytes`);

  // preform the actual chain upgrade via the sudo module
  api.tx.sudo
    .sudo(proposal)
    .signAndSend(adminPair, ({ events = [], status, type }) => {
      console.log('Proposal status:', type);

      if (type === 'Finalised') {
        console.error('You have just upgraded your chain');

        console.log('Completed at block hash', status.asFinalised.toHex());
        console.log('Events:');

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
