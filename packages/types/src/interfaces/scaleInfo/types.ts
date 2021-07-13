// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Enum, Null, Option, Struct, Text, Type, Vec, u32, u64, u8 } from '@polkadot/types';

/** @name SiField */
export interface SiField extends Struct {
  readonly name: Option<Text>;
  readonly type: SiLookupTypeId;
  readonly typeName: Option<Text>;
  readonly docs: Vec<Text>;
}

/** @name SiLookupTypeId */
export interface SiLookupTypeId extends u32 {}

/** @name SiPath */
export interface SiPath extends Vec<Text> {}

/** @name SiType */
export interface SiType extends Struct {
  readonly path: SiPath;
  readonly params: Vec<SiTypeParameter>;
  readonly def: SiTypeDef;
  readonly docs: Vec<Text>;
}

/** @name SiType0 */
export interface SiType0 extends Struct {
  readonly path: SiPath;
  readonly params: Vec<SiLookupTypeId>;
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
  readonly isPhantom: boolean;
  readonly asPhantom: SiTypeDefPhantom;
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

/** @name SiTypeDefPhantom */
export interface SiTypeDefPhantom extends Null {}

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
  readonly index: Option<u8>;
  readonly discriminant: Option<u64>;
  readonly docs: Vec<Text>;
}

export type PHANTOM_SCALEINFO = 'scaleInfo';
