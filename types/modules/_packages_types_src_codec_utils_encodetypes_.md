[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["packages/types/src/codec/utils/encodeTypes"](_packages_types_src_codec_utils_encodetypes_.md)

# Module: "packages/types/src/codec/utils/encodeTypes"

## Index

### Variables

* [SPECIAL_TYPES](_packages_types_src_codec_utils_encodetypes_.md#const-special_types)

### Functions

* [displayType](_packages_types_src_codec_utils_encodetypes_.md#displaytype)
* [encodeType](_packages_types_src_codec_utils_encodetypes_.md#encodetype)
* [paramsNotation](_packages_types_src_codec_utils_encodetypes_.md#paramsnotation)
* [withTypeString](_packages_types_src_codec_utils_encodetypes_.md#withtypestring)

## Variables

### `Const` SPECIAL_TYPES

• **SPECIAL_TYPES**: *string[]* = ['AccountId', 'AccountIndex', 'Address', 'Balance']

*Defined in [packages/types/src/codec/utils/encodeTypes.ts:8](https://github.com/polkadot-js/api/blob/9f4007bd4/packages/types/src/codec/utils/encodeTypes.ts#L8)*

## Functions

###  displayType

▸ **displayType**(`typeDef`: Pick‹TypeDef, any›): *string*

*Defined in [packages/types/src/codec/utils/encodeTypes.ts:159](https://github.com/polkadot-js/api/blob/9f4007bd4/packages/types/src/codec/utils/encodeTypes.ts#L159)*

**Parameters:**

Name | Type |
------ | ------ |
`typeDef` | Pick‹TypeDef, any› |

**Returns:** *string*

___

###  encodeType

▸ **encodeType**(`typeDef`: Pick‹TypeDef, any›): *string*

*Defined in [packages/types/src/codec/utils/encodeTypes.ts:151](https://github.com/polkadot-js/api/blob/9f4007bd4/packages/types/src/codec/utils/encodeTypes.ts#L151)*

**Parameters:**

Name | Type |
------ | ------ |
`typeDef` | Pick‹TypeDef, any› |

**Returns:** *string*

___

###  paramsNotation

▸ **paramsNotation**(`outer`: string, `inner?`: string | any[], `transform`: function): *string*

*Defined in [packages/types/src/codec/utils/encodeTypes.ts:12](https://github.com/polkadot-js/api/blob/9f4007bd4/packages/types/src/codec/utils/encodeTypes.ts#L12)*

**Parameters:**

▪ **outer**: *string*

▪`Optional`  **inner**: *string | any[]*

▪`Default value`  **transform**: *function*= identity

▸ (`_`: any): *string*

**Parameters:**

Name | Type |
------ | ------ |
`_` | any |

**Returns:** *string*

___

###  withTypeString

▸ **withTypeString**(`typeDef`: Pick‹TypeDef, any›): *Pick‹TypeDef, any›*

*Defined in [packages/types/src/codec/utils/encodeTypes.ts:174](https://github.com/polkadot-js/api/blob/9f4007bd4/packages/types/src/codec/utils/encodeTypes.ts#L174)*

**Parameters:**

Name | Type |
------ | ------ |
`typeDef` | Pick‹TypeDef, any› |

**Returns:** *Pick‹TypeDef, any›*
