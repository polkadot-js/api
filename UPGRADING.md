# Upgrade guide

This is an upgrade guide for users of the API. It does not attempt to detail each version (the [CHANGELOG](CHANGELOG.md) has all the changes between versions), but rather tries to explain the rationale behind major breaking changes and how users of the API should handle this.

While we try to keep the user-facing interfaces as stable as possible, sometimes you just need to make additions to move forward and improve things down the road, as painful as they may be. Like you, we are also users of the API, and eat our own dog food - and as such, feel any pains introduced first.


## 0.97.1 (and newer)

The 0.97 series lays the groundwork to allow type registration  to be ties to a specific chain and a specific Api instance. In the past, 2 Api instances in the same process would share types, which mean that you could not connect to 2 independent chains with different types. This is very problematic for Polkadot chains, where the idea is to connect to multiple chains.

When using the Api, a new `Registry` will be created on using `new Api(...)` or `Api.create(...)` and this will be transparently passed when creating types. In the cases where you create type instances explicitly or create type classes for injection, you would need to make adjustments.

### Type classes

In a number of instances, developers are creating classes and making these available for interacting with their chains. For instance, an example of a custom type could be -

```js
import { Struct, Text, u32 } from '@polkadot/types';

export class Preferences extends Struct {
  constructor (value?: ahy) {
    super({
      name: Text,
      id: u32
    }, value);
  }

  ...
}
```

In the current iteration, the underlying `@polkadot/types` bases structures now require a `Registry` to be passed as the first parameter. This means that the above signature would be adjusted to -

```js
// the next import is only required for TypeScript
import { Registry } from '@polkadot/types/types';
import { Struct, Text, u32 } from '@polkadot/types';

export class Preferences extends Struct {
  constructor (registry: Registry, value?: ahy) {
    super(registry, {
      name: Text,
      id: u32
    }, value);
  }

  ...
}
```

Where the type is used or returned from the API, the `Registry` will be automatically passed to class creation.

### createType

Previously, when creating a type instance such as `BlockNumber`, you would do `api.createType('BlockNumber', <initValue>)`, this is unchanged. In the cases where you directly import from `@polkadot/types`, the following pattern is required -

```js
import { createType } from '@polkadot/types';

...
const blockNumber = createType(api.registry, 'BlockNumber', 12345);
```

In some cases, you would want to explicitly pass a `Registry` interface to the API, instead of relying on it explicitly. This is generally applicable in the cases where you want to use the `createType` independently from the API -

```js
import { ApiPromise } from '@polkadot/api';
import { TypeRegistry, createType } from '@polkadot/types';

...
const registry = new TypeRegistry();
const blockNumber = createType(registry, 'BlockNumber', 12345);
const api = await ApiPromise.create({ registry });
```

### Extrinsic metadata

In some applications, the undocumented `findFunction` has been used to determine the Api has the metadata for a specific extrinsic. The has been exposed on top of `GenericCall`, and it typically used in applications such as signers. Along with the compulsory registry, the above functions have been moved to the `Registry` itself, so if you previously had -

```js
const { meta, method, section } = GenericCall.findFunction(extrinsic.callIndex);
```

You need to change it to -

```js
const { meta, method, section } = registry.findMetaCall(extrinsic.callIndex);
```

## 0.90.1 (and newer), from 0.81.1 (and older)

