# Complex transactions

Up till now we have focussed on the base operation of transactions. There are however some more complex operations that deserve some more information, for instance when doing either democracy proposals or executing sudo calls, in both these cases the transaction wraps a call or proposal to be evaluated.

## Sudo use

When running a development chain (Polkadot/Substrate with a `--dev` flag), or in certain testnets a sudo module is available - just like the sudo command found on some systems, it allows root-level access to perform actions. For instance, we can perform a `setBalance(<accountId>, <free>, <reserved>)` on an account -

```js
...
// Get the current sudo key in the system
const sudoKey = await api.query.sudo.key();

// Lookup from keyring (assuming we have added all, on --dev this would be `//Alice`)
const sudoPair = keyring.getPair(sudoKey);

// Send the actual sudo transaction
const unsub = await api.tx.sudo
  .sudo(
    api.tx.balances.setBalance(ADDR, 12345, 678)
  )
  .signAndSend(sudoPair, (result) => { ... });
```

The above is really quite straight-forward, the `sudo.sudo(<call>)` call takes 1 parameter, which is a `Call`. We construct this via the `api.tx` and pass it through. The only difference is that the nested call has no actual `.signAndSend` on it, rather it is only used as a container for data.

Exactly the same would apply to the standard `democracy.propose(<proposal>, <value>)`, for instance we can just swap the above sudo wrapper with a proposal and add the correct fees for the proposal.

## Complex types

As indicated in previous sections (we will cover types in more detail next), the API will format the inputs into the actual type required for submission. For primitives such as numbers, this is quite understandable, but it is worth spending at least one example on cases where an object is provided as an input. For instance, making a call to validate -

```js
...
const txHash = await api.tx.staking.validate({
  validatorPayment: 12345
});
```

In the above example, all we need to provide is a the fields for the `ValidatorPrefs` object. (Any fields not defined will be set to the default for that type, i.e. all zero). This object maps through to what is defined on the Polkadot/Substrate side, with the [@polkadot/types version](https://github.com/polkadot-js/api/blob/master/packages/types/src/interfaces/staking/definitions.ts) mapping all fields.

## Understanding types

As has been very apparent in all the preceding sections, the management of types is what allows the API to communicate with the node. Most values are in a [binary SCALE-encoded format](https://github.com/paritytech/parity-scale-codec) and it is the responsibility of the API is to encode and decode these. In the next section we will [take a look at what interfaces the API provides around types](types.basics.md).
