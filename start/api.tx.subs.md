# Transaction subscriptions

Previously we sent simple transactions using the `api.tx` endpoints, in this section we will extend that to monitor the actual transactions for inclusion and also extend the monitoring for transaction events.

## Transaction inclusion

To send a transaction and then waiting until it has been included in a block, we will use a subscription interface instead of just waiting for the transaction pool addition to yield the extrinsic hash. For the simplest form, we can do the following -

```js
...

// Create alice (carry-over from the keyring section)
const alice = keyring.addFromUri('//Alice');

// Make a transfer from Alice to BOB, waiting for inclusion
const unsub = await api.tx.balances
  .transfer(BOB, 12345)
  .signAndSend(alice, (result) => {
    console.log(`Current status is ${result.status}`);

    if (result.status.isInBlock) {
      console.log(`Transaction included at blockHash ${result.status.asInBlock}`);
    } else if (result.status.isFinalized) {
      console.log(`Transaction finalized at blockHash ${result.status.asFinalized}`);
      unsub();
    }
  });
```

As per all previous subscriptions, the transaction subscription returns in `unsub()` and the actual method has a subscription callback. The `result` object has 2 parts, `events` (to to covered in the next section) and the `status` enum.

When the `status` enum is in `Finalized` state (checked via `isFinalized`), the underlying value contains the block hash of the block where the transaction has been finalized. `Finalized` will follow `InBlock`, which is the block where the transaction has been included. `InBlock` does not mean the block is finalized, but rather applies to the transaction state, where `Finalized` means that the transaction cannot be forked off the chain.

## Transaction events

Any transaction will emit events, as a bare minimum this will always be either a `system.ExtrinsicSuccess` or `system.ExtrinsicFailed` event for the specific transaction. These provide the overall execution result for the transaction, i.e. execution has succeeded or failed.

Depending on the transaction sent, some other events may however be emitted, for instance for a `balances.transfer` this could include one or more of `Transfer`, `NewAccount` or `ReapedAccount`, as defined in the [substrate balances event defaults](../substrate/events.md#balances).

To display or act on these events, we can do the following -

```js
...
// Make a transfer from Alice to BOB, waiting for inclusion
const unsub = await api.tx.balances
  .transfer(BOB, 12345)
  .signAndSend(alice, ({ events = [], status }) => {
    console.log(`Current status is ${status.type}`);

    if (status.isFinalized) {
      console.log(`Transaction included at blockHash ${status.asFinalized}`);

      // Loop through Vec<EventRecord> to display all events
      events.forEach(({ phase, event: { data, method, section } }) => {
        console.log(`\t' ${phase}: ${section}.${method}:: ${data}`);
      });

      unsub();
    }
  });
```

Be aware that when a transaction status is `isFinalized`, it means it is included, but it may still have failed - for instance if you try to send a larger amount that you have free, the transaction is included in a block, however from a end-user perspective the transaction failed since the transfer did not occur. In these cases a `system.ExtrinsicFailed` event will be available in the events array.

## Payment information

The Polkadot/Substrate RPC endpoints exposes weight/payment information that takes an encoded extrinsic and calculates the on-chain weight fees for it. A wrapper for this is available on the tx itself, taking exactly the same parameters as you would pass to a normal `.signAndSend` operation, specifically `.paymentInfo(sender, <any options>)`. To expand on our previous example -

```js
// construct a transaction
const transfer = api.tx.balances.transfer(BOB, 12345);

// retrieve the payment info
const { partialFee, weight } = await transfer.paymentInfo(alice);

console.log(`transaction will have a weight of ${weight}, with ${partialFee.toHuman()} weight fees`);

// send the tx
transfer.signAndSend(alice, ({ events = [], status }) => { ... });
```

## Complex transactions

In many cases transactions can carry quite complex information, be it for passing objects or proposing changes. In the next section we will take a dive [into complex transactions, including those wrapped for sudo](api.tx.wrap.md).
