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
  class=${class.toString()},
  weight=${weight.toString()},
  partialFee=${partialFee.toHuman()}
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
