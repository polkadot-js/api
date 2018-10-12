// Import the ApiPromise
const { ApiPromise } = require('@polkadot/api');

// Our address for Alice on the dev chain
const Alice = '5GoKvZWG5ZPYL1WUovuHW3zJBWBP5eT8CbqjdRY4Q6iMaDtZ';

async function main () {
  // Create out API with a default connection to the local node
  const api = await ApiPromise.create();

  // Make our basic chain state/storage queries, all in one go
  const [accountNonce, blockPeriod, validators] = await Promise.all([
    api.st.system.accountNonce(Alice),
    api.st.timestamp.blockPeriod(),
    api.st.session.validators()
  ]);

  console.log(`accountNonce(${Alice}) ${accountNonce}`);
  console.log(`blockPeriod ${blockPeriod.toNumber()} seconds`);

  // get the balances for all validators
  const validatorBalances = await Promise.all(
    validators.map((authorityId) =>
      api.st.balances.freeBalance(authorityId)
    )
  );

  console.log('validators', validators.map((authorityId, index) => ({
    address: authorityId.toString(),
    balance: validatorBalances[index].toString()
  })));
}

main().catch(console.error).finally(_ => process.exit());
