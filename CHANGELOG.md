# 0.80.1

- Support for mortal transactions
- Better DoubleMap storage support
- api-derive cleanups, including additional info for balances.all and taking.info returning redeemable and locked balances
- Added SignaturePayloadRaw for better offline signing support
- Updated metadata for current substrate master
- Misc. cleanups and fixes

# 0.79.1

- DoubleMap query support
- Support for mortal transactions via Era
- Support latest EventRecord metadata (substrate master)
- Introduce RuntimeVersion type overrides in api/nodeCompat.ts
- Add `api.queryMulti` and `api.query.<module>.<method>.multi`
- Convert `api.derive.*` to use multi queries
- `types/codec/Set` now extends the base JS `Set` (breaking: `set.values` -> `set.strings`)
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
- Add TresuryProposal (not the same as democracy, type aliassed)

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
- The underlying ss58 addess checksums have changed in the keyring along with the latest specs
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
- Update metadata with new types as per lastest substrate master

# 0.50.1

- Lastest util-crypto (usage of WASM with JS fallbacks if not available)
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
- Where `Extrinsic` and `Method` is used as types, considder importing `{ IMethod, IExtrinsic }` from `@polkadot/types/types`, especially in the cases where this is uased from a `SubmittableExtrinsic`
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

- Split primitives and types into seperate folders. This should not affect external use since the exports remain the same, however does have an impact where classes are referenced directly. e.g.

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

- Intrduces support for the new keyring with sr25519 support in addition to ed25519. While this does not change the exposed API, it is considerred breaking since @polkadot/keuyring has interface changes. (Unless needed, don't rush the upgrade)

# 0.42.1

- Support for substrate hash signing with implVersion >= 18
- Changed signatures for Extrinsic signing, this should not have (much) of an impact since it is generally not used directly. SubmittableExtrinsic (as exposed by the API), supports the old-style use.

# 0.41.1

- Support the V1 metadata specification from Substrate in addition to the currently testnet-active V0 version

# 0.40.1

- The API interfaces now require a WS-compatible provider, e.g. subscription support is a must. Previously the HTTPProvider could be use (although it was very limited in the interactions).

# 0.39.1

- The Promise API now returns a `Promise<UnsubFunction>` instead of `UnsubFunction` when making subscriptions.

# 0.38.1

Substrate has been updated with a breaking new transaction format where the Index/Nonce is now encoded as a Compact. This change is being rolled out to both Alexander (Polkadot testnet) as well as Charred Cherry (Substrate testnet) - transactions between old and new are not compatible.

# 0.37.1

api-observable has been removed. This was only used in /apps and inconsistent with the api/rx and api/promise APIs. Future work will include derivates like was included in api-observable into the base.

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
