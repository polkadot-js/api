// Auto-generated via `yarn build:interfaces`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { ITuple } from '@polkadot/types/types';
import { Enum, Option, Struct, Vec } from '@polkadot/types/codec';
import { Bytes, StorageHasher, Text, Type, bool, u16 } from '@polkadot/types/primitive';

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
export interface DoubleMapTypeV6 extends DoubleMapTypeV5 {}

/** DoubleMapTypeV6 */
export interface DoubleMapTypeV7 extends DoubleMapTypeV6 {}

/** DoubleMapTypeV7 */
export interface DoubleMapTypeV8 extends DoubleMapTypeV7 {}

/** Struct */
export interface ErrorMetadataV8 extends Struct {
  /** Text */
  readonly name: Text;
  /** Vec<Text> */
  readonly documentation: Vec<Text>;
}

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
export interface EventMetadataV1 extends EventMetadataV0 {}

/** EventMetadataV1 */
export interface EventMetadataV2 extends EventMetadataV1 {}

/** EventMetadataV2 */
export interface EventMetadataV3 extends EventMetadataV2 {}

/** EventMetadataV3 */
export interface EventMetadataV4 extends EventMetadataV3 {}

/** EventMetadataV4 */
export interface EventMetadataV5 extends EventMetadataV4 {}

/** EventMetadataV5 */
export interface EventMetadataV6 extends EventMetadataV5 {}

/** EventMetadataV6 */
export interface EventMetadataV7 extends EventMetadataV6 {}

/** EventMetadataV7 */
export interface EventMetadataV8 extends EventMetadataV7 {}

/** Struct */
export interface FunctionArgumentMetadataV0 extends Struct {
  /** Text */
  readonly name: Text;
  /** Type */
  readonly type: Type;
}

/** FunctionArgumentMetadataV0 */
export interface FunctionArgumentMetadataV1 extends FunctionArgumentMetadataV0 {}

/** FunctionArgumentMetadataV1 */
export interface FunctionArgumentMetadataV2 extends FunctionArgumentMetadataV1 {}

/** FunctionArgumentMetadataV2 */
export interface FunctionArgumentMetadataV3 extends FunctionArgumentMetadataV2 {}

/** FunctionArgumentMetadataV3 */
export interface FunctionArgumentMetadataV4 extends FunctionArgumentMetadataV3 {}

/** FunctionArgumentMetadataV4 */
export interface FunctionArgumentMetadataV5 extends FunctionArgumentMetadataV4 {}

/** FunctionArgumentMetadataV5 */
export interface FunctionArgumentMetadataV6 extends FunctionArgumentMetadataV5 {}

/** FunctionArgumentMetadataV6 */
export interface FunctionArgumentMetadataV7 extends FunctionArgumentMetadataV6 {}

/** FunctionArgumentMetadataV7 */
export interface FunctionArgumentMetadataV8 extends FunctionArgumentMetadataV7 {}

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
export interface FunctionMetadataV2 extends FunctionMetadataV1 {}

/** FunctionMetadataV2 */
export interface FunctionMetadataV3 extends FunctionMetadataV2 {}

/** FunctionMetadataV3 */
export interface FunctionMetadataV4 extends FunctionMetadataV3 {}

/** FunctionMetadataV4 */
export interface FunctionMetadataV5 extends FunctionMetadataV4 {}

/** FunctionMetadataV5 */
export interface FunctionMetadataV6 extends FunctionMetadataV5 {}

/** FunctionMetadataV6 */
export interface FunctionMetadataV7 extends FunctionMetadataV6 {}

/** FunctionMetadataV7 */
export interface FunctionMetadataV8 extends FunctionMetadataV7 {}

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
export interface MapTypeV3 extends MapTypeV2 {}

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
export interface MapTypeV5 extends MapTypeV4 {}

/** MapTypeV5 */
export interface MapTypeV6 extends MapTypeV5 {}

/** MapTypeV6 */
export interface MapTypeV7 extends MapTypeV6 {}

/** MapTypeV7 */
export interface MapTypeV8 extends MapTypeV7 {}

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
export interface ModuleConstantMetadataV7 extends ModuleConstantMetadataV6 {}

/** ModuleConstantMetadataV7 */
export interface ModuleConstantMetadataV8 extends ModuleConstantMetadataV7 {}

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
export interface OuterEventEventMetadataEventsV0 extends Vec<EventMetadataV0> {}

/** ITuple<[Text, OuterEventEventMetadataEventsV0]> */
export interface OuterEventEventMetadataV0 extends ITuple<[Text, OuterEventEventMetadataEventsV0]> {}

/** Struct */
export interface OuterEventMetadataV0 extends Struct {
  /** Text */
  readonly name: Text;
  /** Vec<OuterEventEventMetadataV0> */
  readonly events: Vec<OuterEventEventMetadataV0>;
}

/** Type */
export interface PlainTypeV0 extends Type {}

/** Type */
export interface PlainTypeV2 extends Type {}

/** Type */
export interface PlainTypeV3 extends Type {}

/** Type */
export interface PlainTypeV4 extends Type {}

/** Type */
export interface PlainTypeV5 extends Type {}

/** Type */
export interface PlainTypeV6 extends Type {}

/** Type */
export interface PlainTypeV7 extends Type {}

/** Type */
export interface PlainTypeV8 extends Type {}

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
export interface StorageEntryModifierV6 extends StorageFunctionModifierV5 {}

/** StorageEntryModifierV6 */
export interface StorageEntryModifierV7 extends StorageEntryModifierV6 {}

/** StorageEntryModifierV7 */
export interface StorageEntryModifierV8 extends StorageEntryModifierV7 {}

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
export interface StorageFunctionMetadataV1 extends StorageFunctionMetadataV0 {}

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
export interface StorageFunctionModifierV1 extends StorageFunctionModifierV0 {}

/** StorageFunctionModifierV1 */
export interface StorageFunctionModifierV2 extends StorageFunctionModifierV1 {}

/** StorageFunctionModifierV2 */
export interface StorageFunctionModifierV3 extends StorageFunctionModifierV2 {}

/** StorageFunctionModifierV3 */
export interface StorageFunctionModifierV4 extends StorageFunctionModifierV3 {}

/** StorageFunctionModifierV4 */
export interface StorageFunctionModifierV5 extends StorageFunctionModifierV4 {}

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
export interface StorageFunctionTypeV1 extends StorageFunctionTypeV0 {}

/** Struct */
export interface StorageMetadataV0 extends Struct {
  /** Text */
  readonly prefix: Text;
  /** Vec<StorageFunctionMetadataV0> */
  readonly functions: Vec<StorageFunctionMetadataV0>;
}
