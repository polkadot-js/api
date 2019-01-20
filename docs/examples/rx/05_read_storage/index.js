// Import the API
const { ApiRx } = require('@polkadot/api');
// Import dependencies from RxJs
import { first } from 'rxjs/operators';

// Our address for Alice on the dev chain
const Alice = '5GoKvZWG5ZPYL1WUovuHW3zJBWBP5eT8CbqjdRY4Q6iMaDtZ';

function main () {
  // Create our API with a default connection to the local node
  ApiRx.create().subscribe(async (api) => {
    // We're using RxJs 'zip()' combination operator together with first()
    // to get the first emitted values of multiple observables as an array
    zip(
      api.query.system.accountNonce(Alice).pipe(first()),
      api.query.timestamp.blockPeriod().pipe(first()),
      api.query.session.validators().pipe(first())
    )
    // Then we're subscribing to the emitted results
    .subscribe(([accountNonce, blockPeriod, validators]) => {
      console.log(`accountNonce(${Alice}) ${accountNonce}`);
      console.log(`blockPeriod ${blockPeriod.toNumber()} seconds`);

      // If the node has active validators
      if (validators && validators.length > 0) {
        createLog('Validators', wrapper, 'highlight');

        // We're getting the the balances of all validators, again using 'zip()'
        validators.map(authorityId => zip(
            api.query.balances.freeBalance(authorityId).pipe(first())
          )
          .subscribe(validatorBalances => {
            // And lastly we print out the authorityIds and balances of all validators
            console.log('validators', validators.map((authorityId, index) => ({
              address: authorityId.toString(),
              balance: validatorBalances[index].toString()
            })));
          }
        ));
      }
    });
  });
}

main().catch(console.error).finally(_ => process.exit());
