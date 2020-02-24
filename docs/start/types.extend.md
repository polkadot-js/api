# Extending types

Circling back to metadata, by default the metadata information (at this point in time), only returns the type names as they apply to any section, be it a call, event or query. As an example, this means that transfers are defined as `balances.transfer(AccountId, Balance)` with no details as to the mapping of the `Balance` type to a `u128`. (The underlying Polkadot/Substrate default)

Therefore to cater for all types, a mapping in done on the [@polkadot/types library](https://github.com/polkadot-js/api/tree/master/packages/types/src/interfaces) to define each of the types and align with their underlying structures as it maps to a default Polkadot or Substrate chain.

Additionally, the API contains some logic for chain type detection, for instance in the case of Substrate 1.x based chains, it will define `BlockNumber` & `Index` (nonce) as a `u64`, while for current-generation chains, these will be defined as `u32`. Some of the work in maintaining the API for Polkadot/Substrate is the addition of types as they appear and gets used in the Rust codebase.

There is a the [recommendation](install.md#betas) to use a `@polkadot/api@beta` should you wish to track the master branches of Polkadot or Substrate, since master changes for the addition of new types do not make it into a stable release immediately.

## Extension

As a blockchain toolkit, Substrate makes it easy to add your own modules and types. In most non-trivial implementations, this would mean that developers are adding specific types for their implementation as well. The API will get to know the names of these types via the metadata, however it won't understand what they are, which means it cannot encode or decode them.

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

## User-defined types

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

One form of types that appear regularly is enums, these can be defined as follow -

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
    'Kusama CC1': {
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

## Type creation

While the API always converts all the inputs into the underlying type required by the operation, in some cases you may want to [cret an instance of a type](types.create.md) yourself.
