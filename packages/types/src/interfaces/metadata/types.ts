// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import { Enum, Option, Struct, Vec } from '@polkadot/types/codec';
import { Bytes, Text, Type, bool, u8 } from '@polkadot/types/primitive';

/** @name DoubleMapTypeLatest */
export interface DoubleMapTypeLatest extends DoubleMapTypeV12 {}

/** @name DoubleMapTypeV10 */
export interface DoubleMapTypeV10 extends Struct {
  readonly hasher: StorageHasherV10;
  readonly key1: Type;
  readonly key2: Type;
  readonly value: Type;
  readonly key2Hasher: StorageHasherV10;
}

/** @name DoubleMapTypeV11 */
export interface DoubleMapTypeV11 extends Struct {
  readonly hasher: StorageHasherV11;
  readonly key1: Type;
  readonly key2: Type;
  readonly value: Type;
  readonly key2Hasher: StorageHasherV11;
}

/** @name DoubleMapTypeV12 */
export interface DoubleMapTypeV12 extends DoubleMapTypeV11 {}

/** @name DoubleMapTypeV9 */
export interface DoubleMapTypeV9 extends Struct {
  readonly hasher: StorageHasherV9;
  readonly key1: Type;
  readonly key2: Type;
  readonly value: Type;
  readonly key2Hasher: StorageHasherV9;
}

/** @name ErrorMetadataV10 */
export interface ErrorMetadataV10 extends ErrorMetadataV9 {}

/** @name ErrorMetadataV11 */
export interface ErrorMetadataV11 extends ErrorMetadataV10 {}

/** @name ErrorMetadataV12 */
export interface ErrorMetadataV12 extends ErrorMetadataV11 {}

/** @name ErrorMetadataV9 */
export interface ErrorMetadataV9 extends Struct {
  readonly name: Text;
  readonly documentation: Vec<Text>;
}

/** @name EventMetadataLatest */
export interface EventMetadataLatest extends EventMetadataV12 {}

/** @name EventMetadataV10 */
export interface EventMetadataV10 extends EventMetadataV9 {}

/** @name EventMetadataV11 */
export interface EventMetadataV11 extends EventMetadataV10 {}

/** @name EventMetadataV12 */
export interface EventMetadataV12 extends EventMetadataV11 {}

/** @name EventMetadataV9 */
export interface EventMetadataV9 extends Struct {
  readonly name: Text;
  readonly args: Vec<Type>;
  readonly documentation: Vec<Text>;
}

/** @name ExtrinsicMetadataLatest */
export interface ExtrinsicMetadataLatest extends ExtrinsicMetadataV12 {}

/** @name ExtrinsicMetadataV11 */
export interface ExtrinsicMetadataV11 extends Struct {
  readonly version: u8;
  readonly signedExtensions: Vec<Text>;
}

/** @name ExtrinsicMetadataV12 */
export interface ExtrinsicMetadataV12 extends ExtrinsicMetadataV11 {}

/** @name FunctionArgumentMetadataLatest */
export interface FunctionArgumentMetadataLatest extends FunctionArgumentMetadataV12 {}

/** @name FunctionArgumentMetadataV10 */
export interface FunctionArgumentMetadataV10 extends FunctionArgumentMetadataV9 {}

/** @name FunctionArgumentMetadataV11 */
export interface FunctionArgumentMetadataV11 extends FunctionArgumentMetadataV10 {}

/** @name FunctionArgumentMetadataV12 */
export interface FunctionArgumentMetadataV12 extends FunctionArgumentMetadataV11 {}

/** @name FunctionArgumentMetadataV9 */
export interface FunctionArgumentMetadataV9 extends Struct {
  readonly name: Text;
  readonly type: Type;
}

/** @name FunctionMetadataLatest */
export interface FunctionMetadataLatest extends FunctionMetadataV12 {}

/** @name FunctionMetadataV10 */
export interface FunctionMetadataV10 extends FunctionMetadataV9 {}

/** @name FunctionMetadataV11 */
export interface FunctionMetadataV11 extends FunctionMetadataV10 {}

/** @name FunctionMetadataV12 */
export interface FunctionMetadataV12 extends FunctionMetadataV11 {}

/** @name FunctionMetadataV9 */
export interface FunctionMetadataV9 extends Struct {
  readonly name: Text;
  readonly args: Vec<FunctionArgumentMetadataV9>;
  readonly documentation: Vec<Text>;
}

/** @name MapTypeLatest */
export interface MapTypeLatest extends MapTypeV12 {}

/** @name MapTypeV10 */
export interface MapTypeV10 extends Struct {
  readonly hasher: StorageHasherV10;
  readonly key: Type;
  readonly value: Type;
  readonly linked: bool;
}

