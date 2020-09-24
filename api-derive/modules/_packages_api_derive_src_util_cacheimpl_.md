**Polkadot JS API**

> [README](../README.md) / [Globals](../globals.md) / "packages/api-derive/src/util/cacheImpl"

# Module: "packages/api-derive/src/util/cacheImpl"

## Index

### Object literals

* [deriveMapCache](_packages_api_derive_src_util_cacheimpl_.md#derivemapcache)
* [deriveNoopCache](_packages_api_derive_src_util_cacheimpl_.md#derivenoopcache)

## Object literals

### deriveMapCache

▪ `Const` **deriveMapCache**: object

*Defined in [packages/api-derive/src/util/cacheImpl.ts:8](https://github.com/polkadot-js/api/blob/7070f757c/packages/api-derive/src/util/cacheImpl.ts#L8)*

#### Properties:

Name | Type | Value |
------ | ------ | ------ |
`del` | function | (key: string) => void |
`forEach` | function | (cb: (key: string,value: any) => void) => void |
`get` | function | \\<T>(key: string) => T \\| undefined |
`set` | function | (key: string,value: any) => void |

___

### deriveNoopCache

▪ `Const` **deriveNoopCache**: object

*Defined in [packages/api-derive/src/util/cacheImpl.ts:27](https://github.com/polkadot-js/api/blob/7070f757c/packages/api-derive/src/util/cacheImpl.ts#L27)*

#### Properties:

Name | Type | Value |
------ | ------ | ------ |
`del` | function | () => void |
`forEach` | function | () => undefined |
`get` | function | () => undefined |
`set` | function | (\_: string,value: unknown) => unknown |
