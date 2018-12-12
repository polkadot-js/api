

*__name__*: Address

*__description__*: A wrapper around an AccountId and/or AccountIndex that is encoded with a prefix. Since we are dealing with underlying publicKeys (or shorter encoded addresses), we extend from Base with an AccountId/AccountIndex wrapper. Basically the Address is encoded as `[ <prefix-byte>, ...publicKey/...bytes ]` as per spec

# Hierarchy

 [Base](_codec_base_.base.md)< [AccountId](_accountid_.accountid.md) &#124; [AccountIndex](_accountindex_.accountindex.md)>

**↳ Address**

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Address**(value?: *`AnyAddress`*): [Address](_address_.address.md)

*Overrides [Base](_codec_base_.base.md).[constructor](_codec_base_.base.md#constructor)*

*Defined in [Address.ts:25](https://github.com/polkadot-js/api/blob/3c8b3d3/packages/types/src/Address.ts#L25)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` value | `AnyAddress` |  new Uint8Array() |

**Returns:** [Address](_address_.address.md)

___

# Accessors

<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Defined in [Address.ts:67](https://github.com/polkadot-js/api/blob/3c8b3d3/packages/types/src/Address.ts#L67)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="rawlength"></a>

##  rawLength

getrawLength(): `number`

*Defined in [Address.ts:81](https://github.com/polkadot-js/api/blob/3c8b3d3/packages/types/src/Address.ts#L81)*

*__description__*: The length of the raw value, either AccountIndex or AccountId

**Returns:** `number`

___

# Methods

<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Defined in [Address.ts:90](https://github.com/polkadot-js/api/blob/3c8b3d3/packages/types/src/Address.ts#L90)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Defined in [Address.ts:97](https://github.com/polkadot-js/api/blob/3c8b3d3/packages/types/src/Address.ts#L97)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Defined in [Address.ts:104](https://github.com/polkadot-js/api/blob/3c8b3d3/packages/types/src/Address.ts#L104)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Defined in [Address.ts:112](https://github.com/polkadot-js/api/blob/3c8b3d3/packages/types/src/Address.ts#L112)*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___
<a id="decodeaddress"></a>

## `<Static>` decodeAddress

▸ **decodeAddress**(value: *`AnyAddress`*):  [AccountId](_accountid_.accountid.md) &#124; [AccountIndex](_accountindex_.accountindex.md)

*Defined in [Address.ts:32](https://github.com/polkadot-js/api/blob/3c8b3d3/packages/types/src/Address.ts#L32)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `AnyAddress` |

**Returns:**  [AccountId](_accountid_.accountid.md) &#124; [AccountIndex](_accountindex_.accountindex.md)

___

