// Import the API
const { ApiRx } = require('@polkadot/api');

// Our address for Alice on the dev chain
const Alice = '5GoKvZWG5ZPYL1WUovuHW3zJBWBP5eT8CbqjdRY4Q6iMaDtZ';

function main () {
  // Create our API with a default connection to the local node
  ApiRx.create().subscribe(async (api) => {
    // Use toPromise() with async/await to emit the last Observable value as a Promise
    const [accountNonce, blockPeriod, validators] = await Promise.all([
      api.query.system.accountNonce(Alice).pipe(first()).toPromise(),
      api.query.timestamp.blockPeriod().pipe(first()).toPromise(),
      api.query.session.validators().pipe(first()).toPromise()
    ]);

      console.log(`accountNonce(${Alice}) ${accountNonce}`);
      console.log(`blockPeriod ${blockPeriod.toNumber()} seconds`);

    if (validators && validators.length > 0) {
      // Retrieve the balances for all validators. We're using RxJs' first() method
      // in combination with toPromise() to only get the first value of the observable
      // and then unsubscribe austomatically after we received it.
      const validatorBalances = await Promise.all(
        validators.map(authorityId => api.query.balances.freeBalance(authorityId)
          .pipe(first())
          .toPromise())
      );

      // Print out the authorityIds and balances of all validators
      console.log('validators', validators.map((authorityId, index) => ({
        address: authorityId.toString(),
        balance: validatorBalances[index].toString()
      })));
    }
  });
}

main().catch(console.error).finally(_ => process.exit());
