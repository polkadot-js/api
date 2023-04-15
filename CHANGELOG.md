# CHANGELOG

## master

Contributed:

- Add support for Fungibles runtime api (Thanks to https://github.com/bkontur)

Changes:

- Update to latest Polkadot, Kusama & Substrate metadata
- Minimal support for a `@tsconfig/stricter` setup


## 10.3.2 Apr 10, 2023

Changes:

- Revert throw on MSB BitVec (`toHuman()` output is still incorrect)


## 10.3.1 Apr 9, 2023

Changes:

- Add `BitVec.toBoolArray()` helper function
- Tie down `BitVec` from metadata to only allow (default) Lsb
- Support for `TransactionPaymentApi/4`
- Update to latest Polkadot, Kusama & Substrate metadata


## 10.2.2 Apr 1, 2023

Contributed:

- Support expanded Nimbus lookups to Collators (Thanks to https://github.com/grenade)

Changes:

- Update to latest Polkadot, Kusama & Substrate metadata


## 10.2.1 Mar 25, 2023

Contributed:

- Add support for new Frontier `AccountId20` mapping (Thanks to https://github.com/koushiro)
- Adjust MMR RPCs & runtime calls to align with latest (Thanks to https://github.com/Lederstrumpf)

Changes:

- Use Promise resolve/reject to track state in typegen on-chain metadata retrievals
- Adjust signing header retrieval, catering for discarded state fallbacks
- Add support for `ParachainHost v4` runtime calls
- Basic support for markdown generation for different chains (only Kusama & Polkadot currently added)
- Add not-to-be-used `ISize` type support (same as `USize`, throwing on use - added for completeness)
- Ensure `AccountId20.eq` does not fail on null/undefined inputs
- Expand tests around `toU8a()` where the `isBare` flag is is being used
- Update to latest Polkadot, Kusama & Substrate metadata


## 10.1.4 Mar 19, 2023

Changes:

- Add methods for v2 `Metadata_*` runtime calls


## 10.1.3 Mar 15, 2023

Changes:

- Remove incorrect `.module.` specifiers in typegen code
- Mark unsafe RPC methods (and include in `rpc.md` generation)


## 10.1.2 Mar 11, 2023

Changes:

- Adjust type exports to remove invalid generated exports from `/src/`
- Apply missing `/*#__PURE__*/` exports in `api-derive`


## 10.1.1 Mar 11, 2023

Contributed:

- Fix yargs usage inside ESM modules (Thanks to https://github.com/conr2d)

Changes:

- Align runtime APIs with latest Substrate
- Update to latest Polkadot, Kusama & Substrate metadata
- Use consistent `.js` imports in source files (TS moduleResolution)


## 10.0.1 Mar 4, 2023

Contributed:

- Expose per-endpoint stats for providers (Thanks to https://github.com/jeluard)
- Adjust ink! primitive extraction for v4 (Thanks to https://github.com/statictype)

Changes:

- Ensure that provider disconnect clears all subscriptions
- Adjust typegen to internally use `import()` (catering for ESM provided types)
- Swap TS -> JS compiler to use tsc (from babel)
- Adjust all tests to use `node:test` runner (ESM variants)
- Update to latest Polkadot, Kusama & Substrate metadata


## 9.14.2 Feb 19, 2023

Changes:

- Don't allow `WsProvider.connect()` on an open connection (creates resource leaks)
- Adjust typegen to use metadata-defined aliases in query return decoration
- Update to latest Polkadot, Kusama & Substrate metadata


## 9.14.1 Feb 12, 2023

Changes:

- Extract aliases for `*_runtime::Runtime{Call, Event}` from metadata
- Update to latest Polkadot, Kusama & Substrate metadata


## 9.13.6 Feb 5, 2023

Contributed:

- Align `eth_getTransactionCount` with frontier (Thanks to https://github.com/alko89)

Changes:

- Additional override for `Compact<{ refTime: u64 }>` chains
- Add script to retrieve local rpc, version & metadata for typegen


## 9.13.5 Feb 2, 2023

Changes:

- Adjust `Weight` alias for 1.5 chains
- Ensure correct registry is pass through for runtime TS generation


## 9.13.4 Feb 1, 2023

Changes:

- None from 9.13.3 (The previous version had npm registry publishing issues)


## 9.13.3 Feb 1, 2023

Changes:

- Adjust `Weight` alias detection to cater for `WeightV0/u32` overrides (e.g. early Kusama blocks)


## 9.13.2 Jan 29, 2023

Changes:

- Allow null as valid param to Int/UInt


## 9.13.1 Jan 29, 2023

Contributed:

- Add support for V3 of `TransactionPaymentApi` (Thanks to https://github.com/notlesh)

Changes:

- Adjust `Weight` alias detection (moved from `PortableRegistry` -> `Registry`)
- Move default (typegen) weight alias to `WeightV2` (does not affect runtime detection)
- Prepare metadata docs from chain generation for future cli arguments
- Add base type object for (future) composite types
- Apply additional JSDoc comments into `PortableRegistry`
- Update to latest Polkadot, Kusama & Substrate metadata


## 9.12.1 Jan 22, 2023

Changes:

- Add `isStorageFallback` on the `Codec` interface. (`true` if entry was created from a metadata fallback value from an empty storage item)
- Ensure `api.queryMulti` returns empty result when no keys are provided
- Add explicit Array checks on `Vec/Tuple` inputs
- Align `Struct.{toU8a/toPrimitive/toHuman/toJSON}` population of results
- Apply memoization to batched API queries
- Update to latest Polkadot, Kusama & Substrate metadata


## 9.11.3 Jan 15, 2023

Changes:

- Update to latest Polkadot, Kusama & Substrate metadata


## 9.11.2 Jan 13, 2023

Changes:

- Ensure `derive.democracy.preimages` retrieves correctly from (current-gen) `preimage`


## 9.11.1 Jan 8, 2023

- **Breaking change** For users of `ScProvider` you now need to explicitly pass `@substrate/connect` as a parameter. This means the code needs to be adjusted as follows -

```js
import { ScProvider } from '@polkadot/api';
import * as Sc from '@substrate/connect';

const provider = new ScProvider(Sc, Sc.WellKnownChain.polkadot);
```

Contributed:

- Fix for typegen with nested tuples (Thanks to https://github.com/sander2)
- Expose blockNumber on submittable results (Thanks to https://github.com/ken-centrality)

Changes:

- The `ScProvider` interface now needs receive an `@substrate/connect` instance
- Along with the above `ScProvider.WellKnownChains` has been removed
- Update to latest Polkadot, Kusama & Substrate metadata


## 9.10.5 Dec 27, 2022

Changes:

- Revert 9.10.4 paymentInfo changes (fallback only works on struct, not `Weight`)


## 9.10.4 Dec 25, 2022

Changes:

- Align runtime `paymentInfo` calls with Substrate (w/ decoding fallbacks)


## 9.10.3 Dec 17, 2022

Changes:

- Add override for Structs where `registry` appear as a field
- Update to latest Polkadot, Kusama & Substrate metadata
- Kusama 9320/9340/9350 & Westend 9330/9340/9350 upgrade blocks


## 9.10.2 Dec 9, 2022

Changes:

- Fix `derive.balances.account` detection for system vs balances


## 9.10.1 Dec 4, 2022

- **Important** Since [9.2.1](https://github.com/polkadot-js/api/releases/tag/v9.2.1) the recommended way of accessing `WellKnownChain` for light clients is via `ScProvider.WellKnownChain`. This release removes the explicit export from the `ScProvider` root.

Changes:

- Adjust payloads to use `BlockHash` types (as applicable)
- Adjust type-only imports in `ScProvider`
- Update to latest Polkadot, Kusama & Substrate metadata
- Update to `@polkadot/util` 10.2.1


## 9.9.4 Nov 28, 2022

Changes:

- Fix dispatchQueue preimage retrieval in derives
- No change from incorrectly published 9.9.3


## 9.9.2 Nov 27, 2022

Changes:

- Update to latest Polkadot, Kusama & Substrate metadata


## 9.9.1 Nov 20, 2022

Changes:

- Update to latest Polkadot, Kusama & Substrate metadata
- Adjust code for latest Eslint & TS released versions


## 9.8.2 Nov 16, 2022

Changes:

- Adjust `api.rpc.payment.queryInfo` to always return `WeightV1` responses
- Mark `api.rpc.payment.queryInfo` as deprecated (will be in a future Substrate version)


## 9.8.1 Nov 13, 2022

Contributed:

- Params encoding fix for `api.rpc(...)` (Thanks to https://github.com/xlc)
- Support for `WeightV2` contract interfaces (Thanks to https://github.com/jasl)

Changes:

- Cater for `TransactionPaymentApi/2` runtime calls
- Add getters for `has{DryRun, PaymentInfo}` on submittables (feature detection)
- Polkadot 9300, Kusama 9300 & Westend 9310/9320 upgrade blocks
- Update to latest Polkadot, Kusama & Substrate metadata


## 9.7.1 Nov 6, 2022

Contributed:

- Update `@substrate/connect` to latest (Thanks to https://github.com/wirednkod)
- Add `api.rpc(method, ...params)` support (Thanks to https://github.com/xlc)

Changes:

- Align `ScProvider` code structure with other providers
- Add `isClonable` getter on providers (some, e.g. sc doesn't support this)
- Update to latest Substrate metadata


## 9.6.2 Oct 30, 2022

Changes:

- Adjust historic `DispatchError` type for `statemint/statemine`


## 9.6.1 Oct 23, 2022

Contributed:

- Update `@substrate/connect` to latest (Thanks to https://github.com/wirednkod)
- Use `.?` operators in submittable class (Thanks to https://github.com/shunjizhan)

Changes:

- Cater for latest Substrate `DispatchError` (additional preimage statuses)
- Adjust `api.derive.democracy.*` to return `imageHash` as `HexString` (as applicable, supports current-gen preimages)
- Adjust `api.derive.preimages.*` to retrieve via `democracy` or `preimage` pallets
- Ensure `apiAt.<section>.<method>.key(...)` passes through the correct arguments
- Apply fallback for Weight downgrades (V2 >> V1 detection)
- Update to latest Substrate metadata
- Polkadot 9291 & Westend 9300 upgrade blocks


## 9.5.2 Oct 16, 2022

Changes:

- Add `ParachainHost` version 3 runtime calls


## 9.5.1 Oct 8, 2022

- **Important** While the API witll detect and decorate the weight type based on V1 or V2, the default `Weight` type (used in runtime calls and RPCs) has not been swapped from the old `u64` variant. This means that on new chains using `WeightV2`, the TS decorated type will still reflect the old version.

Changes:

- Adjust handling of `Weight` type for V2 structures
- Add alis definitions for `Weight{V1, V2}` (used for type overrides)
- Cater for weight v2 (along with v1 pass-through) extrinsics in `api-contract`
- Update to latest Substrate, Polkadot & Kusama metadata


## 9.4.3 Oct 2, 2022

Contributed:

- Allow for new `ink_primitives` types (Thanks to https://github.com/statictype)
- Fix contracts runtime `instantiate` call params (Thanks to https://github.com/statictype)

Changes:

- Align staking derive redeemableSum with Rust source (`currentEra` vs `activeEra` usage)
- Add `@deprecated` flag to RPC interface generation (`contracts_*` & `state_get{Pairs/Keys}`)
- Polkadot 9280/9281, Kusama 9291 upgrade blocks


## 9.4.2 Sep 24, 2022

Contributed:

- Allow for re-subscriptions on `ScProvider` (Thanks to https://github.com/wirednkod)

Changes:

- Align derives to cater for latest (& previous) Substrate interfaces
- Update to latest Substrate, Polkadot & Kusama metadata


## 9.4.1 Sep 17, 2022

Contributed:

- Update `@substrate/connect` to latest (Thanks to https://github.com/wirednkod)

Changes:

- Cater for v1.5 Weight JSON representation (via RPC)
- Polkadot 9270, Kusama 9280 & Westend 9290 upgrade blocks
- Update to latest Substrate, Polkadot & Kusama metadata


## 9.3.3 Sep 6, 2022

Contributed:

- Ensure JS reserved words are aliassed in types (Thanks to https://github.com/dqbd)

Changes:

- Fix and adjust tests for `AccountId{32, 33}`


## 9.3.2 Sep 4, 2022

Changes:

- Cater for v1.5 Weight types (structure to inner value)
- Westend 9280 & Kusama 9271 upgrade blocks
- Update to latest Substrate, Polkadot & Kusama metadata


## 9.3.1 Sep 3, 2022

Changes:

- Support for ink! v4 metadata
- Adjust pool runtime call `pendingRewards` return type
- Support for `AccountId33` (raw/compressed 33-byte ecdsa)
- Update to latest Substrate, Polkadot & Kusama metadata


## 9.2.4 Aug 27, 2022

Changes:

- Remove extra error logging in internal rpc-core Observable
- Allow for embebbed `Enum` in `Struct` typegen (no `lookupName`)


## 9.2.3 Aug 21, 2022

Contributed:

- Update `@substrate/connect` to latest (Thanks to https://github.com/wirednkod)

Changes:

- Adjust `StakingLedger` with fallback for Kusama 1050 (2 different structures on-chain)
- Remove `TryRuntime` state call definitions (only off-chain usage)
- Update to latest Substrate, Polkadot & Kusama metadata


## 9.2.2 Aug 16, 2022

Changes:

- Replace `rpc.payment.queryInfo` usage with `call.transactionPaymentApi.queryInfo`
- Ensure that `api.call.*` is decorated on historic blocks


## 9.2.1 Aug 13, 2022

- **Important** If using `import { WellKnownChain } from '@polkadot/rpc-provider'` it is recommended that you rather use `ScProvider.WellKnownChain` (the import may be dropped in a future major version)

Changes:

- Don't assume non-empty path specifiers on portable variant/composites
- Explicit param length checks for all generic portable overrides
- Re-export `ScProvider` in `@polkadot/api`, aligning with `{Http, Ws}Provider`
- Expose `WellKnownChain` as static on `ScProvider.WellKnownChain`
- Checks for non-available interface types & runtime/rpc definitions
- Ensure `.entries/.keys` arguments is less than map-entry query
- Add Polkadot 9260 upgrade block
- Add Westend 9271 upgrade block
- Update to latest Substrate metadata


## 9.1.1 Aug 6, 2022

Contributed:

- Update `@substrate/connect` to latest (Thanks to https://github.com/wirednkod)
- Handle both string and object keys in `CodecMap` (Thanks to https://github.com/CertainLach)

Changes:

- Add `noInitWarn: boolean` flag to API options, disabling runtime & RPC warnings
- Only log missing runtime calls on new (detected) specVersion
- Add shallow/one-blockHash cache for `api.at(...)` instances
- Add Westend 9270 upgrade block
- Update to latest Substrate, Polkadot & Kusama metadata


## 9.0.1 Jul 30, 2022

- **Breaking change** The decorated field getters on `Struct` were moved to the prototype class for performance reasons. While `struct.<field>` access still behaves in the same way, with the same results, this does mean that the prototype getters are not visible when doing an `Object.keys(struct)` or when doing an object spread.
- **Breaking change** Deprecated interfaces have been removed including `tx.sign(...)` (use `signAsync`), `Result.{is, as}Error` (use `{is, as}Err`) as well as storage `.range(...)` operations.
- **Breaking change** Deprecated interfaces on `api-contract` have been removed. Always ensure you pass an options object to construction and query methods.
- **Breaking change** Contracts access via `api-contract` will now detect the usage of `storageDepositLimit` in params, if not available the contract interfaces will not be decorated.

Changes:

- Decorate `Struct/Enum/Set` field getters on class prototypes
- Convert `api-contract` usage of `api.rpc.*` to `api.call.*`
- Drop support for contract runtimes without `storageDepositLimit` (runtime `contractsApi` only has support for latest)
- Export `api.rx.call.*` for internal usage (derive, contracts)
- Remove old-style param passing as opposed to options in `api-contract`
- Support for alliance/motion collective derives
- Add Kusama 9260 upgrade block
- Add Polkadot 9230 & 9250 upgrade blocks
- Add Westend 9251, 9260 & 9261 upgrade blocks
- Update to latest Substrate, Polkadot & Kusama metadata


## 8.14.1 Jul 23, 2022

Contributed:

- Update `@substrate/connect` with dual ESM/CJS support (Thanks to https://github.com/wirednkod)

Changes:

- `{BTree|Hash}Map.toHuman()` now display `Raw` keys as ascii (if detected)
- Add `toPrimitive()` to all base `Codec` interfaces (string/boolean/number)
- Adjust metadata conversion with `objectSpread` (where missing)
- Support for `TransactionPaymentCallApi` runtime interface
- Check `registry.getModuleInstances` against metadata paths (fallback)
- Update to `@polkadot/util` 10.1.1
- Update to latest Kusama metadata (Substrate & Polkadot are current)


## 8.13.1 Jul 16, 2022

Changes:

- Add `derive.chain.subscribeFinalized{Heads, Blocks}` which returns all finalized, no skips
- Support Moonbeam author extraction on `derive.chain.*` (w/ shared logic dedupe)
- Cater for older `BlockBuilder 2/3/4` & `GrandpaApi 2` runtime interface definitions
- Support for `NominationPoolsApi` runtime interface
- Support for `DebugRuntimeApi` runtime interface, Frontier-specific
- Support for `NimbusApi` runtime interface (& older `AuthorFilterAPI`)
- Add additional historic `DispatchError` enum variant for asset chains
- Add Kusama 9250 upgrade block
- Update to latest Substrate, Polkadot & Kusama metadata


## 8.12.2 Jul 10, 2022

Changes:

- Update to `@polkadot/util` 10.0.2


## 8.12.1 Jul 9, 2022

Changes:

- Adjust `Opaque{Metadata, Multiaddr, PeerId}` decoding to `Opaque<Bytes>`
- Fix historic `XcmV0` definitions for `BuyExecution`
- Adjust type generation to correctly cater for ambient definitions
- Improve type argument generation for `Option<...>` types
- Adjust usage of deprecated `@polkadot/util` methods
- Runtime call typegen from `system.version` constant value
- Expose query flags on `derive.staking.account`
- Update to latest Substrate, Polkadot & Kusama metadata
- Update to `@polkadot/util` 10.0.1


## 8.11.3 Jul 5, 2022

Changes:

- Ensure historic `DispatchError` is always the non-current variant
- Adjust type signatures for non-required use of `@types/node`


## 8.11.2 Jul 4, 2022

Changes:

- Bump to `@polkadot/util-crypto` 9.7.2 (w/ `@polkadot/wasm-crypto` 6.2.2)


## 8.11.1 Jul 2, 2022

Contributed:

- Adjust `api.{tx, query, ...}` with no external side-effects (Thanks to https://github.com/btwiuse)

Changes:

- Support for `state_call` definitions via API config (exposed on `api.call.*`)
- Base type definitions for `state_call` from Substrate, Polkadot & Orml
- Align runtime types with latest Substrate master
- Type generation for runtime call definitions (internal & external)
- Update to latest Substrate, Polkadot & Kusama metadata


## 8.10.1 Jun 26, 2022

Contributed:

- Bump `@substrate/connect` to 0.7.7 (Thanks to https://github.com/wirednkod)
- Support `feeHistory` & `maxPriorityFeePerGas` eth RPCs (Thanks to https://github.com/crystalin)

Changes:

- Align `BeefyPayload` with Substrate master
- Use `static get [Symbol.species] ()` for `Array` & `Uint8Array` types
- Add support for (optional, non-runtime recommended) `f32` & `f64` types
- Add future-use `AbstrateBigInt` wrapper extension
- Update Codec-internal performance tests
- Add Westend 9250 upgrade block
- Update to latest Substrate, Polkadot & Kusama metadata


## 8.9.1 Jun 19, 2022

Contributed:

- Update `@substrate/connect` to 0.7.6 (Thanks to https://github.com/tomaka)

Changes:

- Deupe all internal type property getters
- Adjust `@polkadot/types-codec` asserts
- Rename `Base` type to `AbstractBase` (reflecting usage)
- Alias `blockHash` on `rpc.engine.createBlock` return
- Instantiate `Compact/UInt/Int` with `number` when passed
- Adjust name extraction in `PortableRegistry` (maintainability)
- Adjust string type path extraction (maintainability)
- Add Kusama 9230 upgrade block
- Update to latest Substrate metadata


## 8.8.2 Jun 14, 2022

Changes:

- Align historic `DispatchErrorModule` with `U8` variant
- Extend lookup type name generation when conflicts arrise
- Update to latest Substrate metadata


## 8.8.1 Jun 12, 2022

Contributed:

- Ensure typegen disconnects from WS endpoint (Thanks to https://github.com/rflechtner)

Changes:

- Ensure storage `Option<Option<Type>>` are correctly handled
- Cater for named event fields (expose on event data as available)
- Expose (partial) `runtimeVersion` on `api.at` interfaces
- Add aliases for `DispatchError{U8, U8a}` (default to new `U8a` variant)
- Align `DispatchError` definition with latest Substrate
- Adjust contracts RPC definitions with `DispatchError` return
- Ensure `blockHash` is passed through with `era` sign options
- Workaround for default calls on chains with non-standard indexes
- Optimization for value returns on merged queries
- Update `derive.bagsList` to detect `voterList` pallet
- Add Polkadot 9200/9220 & Westend 9230 upgrade blocks


## 8.7.1 Jun 4, 2022

Changes:

- Add internal merge of single storage queries
- Expose provider stats on API intrerface via `.stats`
- Adjust flag extraction for latest phragmen types
- Support for `Range` in typegen for `Enum`
- Add Kusama 9220 upgrade block


## 8.6.2 May 30, 2022

Changes:

- Don't apply default to `Option<bool>` opt-in
- Lower default historic LRU cache size (128 entries, 192MB est)
- Cater for updates required by TS 4.7.2


## 8.6.1 May 29, 2022

Changes:

- Add codec support for specialized `Option<bool>`
- Optimization for `createClass` with shortcut typeDef creation
- Optimization of `registry.getOrUnknown` with lookup cache
- Optimization of Array allocations in decoding
- Use `compactFromU8aLim` & `u8aConcatStrict` variants
- Adjust `.inspect()` for `ExtrinsicPayload`
- Adjust Kusama `StakingLedger` for runtime 1051
- Update to latest Substrate, Kusama & Polkadot static metadata


## 8.5.1 May 22, 2022

Contributed:

- Bump `@substrate/connect` to 0.7.5 (Thanks to https://github.com/wirednkod)

Changes:

- Adjust extrinsic inspect for signed/unsigned
- Add support for `mmr_generateBatchProof` RPC
- Add additional `isCodec` checks to error/event `.is`
- Add support for `Vec<Option<X>>` in typegen
- Update to latest Substrate, Kusama & Polkadot static metadata


## 8.4.2 May 15, 2022

Changes:

- Expand/fix TS typings for `MortalEra.{birth, death}(...)`


## 8.4.1 May 14, 2022

Changes:

- Added support for typegen over `Range/RangeInclusive` types
- Add explicit support for `Call` typegen (inclusive of non-defaults)
- Deupe `wss://` handling in `polkadot-types-from-{chain, defs}`
- Allow for optional `definitions.ts` in typegen (only use chain)
- Optimize `Compact<*>` decoding in Uint8Array streams
- Use `I*` interfaces for extrinsic payload getters
- Re-add support for historic linked-map queries
- Update to latest Substrate, Kusama & Polkadot static metadata
- Add latest upgrade blocks for Polkadot, Kusama & Westend


## 8.3.2 May 8, 2022

Contributed:

- Bump `@substrate/connect` to 0.7.4 (Thanks to https://github.com/wirednkod)

Changes:

- Adjust `BTreeSet` in typegen top-level generation


## 8.3.1 May 1, 2022

Contributed:

- Fetch metadata via WS for `types-from-defs` (Thanks to https://github.com/alex-nax)

Changes:

- Extract metadata v14 `BTreeSet` types into correct type
- Assert to ensure that `[u8; <size>]` has exact sizes (non-u8a inputs)
- Adjust `tx.paymentInfo` signing process for existing signature
- Add Kusama 9190 upgrade block
- Add Westend 9200 upgrade block
- Update to latest Substrate, Kusama & Polkadot static metadata


## 8.2.1 Apr 24, 2022

Contributed:

- Make WS timeout check configurable (Thanks to https://github.com/isSerge)

Changes:

- Don't fake signature for `paymentInfo` if already signed
- Remove `api.derive.balances.fees` (use direct constants as applicable)
- Add Westend 9190 upgrade block
- Update to latest Substrate, Kusama & Polkadot static metadata


## 8.1.1 Apr 17, 2022

Contributed:

- Adjust typegen for `Vec<{ struct: <type> }>` (Thanks to https://github.com/zannis)
- Adjust typegen __dirname for ESM (Thanks to https://github.com/drewstone)

Changes:

- Fix `entriesPaged` where no `at?: BlockHash` is specified
- Apply windcard matches for `democracy::vote::Vote` and `identity::type::Data`
- Adjust default "no RPC response" timeout to 60s
- Update to latest Substrate, Kusama & Polkadot static metadata


## 8.0.2 Apr 11, 2022

Changes:

- Detect typegen template location for commonjs execution


## 8.0.1 Apr 10, 2022

- **Breaking change** In this major version the commonjs outputs are moved to a sub-folder. Since the export map and main field in package.json does reflect this change, there should be no usage changes. However the packages here will all need to be on the same version for internal linkage.

Contributed:

- Improve `rpc-provider` README (Thanks to https://github.com/josepot)
- Add handling for `Vec<[<Type>;<length>]>` in typegen (Thanks to https://github.com/zannis)

Changes:

- Add support for `apiAt.tx(...)` to construct at a specific point
- Add basic `api.derive.bagsList.*` support
- Return sorted names for `api.registry.lookup.names`
- Optimize JSONRPC requests/response handling
- Output commonjs files under the `cjs/**` root
- Update to latest Substrate, Kusama & Polkadot static metadata
- Add latest Polkadot 9180 upgrade block
- Update to `@polkadot/util` 9.0.1


## 7.15.1 Apr 3, 2022

Contributed:

- Export `WellKnownChain` for `substrate-connect` (Thanks to https://github.com/josepot)
- Add support for `{entries, keys}Paged` in `.at` (Thanks to https://github.com/xlc)
- Align `WeightsPerClass` interface on `maxExtrinsic` (Thanks to https://github.com/HackFisher)

Changes:

- Cater for `DispatchError` with `error` as `[u8; 4]`
- Add in-flight cache for parallel same-version metadata queries
- Cater for lazy `@polkadot/util-crypto` init (adjustment for React Native)
- Update to latest Substrate, Kusama & Polkadot static metadata
- Update latest Westend & Kusama (up to 9180) upgrade blocks


## 7.14.3 Mar 28, 2022

Changes:

- Ensure `BitVec` with MSB does not fail (used in Polkadot `DeliveredMessages`)


## 7.14.2 Mar 28, 2022

Changes:

- Don't export `ScProvider` top-level in `@polkadot/rpc-provider`


## 7.14.1 Mar 27, 2022

Contributed:

- Add `ScProvider` for `@substrate/substrate-connect` (Thanks to https://github.com/josepot)
- Add support for `BTree{Map, Set}` in typegen (Thanks to https://github.com/CertainLach)

Changes:

- Only explicitly support LSB on `BitVec` types
- Change `toHuman()` on `BitVec` to output default LSB
- Add `bytes{Sent, Recv}` to provider stats
- Clear connection timeout on provider `disconnect()`
- Add support for `dev_getBlockStats` RPC


## 7.13.1 Mar 19, 2022

**Important** This contains an upgraded version of `@polkadot/wasm-crypto`. For users of asm.js, e.g. React Native, there are some additional upgrade instructions in the release notes for this version https://github.com/polkadot-js/wasm/releases/tag/v5.0.1

Contributed:

- Expose custom RPC error details (Thanks to https://github.com/intendednull)
- Improve custom RPC error typings (Thanks to https://github.com/MOZGIII)

Changes:

- Support for rejection of hanging RPC requests (30s timeout)
- Add `.stats` to provider interfaces with running counters
- Add support for `state_trieMigrationStatus` RPC
- Update to latest Substrate, Kusama & Polkadot static metadata
- Update to `@polkadot/util` 8.6.1
- Additional workaround for Vite bundling


## 7.12.1 Mar 13, 2022

Changes:

- Allow for correct handling of `Option<Null>` types
- Adjust for bundlers where `import.meta.url` is undefined
- Update to `@polkadot/util` 8.5.1


## 7.11.1 Mar 6, 2022

Changes:

- Chunk derive retrieval of `era{Exposure, Prefs, Slashes}`
- Ensure that signer (passed via options) do get updated
- Kusama & Polkadot 9170 upgrade blocks
- Update to latest Substrate, Kusama & Polkadot static metadata
- Adjustments for TypeScript 7.6.2


## 7.10.1 Feb 27, 2022

Contributed:

- Ensure `updateId` is correct in signer callbacks (Thanks to https://github.com/coolcorexix)

Changes:

- Ensure `BTreeSet` has the correct decoded length
- Attach `PortableRegistry` at point of metadata set
- Add `derive.chain.getBlockByNumber`
- Retrieve named reserves in `derive.balances.all`
- Ensure `v13 -> v14` metadata conversion attaches primitives
- Update to latest Substrate, Kusama & Polkadot static metadata


## 7.9.1 Feb 20, 2022

Contributed:

- Support historic queries via blockNumber (Thanks to https://github.com/stwiname)

Changes:

- Align `grandpa_proveFinality` with Substrate
- Allow for derive augmentation (swap base type to interfaces)
- Kusama 9160 upgrade block
- Update to latest Substrate, Kusama & Polkadot static metadata


## 7.8.1 Feb 14, 2022

Contributed:

- Add `isHistoric` flag to ETH RPCs (Thanks to https://github.com/stwiname)
- Align contract instantiate types with Substrate (Thanks to https://github.com/kwingram25)

Changes:

- Adjust map header output type with lookup id
- Re-enable all `BitVec` tests for `toU8a`
- Expose `txIndex` as event index on extrinsic results
- Allow inspection of Codec encoding (experimental)
- Allow inspection of storage key encoding (experimental)
- Update to latest Substrate, Kusama & Polkadot static metadata
- Update `@polkadot/util` to 8.4.1


## 7.7.1 Feb 6, 2022

Upgrade priority: Low. Recommended for users with long-running scripts.

Contributed:

- Fix rpc-provider LRU memory leak (Thanks to https://github.com/gdethier)

Changes:

- Don't warn on `Lookup*` types missing (these are resolvable)
- Don't clear injected `PortableRegistry` types on runtime upgrade
- Clear warning for `Call`/`Event` on non-meta v14 runtimes
- Add `beefy_getFinalizedHead` RPC support
- Update to latest Substrate, Kusama & Polkadot static metadata


## 7.6.1 Jan 30, 2022

Upgdare priority: Low. Recommended for users with long-running scripts and those chains based around the latest Substrate master versions.

Contributed:

- Fix memory leak on `.raw` RPC calls (Thanks to https://github.com/r0t0r-r0t0r)

Changes:

- Adjust extraction of `Call` & `Event` types for metadata v14
- Adjust historic `WinningData` and `SlotRange` types (36-entry variant)
- Emit `decorated` event on API on metadata decoration
- Dedupe and extend `WrapperKeepOpaque/WrapperOpaque`
- Align `Range/RangeInclusive` usage with similar types
- Adjust bounty derive, return empty on no `{treasury, bounties}.bounties`
- Ensure handling of all `TypeDefInfo` keys in extraction
- Add support for `rpc.contracts.uploadCode`
- Workaround for generators where `#private = { this... }` yields undefined
- Update to latest Substrate, Kusama & Polkadot static metadata


## 7.5.1 Jan 23, 2022

Upgrade priority: Low. Recommended for users of the latest contract pallet and ink! versions.

Contributed:

- Add additional namespaced contract tests (Thanks to https://github.com/VargSupercolony)

Changes:

- Adjust `Registry` consistency, augment extensions
- Add `.multi` support on `api.at(...).<section>.<method>`
- Add support for ink! metadata V3 with payable constructors
- Cleanup ink! metadata parsing, allowing for easier extension
- Expose `contract.{query, tx}.<method>.meta`, aligning with API
- Fix storage metadata, aligning method with decorated name
- Adjust typegen, only using exportInterface
- Added Kusama/Polkadot 9151 upgrade block (known types)
- Update to latest Substrate, Kusama & Polkadot static metadata


## 7.4.1 Jan 15, 2022

Upgrade priority: Medium. Required for all chains using `Range` and `RangeInclusive` types. Also includes better error handling for number conversions.

Changes:

- Asserts for invalid number format inputs (MAX_SAFE_INTEGER, float)
- Ensure `Range/RangeInclusive` variant check does not fail on encoding
- Ensure non-option calls in api-contract are marked as `@deprecated`
- Added Kusama 9150 upgrade block (known types)
- Update `@polkadot/util` to 8.3.2


## 7.3.1 Jan 9, 2022

Upgrade priority: Low. Maintenance upgrade, tracking the latest `@polkadot` libraries.

Changes:

- Extend support for `WrapperKeepOpaque` with internal decoding (allowed to fail)
- Adjust max-entries in historic provider LRU
- Update to latest Substrate/Polkadot/Kusama metadata
- Update `@polkadot/util` to 8.3.1
- Update package paths under ESM


## 7.2.1 Jan 3, 2022

Upgrade priority: Low. Recommended for users generating TS chain-specific augmentations.

Changes:

- Convert contract `ReturnFlags` to set (as opposed to bare `u32`)
- Adjust chain-specific augmentation to not auto-add RPC imports
- Ensure package path is availble under ESM & CJS


## 7.1.1 Dec 26, 2021

Upgrade priority: Low. Recommended for users of contracts form Substrate master & Polkador/Kusama TS app developers where specific chain augmentation would be helpful.

Contributed:

- Expose `storageDepositLimit` on contract options (Thanks to https://github.com/kwingram25)

Changes:

- Expose `@polkadot/api-augment/{kusama, polkadot, substrate}` for specific augmentations (The bare `@polkadot/api-augment` is equivalent to `/substrate`, keeping the existing behavior)
- Expose `@polkadot/types-augment/{lookup, registry}` variants (The bare `@polkadot/types-augment` applies both)
- Expose `txHash` on submittable results, e.g. `tx.signAndSend(..., ({ txHash }) => ...)`
- Align casing for TS & exposed queries (adjusts for `ALLCAPS` entries)
- Additional tests for `Option` codec (explicit in expectations)
- Update to latest Substrate, Kusama & Polkadot static metadata


## 7.0.2 Dec 21, 2021

Upgrade priority: Low. Recommended for applications where collective derives with aliasses are being used.

Changes:

- Fix alias module mapping in collective derives
- Update `dispathchQueue` derive to align with latest Substrate
- Update to latest Substrate metadata


## 7.0.1 Dec 20, 2021

Upgrade priority: Low. Recommended for TS users with their own non-Polkadot/Kusama chains.

- **Breaking changes** For TS users the default API augmentation is now optional. This means that the API, for TypeScript, is not decorated by default with the Substrate types and encpoints. TS users should add a singular `import '@polkadot/api-augment';` in their code to restore old behavior. A full writeup of the rationale and other options can be found [in the FAQ](https://polkadot.js.org/docs/api/FAQ#since-upgrading-to-the-7x-series-typescript-augmentation-is-missing)

- **Breaking change** To cater for the above, chain-specific interfaces generated with older versions may not be compatible with the current version of the API. Additionally, TS interfaces generated with this version of the API is not compatible with older API versions.

Contributed:

- Add contracts storage deposit support (Thanks to https://github.com/statictype)
- Do not throw error on socket closes (Thanks to https://github.com/xcaptain)

Changes:

- Split `@polkadot/types-{codec, create}` packages from `types`
- Extract `@polkadot/{api, rpc, types}-augment` (now optional, TS-user applied)
- Rework build steps to use TS project references
- Add Polkadot 9140 upgrade block
- Update to latest Substrate, Kusama & Polkadot static metadata


## 6.12.1 Dec 13, 2021

Upgrade priority: Low. Recommended for users of contracts on the current Substrate master version and TS users who generate metadata v14 interfaces.

Changes:

- Add support for contracts V2 ABI metadata
- `CheckNonZeroSender` signed extension support
- Remove old-style capabilities detection (unneeded with metadata v14+)
- Generated TS Enum interfaces now expose the `type` (with allowed values)
- Split local & package imports in generated TS interfaces
- Add Kusama 9130 upgrade block
- Internal maintainability cleanups


## 6.11.1 Dec 5, 2021

Upgrade priority: Low. Maintenance upgrade, tracking the latest `@polkadot` libraries.

Changes:

- Align `state_traceBlock` RPC with Substrate
- Bump static metadata for latest Substrate, Polkadot & Kusama


## 6.10.3 Nov 30, 2021

Upgrade priority: Medium. Recommended for 6.10.x users

Changes:

- Fix ss58Prefix extraction


## 6.10.2 Nov 30, 2021

Upgrade priority: Low. Aligns TS augmentation and decoration with older behavior for ALL_CAPS identifiers.

Changes:

- Adjust augmentation interface consistency with top-level declarations
- Update `@polkadot/util` to 8.0.4 with adjusted `stringCamelCase`


## 6.10.1 Nov 29, 2021

Upgrade priority: Low. Recommended for users of `HttpProvider` and for chains generating types using TS augmentation.

Changes:

- Fix for HttpProvider init (RPC sections with only subscriptions)
- Re-order imports in lookup type augmentation interfaces
- Bump static metadata for latest Substrate, Polkadot & Kusama


## 6.9.2 Nov 22, 2021

Upgrade priority: Medium. Pulls in `@polkadot/util-crypto` fix for TS projects.

Changes:

- Update `@polkadot/util-crypto` with TS compilation work-around


## 6.9.1 Nov 21, 2021

Upgrade priority: Medium. Recommended for metadata v14 parachains. For TS users, the package now support TypeScript 4.5.2 and allows extraction of user types from metadata v14.

Contributed:

- Lookup TS generation for all metadata v14 chains (Thanks to https://github.com/savudani8)
- Update `BeefySignedCommitment` type (Thanks to https://github.com/czl1378)

Changes:

- Adjust runtime `*::{Call, Event}` matching for metadata v14
- Adjust derive decoration with (optional) known methods
- Expose `*{Call, Event, Error}` TS types for metadata v14
- Align Option `.toJSON` output with Substrate input
- Optimize Enum, Struct, Option & Number decoding paths
- Ajust PascalCase conversions with function from util
- Prepare pre-v13 types for optional injection
- Adjustments for TS 4.5.2 support (flatten type infers)


## 6.8.1 Nov 11, 2021

Upgrade priority: Low. Recommended for chains with non-MultiSignature variants where `paymentInfo` is required.

Changes:

- Adjust `paymentInfo` signatures to cater for non-MultiSignature variants
- Remove `::generic::` from names & namespaces under metadata v14
- Add Polkadot 9122 upgrade block
- Cleanup Polkadot/Kusama/Westend/Rococo known types (>= v14 metadata)
- Internal `decorateMethod{Promise, Rx}` renamed to `to{Promise, Rx}Method`
- Add RPC provider-level LRU for historic requests
- Add optional known runtime version param to internal `rx.queryAt`


## 6.7.2 Nov 9, 2021

Upgrade priority: Low. Recommended for chains on metadata v14 with non-default `Address` implementations.

Changes:

- Detect `AccountId` & `Address` types via `SpRuntime*` definitions
- Adjust api-derive call ordering when using `.queryAt`


## 6.7.1 Nov 7, 2021

Upgrade priority: Low. Internal maintenance updates, focussed on internal optimizations.

Changelog:

- Optimize Extrinsic & block handling (Thanks to https://github.com/nazar-pc)
- Add `account::AccountId20` mapping (Thanks to https://github.com/joelamouche)

Changes:

- Use new-gen `voteLockingPeriod` in democracy derives (as available)
- Dynamically inject getters for `Extrinsic` payloads
- Optimize caching for complex constructed type classes per registry
- Convert metadata, rpc and api to use lazy decoration
- Split u8a decoding paths for `Vec` (different from general path)
- Keep track of initial u8a decoded length inside base Codecs
- Extract multi property assignments for `Struct`, `Set`, `Json` & `Enum`
- Move `PortableRegistry` location inside `@polkadot/types/metadata`
- Bump static metadata for latest Substrate, Polkadot & Kusama


## 6.6.1 Nov 1, 2021

Upgrade priority: Low. Internal maintenance updates.

Changes:

- Fix construction for `palletVersion` keys with correct prefix
- Add Polkadot `EthereumAddress` as a known `PortableRegistry` override
- De-dupe `PortableRegistry` namespace splitting operations
- Optimize internal `AbstractArray` & `Struct` u8a decoding
- Shortcut `Struct` construction from `Struct` instance
- Use internal `lookupName` in `createClass` (allows deeply recursive lookups)
- Codec `toHex()` will now correctly return the TS `HexString` type
- Update known upgrade blocks for Westend & Kusama
- Bump static metadata for latest Substrate, Polkadot & Kusama


## 6.5.2 Oct 26, 2021

Upgrade priority: Low. Recommended for users with `.at` queries on unknown blocks.

Changes:

- Adjust `toHuman` on `Call` to return names & (not only) values
- Allow for optional known `RuntimeVersion` to short-circuit `api.at`
- Ensure `Struct` decodes fully on `null` input (equivalent to `undefined` & `{}`)


## 6.5.1 Oct 24, 2021

Upgrade priority: Low. Internal maintenance upgrades.

Contributed:

- Add `Auction` to Polkadot pre-0.9.11 `ProxyType` (Thanks to https://github.com/wirednkod)

Changes:

- Ecah module now exposes the Substrate-added `palletVersion` storage item
- Adjust Websocket `maxReceivedFrameSize` under Node
- `TypeDef` structures now contain the `typeName` from metadata v14 on fields
- Fix browser bundle imports for xcm-mapping (move to `types-known`)
- Expose all extracted type names in `PortableRegistry`
- Adjust `toJSON` (Ascii) output detection on `Raw`
- Adjust `api.rpc.*.*.raw(..args)` return to the actual over-the-wire JSON result
- Remove `api.rpc.*.*.json(..args)` since it now overlaps with new `.raw`
- Bump static metadata for latest Substrate, Polkadot & Kusama


## 6.4.2 Oct 18, 2021

Upgrade priority: Low. Recommended for Westmint runtime 500+

Changes:

- Ensure `SignerPayload` correctly serializes `Option` with `None`
- Add Ethereum `BlockV{0, 1, 2}` types, aligning with latest Frontier
- Additional tests for metadata serialization/de-serialization


## 6.4.1 Oct 17, 2021

Upgrade priority: Low. Recommended for Kusama & Polkadot runtime 9110+

Changes:

- Adjust Statemint known types for version 4+
- Adjust balance derives to return multiple vesting schedules
- Adjust crowdloan derives to use paged key retrieval
- Ensure account indices (derived) are `Accountindex` types
- Adjust metadata v14 to include top-level type field from metadata
- Filter metadata v14 unused enum fields in TS generation
- Adjust derives to use more metadata v14 types on returns
- Add Kusama & Polkadot upgrade blocks for 9100/9110
- Align contract usage with latrest `PortableRegistry` (remove old-generation)
- Adjust contracts `InstantiateReturnValue` type (no rent projection after 267)
- Adjust for eslint v8 checks
- Don't run any online tests on CI by default (uncontrolled external dependencies)


## 6.3.1 Oct 9, 2021

Upgrade priority: Low. Recommended for Kusama & Polkadot runtime 9100+

Changes:

- Mark `api.query.*.*.at` as deprecated (use `api.at`)
- Expose `queryMulti`, `findError` and `findCall` on `api.at`
- Optimize parallel metadata retrieval/decoration
- Rework derive `.at` to ensure no additional metadata calls
- Adjust Xcm types for Kusama, Polkadot, Westend (V1 & V2 usage)
- Fix Xcm Fungibility type
- Add upgrade blocks for Westend
- Prepare for v14 metadata swap in Kusama/Polkadot (9110 runtime)
- Adjust metadata wilcard path matching (event extraction)
- Bump static metadata for latest Substrate, Polkadot & Kusama


## 6.2.1 Oct 4, 2021

Upgrade priority: Low. Maintenance updates.

Contributed:

- Cater for new asset fee payment extension (Thanks to https://github.com/apopiak)

Changes:

- Extend error messages for malformed `queryMulti` inputs
- Correctly handle non-map queries passed to `queryMulti` in map form
- Use new metadata v14 lookup type in derive results
- Adjust definitions to infer TS types in `.multi` queries
- Fix TS lookup enum generation with nested Option & Tuple
- Bump static metadata for latest Substrate, Polkadot & Kusama


## 6.1.2 Sep 29, 2021

Upgrade priority: Low. Recommended for 6.x users using historic queries.

Changes:

- Fix `.at` queries/decoration for pre-V13 metadata
- Added `BridgeMessageId` & `SpecVersion` types for bridges
- Added `WrapperOpaque` encoding/decoding (as per latest Substrate)
- Bump static metadata for latest Substrate, Polkadot & Kusama


## 6.1.1 Sep 27, 2021

Upgrade priority: Low. Minor maintenance changes from the 6.0.x versions.

Contributed:

- Adjust bridges `OutboundLaneData` type (Thanks to https://github.com/HackFisher)
- Fix README 404 (Thanks to https://github.com/nblogist)

Changes:

- Add `childstate_getStorageEntries` RPC
- Allow for scale-info v0 -> v1 conversion


## 6.0.5 Sep 20, 2021

Upgrade priority: Low. Recommended for all users on 6.0.4 using `api.query.*.*.at` calls

Changes:

- Revert cross-registry (now-inactive) change introduced in 6.0.3
- Ensure `Option` is correctly imported for TS query generation


## 6.0.4 Sep 20, 2021

Upgrade priority: Low. Recommended for all users on 6.0.3 using `api.query.*.*.at` calls

Changes:

- `api.query.<module>.<method>.at` will now use `at.at(<hash>)`
- Use and expose `metadata/util/getSiName` to get human type names


## 6.0.3 Sep 19, 2021

Upgrade priority: Low. Recommended for all users on 6.0.2 using `api.query.*.*.at` calls

Changes:

- Fix `api.query.<module>.<method>.at` queries
- Adjust typegen formatting for metadata documentation


## 6.0.2 Sep 18, 2021

Upgrade priority: Low. Recommended for all users on 6.0.1, especially those using `api.query.substrate.*` calls

Changes:

- Fix `api.query.substrate.*` key generation


## 6.0.1 Sep 18, 2021

Upgrade priority: Low. Recommended for users of the latest Substrate/Polkadot with Metadata v14.

- **Important** The Metadata v14 change allows the metadata to expose the chain types. This has been a major overhaul of the metadata handling, hence the major version bump.

Contributed:

- Allow for `.clone` on Http provider (Thanks to https://github.com/ianhe8x)

Changes:

- Allow for Metadata v14 parsing & usage
- Align `DigestItem` to latest Substrate
- Adjust Kusama `IdentityInfo` type for historic versions
- All `null` values in bundles min/max
- Bump static metadata for latest Substrate, Polkadot & Kusama


## 5.9.1 Sep 13, 2021

Upgrade priority: Low. Recommended for chains using Xcm.

Contributed:

- Adjust Centrifuge `ProxyType` (Thanks to https://github.com/branan)

Changes:

- Additional types for parachain Disputes
- Adjust Xcm Error enum types
- Add Polkadot 9090 upgrade block
- Decoding enhancements with narrowing checks for TS


## 5.8.3 Sep 6, 2021

Upgrade priority: Low.

Changes:

- Adjust Statemint, Rococo and Westend Xcm overrides


## 5.8.2 Sep 6, 2021

Upgrade priority: Low.

Contributed:

- Correct Xcm V1 `MultiLocation` definitions (Thanks to https://github.com/apopiak)

Changes:

- Adjust Kusama Xcm overrides


## 5.8.1 Sep 6, 2021

Upgrade priority: Low.

Changes:

- Add `Auction` to Kusama `ProxyType` definition
- Adjust Xcm definitions with latest v1 & v2 types
- Support for `scale-info` 1.0 `Range` mapping
- Bump static metadata for latest Substrate, Polkadot & Kusama


## 5.7.1 Aug 29, 2021

Upgrade priority: Low.

Changes:

- Optimize `Vec` construction (no re-create on new arrays)
- Adjust output for enums in `toHuman`
- Adjust aliases for new parachain module locations
- Support for versioned xcm types (Polkadot master)
- Add support for `Range` in `PortableRegistry` (used in Metadata 14)
- Adjust balances derive for non-existent instances
- Ensure Statemint (current) defaults to xcm v0
- Add Kusama 9090 upgrade block


## 5.6.1 Aug 23, 2021

Upgrade priority: Low. Recommended for users of Xcm, preparing for Kusama/Westend 9100

Contributed:

- Support 0...N-1 args on `keys/entries` (Thanks to https://github.com/hamidra)

Changes:

- Updated XCM types, `AssetId`, `MultiAssets`, `MultiAssetV1`, `AssetInstanceV1`, `XcmOrderV1`
- Rename `Null` entry in `MultiLocation` to `Here` (Xcm V1)
- Westend 9090 upgrade block
- Bump static Substrate, Kusama & Polkadot metadata


## 5.5.2 Aug 19, 2021

Upgrade priority: Medium. Contains fixes for parachain types, affecting historic block retrieval on Kusama.

Changes:

- Adjust `ValidDisputeStatementKind` enum to latest version
- Only enable API health keepalive on connections supporting subscriptions


## 5.5.1 Aug 15, 2021

Upgrade priority: Low. Recommended for users of TS (`createType` and `bigint` adjustments)

Contributed:

- Add `Range` & `RangeInclusive` types (Thanks to https://github.com/c410-f3r)
- Always use TS `bigint` type (Thanks to https://github.com/ntduan)

Changes:

- Loosen pedantic check not to fail on all-empty values
- Extend `createType` auto-TS decoration for `BreeMap`, `BTreeSet`, `HashMap`, `Range`
- Add Polkadot 9080 upgrade block


## 5.4.1 Aug 9, 2021

Upgrade priority: Low. Recommended for potential users of NMap.

- **Important** The `ClassOf` alias for `createClass` has been removed, use `createClass` (with new generics) directly

Contributed:

- Enable `.keys()/.entries()` on NMap (Thanks to https://github.com/hamidra)

Changes:

- `createType<T = Codec>('...': K)` now returns `Codec` when `K` is not known
- `createType` does basic TypeScript type matching on the input type
- Handle `BitSequence` in `PortableRegistry`
- Ensure API `isConnected` is set before connect/disconnect events are fired
- Move all static test support files into `@polkadot/types-support`
- Align static Metadata with latest Substrate, Polkadot & Kusama
- Adjust v14 Metadata definitions to latest version


## 5.3.2 Aug 3, 2021

Upgrade priority: Low. Recommended for users of bridges.

Contributed:

- Add missing bridges types (Thanks to https://github.com/tomusdrw)

Changes:

- Align static metadata with latest Substrate


## 5.3.1 Aug 2, 2021

Upgrade priority: Low. Recommended for users of `api.at(...)` interfaces

Changes:

- Check specName & specVersion for historic registries (caters for runtime renames)
- Fix circular dependencies in codec utils
- Fix `api.at(<blockHash>)` to decorate with the correct storage hash
- Adjustments for upcoming metadata v14 in type creation & `PortableRegistry`
- Add Kusama 9080 upgrade block
- Add v13/v14 static metadata for Polkadot
- Align static metadata with latest Substrate


## 5.2.1 Jul 26, 2021

Upgrade priority: Low. Recommended for users of `BTreeMap` and `BTreeSet`

Contributed:

- Perform sorting on `BTree{Map, Set}`, aligning with Substrate (Thanks to https://github.com/Lezek123)

Changes:

- Adjust RPC to use `registry.createType` with optionality (required for metadata v14)
- Adjust alphabetical sorting for TS type generation
- Adjustments for upcoming metadata v14 in type creation & `PortableRegistry`
- Provide the capability to convert v13 Metadata to upcoming v14


## 5.1.1 Jul 19, 2021

Upgrade priority: Low. Recommended for users of XCM with type fixes.

- **Breaking changes** With the support for v14 metadata parsing, the `documentation` fields on metadata was renamed to `docs` for consistency, aligning with the SCALE type generators.

Contributed:

- Don't clear rpc decoration on Api clone (Thanks to https://github.com/ianhe8x)
- Align Xcm Junction type with Substrate (Thanks to https://github.com/dt665m)

Changes:

- Update `ParaPastCodeMeta` with `ReplacementTimes`
- Add mappings for `AccountId20` & `AccountId32` types
- Adjust scale-info types with Substrate (mapping for api-contracts to old)
- Allow nested structs in enum definitions & generation
- Allow for parsing of v14 metadata (not enabled by default, not merged into Substrate as of yet)


## 5.0.1 Jul 11, 2021

Upgrade priority: Low. Recommended for users of current-generation Substrate chains.

- **Breaking change** The `@polkadot/metadata` package has been removed, adjust imports to `@polkadot/types`
- **Important** Internally rxjs has been upgraded to the 7.0 version, affecting users of the `ApiRx` interface

Changes:

- Remove the `@polkadot/metadata` package, consolidate into `@polkadot/types`
- Contract reads will now expose an additional `gasRequired` (total estimated)
- Allow schedule derives to handle scheduler entries that cannot decode
- Add missing historic `Heartbeat: HeartbeatTo244` mapping to Westend
- Adjust Ws `.disconnect()` logic to always clear auto-connect
- Add `BlockNumberFor` type mapping
- Add Westend 9080 upgrade block
- Add `derive.crowdloan.contributions(paraId)`
- Allow building as a completely stand-alone browser bundle (experimental)
- Update to latest `@polkadot/x-rxjs` with RxJs 7.2
- Align static metadata with latest Substrate


## 4.17.1 Jul 5, 2021

Upgrade priority: Low. Allows cleaner access to multiple `.at` queries via new API.

Contributed:

- Added `Emergency` to `ElectionPhase` (Thanks to https://github.com/arjanz)

Changes:

- Added `await api.at(<blockHash>)` to retrieve API instances at a point
- Added `fallbackType` for type classes (only struct, as defined)
- Allow `instances` API config to drive derive collective locations
- Ensure correct registry is attached to historic metadata
- Align static metadata with latest Substrate


## 4.16.2 Jun 27, 2021

Upgrade priority: Low. Recommended for Polkadot with runtime >= 9050.

Changes:

- Correct `CompactAssignments` & `RawSolution` types for Polkadot


## 4.16.1 Jun 26, 2021

Upgrade priority: Low. Recommended for full from-genesis queries on Kusama.

Contributed:

- Adjust types for uniques (Thanks to https://github.com/Yuripetusko)

Changes:

- Add Kusama, Polkadot & Westend 9050 upgrade blocks
- Add Kusama & Westend 9070 upgrade blocks
- Adjust API decoration to lazy-create event and storage types
- Use TS `override` as applicable (with `--noImplicitOverrides` option)
- Add missing historic `Heartbeat: HeartbeatTo244` mapping to Kusama
- Remove duplication from contracts registry
- Add explicit check for scale-info 0.7+ (contracts index lookups)
- Align static metadata with latest Substrate


## 4.15.1 Jun 19, 2021

Upgrade priority: Medium. Recommended for all chains where Xcm is used (addition of new `XcmOrigin`)

Contributed:

- Added `ChargeAssetTxPayment` extension (Thanks to https://github.com/apopiak)

Changes:

- Allow for type decoding of nested fixed vectors, tuples and structs
- Added `childstate_getKeysPaged` RPC
- Add `XcmOrigin` mapping for `OriginCaller` generation
- Align static metadata with latest Substrate
- Adjust error message for contracts V3 (extrinsic from runtime)
- Correct module optionality in `api.derive.balances.account`
- Add alias for `GenericAddress` -> `GenericMultiAddress`
- Adjust metadata doc generation (keep spaces between subsequent lines)


## 4.14.1 Jun 14, 2021

Upgrade priority: Low. Internal adjustment only, no major external usage changes.

Contributed:

- Adjust types for uniques (Thanks to https://github.com/hamidra)
- Add `ValidationCodeHash` type (Thanks to https://github.com/andresilva)
- Extend `OriginCaller` type creation (Thanks to https://github.com/xlc)

Changes:

- Do strict length checking on `[u8; <length>]` type inputs
- Adjust keys/entries retrieval batch sizes
- Add upgrade block for Kusama 9040
- Use `BN` imports from `@polkadot/util`


## 4.13.1 Jun 6, 2021

Upgrade priority: Medium. Required for users connecting to Statemine and future Kusama upgrades.

Changes:

- Overrides for `westmint` spec (same as `statemint`)
- Adjust `tx.session.setKeys` TS augmentation to allow `string` & `Uint8Array` keys
- Add & adjust types for latest Cumulus code
- Added 9031-9033 upgrade block for Westend
- Update static metadata to latest Substrate
- Optimize map retrieval with split page sizes for keys & values
- Sanitizing `BN` imports to `type`-only as required


## 4.12.1 May 30, 2021

Upgrade priority: Low. Internal adjustment only, no major external usage changes.

Changelog:

- Update `FundInfo` type with Polkadot (Thanks to https://github.com/arjanz)

Changes:

- Allow storage queries with default keys values
- Align identity `Data` to limit to 32 bytes in the `Raw` enum (as per Substrate)
- Align static (test & docs-only) metadata with latest Substrate master
- Added 9030 upgrade blocks for Kusama & Westend
- Cleanup of Eth pallet RPC definitions
- Cleanup README for `@polkadot/rpc-core` (recommended for internal-usage only)
- Cleanup internal tests (no dangling handles, cater for Jest 27)


## 4.11.2 May 24, 2021

Upgrade priority: Low. Recommended where users are having TS mismatches with type definitions created on older versions.

Changes:

- Add backwards-compatible TS-only `AugmentedQueryDoubleMap` type (unused now in type generation)


## 4.11.1 May 23, 2021

Upgrade priority: Low. Recommended for users using staking entries on Polkadot and users of Substrate master.

Changes:

- Fix metadata v13 storage decoding on `NMap`
- Add augmentation & keys/entries for NMap types
- Return additional error information from internal u8a decoding failures
- Adjust Westend types for 16 nominators-only
- Add support for `DisallowSigned` (as per shell runtime) extension
- Display small hex-slice with u8a decoding failures
- Add `state_getChildReadProof` RPC
- Cleanup Rococo known types (only as used)
- Under Node.js allow for WS receiving up to 16MB messages
- Update entries/keys for max of 256 items per call


## 4.10.1 May 17, 2021

Upgrade priority: Medium. Recommended for uses of Polkadot/Kusama 9010 runtimes.

- **Breaking change** Support for the contracts V2 compatibility has been dropped in `@polkadot/api-contract`

Contributed:

- Expose RPC definitions via `.meta` (Thanks to https://github.com/jiqiang90)
- Adjust staking derives for chain-specific optional fields (https://github.com/WoeOm)
- Update base Centrifuge types (Thanks to https://github.com/branan)

Changes:

- Allow for `Bounded*` type usage (as per latest Substrate)
- Adjust internal TS definitions for providers
- Fix `ContractRx` query result definitions (no extra Observable)
- Handle contract call RPC result directly as `Raw` (returned as hex)
- Use `BN_*` constants as non-specified defaults in contract interfaces
- Remove all type overrides for node/node-template (API tracks latest)
- Contracts ABI now supports metadata version where indexes are 0-based
- Remove support for the old-style V2 contracts from `@polkadot/api-contract`
- Adjust historic decoration, return as-at registry via `getHeader`, `getMetadata` & `getRuntimeVersion`
- Adjust `VecFixed` to allow for the handling of hex inputs
- Adjust `Compact<*>` to allow for wrapped `toBigInt()` conversions
- Fix `isPedantic` decoding to correctly handle `Text`
- Cater for new `phragmenElection` module naming
- Add Kusama & Westend 9010 upgrade blocks
- Adjust `CompactSolution` for 24 nominators
- Bump static metadata to latest Substrate


## 4.9.1 May 6, 2021

Upgrade priority: Medium. Required for the next v0.9.0 Polkadot/Kusama chain upgrades where parachains are used.

- **Breaking change** The previously deprecated contracts interfaces, has been removed. Update to `<myContract>.query.*`, `<myContract>.tx.*` and `<myCode>.tx.*` interfaces as per the previous code usage hints.
- **Important** By default the `isPedantic` mode is now switched on for storage queries. This means that the API will fail on any types where the input/output decoding doesn't match 100%

Changes:

- Re-add isPedantic check on storage decoding
- `ConsensusEngineId` now implements `[u8;4]` (mapping closer to Rust source)
- Additional Xcm types
- Adjust parachain types
- Remove error logging on createType (details passed in error)
- Adjust `ContractInfo` type as per latest Substrate
- Adjust `DigestItem` type as per latest Substrate
- Adjust re-encoding of `BitVec` based on decoded length
- Added `contracts_instantiate`, `state_traceBlock` & `system_reservedPeers` RPCs
- Prepare for auto-capability detection with historic `.at` queries
- Add known upgrade block for Westend 900 & 9000
- Remove all deprecated interfaces inside `@polkadot/api-contracts`
- Initial support for NMap storage keys
- Support metadata v13 from Substrate (upcoming upgrade)
- Optimize historic metadata retrieval from rpc core


## 4.8.1 May 2, 2021

Upgrade priority: Low. Recommended when using or developing for parachains.

Changes:

- De-alias xcm `Outcome` (used in multiple pallettes)
- Adjust xcm types as per latest, e.g. `XcmError`
- Fix generate of well-known storage keys (e.g. `:code`)
- Optimize metadata unknown type validation
- Allow metadata creation for `Map` or `Record`
- Expose additional camelCase `method` on `AbiMessage` (maps to decorated name)
- Added explicit double-byte ss58 `AccountId` encoding test
- Add known upgrade block for Polkadot v30
- Cleanup WebSocket handlers when close event has been received
- Update to latest Substrate metadata


## 4.7.2 Apr 26, 2021

Upgrade priority: Low. Recommended for users of 4.7.1 using nvm

Changes:

- Update `EthBlock`/`EthHeader` types (as per Rust origin)
- Updated Xcm `OriginKind` enum
- Add derives for `membership`
- Cleanups on encodedLength calculations
- Update `.nvmrc` to reflect engines changes


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
