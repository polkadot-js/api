

# Hierarchy

 [Base](_codec_base_.base.md)< [AccountId](_accountid_.accountid.md) &#124; [AccountIndex](_accountindex_.accountindex.md)>

**↳ Address**

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Address**(value?: * [Address](_address_.address.md) &#124; [AccountId](_accountid_.accountid.md) &#124; [AccountIndex](_accountindex_.accountindex.md) &#124; `Array`<`number`> &#124; `Uint8Array` &#124; `string`*): [Address](_address_.address.md)

*Overrides [Base](_codec_base_.base.md).[constructor](_codec_base_.base.md#constructor)*

*Defined in [Address.ts:19](https://github.com/polkadot-js/api/blob/6d3de59/packages/types/src/Address.ts#L19)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` value |  [Address](_address_.address.md) &#124; [AccountId](_accountid_.accountid.md) &#124; [AccountIndex](_accountindex_.accountindex.md) &#124; `Array`<`number`> &#124; `Uint8Array` &#124; `string`|  new Uint8Array() |

**Returns:** [Address](_address_.address.md)

___

# Properties

<a id="raw"></a>

##  raw

**● raw**: * [AccountId](_accountid_.accountid.md) &#124; [AccountIndex](_accountindex_.accountindex.md)
*

*Inherited from [Base](_codec_base_.base.md).[raw](_codec_base_.base.md#raw)*

*Defined in [codec/Base.ts:19](https://github.com/polkadot-js/api/blob/6d3de59/packages/types/src/codec/Base.ts#L19)*

___

# Accessors

<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Overrides [Base](_codec_base_.base.md).[encodedLength](_codec_base_.base.md#encodedlength)*

*Defined in [Address.ts:60](https://github.com/polkadot-js/api/blob/6d3de59/packages/types/src/Address.ts#L60)*

**Returns:** `number`

___

# Methods

<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Defined in [Address.ts:68](https://github.com/polkadot-js/api/blob/6d3de59/packages/types/src/Address.ts#L68)*

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Overrides [Base](_codec_base_.base.md).[toJSON](_codec_base_.base.md#tojson)*

*Defined in [Address.ts:72](https://github.com/polkadot-js/api/blob/6d3de59/packages/types/src/Address.ts#L72)*

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Overrides [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [Address.ts:76](https://github.com/polkadot-js/api/blob/6d3de59/packages/types/src/Address.ts#L76)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Overrides [Base](_codec_base_.base.md).[toU8a](_codec_base_.base.md#tou8a)*

*Defined in [Address.ts:80](https://github.com/polkadot-js/api/blob/6d3de59/packages/types/src/Address.ts#L80)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `Uint8Array`

___
<a id="decodeaddress"></a>

## `<Static>` decodeAddress

▸ **decodeAddress**(value: * [Address](_address_.address.md) &#124; [AccountId](_accountid_.accountid.md) &#124; [AccountIndex](_accountindex_.accountindex.md) &#124; `Array`<`number`> &#124; `Uint8Array` &#124; `string`*):  [AccountId](_accountid_.accountid.md) &#124; [AccountIndex](_accountindex_.accountindex.md)

*Defined in [Address.ts:26](https://github.com/polkadot-js/api/blob/6d3de59/packages/types/src/Address.ts#L26)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value |  [Address](_address_.address.md) &#124; [AccountId](_accountid_.accountid.md) &#124; [AccountIndex](_accountindex_.accountindex.md) &#124; `Array`<`number`> &#124; `Uint8Array` &#124; `string`|

**Returns:**  [AccountId](_accountid_.accountid.md) &#124; [AccountIndex](_accountindex_.accountindex.md)

___

