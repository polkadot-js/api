// Import the Api
const { ApiRx } = require('@polkadot/api');

// Known account we want to use (available on dev chain, with funds)
const Alice = '5GoKvZWG5ZPYL1WUovuHW3zJBWBP5eT8CbqjdRY4Q6iMaDtZ';

async function main () {
  // Create an await for the API
  const api = await ApiRx.create().toPromise();

  // Retrieve the initial balance. Since the call has no callback, we can use the toPromise()
  // method on the observable together with the first() operator.
  let previous = await api.query.balances.freeBalance(ALICE).pipe(first()).toPromise();

  console.log(`${Alice} has a ${previous} balance`);
  console.log(`You may leave this example running and start example 06 or transfer any value to ${Alice}`);

  // Here we subscribe to any balance changes and update the on-screen value
  api.query.balances.freeBalance(Alice).subscribe((balance) => {
    // Calculate the delta
    const change = current.sub(previous);

    // Only display positive value changes (Since we are pulling `previous` above already,
    // the initial balance change will also be zero)
    if (change.isZero()) {
      return;
    }
    previous = current;
    console.log(`New transaction balance of: ${change}`);
  });
}

main().catch(console.error);
