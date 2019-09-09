# Transactions and subscriptions

Previously we send simple transactions with the `api.tx` endpoints, in this section we will extend that to monitor the actual transactions for inclusion and also extend the monitoring for transaction events.

## Transaction finalization

To send a transaction and then waiting until it has been included in a block, we will use a subscription interface instead of just waiting for the inclusion to yield the extrinsic hash. For the simplest form, we can do the following -

```js
...

// create alice (carry-over from the keyring section)
const alice = keyring.addFromUri('//Alice');

// make a transfer from Alice to BOB, waiting for inclusion
const unsub = await api.tx.balances
  .transfer(BOB, 12345)
  .signAndSend(alice, (result) => {
    console.log(`Current status is ${result.status}`);

    if (result.status.isFinalized) {
      console.log(`Transaction included at blockHash ${result.status.asFinalized}`);
      unsub();
    }
  });
```

As per all previous subscriptions, the transaction subscription returns in `unsub()` and the actual method has a subscription callback. The `result` object has 2 parts, `events` (to to covered in the next section) and the `status` enum. When this enum is in `Finalized` state (checked via `isFinalized`), the underlying value contains the block hash of the block where the transaction has been included.

## Transaction events

Any transaction will emit events, as a bare minimum this would be `system.ExtrinsicSuccess` or `system.ExtrinsicFailed` events for the specific transaction. Depending on the transaction sent, some other events may however be emitted, for instance for a transfer this could include one or more of `Transfer`, `NewAccount` or `ReapedAccount`, as defined in the [substrate balances event defaults](../substrate/events.md#balances).

To display or act on these events, we can do the following -

```js
...
// make a transfer from Alice to BOB, waiting for inclusion
const unsub = await api.tx.balances
  .transfer(BOB, 12345)
  .signAndSend(alice, ({ events = [], status }) => {
    console.log(`Current status is ${status.type}`);

    if (status.isFinalized) {
      console.log(`Transaction included at blockHash ${status.asFinalized}`);

      // loop through Vec<EventRecord> to display all events
      events.forEach(({ phase, event: { data, method, section } }) => {
        console.log(`\t' ${phase}: ${section}.${method}:: ${data}`);
      });

      unsub();
    }
  });
```

Be aware that when a transaction status is `isFinalized`, it means it is included, but it may still have failed - for instance  if you try to send a larger amount that you have free, the transaction is included in a block, however from a end-user perspective the transaction failed since the transfer did not occur. In these cases a `system.ExtrinsicFailed` event will be available in the events array. (And a `system.ExtrinsicSuccess` in the transaction yielded no errors)

## Understanding types

As has been very apparent in all the preceding sections, the management of types is what allows the API to ciommunicate with the node. Most values are in a [SCALE-encoded format](https://github.com/paritytech/parity-scale-codec) and the reponsibility of the  API is to encode and decode these. In the next section we will [take a look at what interfaces the API provides around types](types.basics.md).
