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

*Defined in [packages/types/src/types/helpers.ts:10](https://github.com/polkadot-js/api/blob/9f4007bd4/packages/types/src/types/helpers.ts#L10)*

#### Type declaration:

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

___

###  AnyJson

Ƭ **AnyJson**: *string | number | boolean | null | undefined | AnyJsonArray | object*

*Defined in [packages/types/src/types/helpers.ts:13](https://github.com/polkadot-js/api/blob/9f4007bd4/packages/types/src/types/helpers.ts#L13)*

___

###  AnyNumber

Ƭ **AnyNumber**: *BN | BigInt | [Uint8Array](../classes/_packages_types_src_codec_raw_.raw.md#static-uint8array) | number | string*

*Defined in [packages/types/src/types/helpers.ts:18](https://github.com/polkadot-js/api/blob/9f4007bd4/packages/types/src/types/helpers.ts#L18)*

___

###  AnyString

Ƭ **AnyString**: *string | string*

*Defined in [packages/types/src/types/helpers.ts:20](https://github.com/polkadot-js/api/blob/9f4007bd4/packages/types/src/types/helpers.ts#L20)*

___

###  AnyU8a

Ƭ **AnyU8a**: *[Uint8Array](../classes/_packages_types_src_codec_raw_.raw.md#static-uint8array) | number[] | string*

*Defined in [packages/types/src/types/helpers.ts:22](https://github.com/polkadot-js/api/blob/9f4007bd4/packages/types/src/types/helpers.ts#L22)*

___

###  ArrayElementType

Ƭ **ArrayElementType**: *T extends ReadonlyArray‹infer ElementType› ? ElementType : never*

*Defined in [packages/types/src/types/helpers.ts:25](https://github.com/polkadot-js/api/blob/9f4007bd4/packages/types/src/types/helpers.ts#L25)*

___

###  BareOpts

Ƭ **BareOpts**: *boolean | Record‹string, boolean›*

*Defined in [packages/types/src/types/helpers.ts:29](https://github.com/polkadot-js/api/blob/9f4007bd4/packages/types/src/types/helpers.ts#L29)*

___

###  Callback

Ƭ **Callback**: *E extends Codec ? function : function*

*Defined in [packages/types/src/types/helpers.ts:31](https://github.com/polkadot-js/api/blob/9f4007bd4/packages/types/src/types/helpers.ts#L31)*
