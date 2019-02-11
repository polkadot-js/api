

# Index

### Interfaces

* [Codec](../interfaces/_types_.codec.md)

### Type aliases

* [AnyNumber](_types_.md#anynumber)
* [AnyString](_types_.md#anystring)
* [AnyU8a](_types_.md#anyu8a)
* [CodecArg](_types_.md#codecarg)
* [CodecCallback](_types_.md#codeccallback)
* [CodecTo](_types_.md#codecto)
* [Constructor](_types_.md#constructor)
* [ConstructorDef](_types_.md#constructordef)
* [RegistryTypes](_types_.md#registrytypes)
* [TypeDef](_types_.md#typedef)

---

# Type aliases

<a id="anynumber"></a>

##  AnyNumber

**Ƭ AnyNumber**: *`BN` | `Uint8Array` | `number` | `string`*

*Defined in [types.ts:17](https://github.com/polkadot-js/api/blob/dbd37da/packages/types/src/types.ts#L17)*

___
<a id="anystring"></a>

##  AnyString

**Ƭ AnyString**: *`string` | `String`*

*Defined in [types.ts:19](https://github.com/polkadot-js/api/blob/dbd37da/packages/types/src/types.ts#L19)*

___
<a id="anyu8a"></a>

##  AnyU8a

**Ƭ AnyU8a**: *`Uint8Array` | `Array`<`number`> | `string`*

*Defined in [types.ts:21](https://github.com/polkadot-js/api/blob/dbd37da/packages/types/src/types.ts#L21)*

___
<a id="codecarg"></a>

##  CodecArg

**Ƭ CodecArg**: *[Codec](../interfaces/_types_.codec.md) | `BN` | `Boolean` | `String` | `Uint8Array` | `boolean` | `number` | `string` | `undefined` | `CodecArgArray` | `CodecArgObject`*

*Defined in [types.ts:7](https://github.com/polkadot-js/api/blob/dbd37da/packages/types/src/types.ts#L7)*

___
<a id="codeccallback"></a>

##  CodecCallback

**Ƭ CodecCallback**: *`function`*

*Defined in [types.ts:9](https://github.com/polkadot-js/api/blob/dbd37da/packages/types/src/types.ts#L9)*

#### Type declaration
▸(result: *`T`*): `any`

**Parameters:**

| Name | Type |
| ------ | ------ |
| result | `T` |

**Returns:** `any`

___
<a id="codecto"></a>

##  CodecTo

**Ƭ CodecTo**: *"toHex" | "toJSON" | "toString" | "toU8a"*

*Defined in [types.ts:63](https://github.com/polkadot-js/api/blob/dbd37da/packages/types/src/types.ts#L63)*

___
<a id="constructor"></a>

##  Constructor

**Ƭ Constructor**: *`object`*

*Defined in [types.ts:65](https://github.com/polkadot-js/api/blob/dbd37da/packages/types/src/types.ts#L65)*

#### Type declaration

___
<a id="constructordef"></a>

##  ConstructorDef

**Ƭ ConstructorDef**: *`object`*

*Defined in [types.ts:67](https://github.com/polkadot-js/api/blob/dbd37da/packages/types/src/types.ts#L67)*

#### Type declaration

[index: `string`]: [Constructor](_types_.md#constructor)<`T`>

___
<a id="registrytypes"></a>

##  RegistryTypes

**Ƭ RegistryTypes**: *`object`*

*Defined in [types.ts:71](https://github.com/polkadot-js/api/blob/dbd37da/packages/types/src/types.ts#L71)*

#### Type declaration

[name: `string`]: [Constructor](_types_.md#constructor) | `string` | `object`

___
<a id="typedef"></a>

##  TypeDef

**Ƭ TypeDef**: *`object`*

*Defined in [types.ts:69](https://github.com/polkadot-js/api/blob/dbd37da/packages/types/src/types.ts#L69)*

#### Type declaration

[index: `string`]: [Codec](../interfaces/_types_.codec.md)

___

