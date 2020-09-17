# Transactions

Transaction endpoints are exposed, as determined by the metadata, on the `api.tx` endpoint. These allow you to submit transactions for inclusion in blocks, be it transfers, setting information or anything else your chain supports.

## Simple transactions

To start off, let's make a balance transfer from Alice to Bob.

```js
...

// Sign and send a transfer from Alice to Bob
const txHash = await api.tx.balances
  .transfer(BOB, 12345)
  .signAndSend(alice);

// Show the hash
console.log(`Submitted with hash ${txHash}`);
```

We have already become familiar with the `Promise` syntax that is used throughout the API, in this case it is no different. We construct a transaction by calling `balances.transfer(<accountId>, <value>)` with the required params and then as a next step we submit it to the node.

As with all other API operations, the `to` params just needs to be "account-like" and the value params needs to be "number-like", the API will take care of encoding and conversion into the correct format.

The result for this call (we will deal with subscriptions in a short while), is the transaction hash. This is a hash of the data and receiving this does not mean that transaction has been included, but rather only that it has been accepted for propagation by the node. (It can still fail on execution, we will handle this in some of our follow-up sections.)

## Under the hood

Despite the single-line format of `signAndSend`, there is a lot happening under the hood (and all of this can be manually provided) -

- Based on the sender, the API will query `system.account` (or `system.accountNonce` on older chains) to determine the next nonce to use
- The API will retrieve the current block hash and use it to create a mortal transaction, i.e. the transaction will only be valid for a limited number of blocks (by default this is 5 mins at 6s block times)
- It will construct a payload and sign this, this includes the `genesisHash`, the `blockHash` for the start of the mortal era as well as the current chain `specVersion`
- The transaction is submitted to the node

As suggested, you can override all of this, i.e. by retrieving the nonce yourself and passing that as an option, i.e. `signAndSend(alice, { nonce: aliceNonce })`, this could be useful when manually tracking and submitting transactions in bulk.

## Into the keyring we go

With the examples above, the variable `alice` seems to have appeared from thin air. To understand how transactions are signed, we will take a [brief diversion into the keyring](keyring.md) before returning to our regularly scheduled program.
