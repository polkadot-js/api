**Polkadot JS API**

> [README](../README.md) / [Globals](../globals.md) / ["packages/api/src/base/Events"](../modules/_packages_api_src_base_events_.md) / Events

# Class: Events

## Hierarchy

* **Events**

  ↳ [Decorate](_packages_api_src_base_decorate_.decorate.md)

## Index

### Methods

* [off](_packages_api_src_base_events_.events.md#off)
* [on](_packages_api_src_base_events_.events.md#on)
* [once](_packages_api_src_base_events_.events.md#once)

## Methods

### off

▸ **off**(`type`: ApiInterfaceEvents, `handler`: (...args: any[]) => any): this

*Defined in [packages/api/src/base/Events.ts:61](https://github.com/polkadot-js/api/blob/ff59962c5/packages/api/src/base/Events.ts#L61)*

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

*Defined in [packages/api/src/base/Events.ts:34](https://github.com/polkadot-js/api/blob/ff59962c5/packages/api/src/base/Events.ts#L34)*

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

*Defined in [packages/api/src/base/Events.ts:86](https://github.com/polkadot-js/api/blob/ff59962c5/packages/api/src/base/Events.ts#L86)*

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
