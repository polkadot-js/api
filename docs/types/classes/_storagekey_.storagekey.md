

# Hierarchy

↳  [Bytes](_bytes_.bytes.md)

**↳ StorageKey**

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new StorageKey**(value: * `AnyU8a` &#124; [StorageKey](_storagekey_.storagekey.md) &#124; [StorageFunction](../interfaces/_storagekey_.storagefunction.md) &#124; [[StorageFunction](../interfaces/_storagekey_.storagefunction.md), `any`]*): [StorageKey](_storagekey_.storagekey.md)

*Overrides [Bytes](_bytes_.bytes.md).[constructor](_bytes_.bytes.md#constructor)*

*Defined in [StorageKey.ts:24](https://github.com/polkadot-js/api/blob/1c1a9dd/packages/types/src/StorageKey.ts#L24)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value |  `AnyU8a` &#124; [StorageKey](_storagekey_.storagekey.md) &#124; [StorageFunction](../interfaces/_storagekey_.storagefunction.md) &#124; [[StorageFunction](../interfaces/_storagekey_.storagefunction.md), `any`]|

**Returns:** [StorageKey](_storagekey_.storagekey.md)

___

# Properties

<a id="raw"></a>

##  raw

**● raw**: *`Uint8Array`*

*Inherited from [Base](_codec_base_.base.md).[raw](_codec_base_.base.md#raw)*

*Defined in [codec/Base.ts:19](https://github.com/polkadot-js/api/blob/1c1a9dd/packages/types/src/codec/Base.ts#L19)*

___

# Accessors

<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Inherited from [Bytes](_bytes_.bytes.md).[encodedLength](_bytes_.bytes.md#encodedlength)*

*Overrides [U8a](_codec_u8a_.u8a.md).[encodedLength](_codec_u8a_.u8a.md#encodedlength)*

*Defined in [Bytes.ts:43](https://github.com/polkadot-js/api/blob/1c1a9dd/packages/types/src/Bytes.ts#L43)*

**Returns:** `number`

___
<a id="length"></a>

##  length

getlength(): `number`

*Inherited from [Bytes](_bytes_.bytes.md).[length](_bytes_.bytes.md#length)*

*Overrides [U8a](_codec_u8a_.u8a.md).[length](_codec_u8a_.u8a.md#length)*

*Defined in [Bytes.ts:39](https://github.com/polkadot-js/api/blob/1c1a9dd/packages/types/src/Bytes.ts#L39)*

**Returns:** `number`

___
<a id="outputtype"></a>

##  outputType

getoutputType():  `string` &#124; `null`

*Defined in [StorageKey.ts:62](https://github.com/polkadot-js/api/blob/1c1a9dd/packages/types/src/StorageKey.ts#L62)*

**Returns:**  `string` &#124; `null`

___

# Methods

<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Inherited from [U8a](_codec_u8a_.u8a.md).[toHex](_codec_u8a_.u8a.md#tohex)*

*Defined in [codec/U8a.ts:39](https://github.com/polkadot-js/api/blob/1c1a9dd/packages/types/src/codec/U8a.ts#L39)*

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Inherited from [U8a](_codec_u8a_.u8a.md).[toJSON](_codec_u8a_.u8a.md#tojson)*

*Overrides [Base](_codec_base_.base.md).[toJSON](_codec_base_.base.md#tojson)*

*Defined in [codec/U8a.ts:43](https://github.com/polkadot-js/api/blob/1c1a9dd/packages/types/src/codec/U8a.ts#L43)*

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Inherited from [U8a](_codec_u8a_.u8a.md).[toString](_codec_u8a_.u8a.md#tostring)*

*Overrides [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [codec/U8a.ts:51](https://github.com/polkadot-js/api/blob/1c1a9dd/packages/types/src/codec/U8a.ts#L51)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Inherited from [Bytes](_bytes_.bytes.md).[toU8a](_bytes_.bytes.md#tou8a)*

*Overrides [U8a](_codec_u8a_.u8a.md).[toU8a](_codec_u8a_.u8a.md#tou8a)*

*Defined in [Bytes.ts:47](https://github.com/polkadot-js/api/blob/1c1a9dd/packages/types/src/Bytes.ts#L47)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `Uint8Array`

___
<a id="decodebytes"></a>

## `<Static>` decodeBytes

▸ **decodeBytes**(value: *`AnyU8a`*): `Uint8Array`

*Inherited from [Bytes](_bytes_.bytes.md).[decodeBytes](_bytes_.bytes.md#decodebytes)*

*Defined in [Bytes.ts:19](https://github.com/polkadot-js/api/blob/1c1a9dd/packages/types/src/Bytes.ts#L19)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | `AnyU8a` |

**Returns:** `Uint8Array`

___
<a id="decodestoragekey"></a>

## `<Static>` decodeStorageKey

▸ **decodeStorageKey**(value: * `AnyU8a` &#124; [StorageKey](_storagekey_.storagekey.md) &#124; [StorageFunction](../interfaces/_storagekey_.storagefunction.md) &#124; [[StorageFunction](../interfaces/_storagekey_.storagefunction.md), `any`]*): `Uint8Array`

*Defined in [StorageKey.ts:32](https://github.com/polkadot-js/api/blob/1c1a9dd/packages/types/src/StorageKey.ts#L32)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value |  `AnyU8a` &#124; [StorageKey](_storagekey_.storagekey.md) &#124; [StorageFunction](../interfaces/_storagekey_.storagefunction.md) &#124; [[StorageFunction](../interfaces/_storagekey_.storagefunction.md), `any`]|

**Returns:** `Uint8Array`

___
<a id="decodeu8a"></a>

## `<Static>` decodeU8a

▸ **decodeU8a**(value: *`any`*): `Uint8Array`

*Inherited from [U8a](_codec_u8a_.u8a.md).[decodeU8a](_codec_u8a_.u8a.md#decodeu8a)*

*Defined in [codec/U8a.ts:21](https://github.com/polkadot-js/api/blob/1c1a9dd/packages/types/src/codec/U8a.ts#L21)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | `any` |

**Returns:** `Uint8Array`

___
<a id="gettype"></a>

## `<Static>` getType

▸ **getType**(value: * [StorageKey](_storagekey_.storagekey.md) &#124; [StorageFunction](../interfaces/_storagekey_.storagefunction.md) &#124; [[StorageFunction](../interfaces/_storagekey_.storagefunction.md), `any`]*):  `string` &#124; `null`

*Defined in [StorageKey.ts:48](https://github.com/polkadot-js/api/blob/1c1a9dd/packages/types/src/StorageKey.ts#L48)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value |  [StorageKey](_storagekey_.storagekey.md) &#124; [StorageFunction](../interfaces/_storagekey_.storagefunction.md) &#124; [[StorageFunction](../interfaces/_storagekey_.storagefunction.md), `any`]|

**Returns:**  `string` &#124; `null`

___