/** @name MapTypeV11 */
export interface MapTypeV11 extends Struct {
  readonly hasher: StorageHasherV11;
  readonly key: Type;
  readonly value: Type;
  readonly linked: bool;
}

/** @name MapTypeV12 */
export interface MapTypeV12 extends MapTypeV11 {}

/** @name MapTypeV9 */
export interface MapTypeV9 extends Struct {
  readonly hasher: StorageHasherV9;
  readonly key: Type;
  readonly value: Type;
  readonly linked: bool;
}

/** @name MetadataAll */
export interface MetadataAll extends Enum {
  readonly isV9: boolean;
  readonly asV9: MetadataV9;
  readonly isV10: boolean;
  readonly asV10: MetadataV10;
  readonly isV11: boolean;
  readonly asV11: MetadataV11;
  readonly isV12: boolean;
  readonly asV12: MetadataV12;
}

/** @name MetadataLatest */
export interface MetadataLatest extends MetadataV12 {}

/** @name MetadataV10 */
export interface MetadataV10 extends Struct {
  readonly modules: Vec<ModuleMetadataV10>;
}

/** @name MetadataV11 */
export interface MetadataV11 extends Struct {
  readonly modules: Vec<ModuleMetadataV11>;
  readonly extrinsic: ExtrinsicMetadataV11;
}

/** @name MetadataV12 */
export interface MetadataV12 extends Struct {
  readonly modules: Vec<ModuleMetadataV12>;
  readonly extrinsic: ExtrinsicMetadataV12;
}

/** @name MetadataV9 */
export interface MetadataV9 extends Struct {
  readonly modules: Vec<ModuleMetadataV9>;
}

/** @name ModuleConstantMetadataLatest */
export interface ModuleConstantMetadataLatest extends ModuleConstantMetadataV12 {}

/** @name ModuleConstantMetadataV10 */
export interface ModuleConstantMetadataV10 extends ModuleConstantMetadataV9 {}

/** @name ModuleConstantMetadataV11 */
export interface ModuleConstantMetadataV11 extends ModuleConstantMetadataV10 {}

/** @name ModuleConstantMetadataV12 */
export interface ModuleConstantMetadataV12 extends ModuleConstantMetadataV11 {}

/** @name ModuleConstantMetadataV9 */
export interface ModuleConstantMetadataV9 extends Struct {
  readonly name: Text;
  readonly type: Type;
  readonly value: Bytes;
  readonly documentation: Vec<Text>;
}

/** @name ModuleMetadataLatest */
export interface ModuleMetadataLatest extends ModuleMetadataV12 {}

/** @name ModuleMetadataV10 */
export interface ModuleMetadataV10 extends Struct {
  readonly name: Text;
  readonly storage: Option<StorageMetadataV10>;
  readonly calls: Option<Vec<FunctionMetadataV10>>;
  readonly events: Option<Vec<EventMetadataV10>>;
  readonly constants: Vec<ModuleConstantMetadataV10>;
  readonly errors: Vec<ErrorMetadataV10>;
}

/** @name ModuleMetadataV11 */
export interface ModuleMetadataV11 extends Struct {
  readonly name: Text;
  readonly storage: Option<StorageMetadataV11>;
  readonly calls: Option<Vec<FunctionMetadataV11>>;
  readonly events: Option<Vec<EventMetadataV11>>;
  readonly constants: Vec<ModuleConstantMetadataV11>;
  readonly errors: Vec<ErrorMetadataV11>;
}

/** @name ModuleMetadataV12 */
export interface ModuleMetadataV12 extends Struct {
  readonly name: Text;
  readonly storage: Option<StorageMetadataV12>;
  readonly calls: Option<Vec<FunctionMetadataV12>>;
  readonly events: Option<Vec<EventMetadataV12>>;
  readonly constants: Vec<ModuleConstantMetadataV12>;
  readonly errors: Vec<ErrorMetadataV12>;
  readonly index: u8;
}

/** @name ModuleMetadataV9 */
export interface ModuleMetadataV9 extends Struct {
  readonly name: Text;
  readonly storage: Option<StorageMetadataV9>;
  readonly calls: Option<Vec<FunctionMetadataV9>>;
  readonly events: Option<Vec<EventMetadataV9>>;
  readonly constants: Vec<ModuleConstantMetadataV9>;
  readonly errors: Vec<ErrorMetadataV9>;
}

/** @name StorageEntryMetadataLatest */
export interface StorageEntryMetadataLatest extends StorageEntryMetadataV12 {}

/** @name StorageEntryMetadataV10 */
export interface StorageEntryMetadataV10 extends Struct {
  readonly name: Text;
  readonly modifier: StorageEntryModifierV10;
  readonly type: StorageEntryTypeV10;
  readonly fallback: Bytes;
  readonly documentation: Vec<Text>;
}

