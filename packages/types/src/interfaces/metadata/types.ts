// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { PortableRegistry } from '@polkadot/types';
import type { Bytes, Enum, Option, Struct, Text, Type, Vec, bool, u8 } from '@polkadot/types-codec';
import type { Si1Field, Si1LookupTypeId, Si1Type, SiLookupTypeId } from '@polkadot/types/interfaces/scaleInfo';

/** @name ErrorMetadataLatest */
export interface ErrorMetadataLatest extends ErrorMetadataV14 {}

/** @name ErrorMetadataV10 */
export interface ErrorMetadataV10 extends ErrorMetadataV9 {}

/** @name ErrorMetadataV11 */
export interface ErrorMetadataV11 extends ErrorMetadataV10 {}

/** @name ErrorMetadataV12 */
export interface ErrorMetadataV12 extends ErrorMetadataV11 {}

/** @name ErrorMetadataV13 */
export interface ErrorMetadataV13 extends ErrorMetadataV12 {}

/** @name ErrorMetadataV14 */
export interface ErrorMetadataV14 extends Struct {
  readonly name: Text;
  readonly fields: Vec<Si1Field>;
  readonly index: u8;
  readonly docs: Vec<Text>;
  readonly args: Vec<Type>;
}

/** @name ErrorMetadataV9 */
export interface ErrorMetadataV9 extends Struct {
  readonly name: Text;
  readonly docs: Vec<Text>;
}

/** @name EventMetadataLatest */
export interface EventMetadataLatest extends EventMetadataV14 {}

/** @name EventMetadataV10 */
export interface EventMetadataV10 extends EventMetadataV9 {}

/** @name EventMetadataV11 */
export interface EventMetadataV11 extends EventMetadataV10 {}

/** @name EventMetadataV12 */
export interface EventMetadataV12 extends EventMetadataV11 {}

/** @name EventMetadataV13 */
export interface EventMetadataV13 extends EventMetadataV12 {}

/** @name EventMetadataV14 */
export interface EventMetadataV14 extends Struct {
  readonly name: Text;
  readonly fields: Vec<Si1Field>;
  readonly index: u8;
  readonly docs: Vec<Text>;
  readonly args: Vec<Type>;
}

/** @name EventMetadataV9 */
export interface EventMetadataV9 extends Struct {
  readonly name: Text;
  readonly args: Vec<Type>;
  readonly docs: Vec<Text>;
}

/** @name ExtrinsicMetadataLatest */
export interface ExtrinsicMetadataLatest extends ExtrinsicMetadataV14 {}

/** @name ExtrinsicMetadataV11 */
export interface ExtrinsicMetadataV11 extends Struct {
  readonly version: u8;
  readonly signedExtensions: Vec<Text>;
}

/** @name ExtrinsicMetadataV12 */
export interface ExtrinsicMetadataV12 extends ExtrinsicMetadataV11 {}

/** @name ExtrinsicMetadataV13 */
export interface ExtrinsicMetadataV13 extends ExtrinsicMetadataV12 {}

/** @name ExtrinsicMetadataV14 */
export interface ExtrinsicMetadataV14 extends Struct {
  readonly type: SiLookupTypeId;
  readonly version: u8;
  readonly signedExtensions: Vec<SignedExtensionMetadataV14>;
}

/** @name FunctionArgumentMetadataLatest */
export interface FunctionArgumentMetadataLatest extends FunctionArgumentMetadataV14 {}

/** @name FunctionArgumentMetadataV10 */
export interface FunctionArgumentMetadataV10 extends FunctionArgumentMetadataV9 {}

/** @name FunctionArgumentMetadataV11 */
export interface FunctionArgumentMetadataV11 extends FunctionArgumentMetadataV10 {}

/** @name FunctionArgumentMetadataV12 */
export interface FunctionArgumentMetadataV12 extends FunctionArgumentMetadataV11 {}

/** @name FunctionArgumentMetadataV13 */
export interface FunctionArgumentMetadataV13 extends FunctionArgumentMetadataV12 {}

/** @name FunctionArgumentMetadataV14 */
export interface FunctionArgumentMetadataV14 extends Struct {
  readonly name: Text;
  readonly type: Type;
  readonly typeName: Option<Type>;
}

/** @name FunctionArgumentMetadataV9 */
export interface FunctionArgumentMetadataV9 extends Struct {
  readonly name: Text;
  readonly type: Type;
}

/** @name FunctionMetadataLatest */
export interface FunctionMetadataLatest extends FunctionMetadataV14 {}

/** @name FunctionMetadataV10 */
export interface FunctionMetadataV10 extends FunctionMetadataV9 {}

/** @name FunctionMetadataV11 */
export interface FunctionMetadataV11 extends FunctionMetadataV10 {}

/** @name FunctionMetadataV12 */
export interface FunctionMetadataV12 extends FunctionMetadataV11 {}

