

# Hierarchy

**ApiOptions**

# Properties

<a id="provider"></a>

## `<Optional>` provider

**● provider**: *`ProviderInterface`*

*Defined in [types.ts:102](https://github.com/polkadot-js/api/blob/b2f0618/packages/api/src/types.ts#L102)*

*__description__*: Transport Provider from rpc-provider. If not specified, it will default to connecting to a WsProvider connecting localhost with the default port, i.e. `ws://127.0.0.1:9944`

___
<a id="source"></a>

## `<Optional>` source

**● source**: *[ApiBase](../classes/_base_.apibase.md)<`any`, `any`>*

*Defined in [types.ts:106](https://github.com/polkadot-js/api/blob/b2f0618/packages/api/src/types.ts#L106)*

*__description__*: The source object to use for runtime information (only used when cloning)

___
<a id="types"></a>

## `<Optional>` types

**● types**: *`undefined` | `object`*

*Defined in [types.ts:111](https://github.com/polkadot-js/api/blob/b2f0618/packages/api/src/types.ts#L111)*

*__description__*: Additional types used by runtime modules. This is nessusary if the runtime modules uses types not available in the base Substrate runtime.

___

