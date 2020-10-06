**[Polkadot JS API](../README.md)**

> [Globals](../globals.md) / ["packages/types/src/types/extrinsic"](../modules/_packages_types_src_types_extrinsic_.md) / SignerPayloadJSON

# Interface: SignerPayloadJSON

## Hierarchy

* **SignerPayloadJSON**

## Index

### Properties

* [address](_packages_types_src_types_extrinsic_.signerpayloadjson.md#address)
* [blockHash](_packages_types_src_types_extrinsic_.signerpayloadjson.md#blockhash)
* [blockNumber](_packages_types_src_types_extrinsic_.signerpayloadjson.md#blocknumber)
* [era](_packages_types_src_types_extrinsic_.signerpayloadjson.md#era)
* [genesisHash](_packages_types_src_types_extrinsic_.signerpayloadjson.md#genesishash)
* [method](_packages_types_src_types_extrinsic_.signerpayloadjson.md#method)
* [nonce](_packages_types_src_types_extrinsic_.signerpayloadjson.md#nonce)
* [signedExtensions](_packages_types_src_types_extrinsic_.signerpayloadjson.md#signedextensions)
* [specVersion](_packages_types_src_types_extrinsic_.signerpayloadjson.md#specversion)
* [tip](_packages_types_src_types_extrinsic_.signerpayloadjson.md#tip)
* [transactionVersion](_packages_types_src_types_extrinsic_.signerpayloadjson.md#transactionversion)
* [version](_packages_types_src_types_extrinsic_.signerpayloadjson.md#version)

## Properties

### address

•  **address**: string

*Defined in [packages/types/src/types/extrinsic.ts:30](https://github.com/polkadot-js/api/blob/014fa123b/packages/types/src/types/extrinsic.ts#L30)*

**`description`** The ss-58 encoded address

___

### blockHash

•  **blockHash**: string

*Defined in [packages/types/src/types/extrinsic.ts:35](https://github.com/polkadot-js/api/blob/014fa123b/packages/types/src/types/extrinsic.ts#L35)*

**`description`** The checkpoint hash of the block, in hex

___

### blockNumber

•  **blockNumber**: string

*Defined in [packages/types/src/types/extrinsic.ts:40](https://github.com/polkadot-js/api/blob/014fa123b/packages/types/src/types/extrinsic.ts#L40)*

**`description`** The checkpoint block number, in hex

___

### era

•  **era**: string

*Defined in [packages/types/src/types/extrinsic.ts:45](https://github.com/polkadot-js/api/blob/014fa123b/packages/types/src/types/extrinsic.ts#L45)*

**`description`** The era for this transaction, in hex

___

### genesisHash

•  **genesisHash**: string

*Defined in [packages/types/src/types/extrinsic.ts:50](https://github.com/polkadot-js/api/blob/014fa123b/packages/types/src/types/extrinsic.ts#L50)*

**`description`** The genesis hash of the chain, in hex

___

### method

•  **method**: string

*Defined in [packages/types/src/types/extrinsic.ts:55](https://github.com/polkadot-js/api/blob/014fa123b/packages/types/src/types/extrinsic.ts#L55)*

**`description`** The encoded method (with arguments) in hex

___

### nonce

•  **nonce**: string

*Defined in [packages/types/src/types/extrinsic.ts:60](https://github.com/polkadot-js/api/blob/014fa123b/packages/types/src/types/extrinsic.ts#L60)*

**`description`** The nonce for this transaction, in hex

___

### signedExtensions

•  **signedExtensions**: string[]

*Defined in [packages/types/src/types/extrinsic.ts:80](https://github.com/polkadot-js/api/blob/014fa123b/packages/types/src/types/extrinsic.ts#L80)*

**`description`** The applicable signed extensions for this runtime

___

### specVersion

•  **specVersion**: string

*Defined in [packages/types/src/types/extrinsic.ts:65](https://github.com/polkadot-js/api/blob/014fa123b/packages/types/src/types/extrinsic.ts#L65)*

**`description`** The current spec version for the runtime

___

### tip

•  **tip**: string

*Defined in [packages/types/src/types/extrinsic.ts:70](https://github.com/polkadot-js/api/blob/014fa123b/packages/types/src/types/extrinsic.ts#L70)*

**`description`** The tip for this transaction, in hex

___

### transactionVersion

•  **transactionVersion**: string

*Defined in [packages/types/src/types/extrinsic.ts:75](https://github.com/polkadot-js/api/blob/014fa123b/packages/types/src/types/extrinsic.ts#L75)*

**`description`** The current transaction version for the runtime

___

### version

•  **version**: number

*Defined in [packages/types/src/types/extrinsic.ts:85](https://github.com/polkadot-js/api/blob/014fa123b/packages/types/src/types/extrinsic.ts#L85)*

**`description`** The version of the extrinsic we are dealing with
