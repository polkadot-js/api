# Chain state

In previous sections, we initialized the API and retrieved runtime constants. This section will walk through the concepts behind making queries to the chain to retrieve current state. The `api.query.<module>.<method>` interfaces, as already described earlier, is populated from the metadata. The API uses the metadata information provided to construct queries based on the location and parameters provided to generate state keys, and then queries these via RPC.

## Basic queries

Let's dive right in, connect to a general chain and retrieve some information on the current state. Of interest may be retrieving the nonce of a particular account as well as the current balance, this can be achieved via -

```js
// initialize the API as in previous sections
...

// the actual address that we will use
const ADDR = '5DTestUPts3kjeXSTMyerHihn1uwMfLj8vU8sqF7qYrFabHE';

// retrieve the last timestamp
const now = await api.query.timestamp.now();

// retrieve the account nonce via the system module
const nonce = await api.query.system.accountNonce(ADDR);

// retrieve the account balance via the balances module
const balance = await api.query.balance.freeBalance(ADDR);

console.log(`${now}: balance of ${balance} and a nonce of ${nonce}`);
```

There have been some additions in the code above comparing with retrieving runtime constants. In these cases, since we are making a query to the actual chain, we use the `await` syntax to retrieve the information. Since the API is Promise-based, this means we can also rewrite the above to follow a Promise pattern,

```js
...
// retrieve last block timestamp, account nonce & balance
const [now, nonce, balance] = await Promise.all([
  api.query.timestamp.now(),
  api.query.system.accountNonce(ADDR),
  api.query.balance.freeBalance(ADDR)
]);
```

## Parameters & return values

As indicated in previous sections, any return value is always an object with a consistent interface that reflects the type being returned. In the above example, the timestamp is a `Moment` (a `u64` value), the nonce is an `Index` (a `u32` value) and the `Balance` is an underlying `u128`.

Additionally we have provided some parameters for the query calls, specifically for the retrieval of the nonce and balance. It is important to note that the API will automatically convert any parameters into the correct type for encoding  and making calls, in this case the `AccountId` parameter could be specified as a ss58 address (as it was), an actual `AccountId` (retrieved via another call) or just a plain `Uint8Array` (or even hex-string representation) for a publicKey.

## Exploring RPCs

Where all query functions use the underlying RPCs, together with metadata, to construct and retrieve information, the direct node RPCs can be seen as raw calls that enable these (slightly) higher-level operations. Next up we will take a dive into [making RPC calls via the API](api.rpc.md).
