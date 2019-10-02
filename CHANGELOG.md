# 0.94.0-beta.x

- Adjust API cloning to take RPC filters from source into account
- Simplification of isPedantic checks and less overhead on StorageData types
- Cleanups and fixes around RPC and derive type definitions
- Adjustment of `api.derive.elections.{approvalsOf|approvalsOfAt}` to allow ss58 address input
- Add documentation for custom extrinsic formats (advanced chains)

# 0.93.1

- Support for Kusama CC2
- In extrinsic submission, use `rpc.account.nextIndex` to retrieve the nonce when available
- For TypeScript users `api.query.*.*` is now properly typed for default Substrate calls, i.e. `api.query.balances.freeBalance(...)` will return a `Balance` type. Additionally the `api.queryMulti` and `.multi` on queries not allow generic type params.
- Add `api.rpc.accounts.nextIndex`, `api.rpc.contracts.call` and `api.rpc.rpc.methods` calls. Optional calls (such as account/contracts) is decorated based on the results from `rpc.methods`, so they don't show up on nodes where they are not active.
- Updated types to support the latest Polkadot/Substrate master changes
- Support recursive type registration (self-referencing via `Box`) in addition to better sanitation of user-defined-types
- Documentation and example updates (thanks mostly to contributions)

# 0.92.1

- The API now correctly sets the ss58 prefix as retrieved from the chain properties via `ss58Format`
- Bump to `@polkadot/util` 1.4.1, removing use of `ExtError`
- The `Keyring` from `@polkadot/keyring` is now exposed on the API as well. You can do `import { Keyring } from '@polkadot/api'` - this alleviates the need for extra dependencies (apart from `@polkadot/api`), and since the keyring is critical for signing operations, aligns everything in one bundle
- Support the latest Polkadot & Substrate master branches (incl. metadata updates)
- Getting started documentation has been made available

# 0.91.1

- This release was focussed on stability, with a number of cleanups and bug-fixes
- Adjustments for Substrate 1.x chain detection (with auto-types) and Substrate 2.x support has been extended with all latest types
- The `getRuntimeVersion` and `subscribeRuntimeVersion` RPCs are now only available on the `rpc.state.*` endpoints. This aligns with the Substrate implementation.
- The `author_insertKey` RPC's last argument `publicKey` is now required, as to reflect Substrate implementation.
- Support for extrinsics with versions that is not in the base Substrate implementation (V1-V3) can now be done by providing an implementation for `ExtrinsicUnknown`
- Redeemed balance calculation if `api.derive` now returns the correct  values again (bug fix)
- added the `yarn chain:info [--ws URL]` utility to extract a calls-only metadata version
- Missing types are now logged via a `console.warn`, not via `.error`
- `Extrinsic`, `ExtrinsicPayload` & `SignerPayload` is registered in the type registry and can be overriden now
  - **Breaking change** `SignerPayload` is renamed to `SignerPayloadJSON`
  - **Breaking change** `SignerPayloadJSON`, `SignerPayloadRawBase` and `SignerPayloadRaw` are all moved to `@polkadot/types`

# 0.90.1

If you are upgrading form an older version, use the CHANGELOG hand-in-hand with the [migration guide](UPGRADING.md).

- **Breaking change** `api.rpc.chain.subscribeNewHeads` is now available as opposed to the old `subscribeNewHead`. This aligns with the Substrate implementation.
- **Breaking change** Substrate 2.x & Polkadot master has moved both `BlockNumber` & `Index` to `u32`. The API tracks these closely. If you are running a chain with `u64` values (for either), pass the type override to the API on creation, e.g. `ApiPromise.create({ types: { BlockNumber: 'u64', Index: 'u64' } })` to avoid getting warnings about mismatched types.
- **Breaking change** `Api.create(...)` and `new Api(...)` now only takes an options Object, so if you passed the provider directly previously, you need to swap the use to `Api.create({ provider: ... })`
- **Breaking change** Runtime types have been extended and moved to definitions instead of classes
  - Primitive types for `i*` and `u*` (e.g. `u32`) are now only available in their lowercase versions. Additionally `Vector` is now only available as `Vec`, and `Method` has been renamed to `Call`, in both cases aligning with Rust.
  - `Moment` now implements as `u64` as per the Substrate codebase. (It it up to the user to interpret, for substrate 2.x it is not ms resolution)
  - For creation of types, it is recommended to use `createType(<TypeName>, <value>)` instead of e.g. `new Proposal(...)`. When passing these to methods/queries, construction should not be needed, the raw value can be passed.
  - For moved types, a previous import would have been from `@polkadot/types`, i.e. `import { SetIndex } from '@polkadot/types`, now just the interfaces (TypeScript) are available via `import { SetIndex } from '@polkadot/types/interfaces`
  - `usize` is now a blacklisted type that will throw on construction. Since it is platform-specific, it creates incompatibilities between native (generally `u64`) and WASM (always `u32`) code. Use one of the `u32` or `u64` types explicitly.
