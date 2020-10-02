**Polkadot JS API**

> [README](../README.md) / [Globals](../globals.md) / "packages/api/src/types/rpc"

# Module: "packages/api/src/types/rpc"

## Index

### Interfaces

* [RpcPromiseResult](../interfaces/_packages_api_src_types_rpc_.rpcpromiseresult.md)
* [RpcRxResult](../interfaces/_packages_api_src_types_rpc_.rpcrxresult.md)

### Type aliases

* [DecoratedRpc](_packages_api_src_types_rpc_.md#decoratedrpc)
* [DecoratedRpcSection](_packages_api_src_types_rpc_.md#decoratedrpcsection)
* [RpcMethodResult](_packages_api_src_types_rpc_.md#rpcmethodresult)

## Type aliases

### DecoratedRpc

Ƭ  **DecoratedRpc**\<ApiType, AllSections>: {}

*Defined in [packages/api/src/types/rpc.ts:32](https://github.com/polkadot-js/api/blob/d20228788/packages/api/src/types/rpc.ts#L32)*

#### Type parameters:

Name | Type |
------ | ------ |
`ApiType` | [ApiTypes](_packages_api_src_types_base_.md#apitypes) |
`AllSections` | - |

___

### DecoratedRpcSection

Ƭ  **DecoratedRpcSection**\<ApiType, Section>: {}

*Defined in [packages/api/src/types/rpc.ts:26](https://github.com/polkadot-js/api/blob/d20228788/packages/api/src/types/rpc.ts#L26)*

#### Type parameters:

Name | Type |
------ | ------ |
`ApiType` | [ApiTypes](_packages_api_src_types_base_.md#apitypes) |
`Section` | - |

___

### RpcMethodResult

Ƭ  **RpcMethodResult**\<ApiType, F>: ApiType *extends* \"rxjs\" ? RpcRxResult\<F> : RpcPromiseResult\<F>

*Defined in [packages/api/src/types/rpc.ts:22](https://github.com/polkadot-js/api/blob/d20228788/packages/api/src/types/rpc.ts#L22)*

#### Type parameters:

Name | Type |
------ | ------ |
`ApiType` | [ApiTypes](_packages_api_src_types_base_.md#apitypes) |
`F` | AnyFunction |
