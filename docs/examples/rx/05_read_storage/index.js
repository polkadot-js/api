import { combineLatest } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

// Import the API
const { ApiRx } = require('@polkadot/api');

// Our address for Alice on the dev chain
const Alice = '5GoKvZWG5ZPYL1WUovuHW3zJBWBP5eT8CbqjdRY4Q6iMaDtZ';

async function main () {
  // Create the API and wait until ready using default provider.
  // Subscribe to the basic chain state/storage queries
  // Use the Storage chain state (runtime) Node Interface.
  const subscriptionApiRx = ApiRx.create()
    .pipe(
      switchMap((api) =>
        combineLatest([
          api.query.system.accountNonce(Alice),
          api.query.timestamp.blockPeriod(),
          api.query.session.validators()
            .pipe(
              switchMap((validators) => {
                // Retrieve the balances for all validators
                return combineLatest(
                  ...validators.map((authorityId) =>
                    api.query.balances.freeBalance(authorityId)
                      .pipe(
                        map((balance) => ({
                          address: authorityId.toString(),
                          balance: balance.toString()
                        }))
                      )
                  )
                );
              })
            )
        ])
      )
    )
    .subscribe(([accountNonce, blockPeriod, validatorBalances]) => {
      console.log(`accountNonce(${Alice}) ${accountNonce} ` +
        `with blockPeriod ${blockPeriod.toNumber()} seconds`);
      console.log('validators', validatorBalances);
    });

  // Id of the subscription
  console.log(`subscriptionApiRx: ${subscriptionApiRx}`);

  setTimeout(() => {
    // Cleanup and unsubscribe from the subscription
    subscriptionApiRx.unsubscribe();
  }, 5000);
}

main().catch(console.error).finally(_ => process.exit());
