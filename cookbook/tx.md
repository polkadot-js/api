# Transactions

A blockchain is no fun if you are not submitting transactions. Or at least if somebody is not submitting any. Here you will find some snippets for dealing with some common issues.

## How do I estimate the transaction fees?

In addition to the `signAndSend` helper on transactions, `.paymentInfo` (with the exact same parameters) are also exposed. Using the same sender, it applies a dummy signature to the transaction and then gets the fee estimation via RPC.

```js
// estimate the fees as RuntimeDispatchInfo, using the signer (either
// address or locked/unlocked keypair) (When overrides are applied, e.g
//  nonce, the format would be `paymentInfo(sender, { nonce })`)
const info = await api.tx.balances
  .transfer(recipient, 123)
  .paymentInfo(sender);

// log relevant info, partialFee is Balance, estimated for current
console.log(`
  class=${info.class.toString()},
  weight=${info.weight.toString()},
  partialFee=${info.partialFee.toHuman()}
`);
```

## How do I get the decoded enum for an ExtrinsicFailed event?

Assuming you are sending a tx via `.signAndSend`, the callback yields information around the tx pool status as well as any events when `isInBlock` or `isFinalized`. If an extrinsic fails via `system.ExtrinsicFailed` event, you can retrieve the error, if defined as an enum on a module.

```js
api.tx.balances
  .transfer(recipient, 123)
  .signAndSend(sender, ({ status, events }) => {
    if (status.isInBlock || status.isFinalized) {
      events
        // find/filter for failed events
        .filter(({ section, method }) =>
          section === 'system' &&
          method === 'ExtrinsicFailed'
        )
        // we know that data for system.ExtrinsicFailed is
        // (DispatchError, DispatchInfo)
        .forEach(({ data: [error, info] }) => {
          if (error.isModule) {
            // for module errors, we have the section indexed, lookup
            const decoded = api.registry.findMetaError(error.asModule);
            const { documentation, method, section } = decoded;

            console.log(`${section}.${method}: ${documentation.join(' ')}`);
          } else {
            // Other, CannotLookup, BadOrigin, no extra info
            console.log(error.toString());
          }
        });
    }
  });
```

## How do I send an unsigned extrinsic?

For most runtime modules, transactions need to be signed and validation for this happens node-side. There are however modules that accepts unsigned extrinsics, an example would be the Polkadot/Kusama token claims (which is here used as an example).

```js
// construct the transaction, exactly as per normal
const utx = api.tx.claims.claim(beneficiary, ethSignature);

// send it without calling sign, pass callback with status/events
tx.send(({ status }) => {
  if (status.isInBlock) {
    console.log(`included in ${status.asInBlock}`);
  }
});
```

The signing is indicated by the first byte in the transaction, so in this case we have called `.send` on it (no `.sign` or `.signAndSend`), so it will be sent using the unsigned state, without signature attached.

## How can I batch transactions?

Polkadot/Substrate provides a `utility.batch` method that can be used to send a number of transactions at once. These are then executed from a single sender (single nonce specified) in sequence. This is very useful in a number of cases, for instance if you wish to create a payout for a validator for multiple eras, you can use this method. Likewise, you can send a number of transfers at once. Or even batch different types of transactions.

```js
// construct a list of transactions we want to batch
const txs = [
  api.tx.balances.transfer(addrBob, 12345),
  api.tx.balances.transfer(addrEve, 12345),
  api.tx.staking.unbond(12345)
];

// construct the batch and send the transactions
api.tx.utility
  .batch(txs)
  .signAndSend(sender, ({ status }) => {
    if (status.isInBlock) {
      console.log(`included in ${status.asInBlock}`);
    }
  });
```

## How do I take the pending tx pool into account in my nonce?

The `system.account` query will always contain the current state, i.e. it will reflect the nonce for the last known block. As such when sending multiple transactions in quick succession (see batching above), there may be transactions in the pool that has the same nonce that `signAndSend` would apply - this call doesn't do any magic, it simply reads the state for the nonce. Since we can specify options to the `signAndSend` operation, we can override the nonce, either by manually incrementing it or querying it via `rpc.system.accountNextIndex`.

```js
for (let i = 0; i < 10; i++) {
  // retrieve sender's next index/nonce, taking txs in the pool into account
  const nonce = await api.rpc.system.accountNextIndex(sender);

  // send, just retrieving the hash, not waiting on status
  const txhash = await api.tx.balances
    .transfer(recipient, 123)
    .signAndSend(sender, { nonce });
}
```
