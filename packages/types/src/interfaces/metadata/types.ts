// Auto-generated via `yarn build:interfaces`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Codec } from '../../types';
import { Enum, Option, Struct, Vec } from '../../codec';
import { Bytes, StorageHasher, Text, Type, bool, u16 } from '../../primitive';

/** Struct */
export interface CallMetadataV0 extends Struct {
  /** Text */
  readonly name: Text;
  /** Vec<FunctionMetadataV0> */
  readonly functions: Vec<FunctionMetadataV0>;
}

/** Struct */
export interface DoubleMapTypeV3 extends Struct {
  /** Type */
  readonly key1: Type;
  /** Type */
  readonly key2: Type;
  /** Type */
  readonly value: Type;
  /** Text */
  readonly key2Hasher: Text;
}

/** Struct */
export interface DoubleMapTypeV4 extends Struct {
  /** StorageHasher */
  readonly hasher: StorageHasher;
  /** Type */
  readonly key1: Type;
  /** Type */
  readonly key2: Type;
  /** Type */
  readonly value: Type;
  /** Text */
  readonly key2Hasher: Text;
}

/** Struct */
export interface DoubleMapTypeV5 extends Struct {
  /** StorageHasher */
  readonly hasher: StorageHasher;
  /** Type */
  readonly key1: Type;
  /** Type */
  readonly key2: Type;
  /** Type */
  readonly value: Type;
  /** StorageHasher */
  readonly key2Hasher: StorageHasher;
}

/** DoubleMapTypeV5 */
export type DoubleMapTypeV6 = DoubleMapTypeV5;

/** DoubleMapTypeV6 */
export type DoubleMapTypeV7 = DoubleMapTypeV6;

/** Struct */
export interface EventMetadataV0 extends Struct {
  /** Text */
  readonly name: Text;
  /** Vec<Type> */
  readonly args: Vec<Type>;
  /** Vec<Text> */
  readonly documentation: Vec<Text>;
}

/** EventMetadataV0 */
export type EventMetadataV1 = EventMetadataV0;

/** EventMetadataV1 */
export type EventMetadataV2 = EventMetadataV1;

/** EventMetadataV2 */
export type EventMetadataV3 = EventMetadataV2;

/** EventMetadataV3 */
export type EventMetadataV4 = EventMetadataV3;

/** EventMetadataV4 */
export type EventMetadataV5 = EventMetadataV4;

/** EventMetadataV5 */
export type EventMetadataV6 = EventMetadataV5;

/** EventMetadataV6 */
export type EventMetadataV7 = EventMetadataV6;

/** Struct */
export interface FunctionArgumentMetadataV0 extends Struct {
  /** Text */
  readonly name: Text;
  /** Type */
  readonly type: Type;
}

/** FunctionArgumentMetadataV0 */
export type FunctionArgumentMetadataV1 = FunctionArgumentMetadataV0;

/** FunctionArgumentMetadataV1 */
export type FunctionArgumentMetadataV2 = FunctionArgumentMetadataV1;

/** FunctionArgumentMetadataV2 */
export type FunctionArgumentMetadataV3 = FunctionArgumentMetadataV2;

/** FunctionArgumentMetadataV3 */
export type FunctionArgumentMetadataV4 = FunctionArgumentMetadataV3;

/** FunctionArgumentMetadataV4 */
export type FunctionArgumentMetadataV5 = FunctionArgumentMetadataV4;

/** FunctionArgumentMetadataV5 */
export type FunctionArgumentMetadataV6 = FunctionArgumentMetadataV5;

/** FunctionArgumentMetadataV6 */
export type FunctionArgumentMetadataV7 = FunctionArgumentMetadataV6;

/** Struct */
export interface FunctionMetadataV0 extends Struct {
  /** u16 */
  readonly id: u16;
  /** Text */
  readonly name: Text;
  /** Vec<FunctionArgumentMetadataV0> */
  readonly args: Vec<FunctionArgumentMetadataV0>;
  /** Vec<Text> */
  readonly documentation: Vec<Text>;
}

