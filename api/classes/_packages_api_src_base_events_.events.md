[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/api/src/base/Events"](../modules/_packages_api_src_base_events_.md) › [Events](_packages_api_src_base_events_.events.md)

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

###  off

▸ **off**(`type`: ApiInterfaceEvents, `handler`: function): *this*

*Defined in [packages/api/src/base/Events.ts:61](https://github.com/polkadot-js/api/blob/6faea13a2/packages/api/src/base/Events.ts#L61)*

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

**Parameters:**

▪ **type**: *ApiInterfaceEvents*

The type of event the callback was attached to. Available events are `connected`, `disconnected`, `ready` and `error`

▪ **handler**: *function*

The callback to unregister.

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  on

▸ **on**(`type`: ApiInterfaceEvents, `handler`: function): *this*

*Defined in [packages/api/src/base/Events.ts:34](https://github.com/polkadot-js/api/blob/6faea13a2/packages/api/src/base/Events.ts#L34)*

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

**Parameters:**

▪ **type**: *ApiInterfaceEvents*

The type of event to listen to. Available events are `connected`, `disconnected`, `ready` and `error`

▪ **handler**: *function*

The callback to be called when the event fires. Depending on the event type, it could fire with additional arguments.

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  once

▸ **once**(`type`: ApiInterfaceEvents, `handler`: function): *this*

*Defined in [packages/api/src/base/Events.ts:86](https://github.com/polkadot-js/api/blob/6faea13a2/packages/api/src/base/Events.ts#L86)*

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

**Parameters:**

▪ **type**: *ApiInterfaceEvents*

The type of event to listen to. Available events are `connected`, `disconnected`, `ready` and `error`

▪ **handler**: *function*

The callback to be called when the event fires. Depending on the event type, it could fire with additional arguments.

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*