/** @name StorageEntryMetadataV11 */
export interface StorageEntryMetadataV11 extends Struct {
  readonly name: Text;
  readonly modifier: StorageEntryModifierV11;
  readonly type: StorageEntryTypeV11;
  readonly fallback: Bytes;
  readonly documentation: Vec<Text>;
}

/** @name StorageEntryMetadataV12 */
export interface StorageEntryMetadataV12 extends StorageEntryMetadataV11 {}

/** @name StorageEntryMetadataV9 */
export interface StorageEntryMetadataV9 extends Struct {
  readonly name: Text;
  readonly modifier: StorageEntryModifierV9;
  readonly type: StorageEntryTypeV9;
  readonly fallback: Bytes;
  readonly documentation: Vec<Text>;
}

/** @name StorageEntryModifierLatest */
export interface StorageEntryModifierLatest extends StorageEntryModifierV12 {}

/** @name StorageEntryModifierV10 */
export interface StorageEntryModifierV10 extends StorageEntryModifierV9 {}

/** @name StorageEntryModifierV11 */
export interface StorageEntryModifierV11 extends StorageEntryModifierV10 {}

/** @name StorageEntryModifierV12 */
export interface StorageEntryModifierV12 extends StorageEntryModifierV11 {}

/** @name StorageEntryModifierV9 */
export interface StorageEntryModifierV9 extends Enum {
  readonly isOptional: boolean;
  readonly isDefault: boolean;
  readonly isRequired: boolean;
}

/** @name StorageEntryTypeLatest */
export interface StorageEntryTypeLatest extends StorageEntryTypeV12 {}

/** @name StorageEntryTypeV10 */
export interface StorageEntryTypeV10 extends Enum {
  readonly isPlain: boolean;
  readonly asPlain: Type;
  readonly isMap: boolean;
  readonly asMap: MapTypeV10;
  readonly isDoubleMap: boolean;
  readonly asDoubleMap: DoubleMapTypeV10;
}

/** @name StorageEntryTypeV11 */
export interface StorageEntryTypeV11 extends Enum {
  readonly isPlain: boolean;
  readonly asPlain: Type;
  readonly isMap: boolean;
  readonly asMap: MapTypeV11;
  readonly isDoubleMap: boolean;
  readonly asDoubleMap: DoubleMapTypeV11;
}

/** @name StorageEntryTypeV12 */
export interface StorageEntryTypeV12 extends StorageEntryTypeV11 {}

/** @name StorageEntryTypeV9 */
export interface StorageEntryTypeV9 extends Enum {
  readonly isPlain: boolean;
  readonly asPlain: Type;
  readonly isMap: boolean;
  readonly asMap: MapTypeV9;
  readonly isDoubleMap: boolean;
  readonly asDoubleMap: DoubleMapTypeV9;
}

/** @name StorageHasher */
export interface StorageHasher extends StorageHasherV12 {}

/** @name StorageHasherV10 */
export interface StorageHasherV10 extends Enum {
  readonly isBlake2128: boolean;
  readonly isBlake2256: boolean;
  readonly isBlake2128Concat: boolean;
  readonly isTwox128: boolean;
  readonly isTwox256: boolean;
  readonly isTwox64Concat: boolean;
}

/** @name StorageHasherV11 */
export interface StorageHasherV11 extends Enum {
  readonly isBlake2128: boolean;
  readonly isBlake2256: boolean;
  readonly isBlake2128Concat: boolean;
  readonly isTwox128: boolean;
  readonly isTwox256: boolean;
  readonly isTwox64Concat: boolean;
  readonly isIdentity: boolean;
}

/** @name StorageHasherV12 */
export interface StorageHasherV12 extends StorageHasherV11 {}

/** @name StorageHasherV9 */
export interface StorageHasherV9 extends Enum {
  readonly isBlake2128: boolean;
  readonly isBlake2256: boolean;
  readonly isTwox128: boolean;
  readonly isTwox256: boolean;
  readonly isTwox64Concat: boolean;
}

/** @name StorageMetadataLatest */
export interface StorageMetadataLatest extends StorageMetadataV12 {}

/** @name StorageMetadataV10 */
export interface StorageMetadataV10 extends Struct {
  readonly prefix: Text;
  readonly items: Vec<StorageEntryMetadataV10>;
}

/** @name StorageMetadataV11 */
export interface StorageMetadataV11 extends Struct {
  readonly prefix: Text;
  readonly items: Vec<StorageEntryMetadataV11>;
}

/** @name StorageMetadataV12 */
export interface StorageMetadataV12 extends StorageMetadataV11 {}

/** @name StorageMetadataV9 */
export interface StorageMetadataV9 extends Struct {
  readonly prefix: Text;
  readonly items: Vec<StorageEntryMetadataV9>;
}

export type PHANTOM_METADATA = 'metadata';
