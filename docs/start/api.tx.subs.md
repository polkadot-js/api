# Transactions and subscriptions

Previously we send simple transactions with the `api.tx` endpoints, in this section we will extend that to monitor the actual transactions for inclusion and also extend the monitoring for transaction events.

## Transaction finalization

To send a transaction and then waiting  until it has been included in a block, we will use a subscription interface instead of just waiting for the inclusion to yield the extrinsic hash. For the simplest form, we can do the following -

```js
...

// create alice (carry-over from the keyring section)
const alice = keyring.addFromUri('//Alice');

// make a transfer from Alice to Bob (defined elsewhere), waiting for inclusion
const unsub = await api.tx.balances
  .transfer(BOB, 12345)
  .signAndSend(alice, ({ status }) => {
    console.log(`Current status is ${status}`);

    if (status.isFinalized) {
      console.log(`Transaction included at blockHash ${status.asFinalized}`);
      unsub();
    }
  });
```