The 0.90.1 release caters for the [Kusama network](https://kusama.network/) and pulls in all the changes to support [Substrate 2.x](https://github.com/paritytech/substrate), all while maintaining backwards compatibility to allow operation on networks such as [Polkadot's Alexander](https://polkadot.network/).

To support the network and the new transaction formats, a number of changes were made to how extrinsics are handled and signed. In addition, as support for ongoing work where type definitions are to be supplied by the actual node metadata, the foundation has been laid to move to type definitions as opposed to classes for runtime types.

### Modules

The first thing to be aware of is breakages when connecting to any new network, here older networks such as Alex are unaffected - the node metadata defines exactly what is available to the chain, so endpoints that worked yesterday still works today.

There will no doubt be breakages in using calls to now non-existent endpoints (as populated by the metadata) if you are upgrading your nodes to Substrate 2.x. Substrate 2.x has had a number of internal changes, where new modules and features are introduced (such as `babe` and `technicalCommittee`), some modules have been renamed (such as `contract` -> `contracts`) and modules such as `session` has been reworked to a large degree.

To cater for both 1.x and 2.x support, the [@polkadot/api-derive](packages/api-derive) endpoints, do feature detection for the node type and should continue working as-is. Additionally, a number of new derives have been added, specifically around elections.

### Type renames

To better align with the actual types from the metadata, and avoid (too much) context switching, some types from the `@polkadot/types` have been renamed. These include -

- `Vector` -> `Vec`
- `U{8|16|32|64|128|256}` have been removed, only the lowercase version of these remain, i.e. `u32`.

### Type usage

The [@polkadot/api](packages/api) has always handled the conversion of types for parameters when making calls or queries. For example, when making a transfer to `BOB` (address), any of the following is valid -

- `api.tx.balances.transfer(BOB, 12345)` - value specified as a number
- `api.tx.balances.transfer(BOB, '12345')` - value specified as a string
- `api.tx.balances.transfer(BOB, '0x3039')` - value specified as a hex
- `api.tx.balances.transfer(BOB, new BN(12345))` - value specified as a [BN](https://github.com/indutny/bn.js/)

Internally the API will take the input and convert the value into a `Balance`, serialize it using the SCALE codec and transfer it to the node. In some cases users would construct the `Balance` type manually, by importing the class and calling `new` on it. This last approach has now been removed, and where classes are still available (limited reach), discouraged.

First the rationale behind this - in all cases Substrate is very flexible, so while Polkadot (and the Substrate base), define `type Balance = u128`, this can be different between chains. (This also applies to the majority of built-in supported types). As such, type construction should be done via the actual registered types.

```js
// this is applicable everywhere, import the type creator, using the registry
import { createType } from '@polkadot/types';

// construct the Balance, of type Balance (type is inferred and available with TS)
const value = createType('Balance', 12345);

// use value here as you normally would
...
```

The impact of this will be noticeable, if you have been importing the old-style type classes from `@polkadot/types`, those imports are not available anymore. For creation, just pass everything through the `createType`.

If a TypeScript user, you can find the updated type (it is a type definition only, not a class), under `@polkadot/types/interfaces`. To do type casting, using interfaces -

```js
// import the TypeScript runtime interfaces we wish to use
import { Balance, Hash } from '@polkadot/types/interfaces';

// import the primitives we wish to use
import { createType, Compact, Vec, u32 } from '@polkadot/types';

// define an interface we want to use inside our code
interface MyProps {
  balance: Compact<Balance>;
  changes: Vec<Hash>;
  counter?: u32;
}

// assign something to this structure
const props = {
  balance: createType('Compact<Balance>', 12345),
  changes: createType('Vec<Hash>', []) // empty for now
};
```

### Type definitions

One of the major pain points in working with a custom Substrate node is the definition of types to cater for chains. There are 2 approaches: defining types via a JSON format or extending your own classes in TypeScript (or JS) and injecting these. For the latter category, there are some impacts in the way you define these.

If using JSON definitions, nothing changes, your types are still defined as -

```json
{
  "MyStruct": {
    "balance": "Compact<Balance>",
    "values": "Vec<AccountId>",
    "counter": "u32"
  }
}
```

For the definition of any structures using the Substrate specific types as classes, some adjustments are needed. Since the base modules types are now not available in classes, however it is needed for definitions, the following approach is encouraged -

```js
// import the ClassOf, it works the same as `createType` (along with type detection)
// and acts as a replacement for the direct import and use of specific classes
import { ClassOf, Struct, u32 } from '@polkadot/types';

export class MyStruct extends Struct {
  constructor (value?: any) {
    super({
      balance: ClassOf('Compact<Balance>'),
      values: ClassOf('Vec<AccountId>'),
      counter: u32
    }, value);
  }
}
```

Internally the [@polkadot/types](packages/types) package now only defines classes where there are specific encoding logic applied. For all other types, the definitions are done via a JSON-like format and then the TypeScript definitions are generated from these. (In a world where nodes inject types and the type definitions are not needed, this functionality will be useful to allow TS developers to auto-generate type definitions based on what the node defines.)

### Signing transactions (Signer interface)

For users of the API signer interfaces (such as extensions and mobile signers), the interfaces have undergone some changes to cater for the extrinsic v2 format as defined by Substrate. If you are only supporting current chains (e.g. Alexander), no changes are required, however the old `sign` interface does not support chains such as Kusama, so all users are encouraged to upgrade to the new `signPayload` interface.

This has already been implemented in both the [polkadot-js extension](https://github.com/polkadot-js/extension/blob/5f22f67d558655c605eb6f6beecef6826ed6c159/packages/extension/src/page/Signer.ts#L16v) as well as the [simple single signer](https://github.com/polkadot-js/api/blob/d56905d1b566be6f17eb570ac01448378fc91b67/packages/api/test/util/SingleAccountSigner.ts#L37).
