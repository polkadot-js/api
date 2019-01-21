// Import the API
const { ApiRx } = require('@polkadot/api');
// Import dependencies from RxJs
const { zip } = require('rxjs');
const { first, switchMap } = require('rxjs/operators');

// Our address for Alice on the dev chain
const Alice = '5GoKvZWG5ZPYL1WUovuHW3zJBWBP5eT8CbqjdRY4Q6iMaDtZ';

function main () {

  // Create our API with a connection to the node
  new ApiRx().isReady
    .pipe(
      switchMap((api) =>
        zip(
          api.query.system.accountNonce(Alice).pipe(first()),
          api.query.timestamp.blockPeriod().pipe(first()),
          api.query.session.validators().pipe(first())
        )
      ))
    .subscribe(([accountNonce, blockPeriod, validators]) => {
      console.log(`observable`, accountNonce, blockPeriod, validators);
    });


  // Create our API with a default connection to the local node
  // ApiRx.create().subscribe((api) => {
  //   // We're using RxJs 'zip()' combination operator together with first()
  //   // to get the first emitted values of multiple observables as an array
  //   const observable = ;
  //   // Then we're subscribing to the emitted results
  //   observable.subscribe(([accountNonce, blockPeriod, validators]) => {
  //     console.log(`accountNonce(${Alice}) ${accountNonce}`);
  //     console.log(`blockPeriod ${blockPeriod.toNumber()} seconds`);
  //
  //     // If the node has active validators
  //     if (validators && validators.length > 0) {
  //       // We're getting the the balances of all validators, again using 'zip()'
  //       const observable = zip(validators.map(authorityId =>
  //         api.query.balances.freeBalance(authorityId).pipe(first())
  //       ));
  //
  //       // And lastly we're subscribing to the observable and print out
  //       // the authorityIds and balances of all validators
  //       observable.subscribe(validatorBalances => {
  //         console.log('validators', validators.map((authorityId, index) => ({
  //           address: authorityId.toString(),
  //           balance: validatorBalances[index].toString()
  //         })));
  //       });
  //     }
  //   });
  // });
}

main().catch(console.error).finally(_ => process.exit());