- Support substrate v7 metadata
- The `Method.findFunction(callIndex)` (allowing decoding of raw data), is now available on `api.findCall(callIndex)`. To keep backwards compatibility, it is still available on `GenericCall.findMethod` but the `api.findCall` is recommended and suggested.
- The `types/codec/createType` has been moved to `types/codec/create` with the same exports. If you explicitly imported from here (and not doing the suggested `import { createType } from '@polkadot/types`), the reference needs to be updated


# 0.82.0-beta.x

- Support for substrate 2.x (master) has been extended,
  - Additional types have been addedd for the modules
  - `api.derive.contract` is now `api.derive.contracts` to align with the substrate 2.x rename. (Feture detection is used so it supports both 1.x and 2.x chains)
  - Addition of `api.derive.elections`

- Support latest substrate 2 v6 metadata with module constants using `api.consts`.
  - The api now uses the module name for the storage methods, aligning module names for consistency with transactions. The methods of the grandpa module moved from `api.query.grandpaFinality` to `api.query.grandpa`.
  - Internally the `@polkadot/extrinsics` and `@polkadot/storage` have been moved to `@polkadot/api-metadata` and are now accessible as `@polkadot/api-metadata/extrinsics` and `@polkadot/api-metadata/storage`, respectively.
  - **Breaking Change** Vote interface extends U8a instead of i8. Vote properties can be accessed via the `isAye`, `isNay`, and `conviction` getters. Votes can still be constructed as before with a raw JS boolean, a SCALE encoded Boolean, an i8 number, or a JS object with properties `aye` and `conviction` defined.

- Support V2 Extrinsics in addition to V1, v2 includes an optional `tip`
  - In addition to this support, the `Signer` interface has deprecated the `sign` method and replaced it with `signPayload`
  - Support for the `sign` interfaces (API detection and calling when `signPayload` is not available) will be removed in subsequent versions.

- The `ContractsAbi` type has been moved from `@polkadot/types` to `import { Abi } from '@polkadot/api-contract`. This paves the way for an enhanced contracts interface, instead of dealing with low-level API calls.


# 0.81.1

- The dependency on `@polkadot/keyring` has been removed - if you relied on the API to provide this, you would now need to manually add it
- `createType` allows for the creation of `[u8; <length>]` types (opening the door for contract support)
- `api.derive.staking.info` now returns the `rewardDestination`
- Fix for disconnection when default providers (non-specified) are used
- Don't console.log type decoding errors and then throw, only re-throw with additional info
- Support latest substrate 2.x v5 metadata
  - Add `ApprovalFlag`, `SetIndex`, `VoterInfo` types for council as per substrate
  - Update `ContractInfo` to match substrate master

- Add support for new inherent digests from substrate.
  - **Breaking change** Because of the new `Seal`, the old/new Seals are not compatible. If you were using the old `Seal` from the `Digest`s, you would now use `isSealV0` for the pre-substrate 1.0 version and the new `isSeal` for the current version
  - Update `HeaderExtended` to retrieve author information from substrate 2.x (new `PreRuntime` digests)

- Cater for `Vec`, `Option`, `Result`, tuples and fixed vectors for contracts ABIs
- Additional examples for subscriptions using multi
- Add `off` method to `Api` (Base, for both `ApiPromise` & `ApiRx`) to remove an event listener


# 0.80.1

- Support for mortal transactions
- Better DoubleMap storage support
- api-derive cleanups, including additional info for balances.all and taking.info returning redeemable and locked balances
- Added SignaturePayloadRaw for better offline signing support
- Updated metadata for current substrate master
- Misc. cleanups and fixes


# 0.79.1

- DoubleMap query support
- Support latest EventRecord metadata (substrate master)
- Introduce RuntimeVersion type overrides in api/nodeCompat.ts
- Add `api.queryMulti` and `api.query.<module>.<method>.multi`
- Convert `api.derive.*` to use multi queries
- `types/codec/Set` now extends the base JS `Set` (**breaking change**: `set.values` -> `set.strings`)
- Breaking: rename `meta.arguments` to `meta.args` in function metadata (`arguments` is a JS reserved word)
- Add `toRawType` on all type classes (breakdown into primitive types)


# 0.78.1

- Fix linked-maps (not working since 0.77.1)
- Convert Usize to U32 (as found in WASM environments)
- Allow pre-bundled metadata in API create & constructor
- Don't clobber existing keys in structs when auto-adding fields
- Additional logging when constructing Structs as to where failures occur
- Do type assertion on all exposed asXXX getters
- Metadata updates for substrate (WithdrawReasons, ContractInfo)


# 0.77.1

- Support Metadata v4, which introduces the use of a custom hasher to hash storage map keys.
- Add TreasuryProposal (not the same as democracy, type aliased)


# 0.76.1

- Caching improvements (duplicate queries, no duplicate subscriptions)
- Experimental contract API
- Update @polkadot/keyring to enable Alice's stash account on dev chains
- Update @polkadot/util-crypto with smaller footprint


# 0.75.1

- Start journey to 1.0


# 0.53.1

