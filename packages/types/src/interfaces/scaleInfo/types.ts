// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Compact, Enum, Null, Option, Struct, Text, Type, Vec, u32, u64, u8 } from '@polkadot/types';

/** @name Si0Field */
export interface Si0Field extends Struct {
  readonly name: Option<Text>;
  readonly type: Si0LookupTypeId;
  readonly typeName: Option<Text>;
  readonly docs: Vec<Text>;
}

/** @name Si0LookupTypeId */
export interface Si0LookupTypeId extends u32 {}

/** @name Si0Path */
export interface Si0Path extends Vec<Text> {}

/** @name Si0Type */
export interface Si0Type extends Struct {
  readonly path: Si0Path;
  readonly params: Vec<Si0LookupTypeId>;
  readonly def: Si0TypeDef;
}

/** @name Si0TypeDef */
export interface Si0TypeDef extends Enum {
  readonly isComposite: boolean;
  readonly asComposite: Si0TypeDefComposite;
  readonly isVariant: boolean;
  readonly asVariant: Si0TypeDefVariant;
  readonly isSequence: boolean;
  readonly asSequence: Si0TypeDefSequence;
  readonly isArray: boolean;
  readonly asArray: Si0TypeDefArray;
  readonly isTuple: boolean;
  readonly asTuple: Si0TypeDefTuple;
  readonly isPrimitive: boolean;
  readonly asPrimitive: Si0TypeDefPrimitive;
  readonly isCompact: boolean;
  readonly asCompact: Si0TypeDefCompact;
  readonly isPhantom: boolean;
  readonly asPhantom: Si0TypeDefPhantom;
  readonly isBitSequence: boolean;
  readonly asBitSequence: Si0TypeDefBitSequence;
  readonly type: 'Composite' | 'Variant' | 'Sequence' | 'Array' | 'Tuple' | 'Primitive' | 'Compact' | 'Phantom' | 'BitSequence';
}

/** @name Si0TypeDefArray */
export interface Si0TypeDefArray extends Struct {
  readonly len: u32;
  readonly type: Si0LookupTypeId;
}

/** @name Si0TypeDefBitSequence */
export interface Si0TypeDefBitSequence extends Struct {
  readonly bitStoreType: Si0LookupTypeId;
  readonly bitOrderType: Si0LookupTypeId;
}

/** @name Si0TypeDefCompact */
export interface Si0TypeDefCompact extends Struct {
  readonly type: Si0LookupTypeId;
}

/** @name Si0TypeDefComposite */
export interface Si0TypeDefComposite extends Struct {
  readonly fields: Vec<Si0Field>;
}

/** @name Si0TypeDefPhantom */
export interface Si0TypeDefPhantom extends Null {}

/** @name Si0TypeDefPrimitive */
export interface Si0TypeDefPrimitive extends Enum {
  readonly isBool: boolean;
  readonly isChar: boolean;
  readonly isStr: boolean;
  readonly isU8: boolean;
  readonly isU16: boolean;
  readonly isU32: boolean;
  readonly isU64: boolean;
  readonly isU128: boolean;
  readonly isU256: boolean;
  readonly isI8: boolean;
  readonly isI16: boolean;
  readonly isI32: boolean;
  readonly isI64: boolean;
  readonly isI128: boolean;
  readonly isI256: boolean;
  readonly type: 'Bool' | 'Char' | 'Str' | 'U8' | 'U16' | 'U32' | 'U64' | 'U128' | 'U256' | 'I8' | 'I16' | 'I32' | 'I64' | 'I128' | 'I256';
}

/** @name Si0TypeDefSequence */
export interface Si0TypeDefSequence extends Struct {
  readonly type: Si0LookupTypeId;
}

/** @name Si0TypeDefTuple */
export interface Si0TypeDefTuple extends Vec<Si0LookupTypeId> {}

/** @name Si0TypeDefVariant */
export interface Si0TypeDefVariant extends Struct {
  readonly variants: Vec<Si0Variant>;
}

/** @name Si0TypeParameter */
export interface Si0TypeParameter extends Struct {
  readonly name: Text;
  readonly type: Option<Si0LookupTypeId>;
}

/** @name Si0Variant */
export interface Si0Variant extends Struct {
  readonly name: Text;
  readonly fields: Vec<Si0Field>;
  readonly index: Option<u8>;
  readonly discriminant: Option<u64>;
  readonly docs: Vec<Text>;
}

/** @name Si1Field */
export interface Si1Field extends Struct {
  readonly name: Option<Text>;
  readonly type: Si1LookupTypeId;
  readonly typeName: Option<Text>;
  readonly docs: Vec<Text>;
}

