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

## Metadata injected

For any interface injected by metadata, the types are not available by default (although it may be in the future for default interfaces), but rather what the API understands is that all results need to comply to the `Codec` interface. (The bas of all out types)

However, to make this sane from a developer perspective the injected methods are generic, effectively making the following possible -

```js
import { Balance, Index } from '@polkadot/types/interfaces';

...
const nonce = await api.query.system.accountNonce<Index>(ADDR);
const balance = await api.query.balances.freeBalance<Balance>(ADDR);
```

In both these case we can instruct the TypeScript compiler that the type we are expecting in `Index` and `Balance` respectively, not just pure `Codec`. This means that functions like `.toNumber()` is available on both these types - as opposed to just the [general type defaults](types.basics.md#everything-is-a-type) with `.toHex()` and friends.

## Future work

As of this writing, there are still some gray areas to type detection, specifically around the following interfaces -

- `.at` & `.multi` on `api.query` does not (yet) have a `<TypeOverride>` interface. This means `as <TypeOverride>` casts are presently needed for these results
- `api.queryMulti` does not (yet) allow you to provide a hint to the types returned, this ties to the previous point

In addition to expanding the type coverage, we wish to make the actual generation script for the types from `@polkadot/types/interfaces` available in 2 ways -

- allowing you to point to a folder of types and auto-generate the TypeScript typings from those. (Which is akin to what we do internally). This would allow a reduction in type classes explicitly written and injected.
- once the metadata itself supports full type definitions, the script can be used to generate interface definitions specifically tailored for a chain

## And that's a wrap

This brings us to the end of our overview and jump through the API. While the documentation is still very much and ever evolving item, we can encourage you to try out what you have learned with some [examples](../examples). As we [indicated right at the start of this journey](README.md#help-us-help-others), if there are areas for improvement, let us know.
