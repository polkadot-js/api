

# Hierarchy

↳  [Address](_address_.address.md)

**↳ RawAddress**

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new RawAddress**(value?: * [Address](_address_.address.md) &#124; [AccountId](_accountid_.accountid.md) &#124; [AccountIndex](_accountindex_.accountindex.md) &#124; `string` &#124; `Uint8Array`*): [RawAddress](_rawaddress_.rawaddress.md)

*Inherited from [Address](_address_.address.md).[constructor](_address_.address.md#constructor)*

*Overrides [Base](_codec_base_.base.md).[constructor](_codec_base_.base.md#constructor)*

*Defined in [Address.ts:19](https://github.com/polkadot-js/api/blob/c7cd9cd/packages/types/src/Address.ts#L19)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` value |  [Address](_address_.address.md) &#124; [AccountId](_accountid_.accountid.md) &#124; [AccountIndex](_accountindex_.accountindex.md) &#124; `string` &#124; `Uint8Array`|  new Uint8Array() |

**Returns:** [RawAddress](_rawaddress_.rawaddress.md)

___

# Properties

<a id="raw"></a>

##  raw

**● raw**: * [AccountId](_accountid_.accountid.md) &#124; [AccountIndex](_accountindex_.accountindex.md)
*

*Inherited from [Base](_codec_base_.base.md).[raw](_codec_base_.base.md#raw)*

*Defined in [codec/Base.ts:19](https://github.com/polkadot-js/api/blob/c7cd9cd/packages/types/src/codec/Base.ts#L19)*

___

# Methods

<a id="bytelength"></a>

##  byteLength

▸ **byteLength**(): `number`

*Inherited from [Address](_address_.address.md).[byteLength](_address_.address.md#bytelength)*

*Overrides [Base](_codec_base_.base.md).[byteLength](_codec_base_.base.md#bytelength)*

*Defined in [Address.ts:86](https://github.com/polkadot-js/api/blob/c7cd9cd/packages/types/src/Address.ts#L86)*

**Returns:** `number`

___
<a id="fromjson"></a>

##  fromJSON

▸ **fromJSON**(input: *`any`*): [Address](_address_.address.md)

*Inherited from [Address](_address_.address.md).[fromJSON](_address_.address.md#fromjson)*

*Overrides [Base](_codec_base_.base.md).[fromJSON](_codec_base_.base.md#fromjson)*

*Defined in [Address.ts:90](https://github.com/polkadot-js/api/blob/c7cd9cd/packages/types/src/Address.ts#L90)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `any` |

**Returns:** [Address](_address_.address.md)

___
<a id="fromu8a"></a>

##  fromU8a

▸ **fromU8a**(input: *`Uint8Array`*): [Address](_address_.address.md)

*Inherited from [Address](_address_.address.md).[fromU8a](_address_.address.md#fromu8a)*

*Overrides [Base](_codec_base_.base.md).[fromU8a](_codec_base_.base.md#fromu8a)*

*Defined in [Address.ts:101](https://github.com/polkadot-js/api/blob/c7cd9cd/packages/types/src/Address.ts#L101)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `Uint8Array` |

**Returns:** [Address](_address_.address.md)

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Inherited from [Address](_address_.address.md).[toJSON](_address_.address.md#tojson)*

*Overrides [Base](_codec_base_.base.md).[toJSON](_codec_base_.base.md#tojson)*

*Defined in [Address.ts:109](https://github.com/polkadot-js/api/blob/c7cd9cd/packages/types/src/Address.ts#L109)*

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Inherited from [Address](_address_.address.md).[toString](_address_.address.md#tostring)*

*Overrides [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [Address.ts:113](https://github.com/polkadot-js/api/blob/c7cd9cd/packages/types/src/Address.ts#L113)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Inherited from [Address](_address_.address.md).[toU8a](_address_.address.md#tou8a)*

*Overrides [Base](_codec_base_.base.md).[toU8a](_codec_base_.base.md#tou8a)*

*Defined in [Address.ts:117](https://github.com/polkadot-js/api/blob/c7cd9cd/packages/types/src/Address.ts#L117)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `Uint8Array`

___
<a id="decode"></a>

## `<Static>` decode

▸ **decode**(value: * [AccountId](_accountid_.accountid.md) &#124; [AccountIndex](_accountindex_.accountindex.md) &#124; `string` &#124; `Uint8Array` &#124; `Array`<`number`>*):  [AccountId](_accountid_.accountid.md) &#124; [AccountIndex](_accountindex_.accountindex.md)

*Inherited from [Address](_address_.address.md).[decode](_address_.address.md#decode)*

*Defined in [Address.ts:28](https://github.com/polkadot-js/api/blob/c7cd9cd/packages/types/src/Address.ts#L28)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value |  [AccountId](_accountid_.accountid.md) &#124; [AccountIndex](_accountindex_.accountindex.md) &#124; `string` &#124; `Uint8Array` &#124; `Array`<`number`>|

**Returns:**  [AccountId](_accountid_.accountid.md) &#124; [AccountIndex](_accountindex_.accountindex.md)

___
<a id="readlength"></a>

## `<Static>` readLength

▸ **readLength**(input: *`Uint8Array`*): `number`

*Inherited from [Address](_address_.address.md).[readLength](_address_.address.md#readlength)*

*Defined in [Address.ts:52](https://github.com/polkadot-js/api/blob/c7cd9cd/packages/types/src/Address.ts#L52)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| input | `Uint8Array` |

**Returns:** `number`

___
<a id="writelength"></a>

## `<Static>` writeLength

▸ **writeLength**(length: *`number`*): `Uint8Array`

*Inherited from [Address](_address_.address.md).[writeLength](_address_.address.md#writelength)*

*Defined in [Address.ts:70](https://github.com/polkadot-js/api/blob/c7cd9cd/packages/types/src/Address.ts#L70)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| length | `number` |

**Returns:** `Uint8Array`

___

