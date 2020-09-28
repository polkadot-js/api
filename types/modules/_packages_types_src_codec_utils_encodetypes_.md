**Polkadot JS API**

> [README](../README.md) / [Globals](../globals.md) / "packages/types/src/codec/utils/encodeTypes"

# Module: "packages/types/src/codec/utils/encodeTypes"

## Index

### Variables

* [SPECIAL\_TYPES](_packages_types_src_codec_utils_encodetypes_.md#special_types)

### Functions

* [displayType](_packages_types_src_codec_utils_encodetypes_.md#displaytype)
* [encodeType](_packages_types_src_codec_utils_encodetypes_.md#encodetype)
* [paramsNotation](_packages_types_src_codec_utils_encodetypes_.md#paramsnotation)
* [withTypeString](_packages_types_src_codec_utils_encodetypes_.md#withtypestring)

## Variables

### SPECIAL\_TYPES

• `Const` **SPECIAL\_TYPES**: string[] = ['AccountId', 'AccountIndex', 'Address', 'Balance']

*Defined in [packages/types/src/codec/utils/encodeTypes.ts:8](https://github.com/polkadot-js/api/blob/ff59962c5/packages/types/src/codec/utils/encodeTypes.ts#L8)*

## Functions

### displayType

▸ **displayType**(`typeDef`: Pick\<TypeDef, any>): string

*Defined in [packages/types/src/codec/utils/encodeTypes.ts:159](https://github.com/polkadot-js/api/blob/ff59962c5/packages/types/src/codec/utils/encodeTypes.ts#L159)*

#### Parameters:

Name | Type |
------ | ------ |
`typeDef` | Pick\<TypeDef, any> |

**Returns:** string

___

### encodeType

▸ **encodeType**(`typeDef`: Pick\<TypeDef, any>): string

*Defined in [packages/types/src/codec/utils/encodeTypes.ts:151](https://github.com/polkadot-js/api/blob/ff59962c5/packages/types/src/codec/utils/encodeTypes.ts#L151)*

#### Parameters:

Name | Type |
------ | ------ |
`typeDef` | Pick\<TypeDef, any> |

**Returns:** string

___

### paramsNotation

▸ **paramsNotation**(`outer`: string, `inner?`: string \| any[], `transform`: (_: any) => string): string

*Defined in [packages/types/src/codec/utils/encodeTypes.ts:12](https://github.com/polkadot-js/api/blob/ff59962c5/packages/types/src/codec/utils/encodeTypes.ts#L12)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`outer` | string | - |
`inner?` | string \| any[] | - |
`transform` | (_: any) => string | identity |

**Returns:** string

___

### withTypeString

▸ **withTypeString**(`typeDef`: Pick\<TypeDef, any>): Pick\<TypeDef, any>

*Defined in [packages/types/src/codec/utils/encodeTypes.ts:174](https://github.com/polkadot-js/api/blob/ff59962c5/packages/types/src/codec/utils/encodeTypes.ts#L174)*

#### Parameters:

Name | Type |
------ | ------ |
`typeDef` | Pick\<TypeDef, any> |

**Returns:** Pick\<TypeDef, any>