/** @name FunctionMetadataV13 */
export interface FunctionMetadataV13 extends FunctionMetadataV12 {}

/** @name FunctionMetadataV14 */
export interface FunctionMetadataV14 extends Struct {
  readonly name: Text;
  readonly fields: Vec<Si1Field>;
  readonly index: u8;
  readonly docs: Vec<Text>;
  readonly args: Vec<FunctionArgumentMetadataV14>;
}

/** @name FunctionMetadataV9 */
export interface FunctionMetadataV9 extends Struct {
  readonly name: Text;
  readonly args: Vec<FunctionArgumentMetadataV9>;
  readonly docs: Vec<Text>;
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
  readonly isV13: boolean;
  readonly asV13: MetadataV13;
  readonly isV14: boolean;
  readonly asV14: MetadataV14;
  readonly type: 'V0' | 'V1' | 'V2' | 'V3' | 'V4' | 'V5' | 'V6' | 'V7' | 'V8' | 'V9' | 'V10' | 'V11' | 'V12' | 'V13' | 'V14';
}

/** @name MetadataLatest */
export interface MetadataLatest extends MetadataV14 {}

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

/** @name MetadataV13 */
export interface MetadataV13 extends Struct {
  readonly modules: Vec<ModuleMetadataV13>;
  readonly extrinsic: ExtrinsicMetadataV13;
}

/** @name MetadataV14 */
export interface MetadataV14 extends Struct {
  readonly lookup: PortableRegistry;
  readonly pallets: Vec<PalletMetadataV14>;
  readonly extrinsic: ExtrinsicMetadataV14;
  readonly type: SiLookupTypeId;
}

/** @name MetadataV9 */
export interface MetadataV9 extends Struct {
  readonly modules: Vec<ModuleMetadataV9>;
}

/** @name ModuleConstantMetadataV10 */
export interface ModuleConstantMetadataV10 extends ModuleConstantMetadataV9 {}

/** @name ModuleConstantMetadataV11 */
export interface ModuleConstantMetadataV11 extends ModuleConstantMetadataV10 {}

/** @name ModuleConstantMetadataV12 */
export interface ModuleConstantMetadataV12 extends ModuleConstantMetadataV11 {}

/** @name ModuleConstantMetadataV13 */
export interface ModuleConstantMetadataV13 extends ModuleConstantMetadataV12 {}

/** @name ModuleConstantMetadataV9 */
export interface ModuleConstantMetadataV9 extends Struct {
  readonly name: Text;
  readonly type: Type;
  readonly value: Bytes;
  readonly docs: Vec<Text>;
}

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

