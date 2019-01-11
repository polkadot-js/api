

A mock provider mainly used for testing.
*__returns__*: The mock provider

# Hierarchy

**Mock**

# Implements

* [ProviderInterface](../interfaces/_types_.providerinterface.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Mock**(): [Mock](_mock_index_.mock.md)

*Defined in [mock/index.ts:68](https://github.com/polkadot-js/api/blob/13e2aa0/packages/rpc-provider/src/mock/index.ts#L68)*

**Returns:** [Mock](_mock_index_.mock.md)

___

# Properties

<a id="isupdating"></a>

##  isUpdating

**● isUpdating**: *`boolean`* = true

*Defined in [mock/index.ts:43](https://github.com/polkadot-js/api/blob/13e2aa0/packages/rpc-provider/src/mock/index.ts#L43)*

___
<a id="subscriptions"></a>

##  subscriptions

**● subscriptions**: *[MockState$Subscriptions](../modules/_mock_types_.md#mockstate_subscriptions)* =  SUBSCRIPTIONS.reduce((subs, name) => {
    subs[name] = {
      callbacks: {},
      lastValue: null
    };

    return subs;
  }, ({} as MockState$Subscriptions))

*Defined in [mock/index.ts:57](https://github.com/polkadot-js/api/blob/13e2aa0/packages/rpc-provider/src/mock/index.ts#L57)*

___

# Accessors

<a id="hassubscriptions"></a>

##  hasSubscriptions

gethasSubscriptions(): `boolean`

*Defined in [mock/index.ts:74](https://github.com/polkadot-js/api/blob/13e2aa0/packages/rpc-provider/src/mock/index.ts#L74)*

**Returns:** `boolean`

___

# Methods

<a id="isconnected"></a>

##  isConnected

▸ **isConnected**(): `boolean`

*Implementation of [ProviderInterface](../interfaces/_types_.providerinterface.md).[isConnected](../interfaces/_types_.providerinterface.md#isconnected)*

*Defined in [mock/index.ts:78](https://github.com/polkadot-js/api/blob/13e2aa0/packages/rpc-provider/src/mock/index.ts#L78)*

**Returns:** `boolean`

___
<a id="on"></a>

##  on

▸ **on**(type: *[ProviderInterface$Emitted](../modules/_types_.md#providerinterface_emitted)*, sub: *[ProviderInterface$EmitCb](../modules/_types_.md#providerinterface_emitcb)*): `void`

*Implementation of [ProviderInterface](../interfaces/_types_.providerinterface.md).[on](../interfaces/_types_.providerinterface.md#on)*

*Defined in [mock/index.ts:82](https://github.com/polkadot-js/api/blob/13e2aa0/packages/rpc-provider/src/mock/index.ts#L82)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | [ProviderInterface$Emitted](../modules/_types_.md#providerinterface_emitted) |
| sub | [ProviderInterface$EmitCb](../modules/_types_.md#providerinterface_emitcb) |

**Returns:** `void`

___
<a id="send"></a>

##  send

▸ **send**(method: *`string`*, params: *`Array`<`any`>*): `Promise`<`any`>

*Implementation of [ProviderInterface](../interfaces/_types_.providerinterface.md).[send](../interfaces/_types_.providerinterface.md#send)*

*Defined in [mock/index.ts:86](https://github.com/polkadot-js/api/blob/13e2aa0/packages/rpc-provider/src/mock/index.ts#L86)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| method | `string` |
| params | `Array`<`any`> |

**Returns:** `Promise`<`any`>

___
<a id="subscribe"></a>

##  subscribe

▸ **subscribe**(type: *`string`*, method: *`string`*, ...params: *`Array`<`any`>*): `Promise`<`number`>

*Defined in [mock/index.ts:94](https://github.com/polkadot-js/api/blob/13e2aa0/packages/rpc-provider/src/mock/index.ts#L94)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `string` |
| method | `string` |
| `Rest` params | `Array`<`any`> |

**Returns:** `Promise`<`number`>

___
<a id="unsubscribe"></a>

##  unsubscribe

▸ **unsubscribe**(type: *`string`*, method: *`string`*, id: *`number`*): `Promise`<`boolean`>

*Implementation of [ProviderInterface](../interfaces/_types_.providerinterface.md).[unsubscribe](../interfaces/_types_.providerinterface.md#unsubscribe)*

*Defined in [mock/index.ts:114](https://github.com/polkadot-js/api/blob/13e2aa0/packages/rpc-provider/src/mock/index.ts#L114)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `string` |
| method | `string` |
| id | `number` |

**Returns:** `Promise`<`boolean`>

___

