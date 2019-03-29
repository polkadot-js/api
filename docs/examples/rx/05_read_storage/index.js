// Import the API
const { ApiRx } = require('@polkadot/api');
// Import dependencies from RxJs
const { combineLatest, of } = require('rxjs');
const { first, switchMap } = require('rxjs/operators');

// Our address for Alice on the dev chain
const Alice = '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKv3gB';

function main () {
  // Create our API with a default connection to the local node
  new ApiRx(provider).isReady
    .pipe(
      // Here we ake our basic chain state/storage queries
      switchMap((api) => combineLatest(
        of(api),
        api.query.session.validators().pipe(first())
      )),
      switchMap(([api, validators]) => {
        // In the next step, we're checking if the node has active validators.
        // If it does, we're making another call to the api to get the balances for all validators
        const balances = (validators && validators.length > 0)
          ? combineLatest(validators.map(authorityId => api.query.balances.freeBalance(authorityId).pipe(first())))
          : of(null);

        // We're combining the results together with the emitted value 'validators',
        // which we're turning back into an observable using of()
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
        // And lastly we print out the authorityIds and balances of all validators
        console.log('validators', validators.map((authorityId, index) => ({
          address: authorityId.toString(),
          balance: validatorBalances[index].toString()
        })));
      }
    });
}

main().catch(console.error).finally(_ => process.exit());
