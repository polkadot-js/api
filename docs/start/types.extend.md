# Extending types

Circling back to metadata, by default the metadata information (at this point in time), only returns the type names as they apply to any section, be it a call, event or query. As an example, this means that transfers are defined as `balances.transfer(AccountId, Balance)` with no details as to the mapping of the `Balance` type to a `u128`. (The underlying Polkadot/Substrate default)

Therefore to cater for all types, a mapping in done on the [@polkadot/types library](https://github.com/polkadot-js/api/tree/master/packages/types/src/interfaces) to define each of the types and align with their underlying structures as it maps to a default Polkadot or Substrate chain.

Additionally, the API contains some logic for chain type detection, for instance in the case of Substrate 1.x based chains, it will define `BlockNumber` & `Index` (nonce) as a `u64`, while for current-generation chains, these will be defined as `u32`. Some of the work in maintaining the API for Polkadot/Substrate is the addition of types as they appear and gets used in the Rust codebase.

There is the [recommendation](install.md#betas) to use a `@polkadot/api@beta` should you wish to track the master branches of Polkadot or Substrate, since master changes for the addition of new types do not make it into a stable release immediately.

## Extension

As a blockchain toolkit, Substrate makes it easy to add your own modules and types. In most non-trivial implementations, this would mean that developers are adding specific types for their implementation as well. The API will get to know the names of these types via the metadata, however it won't understand what they are, which means it cannot encode or decode them. Additionally, when a type is mismatched between the node and the API, the decoding can fail, yielding issues such as [Could not convert errors](FAQ.md#the-node-returns-a-could-not-convert-error-on-send) when submitting transactions.

To close this gap, the API allows for the injection of types, i.e. you can explicitly define (or override) types for the node/chain you are connecting to. In the simplest example, assuming you have a chain where your `Balance` type is a `u64` (as opposed to the default `u128`), you need to let the API know -

```js
...
const api = await ApiPromise.create({
  provider: wsProvider,
  types: {
    Balance: 'u64'
  }
});
```

The above introduces the `types` registry, effectively allowing overrides and the definition of new types. The override above would mean that immediately the API will treat all occurrences of `Balance` not as the default, but rather as the defined size.

## Field ordering

When defining any custom structures or types, it is critical that the following rules are applied -

- Map exactly to what is defined in the Rust code, i.e. defining a `SaleType` cannot be `u16` on the one end and `u32` on the other end. If mismatches occur, the serialization will fail.
- Ensure that the field order is maintained in all definitions. The SCALE serialization is binary and contains no field names in the serialization, only the encoded values. Any decoding is therefore done based on the size of the type and the order thereof in the definitions.

These rules apply everywhere. Always ensure that the types match exactly between the environments and that the ordering is maintained, be it for structs, tuples or enums.

## User-defined structs

Registration also applies to any type that can be found on a specific chain, i.e. we can add any types that is available on a specific node -

```js
...
const api = await ApiPromise.create({
  ...,
  types: {
    TransactionInput: {
      parentOutput: 'Hash',
      signature: 'Signature'
    },
    TransactionOutput: {
      value: 'u128',
      pubkey: 'Hash',
      sale: 'u32'
    },
    Transaction: {
      inputs: 'Vec<TransactionInput>',
      outputs: 'Vec<TransactionOutput>'
    }
  }
})
```

The example above defines non-primitive types (as found in the specific implementation) as structures. Additionally it also shows the user-defined types can depend on other user-defined types with `Transaction` referencing both `TransactionInput` and `TransactionOutput`. Here you can reference any known types, i.e. in the above we have referenced primitives such as `u32` and `Signature` (itself an alias for `H512`).

## Definition clashes

As explained in a previous section, the underlying API Codec types have a [number of built-in properties](type.basics.md) and in some cases it could be that your struct has a field that conflicts. These should be minimal, however it can happen. Take the following example where a defined `hash` property clashes with the same-name Codec property -

```js
Document: {
  name: 'Text',
  uri: 'Text',
  hash: 'Text'
}
```

For this struct the `hash` will not be exposed, but rather be kept as the built-in `hash`. At this point it is important to know that the values "over-the-wire" for calls, queries, events and consts is in binary form, i.e. it is an encoding of the values only. So on the JS side you can apply a rename with no ill-effects. Here we rename the `hash` to `docHash`, which mean the value will be available on `<instance>.docHash`.

```js
Document: {
  name: 'Text',
  uri: 'Text',
  docHash: 'Text'
}
```

## User-defined enum

One form of types that appear regularly is enums, these can be defined as follows -

```js
...
const api = await ApiPromise.create({
  ...,
  types: {
    CLikeEnum: {
      _enum: ['One', 'Two', 'Three']
    },
    TypedEnum: {
      _enum: {
        One: 'Compact<u32>',
        Two: 'u64',
        Three: 'Option<Balance>',
        Four: null
      }
    }
  }
});
```

As seen in these examples, types are built up in terms of primitives and aligns with the Rust-type definition model with `Compact`, `Option` and `Vec`.

## Node and chain-specific types

There are cases where a single API object can be used to connect to different types of nodes or chains, each including their own specific types. For these cases the `typesChain` and `typesSpec` injectors are made available.

As a real-world example, the [polkadot-js/apps UI](https://github.com/polkadot-js/apps) can connect to a variety of chains. To support [Edgeware](https://edgewa.re/) by default, the following node-type (`specName` as per the runtime version) overrides are made -

```js
import { IdentityTypes } from 'edgeware-node-types/dist/identity';
import { SignalingTypes } from 'edgeware-node-types/dist/signaling';
import { VotingTypes } from 'edgeware-node-types/dist/voting';

...
const api = await ApiPromise.create({
  ...,
  typesSpec: {
    edgeware: {
      ...IdentityTypes,
      ...SignalingTypes,
      ...VotingTypes
    }
  }
});
```

In the same way `typesChain` can be used to match on the actual chain name, i.e. for a chain such as Kusama, the following overrides can be made (as per example only - Kusama uses the Polkadot defaults, so no overrides are needed) -

```js
...
const api = await ApiPromise.create({
  ...,
  typesChain: {
    Kusama: {
      BlockNumber: 'u32',
      Index: 'u32'
    }
  }
});
```

The `types`, `typesChain` and `typesSpec` overrides are all optional and all are applied, as applicable to a specific connection. From the options `types` are registered first, followed by `typesSpec` for node-specific overrides and finally `typesChain` for chain-specific overrides. The would mean is you have the following (contrived) example,

```js
...
const api = await ApiPromise.create({
  ...,
  types: {
    Balance: 'u32',
  }
  typesChain: {
    Balance: 'u128'
  },
  typesSpec: {
    Balance: 'u64',
  }
});
```

`Balance` would be defined as an `u128` at the end. Effectively based on the flow it is first registered as a `u32`, then overridden as a `u64` and finally overridden once more as a `u128` by the chain types.

## Impact on extrinsics

When configuring your chain, be cognizant of the types you are using, and always ensure that any changes are replicated back to the API. In an earlier example we configured `Balance` as `u64`, in this case the same changes needs to be applied on the API, especially when there are mismatches compared to Substrate master. Not doing so means that failures will occur. The same would happen when your own types have mismatched fields or types are lacking fields on structs or enums.

Mismatches also applies to any other chain-specific configured types and can have impacts on transactions. For instance you can customize `Lookup` and `Address` on your chain, changing the default lookup behavior. A real example of this is the Substrate master node vs the Substrate master node-template -

```rust
/// The lookup mechanism to get account ID from whatever is passed in dispatchers.
type Lookup = Indices;
...
/// The address format for describing accounts.
pub type Address = <Indices as StaticLookup>::Source;
```

And this is what is defined on the node-template -

```rust
/// The lookup mechanism to get account ID from whatever is passed in dispatchers.
type Lookup = IdentityLookup<AccountId>;
...
/// The address format for describing accounts.
pub type Address = AccountId;
```

Here the template was customized from the Substrate node defaults and the API needs to know how to map these types. Failure to make adjustments means transactions will fail. With this in mind the correct types that needs to be added here would be -

```js
const api = await ApiPromise.create({
  ...,
  types: {
    // mapping the actual specified address format
    Address: 'AccountId',
    // mapping the lookup
    LookupSource: 'AccountId'
  }
});
```

Always look at customization and understand the impacts, replicating these changes between the node and the API. For the above the `Address` type is used in the construction of the `UncheckedExtrinsic` type, while the lookup type is applicable on transactions such as `balances.transfer(to: LookupSource, value: Balance)`

## Custom RPC

In addition to customizing your node's modules and types, you can also add custom RPC definitions. Like the type definitions in this section, [these can be defined and passed to the API](rpc.custom.md) for decoration.
