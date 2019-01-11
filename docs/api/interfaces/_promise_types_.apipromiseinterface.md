

# Hierarchy

 [ApiBaseInterface](_types_.apibaseinterface.md)<[DecoratedRpc](_promise_types_.decoratedrpc.md), [QueryableStorage](_promise_types_.queryablestorage.md), [SubmittableExtrinsics](_promise_types_.submittableextrinsics.md)>

**↳ ApiPromiseInterface**

# Implemented by

* [ApiPromise](../classes/_promise_index_.apipromise.md)

# Properties

<a id="genesishash"></a>

##  genesisHash

**● genesisHash**: *`Hash`*

*Inherited from [ApiBaseInterface](_types_.apibaseinterface.md).[genesisHash](_types_.apibaseinterface.md#genesishash)*

*Defined in [types.ts:13](https://github.com/polkadot-js/api/blob/54eada5/packages/api/src/types.ts#L13)*

___
<a id="hassubscriptions"></a>

##  hasSubscriptions

**● hasSubscriptions**: *`boolean`*

*Inherited from [ApiBaseInterface](_types_.apibaseinterface.md).[hasSubscriptions](_types_.apibaseinterface.md#hassubscriptions)*

*Defined in [types.ts:14](https://github.com/polkadot-js/api/blob/54eada5/packages/api/src/types.ts#L14)*

___
<a id="isready"></a>

##  isReady

**● isReady**: *`Promise`<[ApiPromiseInterface](_promise_types_.apipromiseinterface.md)>*

*Defined in [promise/types.ts:61](https://github.com/polkadot-js/api/blob/54eada5/packages/api/src/promise/types.ts#L61)*

___
<a id="on"></a>

##  on

**● on**: *`function`*

*Inherited from [ApiBaseInterface](_types_.apibaseinterface.md).[on](_types_.apibaseinterface.md#on)*

*Defined in [types.ts:21](https://github.com/polkadot-js/api/blob/54eada5/packages/api/src/types.ts#L21)*

#### Type declaration
▸(type: *[ApiInterface$Events](../modules/_types_.md#apiinterface_events)*, handler: *`function`*): `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | [ApiInterface$Events](../modules/_types_.md#apiinterface_events) |
| handler | `function` |

**Returns:** `this`

___
<a id="once"></a>

##  once

**● once**: *`function`*

*Inherited from [ApiBaseInterface](_types_.apibaseinterface.md).[once](_types_.apibaseinterface.md#once)*

*Defined in [types.ts:22](https://github.com/polkadot-js/api/blob/54eada5/packages/api/src/types.ts#L22)*

#### Type declaration
▸(type: *[ApiInterface$Events](../modules/_types_.md#apiinterface_events)*, handler: *`function`*): `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | [ApiInterface$Events](../modules/_types_.md#apiinterface_events) |
| handler | `function` |

**Returns:** `this`

___
<a id="query"></a>

##  query

**● query**: *[QueryableStorage](_promise_types_.queryablestorage.md)*

*Inherited from [ApiBaseInterface](_types_.apibaseinterface.md).[query](_types_.apibaseinterface.md#query)*

*Defined in [types.ts:17](https://github.com/polkadot-js/api/blob/54eada5/packages/api/src/types.ts#L17)*

___
<a id="rpc"></a>

##  rpc

**● rpc**: *[DecoratedRpc](_promise_types_.decoratedrpc.md)*

*Inherited from [ApiBaseInterface](_types_.apibaseinterface.md).[rpc](_types_.apibaseinterface.md#rpc)*

*Defined in [types.ts:18](https://github.com/polkadot-js/api/blob/54eada5/packages/api/src/types.ts#L18)*

___
<a id="runtimemetadata"></a>

##  runtimeMetadata

**● runtimeMetadata**: *`Metadata`*

*Inherited from [ApiBaseInterface](_types_.apibaseinterface.md).[runtimeMetadata](_types_.apibaseinterface.md#runtimemetadata)*

*Defined in [types.ts:15](https://github.com/polkadot-js/api/blob/54eada5/packages/api/src/types.ts#L15)*

___
<a id="runtimeversion"></a>

##  runtimeVersion

**● runtimeVersion**: *`RuntimeVersion`*

*Inherited from [ApiBaseInterface](_types_.apibaseinterface.md).[runtimeVersion](_types_.apibaseinterface.md#runtimeversion)*

*Defined in [types.ts:16](https://github.com/polkadot-js/api/blob/54eada5/packages/api/src/types.ts#L16)*

___
<a id="tx"></a>

##  tx

**● tx**: *[SubmittableExtrinsics](_promise_types_.submittableextrinsics.md)*

*Inherited from [ApiBaseInterface](_types_.apibaseinterface.md).[tx](_types_.apibaseinterface.md#tx)*

*Defined in [types.ts:19](https://github.com/polkadot-js/api/blob/54eada5/packages/api/src/types.ts#L19)*

___

