# TypeScript interfaces

The API is written in TypeScript, and as such definitions for all actual exposed interfaces are available. In general terms, care has been taken to expose types via a `@polkadot/<package>/types` interface, for instance the `ApiOptions` type which is passed through on the `.create` interface is available under `@polkadot/api/types`.

## RPC interfaces

Before getting to the "hard things", i.e. methods as decorated based on metadata interfaces, let's take a look at more "static" interfaces such as RPC. (Be aware though that these can be customized on a per-chain basis as well - for now this functionality is not reflected in the API itself).

```js
import { Header } from '@polkadot/types/interfaces';

...
const firstHead = api.rpc.chain.getHeader();

api.rpc.chain.subscribeNewHeads((lastHead: Header): void => {
  console.log('current header:', JSON.stringify(lastHead));
});
```

In the above example a couple of things are introduced - most of the chain definitions (the default types for both Polkadot & Substrate) can be imported as interfaces from the `@polkadot/types/interfaces` endpoint. These are not classes (since they are [generated from definitions](https://github.com/polkadot-js/api/tree/master/packages/types/src/interfaces)) but rather a combination of TypeScript `interfaces` (where structures are involved) and `type`, i.e. `type Balance = u128`.

In the subscription example, we explicitly define `lastHead: Header`, although the same definition is missing for `firstHead`. However, in both these cases the definitions for the `api.rpc` sections are such that TypeScript understands that `firstHead` and `lastHead` are of type `Header`. The `: Header` here is rather for our own understanding (and could be needed based on your eslint/tslint config).

As indicated, most of the Polkadot/Substrate default types are available via `types/interfaces`. However, for primitives types where there is an actual implementation, these are made available via `@polkadot/types` directly. For instance, `import { u32 } from '@polkadot/types` is valid in this context.

## Storage generics

For any interface injected by metadata, the types are not fully described but rather names and the API will decode all these into an instance that complies with the `Codec` interface. (The base of all our types)

However, this does allow you to perform overrides via generics, making the following possible -

```js
import { Balance } from '@polkadot/types/interfaces';

type Balance2 = Balance;

...
const total = await api.query.balances.totalIssuance<Balance2>();
```

In this example (although the query does indeed return a `Balance`) we can instruct the TypeScript compiler that we are expecting a `Balance2`, not just the interface as generated. This means that functions like `.toNumber()` is available on both these types - as opposed to just the [general type defaults](types.basics.md#everything-is-a-type) with `.toHex()` and friends.

## Adding user types

In addition to the generated and available interfaces, there is also the ability to [create TypeScript interfaces from your own definitions and well as your on-chain modules](typescript.user.md).
