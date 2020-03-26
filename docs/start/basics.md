# Basics & Metadata

One of the most important things to understand about the `@polkadot/api` is that most interfaces are actually generated automatically when it connects to a running node. This is quite a departure from other APIs in projects where the interfaces are static. While sounding quite scary, it actually is a powerful concept that exists in both Polkadot and Substrate chains, and allows the API to be used in environments where the chain is customized.

To unpack this, we will start with the Metadata and explain what it actually provides, since it is critical for understanding how to interact with the API and any underlying chain.

## Metadata

When the API connects to a node, one of the first things it does is to retrieve the metadata and decorate the API based on the metadata information. The metadata effectively provides data in the form of `api.<type>.<module>.<section>` that fits into one of the following categories -

- [consts](../substrate/constants.md) - All runtime constants, e.g. `api.consts.balances.existentialDeposit`. These are not functions, rather accessing the endpoint immediately yields the result as defined.
- [query](../substrate/storage.md) - All chain state, e.g. `api.query.system.account(<accountId>)`.
- [tx](../substrate/extrinsics.md) - All extrinsics, e.g. `api.tx.balances.transfer(<accountId>, <value>)`.

Additionally the metadata also provides information on [events](../substrate/events.md), these are query-able via the `api.query.system.events()` interface and also appear on transactions... both these cases are detailed later.

None of the information contained within the `api.{consts, query, tx}.<module>.<method>` endpoints are hard coded in the API. Rather everything is fully decorated by what the metadata exposes and is therefore completely dynamic. This means that when you connect to different chains, the metadata and API decoration will change and the API interfaces will reflect what is available on the chain you are connected to.

## Types

The metadata defines the calls with all the type names used in the various interfaces. At the moment (this is undergoing investigations and could improve in future versions of metadata), this also means that the types between the API and the node need to be aligned. For instance, by default Substrate defines a `BlockNumber` type as a `u32` and the API follows the Substrate defaults - if a chain has a different definitions, the API needs to be aware of this so it can actually decode (and encode) the type.

At this point just be aware of it, we will touch on types, custom chains and their impacts in a later section.

## Chain Defaults

In addition to the `api.[consts | query | tx]` detailed above, the API, upon connecting to a chain, fills in some information and makes it available directly on the API interface. These include -

- `api.genesisHash` - The genesisHash of the connected chain
- `api.runtimeMetadata` - The metadata as retrieved from the chain
- `api.runtimeVersion` - The chain runtime version (including spec/impl. versions and types)
- `api.libraryInfo` - The version of the API, i.e. `@polkadot/api v0.90.1`

## Let's do something!

Now that we have covered what the API actually exposes, it is time to [dive in and actually use what we installed earlier](create.md).