- Change spelling to US English as per substrate master (1.0-rc1). Breaking changes as a result:
  - For extrinsic status results, if you have checked the type returns, i.e. `result.type === 'Finalised'` now check on the status for `result.status.isFinalized` or `result.status.isBroadcast`, ... (the `type` property is now accessible only on `result.status.type`)
  - If using `subscribeFinalisedHeads` update this to `subscribeFinalizedHeads` (likewise `getFinalisedHead` should be updated to `getFinalizedHead` and `derive.bestNumberFinalized`)

- The underlying ss58 address checksums have changed
  - The updated keyring with support for this has been made available
  - All examples have been updated with sr25519 addresses (with the new checksums)


# 0.52.1

- Support queries to linked mapped storage (found in new staking interfaces)
- Add `derive.staking.controllers` to retrieve all active staking controllers
- Align types as per latest substrate master
- PeerInfo from system_peers does not have the index field anymore (dropped in substrate)
- Allow parsing of V3 metadata with DoubleMap support
- Check for single instances for api and types as they are loaded (assertSingletonPackage)


# 0.51.1

- Support metadata V2 as per latest substrate master
- Update metadata with new types as per latest substrate master


# 0.50.1

- Latest util-crypto (usage of WASM with JS fallbacks if not available)
- Update upstream @polkadot dependencies (for new crypto)


# 0.49.1

- Fix large message signing on non-known nodes (default is now hashing, there has been enough time between upgrades)


# 0.48.1

- Pull in new sr25519 capable keyring for dev nodes
- When using dev mode, it assumes that the node is the latest with derived sr25519 keys


# 0.47.1

- Swap to publishing -beta.x on merge (non-breaking testing)


# 0.46.1

- Extended type registration to now handle internal types as well. Additionally the built-in Extrinsic type can now we overridden with a custom version.
- Where `Extrinsic` and `Method` is used as types, consider importing `{ IMethod, IExtrinsic }` from `@polkadot/types/types`, especially in the cases where this is used from a `SubmittableExtrinsic`
- The `typeRegistry` constant is now `getTypeRegistry()` as a function


# 0.45.1

- Storage with option values now correctly return `Option<Type>` and is indicated as such in the documentation

```js
// old
const ll = await api.query.session.lastLengthChange();

console.log('ll', ll /* BlockNumber */); // would be 0 if not set yet

// new
const llo = await api.query.session.lastLengthChange();

console.log('llo', llo.unwrapOr('not set') /* Option<BlockNumber> */)
```


# 0.44.1

- Split primitives and types into separate folders. This should not affect external use since the exports remain the same, however does have an impact where classes are referenced directly. e.g.

```js
// old (affected)
import Method from '@polkadot/types/Method';
import Signature from '@polkadot/types/Signature';

// new locations
import Method from '@polkadot/types/primitive/Method';
import Signature from '@polkadot/types/type/Signature';

// unaffected
import { Method, Signature } from '@polkadot/types';
```


# 0.43.1

- Introduces support for the new keyring with sr25519 support in addition to ed25519. While this does not change the exposed API, it is considered breaking since @polkadot/keyring has interface changes. (Unless needed, don't rush the upgrade)


# 0.42.1

- Support for substrate hash signing with implVersion >= 18
- Changed signatures for Extrinsic signing, this should not have (much) of an impact since it is generally not used directly. SubmittableExtrinsic (as exposed by the API), supports the old-style use.


# 0.41.1

- Support the V1 metadata specification from Substrate in addition to the currently testnet active V0 version


# 0.40.1

- The API interfaces now require a WS-compatible provider, e.g. subscription support is a must. Previously the HTTPProvider could be use (although it was very limited in the interactions).


# 0.39.1

- The Promise API now returns a `Promise<UnsubFunction>` instead of `UnsubFunction` when making subscriptions.


# 0.38.1

Substrate has been updated with a breaking new transaction format where the Index/Nonce is now encoded as a Compact. This change is being rolled out to both Alexander (Polkadot testnet) as well as Charred Cherry (Substrate testnet) - transactions between old and new are not compatible.


# 0.37.1

api-observable has been removed. This was only used in /apps and inconsistent with the api/rx and api/promise APIs. Future work will include derives like was included in api-observable into the base.

Tuples now return single types when only one type is available, i.e. `(AccountId)` would now resolve as `AccountId`. The extra type wrapper adds no benefit to users here.


# 0.36.1

Api Promise has been updated in the way we deal with subscriptions. Previously a subscription returned `Promise<number>` where the caller was to keep track of the id and use it in subsequent unsubscribes. Now any subscriptions return an unsubscribe/destroy function `(): void`, that is use for removing the subscriptions, e.g.

```js
const unsubscribe = api.query.balance.freeBalance(Alice, (balance) => {...});

unsubscribe(); // here we destroy the subscription
```


# 0.35.1

Swapped to new metadata structures from Substrate. If the API is not working with your node, update Substrate to latest master branch. (Or 0.9.1 for Charred Cherry). Dropped support for old metadata as found as far back as BBQ Birch.


# 0.34.1

Changed the send signature (for future expansion of eg. events) to return `result: { status: ExtrinsicStatus }` instead of `status: ExtrinsicStatus`. For most cases where only status `type` checks are used, i.e. `status.type === 'Finalised'` this should not be a breaking change. Deep inspection of the status object however will need to adapt.
