// @ts-check
// Import the API
const { ApiPromise } = require('@polkadot/api');

// Our address for Alice on the dev chain
const Alice = '5GoKvZWG5ZPYL1WUovuHW3zJBWBP5eT8CbqjdRY4Q6iMaDtZ';

async function main () {
  // Create our API with a default connection to the local node
  const api = await ApiPromise.create();

  // Make our basic chain state/storage queries, all in one go
  const [accountNonce, blockPeriod, validators] = await Promise.all([
    api.query.system.accountNonce(Alice),
    api.query.timestamp.blockPeriod(),
    api.query.session.validators()
  ]);

  console.log(`accountNonce(${Alice}) ${accountNonce}`);
  console.log(`blockPeriod ${blockPeriod.toNumber()} seconds`);

  if (validators && validators.length > 0) {
    // Retrieve the balances for all validators
    const validatorBalances = await Promise.all(
      validators.map(authorityId =>
        api.query.balances.freeBalance(authorityId)
      )
    );

    // Print out the authorityIds and balances of all validators
    console.log('validators', validators.map((authorityId, index) => ({
      address: authorityId.toString(),
      balance: validatorBalances[index].toString()
    })));
  }
}

main().catch(console.error).finally(_ => process.exit());
