**[Polkadot JS API](../README.md)**

> [Globals](../globals.md) / ["packages/types/src/types/extrinsic"](../modules/_packages_types_src_types_extrinsic_.md) / Signer

# Interface: Signer

## Hierarchy

* **Signer**

## Index

### Properties

* [signPayload](_packages_types_src_types_extrinsic_.signer.md#signpayload)
* [signRaw](_packages_types_src_types_extrinsic_.signer.md#signraw)
* [update](_packages_types_src_types_extrinsic_.signer.md#update)

## Properties

### signPayload

• `Optional` **signPayload**: undefined \| (payload: [SignerPayloadJSON](_packages_types_src_types_extrinsic_.signerpayloadjson.md)) => Promise\<[SignerResult](_packages_types_src_types_extrinsic_.signerresult.md)>

*Defined in [packages/types/src/types/extrinsic.ts:133](https://github.com/polkadot-js/api/blob/d3703c072/packages/types/src/types/extrinsic.ts#L133)*

**`description`** signs an extrinsic payload from a serialized form

___

### signRaw

• `Optional` **signRaw**: undefined \| (raw: [SignerPayloadRaw](_packages_types_src_types_extrinsic_.signerpayloadraw.md)) => Promise\<[SignerResult](_packages_types_src_types_extrinsic_.signerresult.md)>

*Defined in [packages/types/src/types/extrinsic.ts:138](https://github.com/polkadot-js/api/blob/d3703c072/packages/types/src/types/extrinsic.ts#L138)*

**`description`** signs a raw payload, only the bytes data as supplied

___

### update

• `Optional` **update**: undefined \| (id: number,status: H256 \| [ISubmittableResult](_packages_types_src_types_extrinsic_.isubmittableresult.md)) => void

*Defined in [packages/types/src/types/extrinsic.ts:143](https://github.com/polkadot-js/api/blob/d3703c072/packages/types/src/types/extrinsic.ts#L143)*

**`description`** Receives an update for the extrinsic signed by a `signer.sign`
