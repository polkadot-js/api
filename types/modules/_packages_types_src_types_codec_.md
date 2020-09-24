**Polkadot JS API**

> [README](../README.md) / [Globals](../globals.md) / "packages/types/src/types/codec"

# Module: "packages/types/src/types/codec"

## Index

### Interfaces

* [Codec](../interfaces/_packages_types_src_types_codec_.codec.md)
* [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)

### Type aliases

* [ArgsDef](_packages_types_src_types_codec_.md#argsdef)
* [CodecArg](_packages_types_src_types_codec_.md#codecarg)
* [CodecTo](_packages_types_src_types_codec_.md#codecto)
* [ConstructorDef](_packages_types_src_types_codec_.md#constructordef)

## Type aliases

### ArgsDef

Ƭ  **ArgsDef**: Record\<string, [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)>

*Defined in [packages/types/src/types/codec.ts:91](https://github.com/polkadot-js/api/blob/0c4cc51f7/packages/types/src/types/codec.ts#L91)*

___

### CodecArg

Ƭ  **CodecArg**: [Codec](../interfaces/_packages_types_src_types_codec_.codec.md) \| BN \| boolean \| string \| [Uint8Array](../classes/_packages_types_src_codec_raw_.raw.md#uint8array) \| boolean \| number \| string \| undefined \| CodecArgArray \| { [index:string]: [CodecArg](_packages_types_src_types_codec_.md#codecarg);  }

*Defined in [packages/types/src/types/codec.ts:78](https://github.com/polkadot-js/api/blob/0c4cc51f7/packages/types/src/types/codec.ts#L78)*

___

### CodecTo

Ƭ  **CodecTo**: \"toHex\" \| \"toJSON\" \| \"toString\" \| \"toU8a\"

*Defined in [packages/types/src/types/codec.ts:10](https://github.com/polkadot-js/api/blob/0c4cc51f7/packages/types/src/types/codec.ts#L10)*

___

### ConstructorDef

Ƭ  **ConstructorDef**\<T>: Record\<string, [Constructor](../interfaces/_packages_types_src_types_codec_.constructor.md)\<T>>

*Defined in [packages/types/src/types/codec.ts:89](https://github.com/polkadot-js/api/blob/0c4cc51f7/packages/types/src/types/codec.ts#L89)*

#### Type parameters:

Name | Default |
------ | ------ |
`T` | Codec |
