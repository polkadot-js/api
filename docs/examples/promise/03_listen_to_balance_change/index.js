// import the Api
const { ApiPromise } = require('@polkadot/api');

// the known account we want to use (available on dev chain, with funds)
const Alice = '5GoKvZWG5ZPYL1WUovuHW3zJBWBP5eT8CbqjdRY4Q6iMaDtZ';

async function main () {
  // Create an wait for the API
  const api = await ApiPromise.create();

  // Retrieve the initial balance. Since the call has no callback, it is simply a promise
  // the resolves to the current on-chain value
  let previous = await api.st.balances.freeBalance(Alice);

  console.log(`${Alice} has an ${previous} balance`);
  console.log(`You may leave this example running and start example 06 or transfer any value to ${Alice}`);

  // Here we subscribe to any balance changes and updates the on-screen value
  api.st.balances.freeBalance(Alice, (current) => {
    // Calculate the delta
    const change = current.sub(previous);

    // Only display positive value changes (Since we are pulling previous above already,
    // the intiial balance change will also be zero)
    if (change.isZero()) {
      return;
    }

    previous = current;

    console.log(`Balance of ${Alice}: ${current}, ${change} change`);
  });
}

main().catch(console.error);
