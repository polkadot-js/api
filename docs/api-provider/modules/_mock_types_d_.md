

# Type aliases

<a id="mockstate"></a>

##  MockState

**Ƭ MockState**: *`object`*

*Defined in [mock/types.d.ts:27](https://github.com/polkadot-js/api/blob/82dbc93/packages/api-provider/src/mock/types.d.ts#L27)*

#### Type declaration

___
<a id="mockstate_db"></a>

##  MockState$Db

**Ƭ MockState$Db**: *`object`*

*Defined in [mock/types.d.ts:19](https://github.com/polkadot-js/api/blob/82dbc93/packages/api-provider/src/mock/types.d.ts#L19)*

#### Type declaration

[index: `string`]: `Uint8Array`

___
<a id="mockstate_requests"></a>

##  MockState$Requests

**Ƭ MockState$Requests**: *`object`*

*Defined in [mock/types.d.ts:23](https://github.com/polkadot-js/api/blob/82dbc93/packages/api-provider/src/mock/types.d.ts#L23)*

#### Type declaration

[index: `string`]: `function`

▸(db: *[MockState$Db](_mock_types_d_.md#mockstate_db)*, params: *`Array`<`any`>*): `string`

**Parameters:**

| Param | Type |
| ------ | ------ |
| db | [MockState$Db](_mock_types_d_.md#mockstate_db) |
| params | `Array`<`any`> |

**Returns:** `string`

___
<a id="mockstate_subscription_callback"></a>

##  MockState$Subscription$Callback

**Ƭ MockState$Subscription$Callback**: *`function`*

*Defined in [mock/types.d.ts:8](https://github.com/polkadot-js/api/blob/82dbc93/packages/api-provider/src/mock/types.d.ts#L8)*

#### Type declaration
▸(error: * `Error` &#124; `null`*, value: *`any`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| error |  `Error` &#124; `null`|
| value | `any` |

**Returns:** `void`

___
<a id="mockstate_subscriptions"></a>

##  MockState$Subscriptions

**Ƭ MockState$Subscriptions**: *`object`*

*Defined in [mock/types.d.ts:10](https://github.com/polkadot-js/api/blob/82dbc93/packages/api-provider/src/mock/types.d.ts#L10)*

#### Type declaration

[index: `string`]: `object`

___

