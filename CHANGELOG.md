# CHANGELOG

## master

Changes:

- Update `EthBlock`/`EthHeader` types (as per Rust origin)
- Updated Xcm `OriginKind` enum


## 4.7.1 Apr 25, 2021

Upgrade priority: Low. Recommended for users following Substrate master.

Changes:

- Adjust Struct decoding with better error messages on invalid input objects
- Add support for new `BoundedVec` type
- Expand `Data` type (as used in identity), with all is/as getters
- Updated `Xcm` types (with Plularity)
- Adjust `DispatchError` type as per current Substrate master
- Adjusted Statemint `Proxy` type
- Remove metadata generation dependency on well-known.json (dedupe)
- Adjust WebSocket reconnection delay from 1s to 2.5s
- Revert Beefy keys addition for Westend
- Add explicit `engines` config to `package.json`
- Support for `None` in `RewardDestination`
- Align with latest substrate metadata


## 4.6.2 Apr 19, 2021

Upgrade priority: Low. Recommended for users of Kusama/Polkadot.

Changes:

- Correct Kusama/Polkadot runtime 30 session key definitions


## 4.6.1 Apr 19, 2021

Upgrade priority: Low. Recommended if used in a Node.js 15.x environment.

Changes:

- Assert keypair validity in signing operations
- Expose `internalError` on submittable results (e.g. event decoding errors)
- Simplify session derives for old/new
- Add Statemint to known types
- Add support for `rpc.beefy.subscribeJustifications`
- Update Xcm types
- Explicitly handle `isReadyOrError` with `Api.create`
- Add Kusama upgrade block for 2030


## 4.5.1 Apr 12, 2021

Upgrade priority: Low. Recommended with usage with the Rococo testnet.

Changes:

- Update parachain types as per latest Polkadot
- Cater for `Keys` with `BEEFY` session keys
- Update `Keys` injection to allow for on-chain type detection
- Add `Westend` known upgrade block for runtime 50
- Align types with latest Substrate master
- Adjust keepalive `system_health` timer


## 4.4.1 Apr 5, 2021

Upgrade priority: Low. Recommended with usage with the Rococo testnet.

Changes:

- Add `ServiceQuality` type for Cumulus
- Adjust XCM MultiLocation type (X5 to X8 junctions)
- Add Polkadot 29 upgrade block


## 4.3.1 Mar 29, 2021

Upgrade priority: Low.

Contributed:

