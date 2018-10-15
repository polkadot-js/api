// Import the API
const { ApiRx } = require('@polkadot/api');

// Our address for Alice on the dev chain
const Alice = '5GoKvZWG5ZPYL1WUovuHW3zJBWBP5eT8CbqjdRY4Q6iMaDtZ';

async function main () {
  // Create our API with a default connection to the local node
  ApiRx.create().subscribe((api) => {
    // Make subscriptions to our basic chain state/storage queries
    // Use the Storage chain state (runtime) Node Interface.
    const subscriptionIdAccountNonce = api.query.system.accountNonce(Alice)
      .subscribe((accountNonce) => {
        console.log(`accountNonce(${Alice}) ${accountNonce}`);
      });

    const subscriptionIdBlockPeriod = api.query.timestamp.blockPeriod()
      .subscribe((blockPeriod) => {
        console.log(`blockPeriod ${blockPeriod.toNumber()} seconds`);
      });

    const subscriptionIdValidators = api.query.session.validators()
      .subscribe((validators) => {
        // Retrieve the balances for all validators
        validators.map((authorityId) =>
          api.query.balances.freeBalance(authorityId).subscribe((validatorBalances) => {
            console.log('validators', validators.map((authorityId, index) => ({
              address: authorityId.toString(),
              balance: validatorBalances[index].toString()
            })));
          })
        );
      });

    // Id for each subscription
    console.log(`subscriptionIdAccountNonce: ${subscriptionIdAccountNonce}`);
    console.log(`subscriptionIdBlockPeriod: ${subscriptionIdBlockPeriod}`);
    console.log(`subscriptionIdValidators: ${subscriptionIdValidators}`);

    // Cleanup and unsubscribe from each subscription
    api.query.system.accountNonce(Alice).unsubscribe(subscriptionIdAccountNonce);
    api.query.timestamp.blockPeriod().unsubscribe(subscriptionIdBlockPeriod);
    api.query.session.validators().unsubscribe(subscriptionIdValidators);
  });
}

main().catch(console.error).finally(_ => process.exit());
