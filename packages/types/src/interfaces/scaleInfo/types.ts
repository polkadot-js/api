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

/** @name SiField */
export interface SiField extends Struct {
  readonly name: Option<Text>;
  readonly type: SiLookupTypeId;
  readonly typeName: Option<Text>;
  readonly docs: Vec<Text>;
}

/** @name SiLookupTypeId */
export interface SiLookupTypeId extends Compact<u32> {}

/** @name SiPath */
export interface SiPath extends Vec<Text> {}

/** @name SiType */
export interface SiType extends Struct {
  readonly path: SiPath;
  readonly params: Vec<SiTypeParameter>;
  readonly def: SiTypeDef;
  readonly docs: Vec<Text>;
}

/** @name SiTypeDef */
export interface SiTypeDef extends Enum {
  readonly isComposite: boolean;
  readonly asComposite: SiTypeDefComposite;
  readonly isVariant: boolean;
  readonly asVariant: SiTypeDefVariant;
  readonly isSequence: boolean;
  readonly asSequence: SiTypeDefSequence;
  readonly isArray: boolean;
  readonly asArray: SiTypeDefArray;
  readonly isTuple: boolean;
  readonly asTuple: SiTypeDefTuple;
  readonly isPrimitive: boolean;
  readonly asPrimitive: SiTypeDefPrimitive;
  readonly isCompact: boolean;
  readonly asCompact: SiTypeDefCompact;
  readonly isBitSequence: boolean;
  readonly asBitSequence: SiTypeDefBitSequence;
  readonly isHistoricMetaCompat: boolean;
  readonly asHistoricMetaCompat: Type;
}

/** @name SiTypeDefArray */
export interface SiTypeDefArray extends Struct {
  readonly len: u32;
  readonly type: SiLookupTypeId;
}

/** @name SiTypeDefBitSequence */
export interface SiTypeDefBitSequence extends Struct {
  readonly bitStoreType: SiLookupTypeId;
  readonly bitOrderType: SiLookupTypeId;
}

/** @name SiTypeDefCompact */
export interface SiTypeDefCompact extends Struct {
  readonly type: SiLookupTypeId;
}

/** @name SiTypeDefComposite */
export interface SiTypeDefComposite extends Struct {
  readonly fields: Vec<SiField>;
}

/** @name SiTypeDefPrimitive */
export interface SiTypeDefPrimitive extends Enum {
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
}

/** @name SiTypeDefSequence */
export interface SiTypeDefSequence extends Struct {
  readonly type: SiLookupTypeId;
}

/** @name SiTypeDefTuple */
export interface SiTypeDefTuple extends Vec<SiLookupTypeId> {}

/** @name SiTypeDefVariant */
export interface SiTypeDefVariant extends Struct {
  readonly variants: Vec<SiVariant>;
}

/** @name SiTypeParameter */
export interface SiTypeParameter extends Struct {
  readonly name: Text;
  readonly type: Option<SiLookupTypeId>;
}

/** @name SiVariant */
export interface SiVariant extends Struct {
  readonly name: Text;
  readonly fields: Vec<SiField>;
  readonly index: u8;
  readonly docs: Vec<Text>;
}

export type PHANTOM_SCALEINFO = 'scaleInfo';
