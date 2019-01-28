

# Type aliases

<a id="mockstate_db"></a>

##  MockState$Db

**Ƭ MockState$Db**: *`object`*

*Defined in [mock/types.ts:16](https://github.com/polkadot-js/api/blob/bfe5661/packages/rpc-provider/src/mock/types.ts#L16)*

#### Type declaration

[index: `string`]: `Uint8Array`

___
<a id="mockstate_requests"></a>

##  MockState$Requests

**Ƭ MockState$Requests**: *`object`*

*Defined in [mock/types.ts:20](https://github.com/polkadot-js/api/blob/bfe5661/packages/rpc-provider/src/mock/types.ts#L20)*

#### Type declaration

[index: `string`]: `function`

▸(db: *[MockState$Db](_mock_types_.md#mockstate_db)*, params: *`Array`<`any`>*): `string`

**Parameters:**

| Name | Type |
| ------ | ------ |
| db | [MockState$Db](_mock_types_.md#mockstate_db) |
| params | `Array`<`any`> |

**Returns:** `string`

___
<a id="mockstate_subscription_callback"></a>

##  MockState$Subscription$Callback

**Ƭ MockState$Subscription$Callback**: *`function`*

*Defined in [mock/types.ts:5](https://github.com/polkadot-js/api/blob/bfe5661/packages/rpc-provider/src/mock/types.ts#L5)*

#### Type declaration
▸(error: *`Error` | `null`*, value: *`any`*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| error | `Error` | `null` |
| value | `any` |

**Returns:** `void`

___
<a id="mockstate_subscriptions"></a>

##  MockState$Subscriptions

**Ƭ MockState$Subscriptions**: *`object`*

*Defined in [mock/types.ts:7](https://github.com/polkadot-js/api/blob/bfe5661/packages/rpc-provider/src/mock/types.ts#L7)*

#### Type declaration

[index: `string`]: `object`

___