/** Struct */
export interface FunctionMetadataV1 extends Struct {
  /** Text */
  readonly name: Text;
  /** Vec<FunctionArgumentMetadataV1> */
  readonly args: Vec<FunctionArgumentMetadataV1>;
  /** Vec<Text> */
  readonly documentation: Vec<Text>;
}

/** FunctionMetadataV1 */
export type FunctionMetadataV2 = FunctionMetadataV1;

/** FunctionMetadataV2 */
export type FunctionMetadataV3 = FunctionMetadataV2;

/** FunctionMetadataV3 */
export type FunctionMetadataV4 = FunctionMetadataV3;

/** FunctionMetadataV4 */
export type FunctionMetadataV5 = FunctionMetadataV4;

/** FunctionMetadataV5 */
export type FunctionMetadataV6 = FunctionMetadataV5;

/** FunctionMetadataV6 */
export type FunctionMetadataV7 = FunctionMetadataV6;

/** Struct */
export interface MapTypeV0 extends Struct {
  /** Type */
  readonly key: Type;
  /** Type */
  readonly value: Type;
}

/** Struct */
export interface MapTypeV2 extends Struct {
  /** Type */
  readonly key: Type;
  /** Type */
  readonly value: Type;
  /** bool */
  readonly linked: bool;
}

/** MapTypeV2 */
export type MapTypeV3 = MapTypeV2;

/** Struct */
export interface MapTypeV4 extends Struct {
  /** StorageHasher */
  readonly hasher: StorageHasher;
  /** Type */
  readonly key: Type;
  /** Type */
  readonly value: Type;
  /** bool */
  readonly linked: bool;
}

/** MapTypeV4 */
export type MapTypeV5 = MapTypeV4;

/** MapTypeV5 */
export type MapTypeV6 = MapTypeV5;

/** MapTypeV6 */
export type MapTypeV7 = MapTypeV6;

/** Struct */
export interface MetadataV0 extends Struct {
  /** OuterEventMetadataV0 */
  readonly outerEvent: OuterEventMetadataV0;
  /** Vec<RuntimeModuleMetadataV0> */
  readonly modules: Vec<RuntimeModuleMetadataV0>;
  /** OuterDispatchMetadataV0 */
  readonly outerDispatch: OuterDispatchMetadataV0;
}

/** Struct */
export interface MetadataV1 extends Struct {
  /** Vec<ModuleMetadataV1> */
  readonly modules: Vec<ModuleMetadataV1>;
}

/** Struct */
export interface ModuleConstantMetadataV6 extends Struct {
  /** Text */
  readonly name: Text;
  /** Type */
  readonly type: Type;
  /** Bytes */
  readonly value: Bytes;
  /** Vec<Text> */
  readonly documentation: Vec<Text>;
}

/** ModuleConstantMetadataV6 */
export type ModuleConstantMetadataV7 = ModuleConstantMetadataV6;

/** Struct */
export interface ModuleMetadataV0 extends Struct {
  /** Text */
  readonly name: Text;
  /** CallMetadataV0 */
  readonly call: CallMetadataV0;
}

/** Struct */
export interface ModuleMetadataV1 extends Struct {
  /** Text */
  readonly name: Text;
  /** Text */
  readonly prefix: Text;
  /** Option<Vec<StorageFunctionMetadataV1>> */
  readonly storage: Option<Vec<StorageFunctionMetadataV1>>;
  /** Option<Vec<FunctionMetadataV1>> */
  readonly calls: Option<Vec<FunctionMetadataV1>>;
  /** Option<Vec<EventMetadataV1>> */
  readonly events: Option<Vec<EventMetadataV1>>;
}

/** Struct */
export interface OuterDispatchCallV0 extends Struct {
  /** Text */
  readonly name: Text;
  /** Text */
  readonly prefix: Text;
  /** u16 */
  readonly index: u16;
}

