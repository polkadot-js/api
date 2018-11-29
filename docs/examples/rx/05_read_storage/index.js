const { combineLatest } = require('rxjs');
const { switchMap, map } = require('rxjs/operators');

// Import the API
const { ApiRx } = require('@polkadot/api');

// Our address for Alice on the dev chain
const Alice = '5GoKvZWG5ZPYL1WUovuHW3zJBWBP5eT8CbqjdRY4Q6iMaDtZ';

// Separate function for retrieval of validators and their associated balance
function validatorsWithBalance (api) {
  return api.query.session.validators()
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
    );
}

function main () {
  // Instantiate the API with default provider via Promise when ready
  const api = ApiRx.create();

  // Subscribe to basic chain state/storage queries
  // Use the Storage chain state (runtime) Node Interface.
  const subscriptionApiRx =
    api
      .pipe(
        switchMap((api) =>
          combineLatest([
            api.query.system.accountNonce(Alice),
            api.query.timestamp.blockPeriod(),
            validatorsWithBalance(api)
          ])
        )
      ).subscribe(([accountNonce, blockPeriod, validatorBalances]) => {
        console.log(`Account Nonce of ${accountNonce} for Alice with address ${Alice}`);
        console.log(`Block Period: ${blockPeriod.toNumber()} seconds`);
        console.log(`Validator Balances: ${JSON.stringify(validatorBalances, null, 2)}`);

        const isReceived = !!accountNonce && !!blockPeriod && !!validatorBalances;

        // Cleanup and unsubscribe from the subscription if all data received
        if (isReceived) {
          subscriptionApiRx.unsubscribe();
          console.log(`Unsubscribing successful? ${subscriptionApiRx.closed}`);
        }
      });
}

main();
