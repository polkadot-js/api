# Chain state

In previous sections we initialized the API and retrieved runtime constants. This section will walk through the concepts bahind making queries to the chain to retrieve current state. The `api.query.<module>.<method>` interfaces, as aqlready decsribed earlier, is populatated from the metadata. The API uses the metadata information provided to construct queries based on the location and parameters provided to generate state keys, and then  queries these via RPC.

## Basic queries

Let's dive right in, connect to a general chain and retrieve some information on the current state. Of interest may be retrieving the nonce of a particular account as well as the currenr balance, this can be achieve via -

```js
// initialize the API as in previous sections
...

// const the actual address that we will use
const ADDR = '5DTestUPts3kjeXSTMyerHihn1uwMfLj8vU8sqF7qYrFabHE';

// retrieve the current nonce via the system module
const nonce = await api.query.system.accountNonce(ADDR);

// retrieve the current balance
const balance = await api.query.balance.freeBalance(ADDR);

console.log(`The account has a balance of ${balance} and a nonce of ${nonce}`);
```

There has been some additions in the code above comparing with retrieving runtime constants. In these cases, since we are making a query to the actual chain, we use the `await` syntax to retrieve the information. Since the API is Promise-based, this means we can also re-write the above to follow a Promise pattern,

```js
// retrieve nonce & balance
const [nonce, balance] = await Promise.all([
  api.query.system.accountNonce(ADDR),
  api.query.balance.freeBalance(ADDR)
]);
```
