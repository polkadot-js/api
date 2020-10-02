**Polkadot JS API**

> [README](../README.md) / [Globals](../globals.md) / ["packages/types/src/types/extrinsic"](../modules/_packages_types_src_types_extrinsic_.md) / SignerPayloadRaw

# Interface: SignerPayloadRaw

## Hierarchy

* [SignerPayloadRawBase](_packages_types_src_types_extrinsic_.signerpayloadrawbase.md)

  ↳ **SignerPayloadRaw**

## Index

### Properties

* [address](_packages_types_src_types_extrinsic_.signerpayloadraw.md#address)
* [data](_packages_types_src_types_extrinsic_.signerpayloadraw.md#data)
* [type](_packages_types_src_types_extrinsic_.signerpayloadraw.md#type)

## Properties

### address

•  **address**: string

*Defined in [packages/types/src/types/extrinsic.ts:104](https://github.com/polkadot-js/api/blob/5577723b7/packages/types/src/types/extrinsic.ts#L104)*

**`description`** The ss-58 encoded address

___

### data

•  **data**: string

*Inherited from [SignerPayloadRawBase](_packages_types_src_types_extrinsic_.signerpayloadrawbase.md).[data](_packages_types_src_types_extrinsic_.signerpayloadrawbase.md#data)*

*Defined in [packages/types/src/types/extrinsic.ts:92](https://github.com/polkadot-js/api/blob/5577723b7/packages/types/src/types/extrinsic.ts#L92)*

**`description`** The hex-encoded data for this request

___

### type

•  **type**: \"bytes\" \| \"payload\"

*Overrides [SignerPayloadRawBase](_packages_types_src_types_extrinsic_.signerpayloadrawbase.md).[type](_packages_types_src_types_extrinsic_.signerpayloadrawbase.md#type)*

*Defined in [packages/types/src/types/extrinsic.ts:109](https://github.com/polkadot-js/api/blob/5577723b7/packages/types/src/types/extrinsic.ts#L109)*

**`description`** The type of the contained data
