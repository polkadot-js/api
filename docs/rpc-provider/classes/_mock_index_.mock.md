

A mock provider mainly used for testing.
*__returns__*: The mock provider

# Hierarchy

**Mock**

# Implements

* `ProviderInterface`

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Mock**(): [Mock](_mock_index_.mock.md)

*Defined in [mock/index.ts:64](https://github.com/polkadot-js/api/blob/de284fb/packages/rpc-provider/src/mock/index.ts#L64)*

**Returns:** [Mock](_mock_index_.mock.md)

___

# Properties

<a id="isupdating"></a>

##  isUpdating

**● isUpdating**: *`boolean`* = true

*Defined in [mock/index.ts:42](https://github.com/polkadot-js/api/blob/de284fb/packages/rpc-provider/src/mock/index.ts#L42)*

___
<a id="subscriptions"></a>

##  subscriptions

**● subscriptions**: *`MockState$Subscriptions`* =  SUBSCRIPTIONS.reduce((subs, name) => {
    subs[name] = {
      callbacks: {},
      lastValue: null
    };

    return subs;
  }, ({} as MockState$Subscriptions))

*Defined in [mock/index.ts:53](https://github.com/polkadot-js/api/blob/de284fb/packages/rpc-provider/src/mock/index.ts#L53)*

___

# Methods

<a id="isconnected"></a>

##  isConnected

▸ **isConnected**(): `boolean`

*Defined in [mock/index.ts:70](https://github.com/polkadot-js/api/blob/de284fb/packages/rpc-provider/src/mock/index.ts#L70)*

**Returns:** `boolean`

___
<a id="on"></a>

##  on

▸ **on**(type: *`ProviderInterface$Emitted`*, sub: *`ProviderInterface$EmitCb`*): `void`

*Defined in [mock/index.ts:74](https://github.com/polkadot-js/api/blob/de284fb/packages/rpc-provider/src/mock/index.ts#L74)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| type | `ProviderInterface$Emitted` |
| sub | `ProviderInterface$EmitCb` |

**Returns:** `void`

___
<a id="send"></a>

##  send

▸ **send**(method: *`string`*, params: *`Array`<`any`>*): `Promise`<`any`>

*Defined in [mock/index.ts:78](https://github.com/polkadot-js/api/blob/de284fb/packages/rpc-provider/src/mock/index.ts#L78)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| method | `string` |
| params | `Array`<`any`> |

**Returns:** `Promise`<`any`>

___
<a id="subscribe"></a>

##  subscribe

▸ **subscribe**(type: *`string`*, method: *`string`*, ...params: *`Array`<`any`>*): `Promise`<`number`>

*Defined in [mock/index.ts:86](https://github.com/polkadot-js/api/blob/de284fb/packages/rpc-provider/src/mock/index.ts#L86)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| type | `string` |
| method | `string` |
| `Rest` params | `Array`<`any`> |

**Returns:** `Promise`<`number`>

___
<a id="unsubscribe"></a>

##  unsubscribe

▸ **unsubscribe**(type: *`string`*, method: *`string`*, id: *`number`*): `Promise`<`boolean`>

*Defined in [mock/index.ts:106](https://github.com/polkadot-js/api/blob/de284fb/packages/rpc-provider/src/mock/index.ts#L106)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| type | `string` |
| method | `string` |
| id | `number` |

**Returns:** `Promise`<`boolean`>

___