/** @name Si1LookupTypeId */
export interface Si1LookupTypeId extends Compact<u32> {}

/** @name Si1Path */
export interface Si1Path extends Si0Path {}

/** @name Si1Type */
export interface Si1Type extends Struct {
  readonly path: Si1Path;
  readonly params: Vec<Si1TypeParameter>;
  readonly def: Si1TypeDef;
  readonly docs: Vec<Text>;
}

/** @name Si1TypeDef */
export interface Si1TypeDef extends Enum {
  readonly isComposite: boolean;
  readonly asComposite: Si1TypeDefComposite;
  readonly isVariant: boolean;
  readonly asVariant: Si1TypeDefVariant;
  readonly isSequence: boolean;
  readonly asSequence: Si1TypeDefSequence;
  readonly isArray: boolean;
  readonly asArray: Si1TypeDefArray;
  readonly isTuple: boolean;
  readonly asTuple: Si1TypeDefTuple;
  readonly isPrimitive: boolean;
  readonly asPrimitive: Si1TypeDefPrimitive;
  readonly isCompact: boolean;
  readonly asCompact: Si1TypeDefCompact;
  readonly isBitSequence: boolean;
  readonly asBitSequence: Si1TypeDefBitSequence;
  readonly isHistoricMetaCompat: boolean;
  readonly asHistoricMetaCompat: Type;
  readonly type: 'Composite' | 'Variant' | 'Sequence' | 'Array' | 'Tuple' | 'Primitive' | 'Compact' | 'BitSequence' | 'HistoricMetaCompat';
}

/** @name Si1TypeDefArray */
export interface Si1TypeDefArray extends Struct {
  readonly len: u32;
  readonly type: Si1LookupTypeId;
}

/** @name Si1TypeDefBitSequence */
export interface Si1TypeDefBitSequence extends Struct {
  readonly bitStoreType: Si1LookupTypeId;
  readonly bitOrderType: Si1LookupTypeId;
}

/** @name Si1TypeDefCompact */
export interface Si1TypeDefCompact extends Struct {
  readonly type: Si1LookupTypeId;
}

/** @name Si1TypeDefComposite */
export interface Si1TypeDefComposite extends Struct {
  readonly fields: Vec<Si1Field>;
}

/** @name Si1TypeDefPrimitive */
export interface Si1TypeDefPrimitive extends Si0TypeDefPrimitive {}

/** @name Si1TypeDefSequence */
export interface Si1TypeDefSequence extends Struct {
  readonly type: Si1LookupTypeId;
}

/** @name Si1TypeDefTuple */
export interface Si1TypeDefTuple extends Vec<Si1LookupTypeId> {}

/** @name Si1TypeDefVariant */
export interface Si1TypeDefVariant extends Struct {
  readonly variants: Vec<Si1Variant>;
}

/** @name Si1TypeParameter */
export interface Si1TypeParameter extends Struct {
  readonly name: Text;
  readonly type: Option<Si1LookupTypeId>;
}

/** @name Si1Variant */
export interface Si1Variant extends Struct {
  readonly name: Text;
  readonly fields: Vec<Si1Field>;
  readonly index: u8;
  readonly docs: Vec<Text>;
}

/** @name SiField */
export interface SiField extends Si1Field {}

/** @name SiLookupTypeId */
export interface SiLookupTypeId extends Si1LookupTypeId {}

/** @name SiPath */
export interface SiPath extends Si1Path {}

/** @name SiType */
export interface SiType extends Si1Type {}

/** @name SiTypeDef */
export interface SiTypeDef extends Si1TypeDef {}

/** @name SiTypeDefArray */
export interface SiTypeDefArray extends Si1TypeDefArray {}

/** @name SiTypeDefBitSequence */
export interface SiTypeDefBitSequence extends Si1TypeDefBitSequence {}

/** @name SiTypeDefCompact */
export interface SiTypeDefCompact extends Si1TypeDefCompact {}

/** @name SiTypeDefComposite */
export interface SiTypeDefComposite extends Si1TypeDefComposite {}

/** @name SiTypeDefPrimitive */
export interface SiTypeDefPrimitive extends Si1TypeDefPrimitive {}

/** @name SiTypeDefSequence */
export interface SiTypeDefSequence extends Si1TypeDefSequence {}

/** @name SiTypeDefTuple */
export interface SiTypeDefTuple extends Si1TypeDefTuple {}

/** @name SiTypeDefVariant */
export interface SiTypeDefVariant extends Si1TypeDefVariant {}

/** @name SiTypeParameter */
export interface SiTypeParameter extends Si1TypeParameter {}

/** @name SiVariant */
export interface SiVariant extends Si1Variant {}

export type PHANTOM_SCALEINFO = 'scaleInfo';
