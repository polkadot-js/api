const BN = require('bn.js');

// Import the API
const { ApiPromise } = require('@polkadot/api');

// Known account we want to use (available on dev chain, with funds)
const Alice = '5GoKvZWG5ZPYL1WUovuHW3zJBWBP5eT8CbqjdRY4Q6iMaDtZ';

async function main () {
  // Create an await for the API
  const api = await ApiPromise.create();

  // Retrieve the current on-chain balance. The call has a callback since WebSockets 
  // subscriptions require a handler.
  let previous = await api.query.balances.freeBalance(Alice, (previous) => {
    return new BN(previous);
  });

  console.log(`Alice with account number ${Alice} had a previous balance of: ${previous || '???'}`);
  console.log(`You may leave this example running and start example 06 ` +
              `or transfer any value to Alice at ${Alice}`);

  // Here we subscribe to any balance changes and update the on-screen value.
  // Use the Storage chain state (runtime) Node Interface.
  api.query.balances.freeBalance(Alice, (current) => {
    // Calculate the delta
    const change = current.sub(new BN(previous));

    // Only display positive value changes (Since we are pulling `previous` above
    // already, the initial balance change will also be zero)
    if (change.isZero()) {
      return;
    }

    previous = current;

    console.log(`Balance of Alice at ${Alice} is ${current}. It changed by: ${change}`);
  });
}

main().catch(console.error);
