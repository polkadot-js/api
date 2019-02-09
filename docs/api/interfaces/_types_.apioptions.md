

# Hierarchy

**ApiOptions**

# Properties

<a id="provider"></a>

## `<Optional>` provider

**● provider**: *`ProviderInterface`*

*Defined in [types.ts:103](https://github.com/polkadot-js/api/blob/b40d7a3/packages/api/src/types.ts#L103)*

*__description__*: Transport Provider from rpc-provider. If not specified, it will default to connecting to a WsProvider connecting localhost with the default port, i.e. `ws://127.0.0.1:9944`

___
<a id="signer"></a>

## `<Optional>` signer

**● signer**: *[Signer](_types_.signer.md)*

*Defined in [types.ts:116](https://github.com/polkadot-js/api/blob/b40d7a3/packages/api/src/types.ts#L116)*

*__description__*: An external signer which will be used to sign extrinsic when account passed in is not KeyringPair

___
<a id="source"></a>

## `<Optional>` source

**● source**: *[ApiBase](../classes/_base_.apibase.md)<`any`, `any`>*

*Defined in [types.ts:107](https://github.com/polkadot-js/api/blob/b40d7a3/packages/api/src/types.ts#L107)*

*__description__*: The source object to use for runtime information (only used when cloning)

___
<a id="types"></a>

## `<Optional>` types

**● types**: *`undefined` | `object`*

*Defined in [types.ts:112](https://github.com/polkadot-js/api/blob/b40d7a3/packages/api/src/types.ts#L112)*

*__description__*: Additional types used by runtime modules. This is nessusary if the runtime modules uses types not available in the base Substrate runtime.

___

