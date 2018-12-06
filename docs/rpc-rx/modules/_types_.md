

# Type aliases

<a id="rpcrxinterface"></a>

##  RpcRxInterface

**Ƭ RpcRxInterface**: *`object`*

*Defined in [types.ts:15](https://github.com/polkadot-js/api/blob/c9cc904/packages/rpc-rx/src/types.ts#L15)*

#### Type declaration

___
<a id="rpcrxinterface_events"></a>

##  RpcRxInterface$Events

**Ƭ RpcRxInterface$Events**: * "connected" &#124; "disconnected"
*

*Defined in [types.ts:13](https://github.com/polkadot-js/api/blob/c9cc904/packages/rpc-rx/src/types.ts#L13)*

___
<a id="rpcrxinterface_method"></a>

##  RpcRxInterface$Method

**Ƭ RpcRxInterface$Method**: *`function`*

*Defined in [types.ts:7](https://github.com/polkadot-js/api/blob/c9cc904/packages/rpc-rx/src/types.ts#L7)*

#### Type declaration
▸(...params: *`Array`<`any`>*):  `Observable`<`any`> &#124; `ReplaySubject`<`any`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` params | `Array`<`any`> |

**Returns:**  `Observable`<`any`> &#124; `ReplaySubject`<`any`>

___
<a id="rpcrxinterface_section"></a>

##  RpcRxInterface$Section

**Ƭ RpcRxInterface$Section**: *`object`*

*Defined in [types.ts:9](https://github.com/polkadot-js/api/blob/c9cc904/packages/rpc-rx/src/types.ts#L9)*

#### Type declaration

[index: `string`]: [RpcRxInterface$Method](_types_.md#rpcrxinterface_method)

___

