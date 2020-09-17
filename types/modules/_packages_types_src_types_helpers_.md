[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/types/src/types/helpers"](_packages_types_src_types_helpers_.md)

# Module: "packages/types/src/types/helpers"

## Index

### Type aliases

* [AnyFunction](_packages_types_src_types_helpers_.md#anyfunction)
* [AnyJson](_packages_types_src_types_helpers_.md#anyjson)
* [AnyNumber](_packages_types_src_types_helpers_.md#anynumber)
* [AnyString](_packages_types_src_types_helpers_.md#anystring)
* [AnyU8a](_packages_types_src_types_helpers_.md#anyu8a)
* [ArrayElementType](_packages_types_src_types_helpers_.md#arrayelementtype)
* [BareOpts](_packages_types_src_types_helpers_.md#bareopts)
* [Callback](_packages_types_src_types_helpers_.md#callback)

## Type aliases

###  AnyFunction

Ƭ **AnyFunction**: *function*

*Defined in [packages/types/src/types/helpers.ts:11](https://github.com/polkadot-js/api/blob/4596e434d/packages/types/src/types/helpers.ts#L11)*

#### Type declaration:

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

___

###  AnyJson

Ƭ **AnyJson**: *string | number | boolean | null | undefined | AnyJsonArray | object*

*Defined in [packages/types/src/types/helpers.ts:14](https://github.com/polkadot-js/api/blob/4596e434d/packages/types/src/types/helpers.ts#L14)*

___

###  AnyNumber

Ƭ **AnyNumber**: *BN | BigInt | [Uint8Array](../classes/_packages_types_src_codec_raw_.raw.md#static-uint8array) | number | string*

*Defined in [packages/types/src/types/helpers.ts:19](https://github.com/polkadot-js/api/blob/4596e434d/packages/types/src/types/helpers.ts#L19)*

___

###  AnyString

Ƭ **AnyString**: *string | string*

*Defined in [packages/types/src/types/helpers.ts:21](https://github.com/polkadot-js/api/blob/4596e434d/packages/types/src/types/helpers.ts#L21)*

___

###  AnyU8a

Ƭ **AnyU8a**: *[Uint8Array](../classes/_packages_types_src_codec_raw_.raw.md#static-uint8array) | number[] | string*

*Defined in [packages/types/src/types/helpers.ts:23](https://github.com/polkadot-js/api/blob/4596e434d/packages/types/src/types/helpers.ts#L23)*

___

###  ArrayElementType

Ƭ **ArrayElementType**: *T extends ReadonlyArray‹infer ElementType› ? ElementType : never*

*Defined in [packages/types/src/types/helpers.ts:26](https://github.com/polkadot-js/api/blob/4596e434d/packages/types/src/types/helpers.ts#L26)*

___

###  BareOpts

Ƭ **BareOpts**: *boolean | Record‹string, boolean›*

*Defined in [packages/types/src/types/helpers.ts:30](https://github.com/polkadot-js/api/blob/4596e434d/packages/types/src/types/helpers.ts#L30)*

___

###  Callback

Ƭ **Callback**: *E extends Codec ? function : function*

*Defined in [packages/types/src/types/helpers.ts:32](https://github.com/polkadot-js/api/blob/4596e434d/packages/types/src/types/helpers.ts#L32)*
