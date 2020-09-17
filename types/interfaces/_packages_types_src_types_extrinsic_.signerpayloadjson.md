[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/types/src/types/extrinsic"](../modules/_packages_types_src_types_extrinsic_.md) › [SignerPayloadJSON](_packages_types_src_types_extrinsic_.signerpayloadjson.md)

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

###  address

• **address**: *string*

*Defined in [packages/types/src/types/extrinsic.ts:31](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/types/extrinsic.ts#L31)*

**`description`** The ss-58 encoded address

___

###  blockHash

• **blockHash**: *string*

*Defined in [packages/types/src/types/extrinsic.ts:36](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/types/extrinsic.ts#L36)*

**`description`** The checkpoint hash of the block, in hex

___

###  blockNumber

• **blockNumber**: *string*

*Defined in [packages/types/src/types/extrinsic.ts:41](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/types/extrinsic.ts#L41)*

**`description`** The checkpoint block number, in hex

___

###  era

• **era**: *string*

*Defined in [packages/types/src/types/extrinsic.ts:46](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/types/extrinsic.ts#L46)*

**`description`** The era for this transaction, in hex

___

###  genesisHash

• **genesisHash**: *string*

*Defined in [packages/types/src/types/extrinsic.ts:51](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/types/extrinsic.ts#L51)*

**`description`** The genesis hash of the chain, in hex

___

###  method

• **method**: *string*

*Defined in [packages/types/src/types/extrinsic.ts:56](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/types/extrinsic.ts#L56)*

**`description`** The encoded method (with arguments) in hex

___

###  nonce

• **nonce**: *string*

*Defined in [packages/types/src/types/extrinsic.ts:61](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/types/extrinsic.ts#L61)*

**`description`** The nonce for this transaction, in hex

___

###  signedExtensions

• **signedExtensions**: *string[]*

*Defined in [packages/types/src/types/extrinsic.ts:81](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/types/extrinsic.ts#L81)*

**`description`** The applicable signed extensions for this runtime

___

###  specVersion

• **specVersion**: *string*

*Defined in [packages/types/src/types/extrinsic.ts:66](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/types/extrinsic.ts#L66)*

**`description`** The current spec version for the runtime

___

###  tip

• **tip**: *string*

*Defined in [packages/types/src/types/extrinsic.ts:71](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/types/extrinsic.ts#L71)*

**`description`** The tip for this transaction, in hex

___

###  transactionVersion

• **transactionVersion**: *string*

*Defined in [packages/types/src/types/extrinsic.ts:76](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/types/extrinsic.ts#L76)*

**`description`** The current transaction version for the runtime

___

###  version

• **version**: *number*

*Defined in [packages/types/src/types/extrinsic.ts:86](https://github.com/polkadot-js/api/blob/c10e4d3fc1/packages/types/src/types/extrinsic.ts#L86)*

**`description`** The version of the extrinsic we are dealing with
