/* eslint-disable header/header */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/unbound-method */

// Import the API and operators from RxJs
const { ApiRx } = require('@polkadot/api');
const { pairwise, startWith } = require('rxjs/operators');

// Known account we want to use (available on dev chain, with funds)
const Alice = '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY';

async function main () {
  // Create an await for the API
  const api = await ApiRx.create().toPromise();

  // Here we subscribe to any balance changes and update the on-screen value.
  // We're using RxJs pairwise() operator to get the previous and current values as an array.
  api.query.system.account(Alice)
    .pipe(
      // since pairwise only starts emitting values on the second emission, we prepend an
      // initial value with the startWith() operator to be able to also receive the first value
      startWith('first'),
      pairwise()
    )
    .subscribe((balance) => {
      if (balance[0] === 'first') {
        // Now we know that if the previous value emitted as balance[0] is `first`,
        // then balance[1] is the initial value of Alice account.
        console.log(`Alice ${Alice} has a balance of ${balance[1].data.free}`);
        console.log('You may leave this example running and start the "Make a transfer" example or transfer any value to Alice address');

        return;
      }

      const change = balance[1].data.free.sub(balance[0].date.free);

      // Only display value changes
      if (!change.isZero()) {
        console.log(`New balance change of: ${change}`);
      }
    });
}

main().catch(console.error);
