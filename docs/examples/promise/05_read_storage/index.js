// Import the API
const { ApiPromise } = require('@polkadot/api');
const testingPairs = require('@polkadot/keyring/testingPairs').default;

// Create an instance of the keyring that includes test accounts
const keyring = testingPairs();

// Known account we want to use (available on dev chain, with funds)
const addressAlice = keyring.alice.address();

async function main () {
  // Create our API with a default connection to the local node
  const api = await ApiPromise.create();

  // Make our basic chain state/storage queries, all in one go
  const [accountNonce, blockPeriod, validators] = await Promise.all([
    api.query.system.accountNonce(addressAlice),
    api.query.timestamp.blockPeriod(),
    api.query.session.validators()
  ]);

  console.log(`accountNonce(${addressAlice}) ${accountNonce}`);
  console.log(`blockPeriod ${blockPeriod.toNumber()} seconds`);

  // Retrieve the balances for all validators
  const validatorBalances = await Promise.all(
    validators.map((authorityId) =>
      api.query.balances.freeBalance(authorityId)
    )
  );

  console.log('validators', validators.map((authorityId, index) => ({
    address: authorityId.toString(),
    balance: validatorBalances[index].toString()
  })));
}

main().catch(console.error).finally(_ => process.exit());
