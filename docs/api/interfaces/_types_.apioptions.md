

# Hierarchy

**ApiOptions**

# Properties

<a id="provider"></a>

## `<Optional>` provider

**● provider**: *`ProviderInterface`*

*Defined in [types.ts:77](https://github.com/polkadot-js/api/blob/52718d7/packages/api/src/types.ts#L77)*

*__description__*: Transport Provider from rpc-provider. If not specified, it will default to connecting to a WsProvider connecting localhost with the default port, i.e. `ws://127.0.0.1:9944`

___
<a id="types"></a>

## `<Optional>` types

**● types**: *`undefined` | `object`*

*Defined in [types.ts:82](https://github.com/polkadot-js/api/blob/52718d7/packages/api/src/types.ts#L82)*

*__description__*: Additional types used by runtime modules. This is nessusary if the runtime modules uses types not available in the base Substrate runtime.

___

