

# Hierarchy

**Signer**

# Properties

<a id="update"></a>

## `<Optional>` update

**● update**: *`undefined` | `function`*

*Defined in [types.ts:153](https://github.com/polkadot-js/api/blob/be17bf5/packages/api/src/types.ts#L153)*

*__description__*: Receives an update for the extrinsic signed by a `signer.sign`

___

# Methods

<a id="sign"></a>

##  sign

▸ **sign**(extrinsic: *`Extrinsic`*, address: *`string`*, options: *`SignatureOptions`*): `Promise`<`number`>

*Defined in [types.ts:148](https://github.com/polkadot-js/api/blob/be17bf5/packages/api/src/types.ts#L148)*

*__description__*: Signs an extrinsic, returning an id (>0) that can be used to retrieve updates

**Parameters:**

| Name | Type |
| ------ | ------ |
| extrinsic | `Extrinsic` |
| address | `string` |
| options | `SignatureOptions` |

**Returns:** `Promise`<`number`>

___

