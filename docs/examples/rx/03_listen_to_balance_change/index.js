const { switchMap } = require('rxjs/operators');

// Import the API Rx
const { ApiRx } = require('@polkadot/api');

// Known account we want to use (available on dev chain, with funds)
const Alice = '5GoKvZWG5ZPYL1WUovuHW3zJBWBP5eT8CbqjdRY4Q6iMaDtZ';

function main () {
  let previous = undefined;

  // Here we pass the (optional) provider
  // We avoid having nested `.subscribe` blocks. Use `.subscribe` or
  // `.tap` blocks for debugging with console.log
  ApiRx
    .create()
    .pipe(
      // Here we subscribe to any balance changes and update the on-screen value.
      // Use the Storage chain state (runtime) Node Interface.
      switchMap((api) => api.query.balances.freeBalance(Alice))
    )
    .subscribe((current) => {
      previous = previous || current;

      console.log(`Alice's account ${Alice} had a previous balance of: ${previous || '???'}`);
      console.log(`You may leave this example running and start example 07 to transfer DOTs ` +
                  `to Alice at ${Alice}`);

      // Calculate the delta
      const change = current.sub(previous);

      // Only display positive value changes (Since we are pulling `previous` above
      // already, the initial balance change will also be zero)
      if (change.isZero()) {
        return;
      }

      previous = current;

      console.log(`Balance of Alice at ${Alice} is ${current}. It changed by: ${change}`);
    });
}

main();
