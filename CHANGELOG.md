# 1.8.1 Mar 22, 2020

- **Breaking change** The format for any custom RPCs have been changed alongside API-internal changes to allow for better RPC management. If you are currently using custom RPCs (or planning to do so), look at the [updated documentation](https://polkadot.js.org/api/start/rpc.custom.html)
- **Breaking change** Alongside API RPC changes, the `@polkadot/jsonrpc` package has been removed. Since it was never documented and only used internally, this should not have adverse impacts. All RPC definitions itself has now been moved to the relevant modules inside `@polkadot/types/interfaces`
- **Important** Substrate has an updated democracy module. If using an older chain add the `ReferendumInfo: 'ReferendumInfoTo239'` type when using referendums
- The `isRetracted` Extrinsic status is now a warning, not a fatal error, correctly aligning with Polkadot/Substrate
- The Substrate extrinsic phase definitions has been expanded with `Initialization` to align with the latest versions
- Add support for all known substrate RPC methods
- Extend account derives to include status flags, e.g. `isCouncil`, `isSudo`, ...
- Adjusted referendum derives to cater for bot new/old democracy. Derived `referendumInfo` now includes `status` field, not `info`

# 1.7.1 Mar 17, 2020

- **Important** Current versions of Polkadot/Substrate have dropped support for linked maps on storage entries. If you are using these queries to retrieve all entries, for instance `staking.{nominators,validators}()` and using an upgraded chain, you need to swap to retrieving entries via `.entries()` or `.keys()` for the keys.
- Pull in support and types for latest Polkadot/Substrate
- Add support for the new Substrate `state_getKeysPaged` RPC, including use in storage keys
- Move `derive.staking.controllers` to `derive.staking.stashes`, reflecting actual content
- Cater for adjusted storage (non-linked mapped) for `derive.staking.stashes` queries (with old-compat)
- Expanded `derive.staking.*` derives, including addition of `derive.staking.own*`
- Re-add fixed (with tests) checks for query args, previously disabled in 1.6.2

# 1.6.2 Mar 12, 2020

- Revert checks for query args, not working on `.at()` queries (proper fix in next version)

# 1.6.1 Mar 12, 2020

- **Breaking change** `api.rpc.state.queryStorage(...)` now fully decodes the `Vec<StorageChangeSet>` and returns a decoded `[Hash, Codec[]][]` when using this RPC.
- `StorageKey` now has an `.args` property, decoded from meta where `twox64_concat` or `blake128_concat` are used on maps
- Fix `api.query.*.*.entries` type conversions to return exact types (not `Option` in some cases)
- Add `api.query.*.*.keys` to retrieve only the storage keys, similar to `.entries`
- Full linked map retrievals will now use direct getStorage queries for faster operation
- Underlying rpc-core interfaces now unwraps `Error("...")` when found in responses
- Added `derive.eras*` interfaces for queries to new Substrate staking interfaces
- Update `derive.account` to cater for new indices module storage (detected with fallbacks)
- Adjust derive queries for session without module prefix (DoubleMap -> Map), detected on use
- Add runtime validation for map arguments to `api.query.*`
- TypeScript interfaces for linked maps now correctly generates as `[Type, Linkage<Next>]`

# 1.5.1 Mar 06, 2020

- **Important** Substrate master has updated staking, on older chains supply `StakingLedger: 'StakingLedgerTo223'`
- **Important** Substrate master has updated collective, on older chains supply `Votes: 'VotesTo230'`
- Add proper support for type generation with an Enum containing an Tuple (Thanks to https://github.com/monitz87)
- Fix storage parsing not resulting in rejected Promises (Fix from https://github.com/aniiantt applied)
- Remove use of deprecated `Observable.create` (Thanks to https://github.com/Himself65)
- Add types & metadata for the latest Polkadot/Substrate runtime versions (master branches)
- Type extraction will now allow the same sub-module name across packages, i.e. `@polkadot/types/interfaces/runtime` & `@mine/interfaces/runtime` will be valid
- Add `.range([from, to]: [Hash, Hash?], ...args: any[]): [Hash, Codec][]` on all storage entries
- Add `.raw(...args: any[]): Promise<Uint8Array & Codec>` to all RPC calls, returning the un-encoded result
- Allow pre-module type aliasing with `typesAlias: { <moduleName>: { <meta-type>: <alias-type> } }` in API construction options
- Allow `BTreeMap` to be initialized with a `Record<string, any>` object (in addition to `Map`)
- Allow for `HashMap<KeyType, ValueType>` definitions
- `Bool` will now correctly return `isEmpty` on false/default values
- Refresh the `NetworkState` types as returned by the `rpc.system.networkState()` call to current
- Expose `registry.createClass(<typeName>)` to allow for creating type classes. If you are using `createClass` or `ClassOf` in your code, it is recommended to swap to this instance.
- Add additional derives to `api.derive.staking` to handle lazy-payout retrievals
- Update `@polkadot/{util, util-crypto, keyring}` to 1.6.1 & `@polkadot/wasm` to 1.2.1

# 1.4.2 Feb 27, 2020

- Fix `api.tx(<extrinsic>): Submittable` decoration (non-working in 1.4.1, now with proper test)

# 1.4.1 Feb 26, 2020

- **Breaking change** (TypeScript only) The `*.d.ts` files now contain TypeScript 3.8 features (specifically `#private`), which is not usable in TS versions < 3.8
- **Breaking change** - `api.derive.staking.*` has updated result types and detects support for lazy payouts queries
- Rework type generation for `api.{query, tx}` to properly handle complex type inputs (Thanks to https://github.com/monitz87)
- Rework metadata `--strict` mode to effectively decorate chain metadata (Thanks to https://github.com/monitz87)
- Add `api.rpc.chain.subscribeAllHeads` (not just best) (Thanks to https://github.com/jak-pan)
- Add `api.rpc.engine.*` for manual seal support
- Add `api.injectMetadata(metadata)` to initialize API with a specific metadata version
- The api now checks for runtime upgrades, augmenting the interfaces with new metadata when found
- Support types & interfaces required for lazy reaping, lazy payouts & offchain phragmen
- `Option` types now has an `.unwrapOrDefault` as an complement to `.unwrap` & `.unwrapOr`
- Support JS `BigInt` inputs in any derived `UInt` and `Int` object, e.g. `api.tx.balances.transfer(..., 9876543210123456789n)`
- `UInt` & `Int` now does source bitLength checks upon construction
- Registry now exposes `.createType(<type>, ...args)` as an additional helper (like the API)
- Expand `.toHuman` on `ExtrinsicEra`, `SubmittableResult` & `Vote`
- Move `DigestItem`, `Fixed64`, `H160`, `H256` & `H512` to interfaces in `@polkadot/types/interfaces`
- Align construction of unknown types in `registry.get` consistently warn on detection, throw on use
- Support for arbitrary `u*`` types via `UInt<bitLength>` type definitions
- Expose static `.with` on `UInt`, `Int` & `U8aFixed` classes with optional type name override
- Remove [11 Jan 2019](https://github.com/polkadot-js/api/issues/574) extrinsic length hack
- Use ES `#field` on private class fields as applicable
- Move `types/primitive/{extrinsics, generic}` to `types/{extrinsics, generic}`
- Cleanup augmentation and generation scripts for type definitions, aligning with api augmentation
- Bump to `@polkadot/{util, util-crypto, keyring}` 2.5.1

# 1.3.1 Feb 18, 2020

- Add `@types/bn.js` as a normal dependency, exposed in `*.d.ts` (Thanks to https://github.com/monitz87)
- Type generation scripts (including `polkadot-types-from-{chain,defs}`) has been moved to the `@polkadot/typegen` package
- The `@polkadot/types/codec/create` has been moved to `@polkadot/types/create`, imports from `@polkadot/types` are unaffected
- Expose chain properties on registry (and use for API type formatting)
- Add `toHuman(isExtended?: boolean)` to all codec types, formatting into a human-readable structure

# 1.2.1 Feb 16, 2020

- **Important** Update RPC status codes (latest Substrate 2), with the `isInBlock` (`isFinalized` now indicates finality)
- Storage `.entries(arg?: any)` now has the correct argument type for DoubleMap (Thanks to https://github.com/monitz87)
- Swap Kusama and Polkadot aliases for `Address` to `AccountId` (future update)
- Add `LookupSource` and `LookupTarget` types instead of mapping these directly for aliasing
- Add `BitVec` type primitive
- Add support for `system.account` for balance & nonce queries in derives as well as Submittables (Substrate composites)
- Add `rpc.author.hasKey` and `rpc.author.hasSessionKeys` RPCs
- Add derives for the parachains interfaces
- Applied the latest types for Polkadot parachains
- `registry.findMetaError` now can take in a `DispatchErrorModule` object for error lookups (from `asModule` in `DispatchError`)
- Metadata now correctly serializes to the original input data via `toHex()` & `toU8a()`
- Metadata documentation generation rework, including the output of errors from metadata
- Update all examples and comments to use latest `system.account` queries (instead of `system.accountNonce` and `balances.freeBalance`/`balances.reservedBalance`)
- Cleanup `codec/Date` tests to make it run properly on all timezones
- Add explicit dependencies to all packages and move TypeScript `@types/*` to dev deps

# 1.1.1 Feb 06, 2020

- **Important** Chains without `balances.account` or `system.account` should supply `"BalanceLock": "BalanceLockTo212"` to their types to use the previous-generation `BalanceLock` (when querying locks)
- Add support for `balances.account` in all applicable derives (incl. `vesting` module)
- Inject and use SignedExtensions by name from V11 metadata (V4 extrinsics only)
- Add typings for `api.tx.*.*` - the `polkadot-types-from-chain` now also generates these
- Remove additional V1-only derives `(staking.recentlyOffline`, `balances.nominatorsFor`)
- Add `.isMax()` on int values, an opposite of `isZero()` (e.g. `u128`, as well as derived, e.g. `Balances`)
- Add `.keyPrefix()` to all `api.query.*` complementing the `.key()` call, both returning a hex string
- Council derives now takes bootstrapping (member, no elections) into account
- Account derives now allow for an optional indices module (not required)
- Adjust balances fees derivation with optional transfer and creation fees (removed in Substrate)
- Adjust enum `.toJSON()` to return type name as specified

# 1.0.1 Jan 30, 2020

- **Breaking change** Drop support for Substrate v1 chain in all derives
- Return unsub functions from provider .on emitters (Thanks to https://github.com/jak-pan)
- `ApiPromise.isReady` now rejects on unrecoverable errors (Thanks to https://github.com/laec)
- Add `polkadot-types-from-chain` & `polkadot-types-from-defs` TypeScript generators to `@polkadot/types`
- Only decorate derives where relevant parent `api.query.*` is available
- Support `.entries(arg?: any)` lookups on DoubleMaps (in addition to previously supported maps)
- Allow v9 metadata to parse even in cases where it was wrongly deployed pre-v10
- Allow type-aliases on a per-module basis (e.g. `Judgement` in identity as well as society)
- Allow passing `{ signer }` to both `api.tx.*` and `api.sign` (in addition to `api.setSigner`)
- Add derives for the society module
- Don't map empty tuples, e.g. `()` to `Null`, rather keep them empty
- Add lookups to the metadata errors via `findMetaError`
- Update metadata and types for the latest Substrate & Polkadot versions
- Support metadata V11 as per latest Substrate
- Remove support for un-deployed metadata
- Remove old known types for Substrate V1

# 0.100.1 Jan 13, 2020

- **Important** This will the the last API version with Substrate 1.x support. Although you will still be able to use subsequent versions with older chains, dependent libraries such as sr25519 may not be compatible.
- Add support for the Substrate identity module
- Remove the `codec/Data` type, to remove a conflict with Substrate. This type is now named `Raw`
- Fix for linked maps using `Option`
- Add support for `BTreeSet` (Thanks to https://github.com/satellitex)
- Add support for Metadata v10
- Add support for latest Polkadot/Substrate types
- Add `paymentInfo` to submittables to calculate fees

# 0.99.1 Dec 13, 2019

- **Breaking change** The `Data` and `U8a` type has been renamed and just replaced with the `Raw` type
- **Breaking change** The `api.derive.staking.info` has been split into 2 - `staking.query` for non-balance related information (more effective) and `staking.account` that enhances query for all the information previously found `.info`
- Cleanup `DoubleMap` hashing to always hash over the full value (in the case of `Vec<T>`, this includes the length)
- Update democracy derives to take care of nextTally and lowestUnbaked
- Add additional derives for both council & treasury
- Alignment with latest Polkadot/Substrate master branch types

# 0.98.1 Dec 04, 2019

- Make the TypeScript generation script mor re-usable (Thanks to https://github.com/xlc)
- Add `.entries()` for all map-types, returning storage keys and values
- Add `.signAsync` to submittable extrinsics (Thanks to https://github.com/c410-f3r)
- Cleanup circular references between internal dependencies
- Support for new Substrate democracy with preimages in derive
- Alignment of types with Substrate/Polkadot master branches

# 0.97.1 Nov 29, 2019

- **Breaking change** Add the passing on an explicit `Registry` to all calls to `createType` as well as all codec classes. If you are upgrading form an older version, use the [migration guide](UPGRADING.md) to walk through the changes required.
- **Breaking change** The metadata classes have been moved from `@polkadot/types` into `@polkadot/metadata`. If you explicitly create `Metadata` classes, you now would need to do so with the `import Metadata from '@polkadot/metadata';` This is a decorated class, where the previous metadata is now available on `Metadata.metadata`, alongside decorated `consts.*`', `tx.*` and `query.*`.
- **Breaking change** Session `Keys` defaults to 4 keys now (Substrate master), depending on your node config, you would want to override with e.g. `Keys: 'SessionKeys3'` (1, 2, 3, 4, 5 & 6)
- **Breaking change** `ValidatorPrefs` now default to the new percentage commission model, to use the previous `validatorPayment`, you can override with `ValidatorPrefs: 'ValidatorPrefsTo196'`
- `api.derive.*` now has built-in memomization
- Various fixes and cleanups to `api.derive.*` including era length progress and vesting calculations
- Aligned all types with the latest Polkadot & Substrate, including Kusama CC3
- Support for Metadata V9, which adjusts the hashing methods of storage entries
- Support for Metadata V10 (still un-released), which includes prefixed map support

# 0.96.1 Nov 09, 2019

- Updated types for latest Kusama
- Add `filterRecords` (in addition to `findRecord`) on submittable results
- Various ABI v2 contract fixes
- Update derive for elections (incl. RunnersUp) and heartbeat derives (with blocks & messages)
- Add vesting totals & locked breakdowns to derive balances
- Update council derives for the latest Substrate master support (with constants)
- Derive cleanups, including sharing of instances between the API and internal to derives

# 0.95.2 Oct 25, 2019

- Temporary removal of `account_nextIndex` use, will be re-added in a future release

# 0.95.1 Oct 25, 2019

- Support Extrinsic V4 with additional signature indicator (Latest Polkadot/Substrate/Kusama)
- Adjust subscription update checks to avoid duplicated data updates
- Support Metadata V8 (exposes per-module `decl_error` definitions)
- Support next generation contracts ABI (with additional type definitions)
- Support for `BTreeMap<K, V>` types and definitions
- All latest Polkadot & Substrate types (as per master branches)
- **Breaking change** `Call.injectMethods` is moved to `Call.injectMetadata` to align with `Events` (This _should_ not be used externally, however mentioned as breaking here)

# 0.94.1 Oct 07, 2019

- Add handling of `Result<Ok, Error>` definitions
- Adjust API cloning now takes RPC filters from source into account
- Simplification of isPedantic checks and less overhead on StorageData types
- Cleanups and fixes around RPC and derive type definitions
- Fix `derive.imOnline.receivedHeartbeats` to query via indexes
- Adjustment of `api.derive.elections.{approvalsOf|approvalsOfAt}` to allow ss58 address input
- Cleanup `Enum` `.eq` handling to be more exhaustive
- Add documentation for custom extrinsic formats (advanced chains)
- Update to latest substrate master metadata

# 0.93.1 Sep 26, 2019

- Support for Kusama CC2
- In extrinsic submission, use `rpc.account.nextIndex` to retrieve the nonce when available
- For TypeScript users `api.query.*.*` is now properly typed for default Substrate calls, i.e. `api.query.balances.freeBalance(...)` will return a `Balance` type. Additionally the `api.queryMulti` and `.multi` on queries not allow generic type params.
- Add `api.rpc.accounts.nextIndex`, `api.rpc.contracts.call` and `api.rpc.rpc.methods` calls. Optional calls (such as account/contracts) is decorated based on the results from `rpc.methods`, so they don't show up on nodes where they are not active.
- Updated types to support the latest Polkadot/Substrate master changes
- Support recursive type registration (self-referencing via `Box`) in addition to better sanitation of user-defined-types
- Documentation and example updates (thanks mostly to contributions)

# 0.92.1 Sep 12, 2019

- The API now correctly sets the ss58 prefix as retrieved from the chain properties via `ss58Format`
- Bump to `@polkadot/util` 1.4.1, removing use of `ExtError`
- The `Keyring` from `@polkadot/keyring` is now exposed on the API as well. You can do `import { Keyring } from '@polkadot/api'` - this alleviates the need for extra dependencies (apart from `@polkadot/api`), and since the keyring is critical for signing operations, aligns everything in one bundle
- Support the latest Polkadot & Substrate master branches (incl. metadata updates)
- Getting started documentation has been made available

# 0.91.1 Sep 09, 2019

- This release was focussed on stability, with a number of cleanups and bug-fixes
- Adjustments for Substrate 1.x chain detection (with auto-types) and Substrate 2.x support has been extended with all latest types
- The `getRuntimeVersion` and `subscribeRuntimeVersion` RPCs are now only available on the `rpc.state.*` endpoints. This aligns with the Substrate implementation.
- The `author_insertKey` RPC's last argument `publicKey` is now required, as to reflect Substrate implementation.
- Support for extrinsics with versions that is not in the base Substrate implementation (V1-V3) can now be done by providing an implementation for `ExtrinsicUnknown`
- Redeemed balance calculation if `api.derive` now returns the correct  values again (bug fix)
- added the `yarn chain:info [--ws URL]` utility to extract a calls-only metadata version
- Missing types are now logged via a `console.warn`, not via `.error`
- `Extrinsic`, `ExtrinsicPayload` & `SignerPayload` is registered in the type registry and can be overridden now
  - **Breaking change** `SignerPayload` is renamed to `SignerPayloadJSON`
  - **Breaking change** `SignerPayloadJSON`, `SignerPayloadRawBase` and `SignerPayloadRaw` are all moved to `@polkadot/types`

# 0.90.1 Aug 24, 2019

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


# 0.82.0-beta.x Jul 28, 2019

- Support for substrate 2.x (master) has been extended,
  - Additional types have been addedd for the modules
  - `api.derive.contract` is now `api.derive.contracts` to align with the substrate 2.x rename. (Feature detection is used so it supports both 1.x and 2.x chains)
  - Addition of `api.derive.elections`

- Support latest substrate 2 v6 metadata with module constants using `api.consts`.
  - The api now uses the module name for the storage methods, aligning module names for consistency with transactions. The methods of the grandpa module moved from `api.query.grandpaFinality` to `api.query.grandpa`.
  - Internally the `@polkadot/extrinsics` and `@polkadot/storage` have been moved to `@polkadot/api-metadata` and are now accessible as `@polkadot/api-metadata/extrinsics` and `@polkadot/api-metadata/storage`, respectively.
  - **Breaking Change** Vote interface extends U8a instead of i8. Vote properties can be accessed via the `isAye`, `isNay`, and `conviction` getters. Votes can still be constructed as before with a raw JS boolean, a SCALE encoded Boolean, an i8 number, or a JS object with properties `aye` and `conviction` defined.

- Support V2 Extrinsics in addition to V1, v2 includes an optional `tip`
  - In addition to this support, the `Signer` interface has deprecated the `sign` method and replaced it with `signPayload`
  - Support for the `sign` interfaces (API detection and calling when `signPayload` is not available) will be removed in subsequent versions.

- The `ContractsAbi` type has been moved from `@polkadot/types` to `import { Abi } from '@polkadot/api-contract`. This paves the way for an enhanced contracts interface, instead of dealing with low-level API calls.


# 0.81.1 Jun 14, 2019

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


# 0.80.1 Jun 04, 2019

- Support for mortal transactions
- Better DoubleMap storage support
- api-derive cleanups, including additional info for balances.all and taking.info returning redeemable and locked balances
- Added SignaturePayloadRaw for better offline signing support
- Updated metadata for current substrate master
- Misc. cleanups and fixes


# 0.79.1 May 22, 2019

- DoubleMap query support
- Support latest EventRecord metadata (substrate master)
- Introduce RuntimeVersion type overrides in api/nodeCompat.ts
- Add `api.queryMulti` and `api.query.<module>.<method>.multi`
- Convert `api.derive.*` to use multi queries
- `types/codec/Set` now extends the base JS `Set` (**breaking change**: `set.values` -> `set.strings`)
- Breaking: rename `meta.arguments` to `meta.args` in function metadata (`arguments` is a JS reserved word)
- Add `toRawType` on all type classes (breakdown into primitive types)


# 0.78.1 May 08, 2019

- Fix linked-maps (not working since 0.77.1)
- Convert Usize to U32 (as found in WASM environments)
- Allow pre-bundled metadata in API create & constructor
- Don't clobber existing keys in structs when auto-adding fields
- Additional logging when constructing Structs as to where failures occur
- Do type assertion on all exposed asXXX getters
- Metadata updates for substrate (WithdrawReasons, ContractInfo)


# 0.77.1 Apr 25, 2019

- Support Metadata v4, which introduces the use of a custom hasher to hash storage map keys.
- Add TreasuryProposal (not the same as democracy, type aliased)


# 0.76.1 Apr 03, 2019

- Caching improvements (duplicate queries, no duplicate subscriptions)
- Experimental contract API
- Update @polkadot/keyring to enable Alice's stash account on dev chains
- Update @polkadot/util-crypto with smaller footprint


# 0.75.1 Mar 29, 2019

- Start journey to 1.0


# 0.53.1 Mar 29, 2019

- Change spelling to US English as per substrate master (1.0-rc1). Breaking changes as a result:
  - For extrinsic status results, if you have checked the type returns, i.e. `result.type === 'Finalised'` now check on the status for `result.status.isFinalized` or `result.status.isBroadcast`, ... (the `type` property is now accessible only on `result.status.type`)
  - If using `subscribeFinalisedHeads` update this to `subscribeFinalizedHeads` (likewise `getFinalisedHead` should be updated to `getFinalizedHead` and `derive.bestNumberFinalized`)

- The underlying ss58 address checksums have changed
  - The updated keyring with support for this has been made available
  - All examples have been updated with sr25519 addresses (with the new checksums)


# 0.52.1 Mar 28, 2019

- Support queries to linked mapped storage (found in new staking interfaces)
- Add `derive.staking.controllers` to retrieve all active staking controllers
- Align types as per latest substrate master
- PeerInfo from system_peers does not have the index field anymore (dropped in substrate)
- Allow parsing of V3 metadata with DoubleMap support
- Check for single instances for api and types as they are loaded (assertSingletonPackage)


# 0.51.1 Mar 25, 2019

- Support metadata V2 as per latest substrate master
- Update metadata with new types as per latest substrate master


# 0.50.1 Mar 23, 2019

- Latest util-crypto (usage of WASM with JS fallbacks if not available)
- Update upstream @polkadot dependencies (for new crypto)


# 0.49.1 Mar 20, 2019

- Fix large message signing on non-known nodes (default is now hashing, there has been enough time between upgrades)


# 0.48.1 Mar 18, 2019

- Pull in new sr25519 capable keyring for dev nodes
- When using dev mode, it assumes that the node is the latest with derived sr25519 keys


# 0.47.1 Mar 14, 2019

- Swap to publishing -beta.x on merge (non-breaking testing)


# 0.46.1 Mar 01, 2019

- Extended type registration to now handle internal types as well. Additionally the built-in Extrinsic type can now we overridden with a custom version.
- Where `Extrinsic` and `Method` is used as types, consider importing `{ IMethod, IExtrinsic }` from `@polkadot/types/types`, especially in the cases where this is used from a `SubmittableExtrinsic`
- The `typeRegistry` constant is now `getTypeRegistry()` as a function


# 0.45.1 Feb 19, 2019

- Storage with option values now correctly return `Option<Type>` and is indicated as such in the documentation

```js
// old
const ll = await api.query.session.lastLengthChange();

console.log('ll', ll /* BlockNumber */); // would be 0 if not set yet

// new
const llo = await api.query.session.lastLengthChange();

console.log('llo', llo.unwrapOr('not set') /* Option<BlockNumber> */)
```


# 0.44.1 Feb 19, 2019

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


# 0.43.1 Feb 14, 2019

- Introduces support for the new keyring with sr25519 support in addition to ed25519. While this does not change the exposed API, it is considered breaking since @polkadot/keyring has interface changes. (Unless needed, don't rush the upgrade)


# 0.42.1 Jan 31, 2019

- Support for substrate hash signing with implVersion >= 18
- Changed signatures for Extrinsic signing, this should not have (much) of an impact since it is generally not used directly. SubmittableExtrinsic (as exposed by the API), supports the old-style use.


# 0.41.1 Jan 26, 2019

- Support the V1 metadata specification from Substrate in addition to the currently testnet active V0 version


# 0.40.1 Jan 16, 2019

- The API interfaces now require a WS-compatible provider, e.g. subscription support is a must. Previously the HTTPProvider could be use (although it was very limited in the interactions).


# 0.39.1 Jan 11, 2019

- The Promise API now returns a `Promise<UnsubFunction>` instead of `UnsubFunction` when making subscriptions.


# 0.38.1 Jan 08, 2019

Substrate has been updated with a breaking new transaction format where the Index/Nonce is now encoded as a Compact. This change is being rolled out to both Alexander (Polkadot testnet) as well as Charred Cherry (Substrate testnet) - transactions between old and new are not compatible.


# 0.37.1 Jan 04, 2019

api-observable has been removed. This was only used in /apps and inconsistent with the api/rx and api/promise APIs. Future work will include derives like was included in api-observable into the base.

Tuples now return single types when only one type is available, i.e. `(AccountId)` would now resolve as `AccountId`. The extra type wrapper adds no benefit to users here.


# 0.36.1 Jan 03, 2019

Api Promise has been updated in the way we deal with subscriptions. Previously a subscription returned `Promise<number>` where the caller was to keep track of the id and use it in subsequent unsubscribes. Now any subscriptions return an unsubscribe/destroy function `(): void`, that is use for removing the subscriptions, e.g.

```js
const unsubscribe = api.query.balance.freeBalance(Alice, (balance) => {...});

unsubscribe(); // here we destroy the subscription
```


# 0.35.1 Dec 20, 2018

Swapped to new metadata structures from Substrate. If the API is not working with your node, update Substrate to latest master branch. (Or 0.9.1 for Charred Cherry). Dropped support for old metadata as found as far back as BBQ Birch.


# 0.34.1 Dec 18, 2018

Changed the send signature (for future expansion of eg. events) to return `result: { status: ExtrinsicStatus }` instead of `status: ExtrinsicStatus`. For most cases where only status `type` checks are used, i.e. `status.type === 'Finalised'` this should not be a breaking change. Deep inspection of the status object however will need to adapt.

# 0.33.1 Dec 06, 2018

# 0.32.1 Nov 21, 2018

# 0.31.1 Oct 10, 2018

# 0.30.1 Sep 27, 2018

# 0.29.1 Sep 14, 2018

# 0.28.1 Aug 11, 2018

# 0.15.1 Aug 07, 2018

# 0.14.1 Jun 23, 2018

# 0.13.1 May 29, 2018

# 0.12.1 May 18, 2018

# 0.11.1 May 16, 2018

# 0.10.1 May 07, 2018

# 0.9.1 Apr 24, 2018

# 0.8.1 Mar 15, 2018

# 0.7.1 Jan 25, 2018

# 0.6.1 Dec 03, 2017

# 0.5.1 Nov 28, 2017

# 0.4.1 Nov 19, 2017

# 0.3.1 Nov 19, 2017

# 0.2.1 Nov 18, 2017