- Fix documentation on ABI parameters (Thanks to https://github.com/vminkov)

Changes:

- Warn on usage of deprecated contract interfaces
- Update `ParaInfo` type
- Council should be optional in treasury derives
- Allow extraction of session derives indexes with no staking


## 4.2.1 Mar 22, 2021

Upgrade priority: Low. Recommended when tracking the latest updates from Substrate.

Contributed:

- Fix contract even decoding on Substrate 3 (Thanks to https://github.com/vminkov)

Changes:

- Adjust `Extender{Header, SignedBlock}` types to ensure at-block `Header` types are used
- Explicit definition for new Rococo triple refcount `AccountData` types
- Convert metadata private class fields to ES-private
- Adjust `SignedBlock` type for new `justifications` field
- Optimize society derive for multi accounts
- Bump metadata to latest substrate version


## 4.1.1 Mar 15, 2021

Upgrade priority: Low. Recommended when tracking the latest updates from Substrate.

Changes:

- Fix author extraction for last block in a session
- Expand `SignerPayload` to inject/expose custom signed extensions
- `ConsensusEngineId` formats non-Ascii engines correctly
- Allow `getBlock/Header` derives to use as-at registry (instead of latest)
- Cleanup `RpcCore` augmentation (removing TS warnings on typegen chains)
- Add upgrade block for Kusama 2029
- Ensure that type alias overrides also apply to map keys
- Check type generation against fallbacks (build-time only sanity check)
- Add `mmr_generateProof` RPC
- Align types with latest substrate master
- Apply latest Polkadot auctions/crowdloan/parachains/slots types


## 4.0.3 Mar 8, 2021

Upgrade priority: Low. Recommended if you use the API to sync the full chain, most notably Polkadot.

Contributed:

- Re-add unused historical `SudoBalances` to `ProxyType` (Thanks to https://github.com/emostov)


## 4.0.2 Mar 8, 2021

Upgrade priority: High. Required if you are using 4.0.1 in a Node.js environment.

Changes:

- Fix import from `@polkadot/x-rxjs` in Node environments (From common)
- Add correct types for `Phase` is new validator elections module


## 4.0.1 Mar 7, 2021

Upgrade priority: Low. Recommended for users wanting to keep updated with chain changes.

**Important** In the 4.0 version the default package type has been changed to ESM modules by default. This should not affect usage, however since the output formats changed, a new major version is required.

Contributed:

- Expose `unknownTypes` on the registry interface (Thanks to https://github.com/ii-ii-ii)

Changes:

- Build to ESM by default (with cjs versions via export map)
- Enum `.toSON()` now encodes all keys as `camelCase` (aligning with the output from Substrate)
- Add `createdAtHash?: Hash` to `Codec` interface (filled-in by storage retrievals)
- Expose the source hash as `wamHash` on Abi parsed instances
- Use `parentHash` when creating mortal era (handles frequent forks better)
- Add `AccountInfoWithTripleRefCount` to cater for latest Substrate
- Add upgrade block for Westend 49


## 3.11.1 Feb 28, 2021

Upgrade priority: Low. Recommended for users wanting to keep updated with chain changes.

Contributed:

- Clean Websocket states on disconnects (Thanks to https://github.com/ianhe8x)
- Support for C-like indexed enums (Thanks to https://github.com/xlc)

Changes:

- Adjust council derives to cater for current-generation candidate mapping
- Allow for override of codec hasher (& output type)
- Adjust submittables to submit hex-encoded addresses to queries
- Adjust initialization to always retrieve tx version from Metadata only
- Update election types as per latest Substrate
- Add types for the new gilt module
- Upgrade to the latest Substrate metadata
- Adjust package detection to check for local monorepo dependencies
- Ensure that metadata `.toJSON()` does apply type aliasses


## 3.10.2 Feb 23, 2021

Upgrade priority: Medium. Recommended for users of chains where `MultiAddress` is in-use and blocks are decoded.

Changes:

- Fix decoding for `MultiAddress` enum where non-`AccountId` variable-lengths are provided as part of a stream
- Added known Polkadot 28 upgrade block
- Update for latest Substrate contracts `Schedule` types


## 3.10.1 Feb 22, 2021

Upgrade priority: Low.

Changes:

- Adjust ConsumedWeight types to align with Rust module code
- Check for connection status in subscription unsubscribe
- Adjust staking reward derives ordering for better performance
- Adapt detection imports to remove `.json` dependencies (Better behavior using Node.js with ESM)


## 3.9.3 Feb 16, 2021

Upgrade priority: Low. Recommended for parachain builders since it contains the updated parachain types.

Changes:

- Adjusted parachain `PersistedValidationData` structure


## 3.9.2 Feb 15, 2021

Upgrade priority: Low. Recommended for parachain builders since it contains the latest parachain types.

Contributed:

- Update README links (Thanks to https://github.com/wirednkod)

Changes:

- Added missing Culmulus `ParachainInherentData` & `MessageQueueChain` types
- Add alias for `system_unstable_networkState` RPC


## 3.9.1 Feb 14, 2021

Upgrade priority: Low.

- **Important** The `Result<T, E>` has been updated in the generation and the base types to follow the Rust version 100%. This means `{as, is}Error` is now available as `{as, is}Err` on the `Result` type. The older versions can still be used, but the `*Error` interfaces are now marked as deprecated.

Changes:

- Adjust `Result<T, E>` interface to be 100% compatible with the Rust version
- Add the `2028` upgrade to the known upgrades (optimizing certain `.at` queries)
- Adjust council derives to cater for latest Substrate & Polkadot
- Adjust Rococo know type definitions to cater for the latest update
- Update types for latest Polkadot/Substrate
- Add generic arguments for TypeScript users to `.entries/.keys` to deal with the key typings


## 3.8.1 Feb 7, 2021

Upgrade priority: Low. Recommended for users of the latest Substrate master, especially using contracts.

- **Important** The `api-contract` `Code` now supports deploying the code and a contract in on operation. This aligns with the latest Substrate where code cannot be uploaded with a contract. The `createBlueprint` is therefore deprecated, use `code.tx.<constructor>(...)` to deploy code. (Compatible with both old and new versions of Substrate)

Contributed:

- Add support for latest Frontier RPCs (Thanks to https://github.com/jnaviask)
- Fix user-supplied signed extensions type signature (Thanks to https://github.com/ntduan)

Changes:

- Expand `api-contract` to allow for `Code` to deploy contract alongside code. `createBlueprint` is now deprecated, replaced by `createContract` or the preferred `code.tx.<constructor>`, which uploads and deploys the code in one operation. This aligns with the current Substrate master contracts implementation.
- Allow for signed extensions to be supplied inside type bundles
- Ensure that the auto-connect state is checked on auto-connections (respecting disconnect)
- Added `CancelProxy` to `ProxyTypes on Polkadot, Kusama & Westend
- Updated to latest Substrate metadata


## 3.7.3 Feb 2, 2021

Changes:

- Added Polkadot upgrade block for runtime 27 (known checkpoint optimization)


## 3.7.2 Feb 2, 2021

Changes:

- Adjusted the `Keys` type for the 28 runtime on Kusama, Polkadot & Westend


## 3.7.1 Feb 1, 2021

Upgrade priority: Low. However recommended for current Substrate master, Polkadot and Rococo users and those wishing to support the upcoming Polkadot 28 runtime with the new `MultiAddress`.

- **Breaking change** As indicated in the 3.5.1 release notes, the `Address`/`LookupSource` defaults have now been adjusted for `MultiAddress`. If your chain does not use these types, explicitly add the correct `Address`/`LookupSource` types. This new extensible format is mean to cater for all address types into the future, removing a lot of discrepancies between chains.

Contributed:

- Extraction of the block author on Moonbeam (Thanks to https://github.com/joelamouche)
- Cleanup logs with HTTP providers, no subs (Thanks to https://github.com/Tbaut)

Changes:

- Allow `.slice` operator on the `Vec` type
- Apply `MultiAddress` as a default
- Adds support for the upcoming Polkadot 28 and Kusama 2028 runtimes
- Add checkpoint for Kusama 2027 upgrade
- Update all parachain types (as per latest Rococo)
- Correctly use relay blockNumber in parachain validation data
- remove information log for capabilities detection (creates confusion)
- Remove explicit references to `global`, use the `x-global` detection
- Remove explicit `module` in `package.json` (exports map available)


## 3.6.1 Jan 24, 2020

Upgrade priority: Medium if not already on at least 3.3.1. The next upgrade of Kusama/Polkadot requires it.

- **Breaking change** To support chains with multiple tokens, such as bridges, the `ChainProperties` type now returns an array of tokens and decimals (instead of singular values) in the `token{Decimals, Symbol}` getters. Additionally, this means that the `registry` interfaces has been changes, to `registry.chainDecimals: number[]` and `registry.chainTokens: string[]`. Where used the `[0]` index will return the first value if only interested in a single, for a straight conversion.

Changes:

- Allow for the detection of on-chain capabilities as available (e.g. `AccountData`, `ValidatorPrefs`)
- Cater for multiple tokens and decimals in the chain the chain `system.properties` (as per the chain specification)
- Add a `instances: { [key]: [module1, module2] }` definition in teh bundle types, allowing for multiple instances (e.g. Balances)
- Adjust the `api-derive` for balances to retrieve values via `instances` as well as across multiple modules
- Ensure all types are registered for all metadata typegen steps
- Add `rpc.payment.queryFeeDetails` RPC endpoint
- Update types & metadata to latest Substrate
- Move the `@polkadot/x-rxjs` package into the common repo
- Allow doc generation for errors/events (markdown outputs)


## 3.5.1 Jan 18, 2020

Upgrade priority: Low. Recommended for parachain developers.

- **Important** The default for Substrate on the Address types are `MultiAddress`. It is recommended that chains add explicit definitions for `Address` and `LookupSource` in their types, instead of relying on the API-defaults. A future update will swap the API defaults to align with Substrate.
- **Important** Like the above changes in Substrate, the `AccountInfo` structure has also changed. It is recommended that chain developers explicitly add `AccountInfo: 'AccountInfoWithRefCount'` for the version with `refCount` on and `AccountInfoWithProviders` for the latest Substrate version. As per the above, the API defaults will be changed to align with Substrate.

Contributed:

- Apply correct TypeScript type for `toBigInt()` (Thanks to https://github.com/ianhe8x)
- Expand type definitions for storage key tuples (Thanks to https://github.com/monitz87)
- Adjust bounty derive to cater for non-council chains (Thanks to https://github.com/ekowalsk)

Changes:

- Remove recursion in vector/struct U8a stream decoding
- Availability of staking made optional in session length calcs (era does require it)
- Updates to parachain types, ensuring it has coverage for all the latest
- Update all Rococo types to the latest (session keys, session reports, parachain indexes)
- Update known upgrade checkpoints fo WestEnd
- Add types of the lottery module in Substrate
- Add and extend types for the crowdloan module in Polkadot
- Adjust node-template to default to `MultiAddress` on specVersion >= 100


## 3.4.1 Jan 11, 2020

Upgrade priority: Low. Fixes for parachain types, `.entries()` (with no values) and `event.is(...)` checks, users of these interfaces will have benefit.

- **Breaking change** The `derive.chain.{getBlock, subscribeNewBlocks}` now return `SignedBlockExtended`, all with the actual extrinsics and events mapped. Users of the latter interface should take note.

Contributed:

- Fix `SessionKeys{6-9}` definitions (Thanks to https://github.com/icodezjb)
- Support `Vec<(a, b)>` in enums (Thanks to https://github.com/monitz87)
- Add motions to bounty derive (Thanks to https://github.com/ekowalsk)

Changes:

- `derive.chain.getBlock()` now maps events to extrinsics via `.extrinsics` getter
- Ensure dispatchInfo is extracted on failed extrinsics (`getBlock` derive)
- Allow specification of additional signed extrinsic via API options
- Add missing parachain types, `ParaGenesisArgs`
- Correct `EthTransaction` type (as per the correct cargo crate)
- Update with latest contract types for Substrate master
- Update alias mapping for asset palette (including Substrate starting defaults)
- Allow `.entries()` call where 0 keys are present
- Fix `.is` on events not checking the correct index
- Construction of `i*` types ow correctly checks for max positive/negative


## 3.3.1 Jan 4, 2021

Upgrade priority: Low. Recommended for users of frontier evm module with additional types.

Contributed:

- Expand bounty derives (Thanks to https://github.com/ekowalsk)
- Adjust known-types (Thanks to https://github.com/mikiquantum)

Changes:

- Parallelize the API-init RPC calls for faster overall startup
- Add `ExitReason` types for the frontier evm module
- Adjust checks for indexed/non-indexed module checks (metadata decoration)
- Apply module aliases on constants (aligning with events, extrinsics)
- Allow for use of `system.ss58Prefix` as exposed (current Substrate master)
- Correct use of api-contract `blockWeights.maxBlock` in estimation
- Build metadata docs & interfaces with section aliases
- Update to latest Substrate master metadata in tests


## 3.2.1 Dec 27, 2020

Upgrade priority: Low. Recommended for users of parachains.

Contributed:

- Adjust metadata `.asV12` type signature (Thanks to https://github.com/yjhmelody)

Changes:

- Add `api.{errors, events, query, tx}.<section>.<name>.is(...)`
- Remove support for staking pre Substrate 2.0
- Add all frontier types & RPCs
- Support `AccountInfo` with new provider/consumer refCount structure
- Additional Cumulus parachain types
- Consistently format number JSON based on bitLength
- Cleanup metadata -> api dependencies
- Update `@polkadot/util` to 5.2.1


## 3.1.1 Dec 20, 2020

Upgrade priority: Low. Recommended for users of parachains.

Contributed:

- Additional parachain types (Thanks to https://github.com/joelamouche)
- Support for multi queries with `HttpProvider` (Thanks to https://github.com/ianhe8x)
- Configurable error logging with `createTypeUnsafe` (Thanks to https://github.com/dvdplm)

Changes:

- Adjust core type creation, removing storage duplication
- Update parachain types to support Rococo v1
- Adjust bounties derive to cater for new Substrate namespaces (& move to bounties)
- Mark `detectPackage` as known side-effect
- Add `detectPackage` to `@polkadot/metadata` (a number of requests on this)
- Adjust x-rxjs wrapper to expose all methods, incl. Node.js esm fixes
- Update to latest Substrate static metadata
- Update `@polkadot/util` to 5.1.1


## 3.0.1 Dec 14, 2020

Upgrade priority: Low. Recommended for the next Kusama/Polkadot upgrades due to additional types and those following chains following Substrate master closely.

**Important** While this package contains no external interface changes, it now compiles and ships both cjs and esm modules. This means that modern bundlers will have more information for tree-shaking available. Additionally when using Node with `.mjs` extensions, the esm version imports will be used on recent Node versions. Adding an export map, as here, may have some impacts so a major semver bump is advised. There may be (small) dragons hiding in the dark corners...

Contributed:

- Injection of derives via typesBundle (Thanks to https://github.com/pr0fedt)
- Added derives for bounties (Thanks to https://github.com/krzysztof-jelski)

Changes:

- Build and expose both cjs and esm via exports map
- Inject RPC definitions for typesBundle, allowing per-spec configuration
- Added `query.<section>.<method>.sizeAt(hash, [...params])` for all storage
- Add new Substrate consumed Weight types
- Expand `SessionKeys<n>` definitions (up to 9)
- Cleanup circular `Type` <-> `Text` definitions
- Cleanup circular `Metadata` <-> `TypeRegistry` imports
- Update `@polkadot/util` to 5.0.1


## 2.10.1 Dec 7, 2020

Upgrade priority: Low. Recommended when following Substrate master and/or parachains development, contains the latest types for both.

- **Breaking change** If using the `staking.query` derive, you now need to pass flags as to which values to retrieve

Changes:

- Ensure that maximum era is limited to `consts.system.blockHashCount` (don't overflow on very low blocktimes)
- Apply current Polkadot master parachain types
- Apply current Substrate master asset types
- Add `system_{addLogFilter, resetLogFilter}` RPCs
- Adjust tests for latest Substrate metadata
- Adjust staking derives to be more performant (flags indicate which query values to retrieve)
- Add account derive to cater for the availability of identities
- Use `import type` in all cases


## 2.9.1 Nov 30, 2020

Upgrade priority: Low. No major changes when on at least 2.8.2. Users encouraged to upgrade to at least that patch.

- **Breaking change** The API will now not attempt to queue calls made while not connected and send on connection. Rather when making a call and the RPC node is not connected, an error will be thrown.

Contributed:

- Add typegen capability for custom RPCs (Thanks to https://github.com/holygits)

Changes:

- Remove rpc-core send queue, only allow sends while connected
- Adjust staking derive for `electedInfo` to contain details of current validators
- Extract identity-only derive from `accounts.info` for simpler reusability
- Add types for Substrate master node (to allow for consistent swapping to `MultiAddress`)
- Adjust `Bytes` with `.slice` to be consistent for `Uint8array` extensions (already released in 2.8.2 as a bugfix)


## 2.8.1 Nov 23, 2020

Upgrade priority: Low. Recommended if using Substrate master with new `MultiAddress`.

Contributed:

- Export `derive.chain.getBlock` (Thanks to https://github.com/lovesh)

Changes:

- Expand `MultiAddress` construction with multi type detection
- Rename `GenericLookupSource` to `IndicesLookupSource` (internal use)
- Cleanup list retrievals with `Raw` data results for undecodable entries
- Export actual version via `RegistryMetadata`
- Dedupe bn.js (one version shared between dependencies)


## 2.7.1 Nov 16, 2020

Upgrade priority: Medium. Recommended for users of Polkadot/Kusama and api-contract users.

Changes:

- Allow for `ExtrinsicSignature` overrides (defaults to `MultiSignature`)
- Update api-contract `Blueprint` to allow for optional salt (auto if not provided)
- Support for ink! `.contract` files (in addition to ABI `.json`)
- Fix contract event decoding with pass-through of raw `Bytes`
- Fix support for enum encoding in api-contract
- Support new contract `Schedule` type as per Substrate
- Update Kusama/Polkadot known upgrade blocks
- Adjust typegen generated `@polkadot/types` imports
- Adjust internal `@polkadot/types` imports/exports (overall bundle sizes)


## 2.6.1 Nov 9, 2020

Upgrade priority: Low. Should be done alongside an update to `@polkadot/util` to 4.0

Changes:

- Adjust auto-gas to contract RPC call to 5 * 10 ^ 12 (align with Rust)
- Adjust derive `AccountId` check to take Ethereum-compatible chains into account
- Fallback for chains with invalid council proposal data in derives
- Bump static v12 Metadata (tests) to latest Substrate version
- Bump `@polkadot/{util,util-crypto}` to 4.0 (optimized WASM layers)


## 2.5.1 Nov 2, 2020

Upgrade priority: Low. Recommended for `api-contract` developers.

- **Breaking change** Substrate changed the `ContractExecResult` from `api.rpc.contracts.call`. The API does have pass-through support for both old and new variants via the `Contract` interface, however it means the structure has changed to accommodate the new Substrate structure. Refer to the [docs for the latest interface](https://polkadot.js.org/docs/api-contract/start/contract.read) (including `isSuccess/isError` -> `isOk/isErr`, and the availability of the `gasConsumed`)

Contributed:

- Dedup similar types on generation (Thanks to https://github.com/monitz87)

Changes:

- `Contract` execution will now return contract events decoded in the result
- Add `.dryRun` on extrinsics (alongside `.paymentInfo` usage)
- Add `system_syncState` and `syncstate_genSyncSpec` RPCs
- Enhance error reporting, `Call` indicates explicit call as found
- Adjust internal metadata decoration and use as exposed from `@types/metadata`
- Expand Rococo known types to cater for v1 (specVersion 10)
- `registry.hash` now returns an `H256` object (as opposed to raw Uint8Array)
- Use utility logger in all relevant error messages (consistency in logging)
- Add `derive.council.proposal(<hash>)` for retrieval of a single (expanded) proposal
- Correctly and transparently format type generation types (allowing for nested variants)


## 2.4.1 Oct 26, 2020

Upgrade priority: Low. No breaking changes, however it does move `api-contract` forward with additional features.

Contributed:

- Add support for both `{i,u}256` types on contracts (Thanks to https://github.com/seanyoung)

Changes:

- Add `.keysAt` & `.entriesAt` to query maps at a specific blockHash
- Adjust ordering of type injection, any `types: { ... }` definitions not have precedence
- Correctly format Tuples in both RPC and const definitions as part of type generation
- Add node-template to known types (tracking inside API), remove warnings for the spec
- Add initial implementation for new Substrate `MultiAddress` type
- Add `api.derive.chain.subscribeNewBlocks` for full block retrievals
- Contracts identifiers to `.{exec, read}('name', ...)` now matches on both snake_case and camelCase (consistency)
- Cleanup contracts serialization for messages to allow both to and from
- Add deserialization of contract events against the ABI
- Adjust contracts metadata parsing to be future-proof with type retrievals
- Add tests for Solang into contracts, re-organize layout per type


## 2.3.1 Oct 19, 2020

Upgrade priority: Low. Recommended for `api-contract` developers and those using large messages via Node.js WS.

Contributed:

- Adjust frame size for Node.js WebSockets (Thanks to https://github.com/mnaamani)
- Update warnings to reflect new docs URLs (Thanks to https://github.com/aphelionz)

Changes:

- Expose `dispatch{Error, Info}` on all `.tx` results (less boilerplate on info checks)
- Add missing primitive types inside contracts type parsing
- Adjust api-contract to expose `Contract.{query, tx}.<message>` and `Blueprint.tx.<constructor>`
- Rework contracts registry to be generic to all scale-info definitions
- Allow for auto-max weight on contract read/exec (useful in estimation)
- Fix memoization where `BigInt` params are passed


## 2.2.1 Oct 12, 2020

Upgrade priority: Low.

- **Breaking change** `@polkadot/api-contract` now only supports ink! 3.0-rc1 and later formats. Users of ink! 2.1 are recommended to stay on an older version until upgraded.

Contributed:

- Add latest Ink! types (Thanks to https://github.com/ascjones & https://github.com/kwingram25)
- Add base for new contract metadata parsing (Thanks to https://github.com/ascjones & https://github.com/kwingram25)

Changes:

- Introduce `OriginCaller` type (& apply to scheduler types)
- Adjust `ContractInfo` type for latest Substrate (contracts)
- Adjust `Schedule` type for latest Substrate (contracts)
- Allow snake_case to be handled transparently in structs
- Full new api-contract developer interfaces (Code, Blueprint, Contract)
- Rework Abi & Abi Registry use & parse (based on contributed) for efficiency & non-global clobber
- Allow `null` input on `Text` values in addition to existing `undefined`
- Remove all documentation after move to https://github.com/polkadot-js/docs repo
- Adjust type encoding from TypeDef, s/encodeType/encodeTypeDef/


## 2.1.1 Oct 5, 2020

Upgrade priority: Low.

Contributed:

- Remove unused documentation link (Thanks to https://github.com/roccomuso)

Changes:

- Adjust RPC error formatting with string cleanups and a larger allowed range
- Apply limit protection on `Text` & `Bytes`, protecting against OOM on erroneous decoding
- Add `derive.staking.validatorsFrom` to determine validators nominated and own validators
- Cleanup document generation without (currently unused) summary links
- Rename static TRANSACTION_VERSION to EXTRINSIC_VERSION (Substrate alignment)
- Bump Substrate metadata (tests, doc generation)


## 2.0.1 Sep 28, 2020

Upgrade priority: Medium. Required for all teams building on Substrate 2.0 for full compatibility.

- **Important** The `RefCount` type (used by `query.system.accounts`) has been changed to a `u32`. On older chains supply the `RefCount: 'RefCountTo259'` override
- **Breaking change** Metadata versions before v9 as not supported anymore. v4 was the first version to go with the Substrate 1.0 while Kusama itself starts at v9 as the earliest version. This means that Substrate 1.x chains that have not had any upgrades are not supported in this version of the API anymore.
- **Breaking change** Extrinsic versions before v4 (1-3) are not supported anymore. This aligns with the above metadata change, where v4 is the canonical version.
- **Breaking change** Support for the old-style linked-map retrievals via `query.<module>.map()` have been dropped, only the existing `.keys()/.entries()` are available for map iteration.

Contributed:

- Add secondary fields to EpochAuthorship (Thanks to https://github.com/andresilva)
- Add support for FixedVec in enums (Thanks to https://github.com/monitz87)

Changes:

- Drop support for Substrate 1.0 metadata versions 1-8
- Drop support for Substrate 1.0 extrinsics version 1-3
- Add support for `grandpa_proveFinality` RPC
- Drop support for linked map queries not via .entries (deprecated since early versions of Substrate 2)
- Support `.entries()` on older chains without `queryStorageAt` support
- Add bounty type definitions from treasury palette
- Adjust `RefCount` type as per substrate 2.0
- Add `PalletVersion` types for future palette versioning
- Adjust formatting for `Per{cent, bill, mill}` without instance checks
- Skip invalid keys on validator retrievals


## 1.34.1 Sep 21, 2020

Upgrade priority: High. Metadata v12 is the next major version containing structural data exchange changes and will start rolling out to test and live networks in due course.

- **Breaking change** The `Decorated` (from `@polkadot/metadata`) class signature has changed. It now always expects a valid `Metadata` object to be passed-in, instead of raw data. It is recommended to create a `Metadata` object, set it on the registry with `.setMetadata` and then only create a `Decorated` instance. (Only affects metadata-only users of the API)

Contributed:

- Added support for POW block author extraction (Thanks to https://github.com/sorpaas)

Changes:

- Ensure Metadata retrieval does not pollute the default registry
- When passing `{ nonce: -1 }` to `signAndSend` the API will use `system.accountNextIndex` to determine the nonce
- Ensure that upgrades override old registry types (non-specified in current)
- Support for Metadata v12 with fixed indices
- Cleanups for WebSocket class detection and creation
- Ensure that ignored map params yield an error on `iterKey`
- Cater for older chains in derive democracy locks (availability detection)


## 1.33.1 Sep 14, 2020

Upgrade priority: Low. Recommended when using clones instances.

Changes:

- Allow `paymentInfo` on any extrinsic with `tx.paymentInfo(<address>, <at>)` (hash specified)
- When cloning an API instance the runtimeChain is now properly set from source
- When cloning an API instance the registry is shared with the source
- Optimize derive `receivedHeartbeats` to not re-create the full object
- Add `staking.stakerPrefs` derive to retrieve validatorPrefs over a range of eras
- Basic map of Websocket error codes to short descriptions (where none available)


## 1.32.1 Sep 7, 2020

Upgrade priority: Low. Recommended when manually using provider connect/disconnect or using multiple instances in a single process.

- **Breaking change** Previously `.isReady` could throw an error, now it will always succeed on connection. For trapping errors, use the `.isReadyOrError` variant on the API
- **Breaking change** The `isConnected` provider interface is now a getter, replacing previous calls to `provider.isConnected()`. Additionally the `provider.disconnect()` is now async, aligning with `.connect()`.

Contributed:

- Expand vesting information via derive balances (Thanks to https://github.com/niklabh)
- Add `isReadyOrError` to API, `isReady` always succeeds (Thanks to https://github.com/shawntabrizi)

Changes:

- Adjust memoization to work on a per-instance basis, with no contamination between multiple api/provider instances
- Added `derive.chain.getBlock(hash)` to retrieve a `SignedBlock` extended with an `.author` (same as `derive.chain.getHeader(...)`)
- Added `api.{connect, disconnect}()` as well as `isConnected` interfaces. The first functions async returning `Promise<void>`
- Error on provider connections will now emit all (as expected) via the event emitter
- Ensure that initial connection failures always retry (when using auto-connection management)
- The `api.derive.staking.query/queryMulti` no longer retrieves session keys (can be done via `.keys/keysMulti`)
- Add `api.derive.accounts.accountId` to perform AccountId lookups (from indices or actual AccountId)
- Lessen load of `paymentInfo` queries to only use accounId mappings as available
- Adjust staking derives to cater for early Substrate 2.0 chains (optional/non-optional EraIndexes)
- Cater for the handling of nested aliased types, e.g. wrapped inside Vec or Tuple
- Add the support for the `grandpa_subscribeJustifications` RPC
- Adjust `Call.toHuman()` to remove decoding-related technical internal details
- Static metadata & tests updated for the latest substrate master
- `toHuman()` & `.toBigInt()` has been explicitly added to the API documentation
- Adjust known types for latest Kusama network state


## 1.31.1 Aug 31, 2020

Upgrade priority: Medium, especially for staking users on Polkadot, Kusama & Westend (type updates applied for v23 onwards) or if transparent `.at(hash)` queries are required/used

- **Important** Substrate changed the `RewardDestination` enum with an extra field for payout-to-any account for staking preferences. If on an older chain consider adding `RewardDestination: 'RewardDestinationTo257'`
- **Important** Substrate changed the `CompactAssignment` type enhanced types for session solution submissions. If on an older chain consider adding `CompactAssignments: 'CompactAssignmentsTo257'`

Contributed:

- Fix documentation language and typos (Thanks to https://github.com/Meuko)
- Add missing `TransactionPriority` type (Thanks to https://github.com/aniiantt)
- Update definitions for new `CompactAssignments`, including tests (Thanks to https://github.com/kianenigma)

Changes:

- Add transparent support for types/metadata, i.e. hash queries such as `rpc.chain.getBlock(<hash>)` & `query.system.events.at(<hash>)` now works out-of-the-box injecting the correct metadata & types.
- Optimize RPC-layer calls with detection of short-term cacheable calls (in the same way subscriptions are done)
- Additional checks on `AccountId` for valid sizes
- Add `toBigInt()` (JS built-in `BigInt`) on `Int/Uint`, & `Compact<*>` types
- Support for `.concat` on Codec arrays
- Support for serialization with `isBare` flag on enums
- Add `api.getBlockRegistry(blockHash?)` to create registry/types for a specific block
- `derive.democracy.locks` now returns delegated locks for an account as well
- Adjust unlocking derives with appropriate in-place additions (less object allocations)
- `.sign` on submittables is marked deprecated (not due for removal, but rather use `.signAsync` for consistency with `.signAndSend`)
- Adjust types for `CompactAssignments` & `RewardDestination` for Polkadot, Kusama & Westend
- `@polkadot/util` 3.4
- `@polkadot/wasm-crypto` 1.4


## 1.30.1 Aug 24, 2020

Upgrade priority: Low, unless using the `proposeParachain` module.

Changes:

- Adjust balance retrievals to check for `system.account` for new/old determination
- Add types for the new `proposeParachain` module (as per Rococo)
- Adjust `Address` <-> `LookupSource` definitions (no external impact, both in existence)
- Add Ethereum-compatible `Ethereum{AccountId, LookupSource}` types, underlying `H160`
- Allow for configurable hashers via `registry.setHasher(...)` (defaults to `blake2AsU8a`)
- `@polkadot/util` 3.3


## 1.29.1 Aug 17, 2020

Upgrade priority: Low, unless on bleeding-edge chain with new compact `CompactAssignments`.

- **Important** The Substrate `CompactAssignments` type has changed for better space utilization. On older chains, supply `CompactAssignments: 'CompactAssignmentsTo257'`

Contributed:

- Clean tx cookbook param expansion (Thanks to https://github.com/swswsw)

Changes:

- Add additional `Fixed{I,U}{64,128}` and `{I,U}32F32` types
- Add `desiredRunnersUp` to council derives
- Cleanup indices/AccountId combination derive lookups
- `@polkadot/util` 3.2


## 1.28.1 Aug 10, 2020

Upgrade priority: Low, unless using Centrifuge or parachains

Contributed:

- Update Centrifuge types to latest (Thanks to https://github.com/mikiquantum)

Changes:

- Add cookbook entry for viewing block extrinsics
- Support types for time-delay proxies
- Update types for parachains
- `@polkadot/util` 3.1
- `@polkadot/wasm-crypto` 1.3


## 1.27.1 Aug 3, 2020

Upgrade priority: Low, unless using the Rococo chain

Contributed:

- Remove outdated example poc-3 RPC reference (Thanks to https://github.com/swswsw)

Changes:

- Raw/Bytes `toHuman` detects ASCII sequence for text output
- Add know types for the Rococo chain


## 1.26.1 Jul 27, 2020

Upgrade priority: Low

Contributed:

- Update docs for the new `system.accountNextIndex` (Thanks to https://github.com/shawntabrizi)
- Update contracts call parameter typing (Thanks to https://github.com/kwingram25)

Changes:

- Adjust votingBalance to only return `freeBalance` (only council voting is free + reserved)
- Additional checks for referenced Vec sub-type deconstruction in typegen
- Allow for API `typesBundle` option to inject a group of chain versions types
- Update metadata static tests for latest Substrate
- `@polkadot/util` 3.0


## 1.25.1 Jul 20, 2020

Upgrade priority: Medium, especially if using contracts.

- **Important** Contract RPC result updated on Substrate, on older chains supply `ContractExecResult: 'ContractExecResultTo255'`

Contributed:

- Support for custom HTTP headers in providers (Thanks to https://github.com/brad-larson)
- Update known types for Centrifuge (Thanks to https://github.com/philipstanislaus)
- Update API users with Registrar #1 (Thanks to https://github.com/chevdor)

Changes:

- Raw/Bytes `toHuman()` displays utf-8 as available
- Add fallback for `setImmediate` when not polyfilled
- Update `NetworkState` reputation type for `system_networkState` RPC
- Update session progress calcs for Aura (cater for negative)
- Fix class prototype for (basically-deprecated) Linkage type
- Add Polkadot types for `purchase` pallet


## 1.24.1 Jul 13, 2020

Changes:

- Added `isAscii` & `isUtf8` getters to `Bytes` & `Raw` types
- Added `toUtf8()` helper to `Bytes` & `Raw` types
- `@polkadot/util` 2.18


## 1.23.1 Jul 6, 2020

Contributed:

- Small README typo fix (Thanks to https://github.com/woss)

Changes:

- Add latest Substrate master types
- Adjust `<Codec>.toRawType()` to use registry name as available
- Update `ProxyType` for Kusama, Polkadot & Westend with `IdentityJudgement`
- Validate number format (signed/unsigned) for number types
- Remove core codec dependencies on Base class (with proper TS encapsulation)
- `@polkadot/util` 2.17


## 1.22.1 Jun 30, 2020

- **Important** Substrate changed the treasury tip structure, on older chains supply `OpenTip: 'OpenTipTo225'`

Contributed:

- Allow for `[u8; 33]` in U8aFixed (Thanks to https://github.com/akru)

Changes:

- Improve derive accountId -> accountIndex lookups (optimize entries queries)
- Vesting balance calculations via `derive.balances.all` has been updated for locks
- Add derive for multi staking rewards with specified eras
- `@polkadot/util` 2.16


## 1.21.1 Jun 23, 2020

Contributed:

- Fix subscriptions never unsubscribing after the id swap in 1.18.1 (Thanks to https://github.com/dillu24 for testing iterations)

Changes:

- Add support for `CheckMortality` signed extension (old `CheckEra` is now an alias)
- Promise API will default to using `getStorage` on non-subscription calls, reducing RPC overhead
- Optimize derive BN allocations, using in-place operators as applicable
- Add new Substrate types for Babe `EquivocationProof`
- Adjust `Releases` enum to use a shared instance


## 1.20.1 Jun 22, 2020

- **Important** RPC for `account_nextIndex` has been moved to `system_accountNextIndex` (Aligning with Substrate as a primary alias)

Changes:

- Cleanup map entries support with only Substrate 2.0-era RPCs (when introduced)
- Add `system_dryRun` RPC
- Optimize `derive.staking.queryMulti` retrievals with additional per-type batching
- Add `derive.staking.waitingInfo` (same as `electedInfo` for waiting validators)
- Adjust types & metadata for latest Substrate
- `@polkadot/util` 2.15


## 1.19.1 Jun 16, 2020

Contributed:

- Improve typing on `.entries()` queries (Thanks to https://github.com/monitz87)

Changes:

- Align metadata and types with latest Substrate
- Update Polkadot types for current evolution of parachains
- Allow for type aliasing on events (aligning with calls & queries)
- `@polkadot/util` 2.14


## 1.18.1 Jun 8, 2020

Contributed:

- Expand docs on node-template types (Thanks to https://github.com/g2udevelopment)
- Update contract fees to current impl. (Thanks to https://github.com/djuanit0x)
- Allow `Option` types in enum/Result type generation (Thanks to http://github.com/xlc)
- Add `.entriesPaged` and `.keysPaged` methods for state maps (https://github.com/monitz87)

Changes:

- Add types for new Substrate proxy module
- Adjust types for new Substrate (renamed) npos-elections module
- `Call` now exposes `method` & `section` fields (aligned with `toHuman()` representation)
- Cater for new Substrate string subscription ids (with backwards compatibility)
- `@polkadot/util` 2.13


## 1.17.2 Jun 2, 2020

Changes:

- Ensure subscription promise resolves before first result


## 1.17.1 Jun 2, 2020

Contributed:

- Fix `ElectionSize` type (Thanks to https://github.com/arjanz)

Changes:

- Allow `BTreeSet` decoding from Array/JSON inputs
- Adjust Call-only metadata output to trim documentation to first full line
- Safeguard against divide-by-zero for total era points (expired reward eras)
- Internal derive optimizations with combining calls
- Support for latest Substrate types & metadata
- `@polkadot/util` 2.12


## 1.16.1 May 26, 2020

Changes:

- Support for Polkadot CC1 types & signed extensions
- Add support for Babe VRF secondary digests (author extraction)
- Adjust `Perbill/Permill` `toHuman()` formatting to output percentage
- Support for latest Substrate types & metadata
- Update to latest TypeScript, eslint & typescript-eslint
- `@polkadot/util` 2.11


## 1.15.1 May 23, 2020

Contributed:

- Adjust `keyPrefix()` with DoubleMap args (Thanks to https://github.com/KiChjang)
- Added `WeightToFeeCoefficient` type (Thanks to https://github.com/danforbes)
- Spelling fixes for console logs (Thanks to https://github.com/JoshOrndorff)
- Spelling fixes in cookbook (Thanks to https://github.com/pawelnguyen)
- Add `transactionVersion` getter in payloads (Thanks to https://github.com/amaurymartiny)

Changes:

- Adjust `stakerRewards` derive ordering for improved on-payout refreshes
- Baseline implementation for derive caching infrastructure
- Adjust `Multiplier` type to `Fixed128` (as per latest Substrate)
- Updated to latest Substrate metadata & add new types


## 1.14.1 May 14, 2020

- **Important** `DispatchInfo` changed `paysFee` to an enum, if using an older version use, `DispatchInfo: 'DispatchInfoTo244'`

Contributed:

- Align imOnline `Heartbeat` with Substrate (Thanks to https://github.com/arjanz)
- Adust EVM types to include `Vicinity` (Thanks to https://github.com/drewstone)

Changes:

- Ensure metadata is only requested once upon startup (bypass on upgrade subscriptions)
- Expand testing around `ExtrinsicEra` construction
- Expand `Registry` to direct access to available signed extensions (in addition to exposed types)
- Cater for new `CheckSpecVersion` and `CheckTxVersion` signed extensions (with `SignerPayload` adjustments)
- Cater for new `PrevalidateAttests` signed extensions (Polkadot claims)
- Don't re-calculate submittable extrinsic hash on status checks (optimization)
- Support for both old/new Tuples in `democracy.depositOf` in derives
- Fix democracy `ProxyState` types
- Extends types for Polkadot claims
- Update `@polkadot/util` to 2.10


## 1.13.1 May 6, 2020

Contributed:

- Add support for ECDSA keypairs in extrinsic signers (Thanks to https://github.com/akru)
- Rework type generation to use templating for better maintenance (Thanks to https://github.com/xlc)
- Adjust extrinsic `sign/signAsync` signature to optional options (Thanks to https://github.com/KiChjang)
- Support round-robin endpoints in the `WsProvider` with array of urls (Thanks to https://github.com/hoani)
- Remove static test-only metadata for Polkadot dev chains (not updated regularly, Substrate dev to remain)

Changes:

- Revert error swallow for wrong preimage data (temp. override for Kusama upgrade with no migration)
- Fix `.encodedLength` calculation on `[Type; N]` types
- Add new `rpc.grandpa.roundState` RPC
- Update types & metadata as per latest Substrate master
- Adjust Centrifuge starting version


## 1.12.2 Apr 30, 2020

Changes:

- Update `@polkadot/util` to stable 2.9.1 (sadly missed in the previous version, stable should match to stable)


## 1.12.1 Apr 29, 2020

Contributed:

- Fix `CompactAssignments` types (Thanks to https://github.com/arjanz)
- Provider ayo-connect now allows for interval config (Thanks to https://github.com/jnaviask)
- Cleanup generation for c-like enums (Thanks to https://github.com/monitz87)
- Allow subscription to all storage keys, alignment with Substrate (Thanks to https://github.com/xlc)

Changes:

- Cater for vote delegations in democracy derives
- Cleanup account derive flags where to allow for optional council modules
- Allow generic types in ApiPromise.combineLatest
- Update to latest substrate metadata


## 1.11.2 Apr 22, 2020

Changes:

- Small patch to add missing Polkadot master types (will be in next Kusama update)


## 1.11.1 Apr 21, 2020

- **Important** Substrate master has an updated `Weight` (to `u64`), on older chains apply `Weight: 'u32'` (This does affect event decoding if wrongly set)

Contributed:

- Allow user type augmentation to work with different versions of rxjs (Thanks to https://github.com/monitz87)
- Align augmented generation with camelCase (Thanks to https://github.com/monitz87)
- Fix bitfield endian encoding (Thanks to investigation by https://github.com/xlc)
- Add account flag derives via `accounts.flags(accountId)` (Thanks to https://github.com/kwingram25)

Changes:

- Fix entries decoding for `Option<Number>` (& simplify, decoding correctly on rpc layer)
- Add `system.{localPeerId, localListenAddresses}` & `state.getReadProof` RPCs
- Ensure proper propagation of `api.runtimeVersion` (used for signing) after upgrade
- Field ordering fix for deprecated `Linkage` (used in linked maps)
- `derive.account.info` now returns all field enum types decoded (not only raw)
- Add banner with FAQ entries for node-template to aid with common issues
- `Digest` has been moved to definitions, removal of `GenericDigest` type
- Support `Fixed128` type
- Add `transactionVersion` to `RuntimeVersion` struct
- Enhance API support for non-subscription providers (skip subscription to runtimeVersion)
- Adjust types for Kusama 1057 (notably the new `StakingLedger`)


## 1.10.1 Apr 13, 2020

- **Important** Substrate master has updated staking, on older chains apply `StakingLedger: 'StakingLedgerTo240'`

Changes:

- Add `rpc.system.chainType` to retrieve the chain type (Development. Local, Live & Custom)
- Adjust types for Westend after the reset
- Adjust democracy derives, including the support of the frame-scheduler for scheduled deployments
- Allow staking derives to work with new staking payouts, specifically `tx.staking.payoutStakers`
- Cleanups to derives for democracy & staking to be more performant
- Add Centrifuge base types to `@polkadot/types-known`
- Adjust with all the latest substrate master types
- Internally all private/protected methods/variables are now `_` prefixed (Aligning with the `private/protected` indicators in the TS definitions)
- Update metadata/docs-from-metadata to the latest Substrate


## 1.9.1 Apr 1, 2020

- **Breaking change** (TypeScript with derives only) The return type names for `api.derive.*` have been adjusted for consistency, all starting with `Derive*` (previously a mixture of `Derived*` and `Derive*`)
- **Breaking change** (derives only) Additional cleanups of democracy proposal & referenda derives, including support for new Polkadot/Substrate vote retrievals

Changes:

- Tx signing via `signAndSend` & `signAsync` now tries to use the last finalized block (depending on finalized drift)
- Add support for `api.rpc.childstate.*` Substrate RPCs, older nodes with still populate `api.rpc.state.*` with the child methods
- Adjust `Error.message` on RPC failures to not include the (already known) method signature
- Split `@polkadot/types/known` into `@polkadot/types-known`, allowing for base API overrides
- Extended `api.derive.democracy` to cater for dispatchQueue and externals
- Extended `api.derive.council` to cater for new phragmen elections
- Use new `queryStorageAt` for query `.entries`, removing unneeded subscriptions (use as available)
- Fix `BTreeSet` initialization when it forms part of query interfaces
- Fix encoding for `Vec<u8>`-related types as part of constants
- Internal adjustment of interface type locations (no impact on imports via `@polkadot/types/interfaces`)


## 1.8.1 Mar 22, 2020

- **Breaking change** The format for any custom RPCs have been changed (alongside API-internal changes) to allow for better RPC management. If you are currently using custom RPCs (or planning to do so), look at the [updated documentation](https://polkadot.js.org/api/start/rpc.custom.html)
- **Breaking change** Alongside API RPC changes, the `@polkadot/jsonrpc` package has been removed. Since it was never documented and only used internally, this should not have adverse impacts. All RPC definitions itself has now been moved to the relevant modules inside `@polkadot/types/interfaces`
- **Important** Substrate has an updated democracy module. If using an older chain add the `ReferendumInfo: 'ReferendumInfoTo239'` type when using referendums

Changes:

- The `isRetracted` Extrinsic status is now a warning, not a fatal error, correctly aligning with Polkadot/Substrate
- The Substrate extrinsic phase definitions has been expanded with `Initialization` to align with the latest versions
- Add support for all known substrate RPC methods
- Extend account derives to include status flags, e.g. `isCouncil`, `isSudo`, ...
- Adjusted referendum derives to cater for bot new/old democracy. Derived `referendumInfo` now includes `status` field, not `info`
- Add `initWasm` flag to API options. When set to `false` does not init the WASM portion (leaving it to the user elsewhere)


## 1.7.1 Mar 17, 2020

- **Important** Current versions of Polkadot/Substrate have dropped support for linked maps on storage entries. If you are using these queries to retrieve all entries, for instance `staking.{nominators,validators}()` and using an upgraded chain, you need to swap to retrieving entries via `.entries()` or `.keys()` for the keys.

Changes:

- Pull in support and types for latest Polkadot/Substrate
- Add support for the new Substrate `state_getKeysPaged` RPC, including use in storage keys
- Move `derive.staking.controllers` to `derive.staking.stashes`, reflecting actual content
- Cater for adjusted storage (non-linked mapped) for `derive.staking.stashes` queries (with old-compat)
- Expanded `derive.staking.*` derives, including addition of `derive.staking.own*`
- Re-add fixed (with tests) checks for query args, previously disabled in 1.6.2


## 1.6.2 Mar 12, 2020

Changes:

- Revert checks for query args, not working on `.at()` queries (proper fix in next version)


## 1.6.1 Mar 12, 2020

- **Breaking change** `api.rpc.state.queryStorage(...)` now fully decodes the `Vec<StorageChangeSet>` and returns a decoded `[Hash, Codec[]][]` when using this RPC.

Changes:

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


## 1.5.1 Mar 06, 2020

- **Important** Substrate master has updated staking, on older chains supply `StakingLedger: 'StakingLedgerTo223'`
- **Important** Substrate master has updated collective, on older chains supply `Votes: 'VotesTo230'`

Contributed:

- Add proper support for type generation with an Enum containing an Tuple (Thanks to https://github.com/monitz87)
- Fix storage parsing not resulting in rejected Promises (Fix from https://github.com/aniiantt applied)
- Remove use of deprecated `Observable.create` (Thanks to https://github.com/Himself65)

Changes:

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


## 1.4.2 Feb 27, 2020

Changes:

- Fix `api.tx(<extrinsic>): Submittable` decoration (non-working in 1.4.1, now with proper test)


## 1.4.1 Feb 26, 2020

- **Breaking change** (TypeScript only) The `*.d.ts` files now contain TypeScript 3.8 features (specifically `#private`), which is not usable in TS versions < 3.8
- **Breaking change** - `api.derive.staking.*` has updated result types and detects support for lazy payouts queries

Contributed:

- Rework type generation for `api.{query, tx}` to properly handle complex type inputs (Thanks to https://github.com/monitz87)
- Rework metadata `--strict` mode to effectively decorate chain metadata (Thanks to https://github.com/monitz87)
- Add `api.rpc.chain.subscribeAllHeads` (not just best) (Thanks to https://github.com/jak-pan)

Changes:

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


## 1.3.1 Feb 18, 2020

Contributed:

- Add `@types/bn.js` as a normal dependency, exposed in `*.d.ts` (Thanks to https://github.com/monitz87)

Changes:

- Type generation scripts (including `polkadot-types-from-{chain,defs}`) has been moved to the `@polkadot/typegen` package
- The `@polkadot/types/codec/create` has been moved to `@polkadot/types/create`, imports from `@polkadot/types` are unaffected
- Expose chain properties on registry (and use for API type formatting)
- Add `toHuman(isExtended?: boolean)` to all codec types, formatting into a human-readable structure


## 1.2.1 Feb 16, 2020

- **Important** Update RPC status codes (latest Substrate 2), with the `isInBlock` (`isFinalized` now indicates finality)

Contributed:

- Storage `.entries(arg?: any)` now has the correct argument type for DoubleMap (Thanks to https://github.com/monitz87)

Changes:

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


## 1.1.1 Feb 06, 2020

- **Important** Chains without `balances.account` or `system.account` should supply `"BalanceLock": "BalanceLockTo212"` to their types to use the previous-generation `BalanceLock` (when querying locks)

Changes:

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


## 1.0.1 Jan 30, 2020

- **Breaking change** Drop support for Substrate v1 chain in all derives

Contributed:

- Return unsub functions from provider .on emitters (Thanks to https://github.com/jak-pan)
- `ApiPromise.isReady` now rejects on unrecoverable errors (Thanks to https://github.com/laec)

Changes:

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


## 0.100.1 Jan 13, 2020

- **Important** This will the the last API version with Substrate 1.x support. Although you will still be able to use subsequent versions with older chains, dependent libraries such as sr25519 may not be compatible.

Contributed:

- Add support for `BTreeSet` (Thanks to https://github.com/satellitex)

Changes:

- Add support for the Substrate identity module
- Remove the `codec/Data` type, to remove a conflict with Substrate. This type is now named `Raw`
- Fix for linked maps using `Option`
- Add support for Metadata v10
- Add support for latest Polkadot/Substrate types
- Add `paymentInfo` to submittables to calculate fees


## 0.99.1 Dec 13, 2019

- **Breaking change** The `Data` and `U8a` type has been renamed and just replaced with the `Raw` type
- **Breaking change** The `api.derive.staking.info` has been split into 2 - `staking.query` for non-balance related information (more effective) and `staking.account` that enhances query for all the information previously found `.info`

Changes:

- Cleanup `DoubleMap` hashing to always hash over the full value (in the case of `Vec<T>`, this includes the length)
- Update democracy derives to take care of nextTally and lowestUnbaked
- Add additional derives for both council & treasury
- Alignment with latest Polkadot/Substrate master branch types


## 0.98.1 Dec 04, 2019

Contributed:

- Make the TypeScript generation script mor re-usable (Thanks to https://github.com/xlc)
- Add `.entries()` for all map-types, returning storage keys and values
- Add `.signAsync` to submittable extrinsics (Thanks to https://github.com/c410-f3r)

Changes:

- Cleanup circular references between internal dependencies
- Support for new Substrate democracy with preimages in derive
- Alignment of types with Substrate/Polkadot master branches


## 0.97.1 Nov 29, 2019

- **Breaking change** Add the passing on an explicit `Registry` to all calls to `createType` as well as all codec classes. If you are upgrading form an older version, use the [migration guide](UPGRADING.md) to walk through the changes required.
- **Breaking change** The metadata classes have been moved from `@polkadot/types` into `@polkadot/metadata`. If you explicitly create `Metadata` classes, you now would need to do so with the `import Metadata from '@polkadot/metadata';` This is a decorated class, where the previous metadata is now available on `Metadata.metadata`, alongside decorated `consts.*`', `tx.*` and `query.*`.
- **Breaking change** Session `Keys` defaults to 4 keys now (Substrate master), depending on your node config, you would want to override with e.g. `Keys: 'SessionKeys3'` (1, 2, 3, 4, 5 & 6)
- **Breaking change** `ValidatorPrefs` now default to the new percentage commission model, to use the previous `validatorPayment`, you can override with `ValidatorPrefs: 'ValidatorPrefsTo196'`

Changes:

- `api.derive.*` now has built-in memomization
- Various fixes and cleanups to `api.derive.*` including era length progress and vesting calculations
- Aligned all types with the latest Polkadot & Substrate, including Kusama CC3
- Support for Metadata V9, which adjusts the hashing methods of storage entries
- Support for Metadata V10 (still un-released), which includes prefixed map support


## 0.96.1 Nov 09, 2019

Changes:

- Updated types for latest Kusama
- Add `filterRecords` (in addition to `findRecord`) on submittable results
- Various ABI v2 contract fixes
- Update derive for elections (incl. RunnersUp) and heartbeat derives (with blocks & messages)
- Add vesting totals & locked breakdowns to derive balances
- Update council derives for the latest Substrate master support (with constants)
- Derive cleanups, including sharing of instances between the API and internal to derives


## 0.95.2 Oct 25, 2019

Changes:

- Temporary removal of `account_nextIndex` use, will be re-added in a future release


## 0.95.1 Oct 25, 2019

- **Breaking change** `Call.injectMethods` is moved to `Call.injectMetadata` to align with `Events` (This _should_ not be used externally, however mentioned as breaking here)

Changes:

- Support Extrinsic V4 with additional signature indicator (Latest Polkadot/Substrate/Kusama)
- Adjust subscription update checks to avoid duplicated data updates
- Support Metadata V8 (exposes per-module `decl_error` definitions)
- Support next generation contracts ABI (with additional type definitions)
- Support for `BTreeMap<K, V>` types and definitions
- All latest Polkadot & Substrate types (as per master branches)

## 0.94.1 Oct 07, 2019

Changes:

- Add handling of `Result<Ok, Error>` definitions
- Adjust API cloning now takes RPC filters from source into account
- Simplification of isPedantic checks and less overhead on StorageData types
- Cleanups and fixes around RPC and derive type definitions
- Fix `derive.imOnline.receivedHeartbeats` to query via indexes
- Adjustment of `api.derive.elections.{approvalsOf|approvalsOfAt}` to allow ss58 address input
- Cleanup `Enum` `.eq` handling to be more exhaustive
- Add documentation for custom extrinsic formats (advanced chains)
- Update to latest substrate master metadata


## 0.93.1 Sep 26, 2019

Changes:

- Support for Kusama CC2
- In extrinsic submission, use `rpc.account.nextIndex` to retrieve the nonce when available
- For TypeScript users `api.query.*.*` is now properly typed for default Substrate calls, i.e. `api.query.balances.freeBalance(...)` will return a `Balance` type. Additionally the `api.queryMulti` and `.multi` on queries not allow generic type params.
- Add `api.rpc.accounts.nextIndex`, `api.rpc.contracts.call` and `api.rpc.rpc.methods` calls. Optional calls (such as account/contracts) is decorated based on the results from `rpc.methods`, so they don't show up on nodes where they are not active.
- Updated types to support the latest Polkadot/Substrate master changes
- Support recursive type registration (self-referencing via `Box`) in addition to better sanitation of user-defined-types
- Documentation and example updates (thanks mostly to contributions)


## 0.92.1 Sep 12, 2019

Changes:

- The API now correctly sets the ss58 prefix as retrieved from the chain properties via `ss58Format`
- Bump to `@polkadot/util` 1.4.1, removing use of `ExtError`
- The `Keyring` from `@polkadot/keyring` is now exposed on the API as well. You can do `import { Keyring } from '@polkadot/api'` - this alleviates the need for extra dependencies (apart from `@polkadot/api`), and since the keyring is critical for signing operations, aligns everything in one bundle
- Support the latest Polkadot & Substrate master branches (incl. metadata updates)
- Getting started documentation has been made available


## 0.91.1 Sep 09, 2019

Changes:

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


## 0.90.1 Aug 24, 2019

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

Changes:

- Support substrate v7 metadata
- The `Method.findFunction(callIndex)` (allowing decoding of raw data), is now available on `api.findCall(callIndex)`. To keep backwards compatibility, it is still available on `GenericCall.findMethod` but the `api.findCall` is recommended and suggested.
- The `types/codec/createType` has been moved to `types/codec/create` with the same exports. If you explicitly imported from here (and not doing the suggested `import { createType } from '@polkadot/types`), the reference needs to be updated


## 0.82.0-beta.x Jul 28, 2019

Changes:

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


## 0.81.1 Jun 14, 2019

Changes:

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


## 0.80.1 Jun 04, 2019

Changes:

- Support for mortal transactions
- Better DoubleMap storage support
- api-derive cleanups, including additional info for balances.all and taking.info returning redeemable and locked balances
- Added SignaturePayloadRaw for better offline signing support
- Updated metadata for current substrate master
- Misc. cleanups and fixes


## 0.79.1 May 22, 2019

Changes:

- DoubleMap query support
- Support latest EventRecord metadata (substrate master)
- Introduce RuntimeVersion type overrides in api/nodeCompat.ts
- Add `api.queryMulti` and `api.query.<module>.<method>.multi`
- Convert `api.derive.*` to use multi queries
- `types/codec/Set` now extends the base JS `Set` (**breaking change**: `set.values` -> `set.strings`)
- Breaking: rename `meta.arguments` to `meta.args` in function metadata (`arguments` is a JS reserved word)
- Add `toRawType` on all type classes (breakdown into primitive types)


## 0.78.1 May 08, 2019

Changes:

- Fix linked-maps (not working since 0.77.1)
- Convert Usize to U32 (as found in WASM environments)
- Allow pre-bundled metadata in API create & constructor
- Don't clobber existing keys in structs when auto-adding fields
- Additional logging when constructing Structs as to where failures occur
- Do type assertion on all exposed asXXX getters
- Metadata updates for substrate (WithdrawReasons, ContractInfo)


## 0.77.1 Apr 25, 2019

Changes:

- Support Metadata v4, which introduces the use of a custom hasher to hash storage map keys.
- Add TreasuryProposal (not the same as democracy, type aliased)


## 0.76.1 Apr 03, 2019

Changes:

- Caching improvements (duplicate queries, no duplicate subscriptions)
- Experimental contract API
- Update @polkadot/keyring to enable Alice's stash account on dev chains
- Update @polkadot/util-crypto with smaller footprint


## 0.75.1 Mar 29, 2019

Changes:

- Start journey to 1.0


## 0.53.1 Mar 29, 2019

Changes:

- Change spelling to US English as per substrate master (1.0-rc1). Breaking changes as a result:
  - For extrinsic status results, if you have checked the type returns, i.e. `result.type === 'Finalised'` now check on the status for `result.status.isFinalized` or `result.status.isBroadcast`, ... (the `type` property is now accessible only on `result.status.type`)
  - If using `subscribeFinalisedHeads` update this to `subscribeFinalizedHeads` (likewise `getFinalisedHead` should be updated to `getFinalizedHead` and `derive.bestNumberFinalized`)
- The underlying ss58 address checksums have changed
  - The updated keyring with support for this has been made available
  - All examples have been updated with sr25519 addresses (with the new checksums)


## 0.52.1 Mar 28, 2019

Changes:

- Support queries to linked mapped storage (found in new staking interfaces)
- Add `derive.staking.controllers` to retrieve all active staking controllers
- Align types as per latest substrate master
- PeerInfo from system_peers does not have the index field anymore (dropped in substrate)
- Allow parsing of V3 metadata with DoubleMap support
- Check for single instances for api and types as they are loaded (assertSingletonPackage)


## 0.51.1 Mar 25, 2019

Changes:

- Support metadata V2 as per latest substrate master
- Update metadata with new types as per latest substrate master


## 0.50.1 Mar 23, 2019

Changes:

- Latest util-crypto (usage of WASM with JS fallbacks if not available)
- Update upstream @polkadot dependencies (for new crypto)


## 0.49.1 Mar 20, 2019

Changes:

- Fix large message signing on non-known nodes (default is now hashing, there has been enough time between upgrades)


## 0.48.1 Mar 18, 2019

Changes:

- Pull in new sr25519 capable keyring for dev nodes
- When using dev mode, it assumes that the node is the latest with derived sr25519 keys


## 0.47.1 Mar 14, 2019

Changes:

- Swap to publishing -beta.x on merge (non-breaking testing)


## 0.46.1 Mar 01, 2019

Changes:

- Extended type registration to now handle internal types as well. Additionally the built-in Extrinsic type can now we overridden with a custom version.
- Where `Extrinsic` and `Method` is used as types, consider importing `{ IMethod, IExtrinsic }` from `@polkadot/types/types`, especially in the cases where this is used from a `SubmittableExtrinsic`
- The `typeRegistry` constant is now `getTypeRegistry()` as a function


## 0.45.1 Feb 19, 2019

Changes:

- Storage with option values now correctly return `Option<Type>` and is indicated as such in the documentation

```js
// old
const ll = await api.query.session.lastLengthChange();

console.log('ll', ll /* BlockNumber */); // would be 0 if not set yet

// new
const llo = await api.query.session.lastLengthChange();

console.log('llo', llo.unwrapOr('not set') /* Option<BlockNumber> */)
```


## 0.44.1 Feb 19, 2019

Changes:

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


## 0.43.1 Feb 14, 2019

Changes:

- Introduces support for the new keyring with sr25519 support in addition to ed25519. While this does not change the exposed API, it is considered breaking since @polkadot/keyring has interface changes. (Unless needed, don't rush the upgrade)


## 0.42.1 Jan 31, 2019

Changes:

- Support for substrate hash signing with implVersion >= 18
- Changed signatures for Extrinsic signing, this should not have (much) of an impact since it is generally not used directly. SubmittableExtrinsic (as exposed by the API), supports the old-style use.


## 0.41.1 Jan 26, 2019

Changes:

- Support the V1 metadata specification from Substrate in addition to the currently testnet active V0 version


## 0.40.1 Jan 16, 2019

Changes:

- The API interfaces now require a WS-compatible provider, e.g. subscription support is a must. Previously the HTTPProvider could be use (although it was very limited in the interactions).


## 0.39.1 Jan 11, 2019

Changes:

- The Promise API now returns a `Promise<UnsubFunction>` instead of `UnsubFunction` when making subscriptions.


## 0.38.1 Jan 08, 2019

Changes:

Substrate has been updated with a breaking new transaction format where the Index/Nonce is now encoded as a Compact. This change is being rolled out to both Alexander (Polkadot testnet) as well as Charred Cherry (Substrate testnet) - transactions between old and new are not compatible.


## 0.37.1 Jan 04, 2019

Changes:

api-observable has been removed. This was only used in /apps and inconsistent with the api/rx and api/promise APIs. Future work will include derives like was included in api-observable into the base.

Tuples now return single types when only one type is available, i.e. `(AccountId)` would now resolve as `AccountId`. The extra type wrapper adds no benefit to users here.


## 0.36.1 Jan 03, 2019

Changes:

Api Promise has been updated in the way we deal with subscriptions. Previously a subscription returned `Promise<number>` where the caller was to keep track of the id and use it in subsequent unsubscribes. Now any subscriptions return an unsubscribe/destroy function `(): void`, that is use for removing the subscriptions, e.g.

```js
const unsubscribe = api.query.balance.freeBalance(Alice, (balance) => {...});

unsubscribe(); // here we destroy the subscription
```


## 0.35.1 Dec 20, 2018

Changes:

Swapped to new metadata structures from Substrate. If the API is not working with your node, update Substrate to latest master branch. (Or 0.9.1 for Charred Cherry). Dropped support for old metadata as found as far back as BBQ Birch.


## 0.34.1 Dec 18, 2018

Changes:

Changed the send signature (for future expansion of eg. events) to return `result: { status: ExtrinsicStatus }` instead of `status: ExtrinsicStatus`. For most cases where only status `type` checks are used, i.e. `status.type === 'Finalised'` this should not be a breaking change. Deep inspection of the status object however will need to adapt.

## 0.33.1 Dec 06, 2018

## 0.32.1 Nov 21, 2018

## 0.31.1 Oct 10, 2018

## 0.30.1 Sep 27, 2018

## 0.29.1 Sep 14, 2018

## 0.28.1 Aug 11, 2018

## 0.15.1 Aug 07, 2018

## 0.14.1 Jun 23, 2018

## 0.13.1 May 29, 2018

## 0.12.1 May 18, 2018

## 0.11.1 May 16, 2018

## 0.10.1 May 07, 2018

## 0.9.1 Apr 24, 2018

## 0.8.1 Mar 15, 2018

## 0.7.1 Jan 25, 2018

## 0.6.1 Dec 03, 2017

## 0.5.1 Nov 28, 2017

## 0.4.1 Nov 19, 2017

## 0.3.1 Nov 19, 2017

## 0.2.1 Nov 18, 2017
