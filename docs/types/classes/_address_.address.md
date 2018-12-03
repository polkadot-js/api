

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

*Defined in [Address.ts:25](https://github.com/polkadot-js/api/blob/6cab9be/packages/types/src/Address.ts#L25)*

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

*Defined in [Address.ts:64](https://github.com/polkadot-js/api/blob/6cab9be/packages/types/src/Address.ts#L64)*

**Returns:** `number`

___
<a id="rawlength"></a>

##  rawLength

getrawLength(): `number`

*Defined in [Address.ts:75](https://github.com/polkadot-js/api/blob/6cab9be/packages/types/src/Address.ts#L75)*

**Returns:** `number`

___

# Methods

<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Defined in [Address.ts:81](https://github.com/polkadot-js/api/blob/6cab9be/packages/types/src/Address.ts#L81)*

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Defined in [Address.ts:85](https://github.com/polkadot-js/api/blob/6cab9be/packages/types/src/Address.ts#L85)*

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Defined in [Address.ts:89](https://github.com/polkadot-js/api/blob/6cab9be/packages/types/src/Address.ts#L89)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Defined in [Address.ts:93](https://github.com/polkadot-js/api/blob/6cab9be/packages/types/src/Address.ts#L93)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `Uint8Array`

___
<a id="decodeaddress"></a>

## `<Static>` decodeAddress

▸ **decodeAddress**(value: *`AnyAddress`*):  [AccountId](_accountid_.accountid.md) &#124; [AccountIndex](_accountindex_.accountindex.md)

*Defined in [Address.ts:32](https://github.com/polkadot-js/api/blob/6cab9be/packages/types/src/Address.ts#L32)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `AnyAddress` |

**Returns:**  [AccountId](_accountid_.accountid.md) &#124; [AccountIndex](_accountindex_.accountindex.md)

___

