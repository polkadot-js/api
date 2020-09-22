[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/api-derive/src/util/cacheImpl"](_packages_api_derive_src_util_cacheimpl_.md)

# Module: "packages/api-derive/src/util/cacheImpl"

## Index

### Object literals

* [deriveMapCache](_packages_api_derive_src_util_cacheimpl_.md#const-derivemapcache)
* [deriveNoopCache](_packages_api_derive_src_util_cacheimpl_.md#const-derivenoopcache)

## Object literals

### `Const` deriveMapCache

### ▪ **deriveMapCache**: *object*

*Defined in [packages/api-derive/src/util/cacheImpl.ts:8](https://github.com/polkadot-js/api/blob/3de336fdf/packages/api-derive/src/util/cacheImpl.ts#L8)*

###  del

▸ **del**(`key`: string): *void*

*Defined in [packages/api-derive/src/util/cacheImpl.ts:9](https://github.com/polkadot-js/api/blob/3de336fdf/packages/api-derive/src/util/cacheImpl.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *void*

###  forEach

▸ **forEach**(`cb`: function): *void*

*Defined in [packages/api-derive/src/util/cacheImpl.ts:12](https://github.com/polkadot-js/api/blob/3de336fdf/packages/api-derive/src/util/cacheImpl.ts#L12)*

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

*Defined in [packages/api-derive/src/util/cacheImpl.ts:19](https://github.com/polkadot-js/api/blob/3de336fdf/packages/api-derive/src/util/cacheImpl.ts#L19)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *T | undefined*

###  set

▸ **set**(`key`: string, `value`: any): *void*

*Defined in [packages/api-derive/src/util/cacheImpl.ts:22](https://github.com/polkadot-js/api/blob/3de336fdf/packages/api-derive/src/util/cacheImpl.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | any |

**Returns:** *void*

___

### `Const` deriveNoopCache

### ▪ **deriveNoopCache**: *object*

*Defined in [packages/api-derive/src/util/cacheImpl.ts:27](https://github.com/polkadot-js/api/blob/3de336fdf/packages/api-derive/src/util/cacheImpl.ts#L27)*

###  del

▸ **del**(): *void*

*Defined in [packages/api-derive/src/util/cacheImpl.ts:28](https://github.com/polkadot-js/api/blob/3de336fdf/packages/api-derive/src/util/cacheImpl.ts#L28)*

**Returns:** *void*

###  forEach

▸ **forEach**(): *undefined*

*Defined in [packages/api-derive/src/util/cacheImpl.ts:29](https://github.com/polkadot-js/api/blob/3de336fdf/packages/api-derive/src/util/cacheImpl.ts#L29)*

**Returns:** *undefined*

###  get

▸ **get**(): *undefined*

*Defined in [packages/api-derive/src/util/cacheImpl.ts:30](https://github.com/polkadot-js/api/blob/3de336fdf/packages/api-derive/src/util/cacheImpl.ts#L30)*

**Returns:** *undefined*

###  set

▸ **set**(`_`: string, `value`: unknown): *unknown*

*Defined in [packages/api-derive/src/util/cacheImpl.ts:31](https://github.com/polkadot-js/api/blob/3de336fdf/packages/api-derive/src/util/cacheImpl.ts#L31)*

**Parameters:**

Name | Type |
------ | ------ |
`_` | string |
`value` | unknown |

**Returns:** *unknown*