/** Struct */
export interface OuterDispatchMetadataV0 extends Struct {
  /** Text */
  readonly name: Text;
  /** Vec<OuterDispatchCallV0> */
  readonly calls: Vec<OuterDispatchCallV0>;
}

/** Vec<EventMetadataV0> */
export type OuterEventEventMetadataEventsV0 = Vec<EventMetadataV0>;

/** [Text, OuterEventEventMetadataEventsV0] & Codec */
export type OuterEventEventMetadataV0 = [Text, OuterEventEventMetadataEventsV0] & Codec;

/** Struct */
export interface OuterEventMetadataV0 extends Struct {
  /** Text */
  readonly name: Text;
  /** Vec<OuterEventEventMetadataV0> */
  readonly events: Vec<OuterEventEventMetadataV0>;
}

/** Type */
export type PlainTypeV0 = Type;

/** Type */
export type PlainTypeV2 = Type;

/** Type */
export type PlainTypeV3 = Type;

/** Type */
export type PlainTypeV4 = Type;

/** Type */
export type PlainTypeV5 = Type;

/** Type */
export type PlainTypeV6 = Type;

/** Type */
export type PlainTypeV7 = Type;

/** Struct */
export interface RuntimeModuleMetadataV0 extends Struct {
  /** Text */
  readonly prefix: Text;
  /** ModuleMetadataV0 */
  readonly module: ModuleMetadataV0;
  /** Option<StorageMetadataV0> */
  readonly storage: Option<StorageMetadataV0>;
}

/** StorageFunctionModifierV5 */
export type StorageEntryModifierV6 = StorageFunctionModifierV5;

/** StorageEntryModifierV6 */
export type StorageEntryModifierV7 = StorageEntryModifierV6;

/** Struct */
export interface StorageFunctionMetadataV0 extends Struct {
  /** Text */
  readonly name: Text;
  /** StorageFunctionModifierV0 */
  readonly modifier: StorageFunctionModifierV0;
  /** StorageFunctionTypeV0 */
  readonly type: StorageFunctionTypeV0;
  /** Bytes */
  readonly fallback: Bytes;
  /** Vec<Text> */
  readonly documentation: Vec<Text>;
}

/** StorageFunctionMetadataV0 */
export type StorageFunctionMetadataV1 = StorageFunctionMetadataV0;

/** Enum */
export interface StorageFunctionModifierV0 extends Enum {
  /** 0:: Optional */
  readonly isOptional: boolean;
  /** 1:: Default */
  readonly isDefault: boolean;
  /** 2:: Required */
  readonly isRequired: boolean;
}

/** StorageFunctionModifierV0 */
export type StorageFunctionModifierV1 = StorageFunctionModifierV0;

/** StorageFunctionModifierV1 */
export type StorageFunctionModifierV2 = StorageFunctionModifierV1;

/** StorageFunctionModifierV2 */
export type StorageFunctionModifierV3 = StorageFunctionModifierV2;

/** StorageFunctionModifierV3 */
export type StorageFunctionModifierV4 = StorageFunctionModifierV3;

/** StorageFunctionModifierV4 */
export type StorageFunctionModifierV5 = StorageFunctionModifierV4;

/** Enum */
export interface StorageFunctionTypeV0 extends Enum {
  /** 0:: Type(PlainTypeV0) */
  readonly isType: boolean;
  /** PlainTypeV0 */
  readonly asType: PlainTypeV0;
  /** 1:: Map(MapTypeV0) */
  readonly isMap: boolean;
  /** MapTypeV0 */
  readonly asMap: MapTypeV0;
}

/** StorageFunctionTypeV0 */
export type StorageFunctionTypeV1 = StorageFunctionTypeV0;

/** Struct */
export interface StorageMetadataV0 extends Struct {
  /** Text */
  readonly prefix: Text;
  /** Vec<StorageFunctionMetadataV0> */
  readonly functions: Vec<StorageFunctionMetadataV0>;
}
