# FAQ

The list will be updated/expanded as questions come up, dealing with some common issues that API users find.

## I am getting a "Unknown types found, no types for ..." error

There are 2 causes for this, both related to the version of the API that you are using and the support of types. As explained in the elsewhere, types on Polkadot/Substrate are continuously evolving - the latest version of the API always tries to support types for the latest Polkadot networks, such as [Kusama](https://kusama.network/). So for Polkadot public chains, ensure that you are using the latest released API version.

If however you are running against a master branch of either Polkadot or Substrate, you may well be better suited running [a beta version, tracking master](install.md#betas). If you are connected to a customized chain, you would rather want to [register the types](types.extend.md) either on your own, or via packages that the chain vendor provides.

## I am getting a "Metadata:: failed on MagicNumber" error

Update your version of the API to the [latest version](install.md). Like types, the [metadata interfaces](basics.md) are continuously evolving. For instance with the Polkadot Alexander network, only metadata v3 is available. By the time Kusama launched, this has been bumped to v7. As these versions are added to the Polkadot/Substrate codebase, they are added to the API.

## The node returns a "Could not convert" error on send

The typical error that you would see is `Verification Error: Execution(ApiError("Could not convert parameter 'tx' between node and runtime`. This means that the transaction data serialized from the API cannot be deserialized on the node.

All data transferred between the API and the Node is in a SCALE-encoded binary format, so the [definition of the types](types.extend.md) between the API and the node needs to match 100%. When you find the above, it would mean the definition of the types on the API side does not match what is on the node. Specifically the API encodes against the definition, but since there is a mismatch the Node cannot parse the data correctly.

To fix this, you should look at the specific `api.tx.*` params and adjust the type definitions for those param types to match what is found on the node side. In some rare cases the cause could be extrinsic formatting related, to track these make an `api.tx.system.remark(data: Bytes)` call, if it fails, the API and node cannot agree on [an extrinsic format and adjustments are required](types.extend.md#impact-on-extrinsics).

If you are using a node-template based version of substrate and you changed the specName you need to add these typings(In addition to other custom types) `{"Address": "AccountId","LookupSource": "AccountId"}`. This is also the case when you use [polkadot-js/apps](https://github.com/polkadot-js/apps) to connect to your node. When the specName stays node-template the API is smart enough to add the custom typings.

## I would like to sign transactions offline

The API itself is independent on where the signature comes from and how it is injected. Additionally it implements a signer interface, that can be used for external signing - an example of this is the [polkadot-js/apps](https://github.com/polkadot-js/apps) support for signing via extensions and even the [polkadot-js/extension](https://github.com/polkadot-js/extension) support for tools such as the [Parity Signer](https://github.com/paritytech/parity-signer).

As of this writing we don't have an explicit example of implementing the signer interface in these docs, although we do use one in [our tests](https://github.com/polkadot-js/api/blob/master/packages/api/test/util/SingleAccountSigner.ts). Additionally, the [polkadot-js/tools](https://github.com/polkadot-js/tools) has an implementation of [a very basic offline signer](https://github.com/polkadot-js/tools/tree/master/packages/signer-cli) where transactions are generated in one process and signatures in another non-connected process.

## I would like to send a root transaction

Some calls in Polkadot/Substrate can only be submitted as root, these are indicated by `ensure_root(origin)` in the Rust codebase. Root here does not refer to the actual account, i.e. `//Alice` on  a `--dev` chain, but rather that it cannot be submitted as a bare user transaction. This restriction applies to chain upgrades, changing balances or anything that modifies the state and/or chain operation.

To submit these transactions, it needs to be send as a [wrapped transaction](api.tx.wrap.md#sudo-use) via either `sudo.sudo` (assuming you have access on your chain) or `democracy.proposal` (which would allow users of the chain to vote on it).

## How do I call a function with a Tuple input

Tuples, as defined in the Polkadot/Substrate types appear as `(TypeA, TypeB)`. For instance we may have an `(AccountId, u64)` input as defined in the metadata or as part of the user types. To specify a Tuple as an input, wrap it in an  array format, for instance to call `query.module.get((u32, u64))` where a `(u32, u64)` Tuple input is expected, you would do  `query.module.get([123, 456])`

## How long do transactions live

Polkadot/Substrate supports both immortal and mortal transactions. For immortal, this means that the transaction has an infinite lifetime, for mortals, the transactions expire after a defined period. By default the API sends mortal transactions when no explicit extrinsic era has been specified. This means that all transaction has a limited lifetime and will expire if not included in the period set.

The length for this transaction validity is set to 5 minutes, calculated based on the blocktime for the chain. (10 blocks per minute in this default 6s Substrate configuration).

## My chain does not support system.account queries

The API always tracks the latest Substrate master in terms of examples. This means that nonce & balance queries are done via the `api.query.system.account(<account>)` which returns a struct `{ nonce: Index, data: AccountData }` where the `data` is struct containing the free and reserved balances. As with all `api.query.*` endpoints, this is decorated based on what the chain you connect to support, via the metadata exchange.

It is possible that you are connecting to an older chain that has not been upgraded yet. For these chains, this storage entry won't be available (yet). To query the nonce on older chains, you can do a query to `api.query.system.accountNonce(<account>)` and balances can be retrieved via `api.query.balances.freeBalance(<account>)`.

Likewise, if your chain has been upgraded recently and you are still using the old `system.accountNonce` or `balances.freeBalance` queries in your code (which is now not available in the chain metadata), you need to update it to query the new location.

## I cannot send transactions from my node-template-based chain

The API always injects the default type definitions as specified by the Substrate master fully-featured node. This means that any customizations to chains needs needs to be applied as types, should there be differences in specific user-implementations.

The Substrate node-template has added customizations for some types in the default template, specifically around the `Address` and `Lookup` types, removing any lookups based on indices. This means that the transaction payload saves 2 bytes for a transfer and is an approach followed by other chains as well, notably Polkadot & Kusama.

Due to these customizations and differences that bleed through to the transaction formats, out-of-the-box chains based on the node-template will have issues when sending transactions. To fix this, you would need to add [the customized Address types into your API](types.extend.md#impact-on-extrinsics) instances (or UIs), allowing the API to have the information required to adjust the encoding.

## Using a non-current-master node, I have issues parsing events

Recently Substrate master updated the `Weight` type from `u32` -> `u64`. This type is used in the `DispatchInfo` struct in the `system.ExtrinsicSuccess` events, to return the applied call weights as well as the resulting fees. Since the API master branch tracks Substrate master, this means the change has been applied by default, with the default set to `u64`.

If you are on a chain that has not been upgraded yet, you need to add `Weight: 'u32'` to your types to allow for successful parsing of all events. Without this override, parsing will fail. As soon as one event in the `Vec<EventRecord>` structure from `system.events` fails to parse, all subsequent events are affected and the decoding will return an error.
