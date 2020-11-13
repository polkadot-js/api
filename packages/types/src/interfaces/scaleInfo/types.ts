// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Enum, Option, Struct, Text, Vec, u16, u32, u64 } from '@polkadot/types';

/** @name SiField */
export interface SiField extends Struct {
  readonly name: Option<Text>;
  readonly type: SiLookupTypeId;
}

/** @name SiLookupTypeId */
export interface SiLookupTypeId extends u32 {}

/** @name SiPath */
export interface SiPath extends Vec<Text> {}

/** @name SiType */
export interface SiType extends Struct {
  readonly path: SiPath;
  readonly params: Vec<SiLookupTypeId>;
  readonly def: SiTypeDef;
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
}

/** @name SiTypeDefArray */
export interface SiTypeDefArray extends Struct {
  readonly len: u16;
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

/** @name SiVariant */
export interface SiVariant extends Struct {
  readonly name: Text;
  readonly fields: Vec<SiField>;
  readonly discriminant: Option<u64>;
}

export type PHANTOM_SCALEINFO = 'scaleInfo';
