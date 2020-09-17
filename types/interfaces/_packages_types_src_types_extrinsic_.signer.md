[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/types/src/types/extrinsic"](../modules/_packages_types_src_types_extrinsic_.md) › [Signer](_packages_types_src_types_extrinsic_.signer.md)

# Interface: Signer

## Hierarchy

* **Signer**

## Index

### Properties

* [signPayload](_packages_types_src_types_extrinsic_.signer.md#optional-signpayload)
* [signRaw](_packages_types_src_types_extrinsic_.signer.md#optional-signraw)
* [update](_packages_types_src_types_extrinsic_.signer.md#optional-update)

## Properties

### `Optional` signPayload

• **signPayload**? : *undefined | function*

*Defined in [packages/types/src/types/extrinsic.ts:134](https://github.com/polkadot-js/api/blob/4596e434d/packages/types/src/types/extrinsic.ts#L134)*

**`description`** signs an extrinsic payload from a serialized form

___

### `Optional` signRaw

• **signRaw**? : *undefined | function*

*Defined in [packages/types/src/types/extrinsic.ts:139](https://github.com/polkadot-js/api/blob/4596e434d/packages/types/src/types/extrinsic.ts#L139)*

**`description`** signs a raw payload, only the bytes data as supplied

___

### `Optional` update

• **update**? : *undefined | function*

*Defined in [packages/types/src/types/extrinsic.ts:144](https://github.com/polkadot-js/api/blob/4596e434d/packages/types/src/types/extrinsic.ts#L144)*

**`description`** Receives an update for the extrinsic signed by a `signer.sign`
