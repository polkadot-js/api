**Polkadot JS API**

> [README](../README.md) / [Globals](../globals.md) / ["packages/api/src/base/Init"](../modules/_packages_api_src_base_init_.md) / Init

# Class: Init\<**ApiType**>

## Type parameters

* ApiType

## Hierarchy

* [Decorate](_packages_api_src_base_decorate_.decorate.md)\<ApiType>

  ↳ **Init**

## Index

### Constructors

* [constructor](_packages_api_src_base_init_.init.md#constructor)

### Accessors

* [hasSubscriptions](_packages_api_src_base_init_.init.md#hassubscriptions)
* [registry](_packages_api_src_base_init_.init.md#registry)

### Methods

* [createType](_packages_api_src_base_init_.init.md#createtype)
* [getBlockRegistry](_packages_api_src_base_init_.init.md#getblockregistry)
* [injectMetadata](_packages_api_src_base_init_.init.md#injectmetadata)
* [off](_packages_api_src_base_init_.init.md#off)
* [on](_packages_api_src_base_init_.init.md#on)
* [once](_packages_api_src_base_init_.init.md#once)
* [registerTypes](_packages_api_src_base_init_.init.md#registertypes)

## Constructors

### constructor

\+ **new Init**(`options`: ApiOptions, `type`: [ApiTypes](../modules/_packages_api_src_types_base_.md#apitypes), `decorateMethod`: [DecorateMethod](../modules/_packages_api_src_types_base_.md#decoratemethod)\<ApiType>): [Init](_packages_api_src_base_init_.init.md)

*Overrides [Decorate](_packages_api_src_base_decorate_.decorate.md).[constructor](_packages_api_src_base_decorate_.decorate.md#constructor)*

*Defined in [packages/api/src/base/Init.ts:30](https://github.com/polkadot-js/api/blob/0c4cc51f7/packages/api/src/base/Init.ts#L30)*

#### Parameters:

Name | Type |
------ | ------ |
`options` | ApiOptions |
`type` | [ApiTypes](../modules/_packages_api_src_types_base_.md#apitypes) |
`decorateMethod` | [DecorateMethod](../modules/_packages_api_src_types_base_.md#decoratemethod)\<ApiType> |

**Returns:** [Init](_packages_api_src_base_init_.init.md)

## Accessors

### hasSubscriptions

• get **hasSubscriptions**(): boolean

*Inherited from [Decorate](_packages_api_src_base_decorate_.decorate.md).[hasSubscriptions](_packages_api_src_base_decorate_.decorate.md#hassubscriptions)*

*Defined in [packages/api/src/base/Decorate.ts:173](https://github.com/polkadot-js/api/blob/0c4cc51f7/packages/api/src/base/Decorate.ts#L173)*

**Returns:** boolean

___

### registry

• get **registry**(): Registry

*Inherited from [Decorate](_packages_api_src_base_decorate_.decorate.md).[registry](_packages_api_src_base_decorate_.decorate.md#registry)*

*Defined in [packages/api/src/base/Decorate.ts:152](https://github.com/polkadot-js/api/blob/0c4cc51f7/packages/api/src/base/Decorate.ts#L152)*

**`description`** Return the current used registry

**Returns:** Registry

## Methods

### createType

▸ **createType**\<K>(`type`: K, ...`params`: unknown[]): InterfaceTypes[K]

*Inherited from [Decorate](_packages_api_src_base_decorate_.decorate.md).[createType](_packages_api_src_base_decorate_.decorate.md#createtype)*

*Defined in [packages/api/src/base/Decorate.ts:159](https://github.com/polkadot-js/api/blob/0c4cc51f7/packages/api/src/base/Decorate.ts#L159)*

**`description`** Creates an instance of a type as registered

#### Type parameters:

Name | Type |
------ | ------ |
`K` | keyof InterfaceTypes |

#### Parameters:

Name | Type |
------ | ------ |
`type` | K |
`...params` | unknown[] |

**Returns:** InterfaceTypes[K]

___

### getBlockRegistry

▸ **getBlockRegistry**(`blockHash`: string \| Uint8Array): Promise\<VersionedRegistry>

*Defined in [packages/api/src/base/Init.ts:90](https://github.com/polkadot-js/api/blob/0c4cc51f7/packages/api/src/base/Init.ts#L90)*

**`description`** Sets up a registry based on the block hash defined

#### Parameters:

Name | Type |
------ | ------ |
`blockHash` | string \| Uint8Array |

**Returns:** Promise\<VersionedRegistry>

___

### injectMetadata

▸ **injectMetadata**(`metadata`: Metadata, `fromEmpty?`: undefined \| false \| true, `registry?`: Registry): void

*Inherited from [Decorate](_packages_api_src_base_decorate_.decorate.md).[injectMetadata](_packages_api_src_base_decorate_.decorate.md#injectmetadata)*

*Defined in [packages/api/src/base/Decorate.ts:177](https://github.com/polkadot-js/api/blob/0c4cc51f7/packages/api/src/base/Decorate.ts#L177)*

#### Parameters:

Name | Type |
------ | ------ |
`metadata` | Metadata |
`fromEmpty?` | undefined \| false \| true |
`registry?` | Registry |

**Returns:** void

___

### off

▸ **off**(`type`: ApiInterfaceEvents, `handler`: (...args: any[]) => any): this

*Inherited from [Events](_packages_api_src_base_events_.events.md).[off](_packages_api_src_base_events_.events.md#off)*

*Defined in [packages/api/src/base/Events.ts:61](https://github.com/polkadot-js/api/blob/0c4cc51f7/packages/api/src/base/Events.ts#L61)*

**`description`** Remove the given eventemitter handler

**`example`** 
<BR>

```javascript
const handler = (): void => {
 console.log('Connected !);
};

// Start listening
api.on('connected', handler);

// Stop listening
api.off('connected', handler);
```

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`type` | ApiInterfaceEvents | The type of event the callback was attached to. Available events are `connected`, `disconnected`, `ready` and `error` |
`handler` | (...args: any[]) => any | The callback to unregister.  |

**Returns:** this

___

### on

▸ **on**(`type`: ApiInterfaceEvents, `handler`: (...args: any[]) => any): this

*Inherited from [Events](_packages_api_src_base_events_.events.md).[on](_packages_api_src_base_events_.events.md#on)*

*Defined in [packages/api/src/base/Events.ts:34](https://github.com/polkadot-js/api/blob/0c4cc51f7/packages/api/src/base/Events.ts#L34)*

**`description`** Attach an eventemitter handler to listen to a specific event

**`example`** 
<BR>

```javascript
api.on('connected', (): void => {
  console.log('API has been connected to the endpoint');
});

api.on('disconnected', (): void => {
  console.log('API has been disconnected from the endpoint');
});
```

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`type` | ApiInterfaceEvents | The type of event to listen to. Available events are `connected`, `disconnected`, `ready` and `error` |
`handler` | (...args: any[]) => any | The callback to be called when the event fires. Depending on the event type, it could fire with additional arguments.  |

**Returns:** this

___

### once

▸ **once**(`type`: ApiInterfaceEvents, `handler`: (...args: any[]) => any): this

*Inherited from [Events](_packages_api_src_base_events_.events.md).[once](_packages_api_src_base_events_.events.md#once)*

*Defined in [packages/api/src/base/Events.ts:86](https://github.com/polkadot-js/api/blob/0c4cc51f7/packages/api/src/base/Events.ts#L86)*

**`description`** Attach an one-time eventemitter handler to listen to a specific event

**`example`** 
<BR>

```javascript
api.once('connected', (): void => {
  console.log('API has been connected to the endpoint');
});

api.once('disconnected', (): void => {
  console.log('API has been disconnected from the endpoint');
});
```

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`type` | ApiInterfaceEvents | The type of event to listen to. Available events are `connected`, `disconnected`, `ready` and `error` |
`handler` | (...args: any[]) => any | The callback to be called when the event fires. Depending on the event type, it could fire with additional arguments.  |

**Returns:** this

___

### registerTypes

▸ **registerTypes**(`types?`: RegistryTypes): void

*Inherited from [Decorate](_packages_api_src_base_decorate_.decorate.md).[registerTypes](_packages_api_src_base_decorate_.decorate.md#registertypes)*

*Defined in [packages/api/src/base/Decorate.ts:166](https://github.com/polkadot-js/api/blob/0c4cc51f7/packages/api/src/base/Decorate.ts#L166)*

**`description`** Register additional user-defined of chain-specific types in the type registry

#### Parameters:

Name | Type |
------ | ------ |
`types?` | RegistryTypes |

**Returns:** void
