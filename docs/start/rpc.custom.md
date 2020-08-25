# Custom RPC

In previous sections we looked at the injection of types, as in use and defined in modules from the node. Another area that can be customized is RPC definitions, and like with the types, the API provides the capability to add user-defined RPCs (in addition to the Polkadot/Substrate base) to allow use of these RPCs via the API.

## Custom definitions

RPCs are exposed as a method on a specific module, this means that once available you can call any rpc via the `api.rpc.<module>.<method>(...params[])` endpoints. To extend with user-defined RPCs, the injection can happen at the time of API creation with the addition of the `rpc` key (in addition to any other params, such as `types` or `provider`) -

```js
...
const api = await ApiPromise.create({
  rpc: {
    firstModule: {
      testMethod: {
        description: 'Just a test method',
        params: [
          {
            name: 'index',
            type: 'u64'
          },
          {
            name: 'at',
            type: 'Hash',
            isOptional: true
          }
        ],
        type: 'Balance'
      },
      anotherMethod: { ... },
      ...
    },
    anotherModule: { ... },
    ...
  },
  ...
});
```

In the above example we have defined a new method, which is now available on the RPCs as `api.rpc.firstModule.testMethod(index: u64, at?: Hash) => Promise<Balance>`. In the case of optional params, we have added the `isOptional: true` flag alongside the `name` & `type` in the param definition.

Be aware that while defined, the method will only appear on the API if it is in the list as returned by `api.rpc.rpc.methods()`, which is the list of known RPCs the node exposes. When making changes to the node, always ensure that it does expose the RPC method correctly, otherwise it will not be decorated.

## Definition breakdown

While the above example should be self-explanatory, it is important to understand the structure. The `rpc: { ... }` definitions are keyed first and foremost by the name of the module exposing the RPC. This means that when we have 2 modules `firstModule` & `testModule`, the first-level structure would follow the following pattern,

```js
...
const api = await ApiPromise.create({
  rpc: {
    firstModule: { ... },
    testModule: { ... }
  }
});
```

Inside the specific module definitions, the key is the actual expose RPC method. As we have seen in the first example, we expose a `testMethod` on `firstModule`. For the method definitions, apart from the description, we have definitions for the params and return a single result `type`.

Params itself, as an array, contains fields for `name`, `type` and an optional flag `isOptional` that indicates that the field is not required when making the call. (And example of this use would be in cases such as `state.getStorage(key, blockHash?)` where the last param is optional)

## Type creation

While the API always converts all the inputs into the underlying type required by the operation, be it for RPC, query or transaction, in some cases you may want to [create an instance of a type](types.create.md) yourself.