/** @name ModuleMetadataV13 */
export interface ModuleMetadataV13 extends Struct {
  readonly name: Text;
  readonly storage: Option<StorageMetadataV13>;
  readonly calls: Option<Vec<FunctionMetadataV13>>;
  readonly events: Option<Vec<EventMetadataV13>>;
  readonly constants: Vec<ModuleConstantMetadataV13>;
  readonly errors: Vec<ErrorMetadataV13>;
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

/** @name PalletCallMetadataLatest */
export interface PalletCallMetadataLatest extends PalletCallMetadataV14 {}

/** @name PalletCallMetadataV14 */
export interface PalletCallMetadataV14 extends Struct {
  readonly type: SiLookupTypeId;
}

/** @name PalletConstantMetadataLatest */
export interface PalletConstantMetadataLatest extends PalletConstantMetadataV14 {}

/** @name PalletConstantMetadataV14 */
export interface PalletConstantMetadataV14 extends Struct {
  readonly name: Text;
  readonly type: SiLookupTypeId;
  readonly value: Bytes;
  readonly docs: Vec<Text>;
}

/** @name PalletErrorMetadataLatest */
export interface PalletErrorMetadataLatest extends PalletErrorMetadataV14 {}

/** @name PalletErrorMetadataV14 */
export interface PalletErrorMetadataV14 extends Struct {
  readonly type: SiLookupTypeId;
}

/** @name PalletEventMetadataLatest */
export interface PalletEventMetadataLatest extends PalletEventMetadataV14 {}

/** @name PalletEventMetadataV14 */
export interface PalletEventMetadataV14 extends Struct {
  readonly type: SiLookupTypeId;
}

/** @name PalletMetadataLatest */
export interface PalletMetadataLatest extends PalletMetadataV14 {}

/** @name PalletMetadataV14 */
export interface PalletMetadataV14 extends Struct {
  readonly name: Text;
  readonly storage: Option<PalletStorageMetadataV14>;
  readonly calls: Option<PalletCallMetadataV14>;
  readonly events: Option<PalletEventMetadataV14>;
  readonly constants: Vec<PalletConstantMetadataV14>;
  readonly errors: Option<PalletErrorMetadataV14>;
  readonly index: u8;
}

/** @name PalletStorageMetadataLatest */
export interface PalletStorageMetadataLatest extends PalletStorageMetadataV14 {}

/** @name PalletStorageMetadataV14 */
export interface PalletStorageMetadataV14 extends Struct {
  readonly prefix: Text;
  readonly items: Vec<StorageEntryMetadataV14>;
}

/** @name PortableType */
export interface PortableType extends PortableTypeV14 {}

/** @name PortableTypeV14 */
export interface PortableTypeV14 extends Struct {
  readonly id: Si1LookupTypeId;
  readonly type: Si1Type;
}

/** @name SignedExtensionMetadataLatest */
export interface SignedExtensionMetadataLatest extends SignedExtensionMetadataV14 {}

/** @name SignedExtensionMetadataV14 */
export interface SignedExtensionMetadataV14 extends Struct {
  readonly identifier: Text;
  readonly type: SiLookupTypeId;
  readonly additionalSigned: SiLookupTypeId;
}

/** @name StorageEntryMetadataLatest */
export interface StorageEntryMetadataLatest extends StorageEntryMetadataV14 {}

/** @name StorageEntryMetadataV10 */
export interface StorageEntryMetadataV10 extends Struct {
  readonly name: Text;
  readonly modifier: StorageEntryModifierV10;
  readonly type: StorageEntryTypeV10;
  readonly fallback: Bytes;
  readonly docs: Vec<Text>;
}

/** @name StorageEntryMetadataV11 */
export interface StorageEntryMetadataV11 extends Struct {
  readonly name: Text;
  readonly modifier: StorageEntryModifierV11;
  readonly type: StorageEntryTypeV11;
  readonly fallback: Bytes;
  readonly docs: Vec<Text>;
}

/** @name StorageEntryMetadataV12 */
export interface StorageEntryMetadataV12 extends StorageEntryMetadataV11 {}

/** @name StorageEntryMetadataV13 */
export interface StorageEntryMetadataV13 extends Struct {
  readonly name: Text;
  readonly modifier: StorageEntryModifierV13;
  readonly type: StorageEntryTypeV13;
  readonly fallback: Bytes;
  readonly docs: Vec<Text>;
}

/** @name StorageEntryMetadataV14 */
export interface StorageEntryMetadataV14 extends Struct {
  readonly name: Text;
  readonly modifier: StorageEntryModifierV14;
  readonly type: StorageEntryTypeV14;
  readonly fallback: Bytes;
  readonly docs: Vec<Text>;
}

/** @name StorageEntryMetadataV9 */
export interface StorageEntryMetadataV9 extends Struct {
  readonly name: Text;
  readonly modifier: StorageEntryModifierV9;
  readonly type: StorageEntryTypeV9;
  readonly fallback: Bytes;
  readonly docs: Vec<Text>;
}

/** @name StorageEntryModifierLatest */
export interface StorageEntryModifierLatest extends StorageEntryModifierV14 {}

/** @name StorageEntryModifierV10 */
export interface StorageEntryModifierV10 extends StorageEntryModifierV9 {}

/** @name StorageEntryModifierV11 */
export interface StorageEntryModifierV11 extends StorageEntryModifierV10 {}

/** @name StorageEntryModifierV12 */
export interface StorageEntryModifierV12 extends StorageEntryModifierV11 {}

/** @name StorageEntryModifierV13 */
export interface StorageEntryModifierV13 extends StorageEntryModifierV12 {}

/** @name StorageEntryModifierV14 */
export interface StorageEntryModifierV14 extends StorageEntryModifierV13 {}

/** @name StorageEntryModifierV9 */
export interface StorageEntryModifierV9 extends Enum {
  readonly isOptional: boolean;
  readonly isDefault: boolean;
  readonly isRequired: boolean;
  readonly type: 'Optional' | 'Default' | 'Required';
}

/** @name StorageEntryTypeLatest */
export interface StorageEntryTypeLatest extends StorageEntryTypeV14 {}

/** @name StorageEntryTypeV10 */
export interface StorageEntryTypeV10 extends Enum {
  readonly isPlain: boolean;
  readonly asPlain: Type;
  readonly isMap: boolean;
  readonly asMap: {
    readonly hasher: StorageHasherV10;
    readonly key: Type;
    readonly value: Type;
    readonly linked: bool;
  } & Struct;
  readonly isDoubleMap: boolean;
  readonly asDoubleMap: {
    readonly hasher: StorageHasherV10;
    readonly key1: Type;
    readonly key2: Type;
    readonly value: Type;
    readonly key2Hasher: StorageHasherV10;
  } & Struct;
  readonly type: 'Plain' | 'Map' | 'DoubleMap';
}

/** @name StorageEntryTypeV11 */
export interface StorageEntryTypeV11 extends Enum {
  readonly isPlain: boolean;
  readonly asPlain: Type;
  readonly isMap: boolean;
  readonly asMap: {
    readonly hasher: StorageHasherV11;
    readonly key: Type;
    readonly value: Type;
    readonly linked: bool;
  } & Struct;
  readonly isDoubleMap: boolean;
  readonly asDoubleMap: {
    readonly hasher: StorageHasherV11;
    readonly key1: Type;
    readonly key2: Type;
    readonly value: Type;
    readonly key2Hasher: StorageHasherV11;
  } & Struct;
  readonly type: 'Plain' | 'Map' | 'DoubleMap';
}

/** @name StorageEntryTypeV12 */
export interface StorageEntryTypeV12 extends StorageEntryTypeV11 {}

/** @name StorageEntryTypeV13 */
export interface StorageEntryTypeV13 extends Enum {
  readonly isPlain: boolean;
  readonly asPlain: Type;
  readonly isMap: boolean;
  readonly asMap: {
    readonly hasher: StorageHasherV13;
    readonly key: Type;
    readonly value: Type;
    readonly linked: bool;
  } & Struct;
  readonly isDoubleMap: boolean;
  readonly asDoubleMap: {
    readonly hasher: StorageHasherV13;
    readonly key1: Type;
    readonly key2: Type;
    readonly value: Type;
    readonly key2Hasher: StorageHasherV13;
  } & Struct;
  readonly isNMap: boolean;
  readonly asNMap: {
    readonly keyVec: Vec<Type>;
    readonly hashers: Vec<StorageHasherV13>;
    readonly value: Type;
  } & Struct;
  readonly type: 'Plain' | 'Map' | 'DoubleMap' | 'NMap';
}

/** @name StorageEntryTypeV14 */
export interface StorageEntryTypeV14 extends Enum {
  readonly isPlain: boolean;
  readonly asPlain: SiLookupTypeId;
  readonly isMap: boolean;
  readonly asMap: {
    readonly hashers: Vec<StorageHasherV14>;
    readonly key: SiLookupTypeId;
    readonly value: SiLookupTypeId;
  } & Struct;
  readonly type: 'Plain' | 'Map';
}

/** @name StorageEntryTypeV9 */
export interface StorageEntryTypeV9 extends Enum {
  readonly isPlain: boolean;
  readonly asPlain: Type;
  readonly isMap: boolean;
  readonly asMap: {
    readonly hasher: StorageHasherV9;
    readonly key: Type;
    readonly value: Type;
    readonly linked: bool;
  } & Struct;
  readonly isDoubleMap: boolean;
  readonly asDoubleMap: {
    readonly hasher: StorageHasherV9;
    readonly key1: Type;
    readonly key2: Type;
    readonly value: Type;
    readonly key2Hasher: StorageHasherV9;
  } & Struct;
  readonly type: 'Plain' | 'Map' | 'DoubleMap';
}

/** @name StorageHasher */
export interface StorageHasher extends StorageHasherV14 {}

/** @name StorageHasherV10 */
export interface StorageHasherV10 extends Enum {
  readonly isBlake2128: boolean;
  readonly isBlake2256: boolean;
  readonly isBlake2128Concat: boolean;
  readonly isTwox128: boolean;
  readonly isTwox256: boolean;
  readonly isTwox64Concat: boolean;
  readonly type: 'Blake2128' | 'Blake2256' | 'Blake2128Concat' | 'Twox128' | 'Twox256' | 'Twox64Concat';
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
  readonly type: 'Blake2128' | 'Blake2256' | 'Blake2128Concat' | 'Twox128' | 'Twox256' | 'Twox64Concat' | 'Identity';
}

/** @name StorageHasherV12 */
export interface StorageHasherV12 extends StorageHasherV11 {}

/** @name StorageHasherV13 */
export interface StorageHasherV13 extends StorageHasherV12 {}

/** @name StorageHasherV14 */
export interface StorageHasherV14 extends StorageHasherV13 {}

/** @name StorageHasherV9 */
export interface StorageHasherV9 extends Enum {
  readonly isBlake2128: boolean;
  readonly isBlake2256: boolean;
  readonly isTwox128: boolean;
  readonly isTwox256: boolean;
  readonly isTwox64Concat: boolean;
  readonly type: 'Blake2128' | 'Blake2256' | 'Twox128' | 'Twox256' | 'Twox64Concat';
}

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

/** @name StorageMetadataV13 */
export interface StorageMetadataV13 extends Struct {
  readonly prefix: Text;
  readonly items: Vec<StorageEntryMetadataV13>;
}

/** @name StorageMetadataV9 */
export interface StorageMetadataV9 extends Struct {
  readonly prefix: Text;
  readonly items: Vec<StorageEntryMetadataV9>;
}

export type PHANTOM_METADATA = 'metadata';
