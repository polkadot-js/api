# Complex transactions

Up till now we have focussed on the base operation of transactions. There are however some more complex operations that deserve some more information, for instance when doing either democracy proposals or excuting sudo calls, in both these cases the transaction send a call or proposal to be evaluated.

## Sudo use

When running a development chain (Polkadot/Substrate with a `--dev` flag), or in certain testnets a sudo module is available - just like the sudo command on *nix systems, it allows root-level access to perform actions. For instance, we can perform a `setBalance` on an account -

```js
...
// get the  current sudo key in the system
const sudoKey = await api.query.sudo.key();

// lookup from keyring (assuming we have added all, on --dev this would be `//Alice`)
const sudoPair = keyring.getPair(sudoKey);

// send the actual sudo transaction
const unsub = await api.tx.sudo
  .sudo(
    api.tx.balances.setBalance(ADDR, 12345, 0)
  )
  .signAndSend(sudoPair, (result) => { ... });
```

## Understanding types

As has been very apparent in all the preceding sections, the management of types is what allows the API to ciommunicate with the node. Most values are in a [SCALE-encoded format](https://github.com/paritytech/parity-scale-codec) and the reponsibility of the  API is to encode and decode these. In the next section we will [take a look at what interfaces the API provides around types](types.basics.md).
