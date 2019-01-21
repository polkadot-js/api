// Import the API
const { ApiRx } = require('@polkadot/api');
// Import dependencies from RxJs
const { combineLatest, of } = require('rxjs');
const { first, switchMap } = require('rxjs/operators');

// Our address for Alice on the dev chain
const Alice = '5GoKvZWG5ZPYL1WUovuHW3zJBWBP5eT8CbqjdRY4Q6iMaDtZ';

function main () {
  // Create our API with a default connection to the local node
  new ApiRx(provider).isReady
    .pipe(
      switchMap((api) => combineLatest(
        of(api),
        api.query.session.validators().pipe(first())
      )),
      switchMap(([api, validators]) => {
        // If the node has active validators, get the balances
        const balances = (validators && validators.length > 0)
          ? combineLatest(validators.map(authorityId => api.query.balances.freeBalance(authorityId).pipe(first())))
          : of(null);

        // If there are no validators, we're not returning any balances
        return combineLatest(
          api.query.system.accountNonce(Alice).pipe(first()),
          api.query.timestamp.blockPeriod().pipe(first()),
          of(validators),
          balances
        );
      })
    )
    // Then we're subscribing to the emitted results
    .subscribe(([accountNonce, blockPeriod, validators, validatorBalances]) => {
      console.log(`accountNonce(${Alice}) ${accountNonce}`);
      console.log(`blockPeriod ${blockPeriod.toNumber()} seconds`);

      if (validatorBalances) {
        // And lastly we're subscribing to the observable and print out
        // the authorityIds and balances of all validators
        console.log('validators', validators.map((authorityId, index) => ({
          address: authorityId.toString(),
          balance: validatorBalances[index].toString()
        })));
      }
    });
}

main().catch(console.error).finally(_ => process.exit());
