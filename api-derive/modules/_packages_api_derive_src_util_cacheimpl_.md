[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/api-derive/src/util/cacheImpl"](_packages_api_derive_src_util_cacheimpl_.md)

# Module: "packages/api-derive/src/util/cacheImpl"

## Index

### Object literals

* [deriveMapCache](_packages_api_derive_src_util_cacheimpl_.md#const-derivemapcache)
* [deriveNoopCache](_packages_api_derive_src_util_cacheimpl_.md#const-derivenoopcache)

## Object literals

### `Const` deriveMapCache

### ▪ **deriveMapCache**: *object*

*Defined in [packages/api-derive/src/util/cacheImpl.ts:9](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/api-derive/src/util/cacheImpl.ts#L9)*

###  del

▸ **del**(`key`: string): *void*

*Defined in [packages/api-derive/src/util/cacheImpl.ts:10](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/api-derive/src/util/cacheImpl.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *void*

###  forEach

▸ **forEach**(`cb`: function): *void*

*Defined in [packages/api-derive/src/util/cacheImpl.ts:13](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/api-derive/src/util/cacheImpl.ts#L13)*

**Parameters:**

▪ **cb**: *function*

▸ (`key`: string, `value`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | any |

**Returns:** *void*

###  get

▸ **get**‹**T**›(`key`: string): *T | undefined*

*Defined in [packages/api-derive/src/util/cacheImpl.ts:20](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/api-derive/src/util/cacheImpl.ts#L20)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *T | undefined*

###  set

▸ **set**(`key`: string, `value`: any): *void*

*Defined in [packages/api-derive/src/util/cacheImpl.ts:23](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/api-derive/src/util/cacheImpl.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | any |

**Returns:** *void*

___

### `Const` deriveNoopCache

### ▪ **deriveNoopCache**: *object*

*Defined in [packages/api-derive/src/util/cacheImpl.ts:28](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/api-derive/src/util/cacheImpl.ts#L28)*

###  del

▸ **del**(): *void*

*Defined in [packages/api-derive/src/util/cacheImpl.ts:29](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/api-derive/src/util/cacheImpl.ts#L29)*

**Returns:** *void*

###  forEach

▸ **forEach**(): *undefined*

*Defined in [packages/api-derive/src/util/cacheImpl.ts:30](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/api-derive/src/util/cacheImpl.ts#L30)*

**Returns:** *undefined*

###  get

▸ **get**(): *undefined*

*Defined in [packages/api-derive/src/util/cacheImpl.ts:31](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/api-derive/src/util/cacheImpl.ts#L31)*

**Returns:** *undefined*

###  set

▸ **set**(`_`: string, `value`: unknown): *unknown*

*Defined in [packages/api-derive/src/util/cacheImpl.ts:32](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/api-derive/src/util/cacheImpl.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`_` | string |
`value` | unknown |

**Returns:** *unknown*
