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

/** DoubleMapTypeV8 */
export interface DoubleMapTypeV9 extends DoubleMapTypeV8 {}

/** Struct */
export interface ErrorMetadataV8 extends Struct {
  /** Text */
  readonly name: Text;
  /** Vec<Text> */
  readonly documentation: Vec<Text>;
}

/** ErrorMetadataV8 */
export interface ErrorMetadataV9 extends ErrorMetadataV8 {}

/** EventMetadataV9 */
export interface EventMetadataLatest extends EventMetadataV9 {}

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

/** EventMetadataV8 */
export interface EventMetadataV9 extends EventMetadataV8 {}

/** FunctionArgumentMetadataV9 */
export interface FunctionArgumentMetadataLatest extends FunctionArgumentMetadataV9 {}

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

/** FunctionArgumentMetadataV8 */
export interface FunctionArgumentMetadataV9 extends FunctionArgumentMetadataV8 {}

/** FunctionMetadataV9 */
export interface FunctionMetadataLatest extends FunctionMetadataV9 {}

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

/** FunctionMetadataV8 */
export interface FunctionMetadataV9 extends FunctionMetadataV8 {}

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
export interface MapTypeV9 extends Struct {
  /** StorageHasher */
  readonly hasher: StorageHasher;
  /** Type */
  readonly key: Type;
  /** Type */
  readonly value: Type;
  /** StorageMapTypeV9 */
  readonly kind: StorageMapTypeV9;
}

/** MetadataV9 */
export interface MetadataLatest extends MetadataV9 {}

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
export interface MetadataV2 extends Struct {
  /** Vec<ModuleMetadataV2> */
  readonly modules: Vec<ModuleMetadataV2>;
}

/** Struct */
export interface MetadataV3 extends Struct {
  /** Vec<ModuleMetadataV3> */
  readonly modules: Vec<ModuleMetadataV3>;
}

/** Struct */
export interface MetadataV4 extends Struct {
  /** Vec<ModuleMetadataV4> */
  readonly modules: Vec<ModuleMetadataV4>;
}

/** Struct */
export interface MetadataV5 extends Struct {
  /** Vec<ModuleMetadataV5> */
  readonly modules: Vec<ModuleMetadataV5>;
}

/** Struct */
export interface MetadataV6 extends Struct {
  /** Vec<ModuleMetadataV6> */
  readonly modules: Vec<ModuleMetadataV6>;
}

/** Struct */
export interface MetadataV7 extends Struct {
  /** Vec<ModuleMetadataV7> */
  readonly modules: Vec<ModuleMetadataV7>;
}

/** Struct */
export interface MetadataV8 extends Struct {
  /** Vec<ModuleMetadataV8> */
  readonly modules: Vec<ModuleMetadataV8>;
}

/** Struct */
export interface MetadataV9 extends Struct {
  /** Vec<ModuleMetadataV9> */
  readonly modules: Vec<ModuleMetadataV9>;
}

/** ModuleConstantMetadataV9 */
export interface ModuleConstantMetadataLatest extends ModuleConstantMetadataV9 {}

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

/** ModuleConstantMetadataV8 */
export interface ModuleConstantMetadataV9 extends ModuleConstantMetadataV8 {}

/** ModuleMetadataV9 */
export interface ModuleMetadataLatest extends ModuleMetadataV9 {}

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
export interface ModuleMetadataV2 extends Struct {
  /** Text */
  readonly name: Text;
  /** Text */
  readonly prefix: Text;
  /** Option<Vec<StorageFunctionMetadataV2>> */
  readonly storage: Option<Vec<StorageFunctionMetadataV2>>;
  /** Option<Vec<FunctionMetadataV2>> */
  readonly calls: Option<Vec<FunctionMetadataV2>>;
  /** Option<Vec<EventMetadataV2>> */
  readonly events: Option<Vec<EventMetadataV2>>;
}

/** Struct */
export interface ModuleMetadataV3 extends Struct {
  /** Text */
  readonly name: Text;
  /** Text */
  readonly prefix: Text;
  /** Option<Vec<StorageFunctionMetadataV3>> */
  readonly storage: Option<Vec<StorageFunctionMetadataV3>>;
  /** Option<Vec<FunctionMetadataV3>> */
  readonly calls: Option<Vec<FunctionMetadataV3>>;
  /** Option<Vec<EventMetadataV3>> */
  readonly events: Option<Vec<EventMetadataV3>>;
}

/** Struct */
export interface ModuleMetadataV4 extends Struct {
  /** Text */
  readonly name: Text;
  /** Text */
  readonly prefix: Text;
  /** Option<Vec<StorageFunctionMetadataV4>> */
  readonly storage: Option<Vec<StorageFunctionMetadataV4>>;
  /** Option<Vec<FunctionMetadataV4>> */
  readonly calls: Option<Vec<FunctionMetadataV4>>;
  /** Option<Vec<EventMetadataV4>> */
  readonly events: Option<Vec<EventMetadataV4>>;
}

/** Struct */
export interface ModuleMetadataV5 extends Struct {
  /** Text */
  readonly name: Text;
  /** Text */
  readonly prefix: Text;
  /** Option<Vec<StorageFunctionMetadataV5>> */
  readonly storage: Option<Vec<StorageFunctionMetadataV5>>;
  /** Option<Vec<FunctionMetadataV5>> */
  readonly calls: Option<Vec<FunctionMetadataV5>>;
  /** Option<Vec<EventMetadataV5>> */
  readonly events: Option<Vec<EventMetadataV5>>;
}

/** Struct */
export interface ModuleMetadataV6 extends Struct {
  /** Text */
  readonly name: Text;
  /** Text */
  readonly prefix: Text;
  /** Option<Vec<StorageEntryMetadataV6>> */
  readonly storage: Option<Vec<StorageEntryMetadataV6>>;
  /** Option<Vec<FunctionMetadataV6>> */
  readonly calls: Option<Vec<FunctionMetadataV6>>;
  /** Option<Vec<EventMetadataV6>> */
  readonly events: Option<Vec<EventMetadataV6>>;
  /** Vec<ModuleConstantMetadataV6> */
  readonly constants: Vec<ModuleConstantMetadataV6>;
}

/** Struct */
export interface ModuleMetadataV7 extends Struct {
  /** Text */
  readonly name: Text;
  /** Option<StorageMetadataV7> */
  readonly storage: Option<StorageMetadataV7>;
  /** Option<Vec<FunctionMetadataV7>> */
  readonly calls: Option<Vec<FunctionMetadataV7>>;
  /** Option<Vec<EventMetadataV7>> */
  readonly events: Option<Vec<EventMetadataV7>>;
  /** Vec<ModuleConstantMetadataV7> */
  readonly constants: Vec<ModuleConstantMetadataV7>;
}

/** Struct */
export interface ModuleMetadataV8 extends Struct {
  /** Text */
  readonly name: Text;
  /** Option<StorageMetadataV8> */
  readonly storage: Option<StorageMetadataV8>;
  /** Option<Vec<FunctionMetadataV8>> */
  readonly calls: Option<Vec<FunctionMetadataV8>>;
  /** Option<Vec<EventMetadataV8>> */
  readonly events: Option<Vec<EventMetadataV8>>;
  /** Vec<ModuleConstantMetadataV8> */
  readonly constants: Vec<ModuleConstantMetadataV8>;
  /** Vec<ErrorMetadataV8> */
  readonly errors: Vec<ErrorMetadataV8>;
}

/** Struct */
export interface ModuleMetadataV9 extends Struct {
  /** Text */
  readonly name: Text;
  /** Option<StorageMetadataV9> */
  readonly storage: Option<StorageMetadataV9>;
  /** Option<Vec<FunctionMetadataV9>> */
  readonly calls: Option<Vec<FunctionMetadataV9>>;
  /** Option<Vec<EventMetadataV9>> */
  readonly events: Option<Vec<EventMetadataV9>>;
  /** Vec<ModuleConstantMetadataV9> */
  readonly constants: Vec<ModuleConstantMetadataV9>;
  /** Vec<ErrorMetadataV9> */
  readonly errors: Vec<ErrorMetadataV9>;
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

/** PlainTypeV9 */
export interface PlainTypeLatest extends PlainTypeV9 {}

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

/** Type */
export interface PlanTypeV9 extends Type {}

/** Struct */
export interface RuntimeModuleMetadataV0 extends Struct {
  /** Text */
  readonly prefix: Text;
  /** ModuleMetadataV0 */
  readonly module: ModuleMetadataV0;
  /** Option<StorageMetadataV0> */
  readonly storage: Option<StorageMetadataV0>;
}

/** StorageEntryMetadataV9 */
export interface StorageEntryMetadataLatest extends StorageEntryMetadataV9 {}

/** StorageFunctionMetadataV5 */
export interface StorageEntryMetadataV6 extends StorageFunctionMetadataV5 {}

/** StorageEntryMetadataV6 */
export interface StorageEntryMetadataV7 extends StorageEntryMetadataV6 {}

/** StorageEntryMetadataV7 */
export interface StorageEntryMetadataV8 extends StorageEntryMetadataV7 {}

/** StorageEntryMetadataV8 */
export interface StorageEntryMetadataV9 extends StorageEntryMetadataV8 {}

/** StorageEntryModifierV9 */
export interface StorageEntryModifierLatest extends StorageEntryModifierV9 {}

/** StorageFunctionModifierV5 */
export interface StorageEntryModifierV6 extends StorageFunctionModifierV5 {}

/** StorageEntryModifierV6 */
export interface StorageEntryModifierV7 extends StorageEntryModifierV6 {}

/** StorageEntryModifierV7 */
export interface StorageEntryModifierV8 extends StorageEntryModifierV7 {}

/** StorageEntryModifierV8 */
export interface StorageEntryModifierV9 extends StorageEntryModifierV8 {}

/** StorageEntryTypeV9 */
export interface StorageEntryTypeLatest extends StorageEntryTypeV9 {}

/** StorageFunctionTypeV5 */
export interface StorageEntryTypeV6 extends StorageFunctionTypeV5 {}

/** StorageEntryTypeV6 */
export interface StorageEntryTypeV7 extends StorageEntryTypeV6 {}

/** StorageEntryTypeV7 */
export interface StorageEntryTypeV8 extends StorageEntryTypeV7 {}

/** StorageEntryTypeV9 */
export interface StorageEntryTypeV9 extends StorageEntryTypeV9 {}

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

/** Struct */
export interface StorageFunctionMetadataV2 extends Struct {
  /** Text */
  readonly name: Text;
  /** StorageFunctionModifierV2 */
  readonly modifier: StorageFunctionModifierV2;
  /** StorageFunctionTypeV2 */
  readonly type: StorageFunctionTypeV2;
  /** Bytes */
  readonly fallback: Bytes;
  /** Vec<Text> */
  readonly documentation: Vec<Text>;
}

/** Struct */
export interface StorageFunctionMetadataV3 extends Struct {
  /** Text */
  readonly name: Text;
  /** StorageFunctionModifierV3 */
  readonly modifier: StorageFunctionModifierV3;
  /** StorageFunctionTypeV3 */
  readonly type: StorageFunctionTypeV3;
  /** Bytes */
  readonly fallback: Bytes;
  /** Vec<Text> */
  readonly documentation: Vec<Text>;
}

/** Struct */
export interface StorageFunctionMetadataV4 extends Struct {
  /** Text */
  readonly name: Text;
  /** StorageFunctionModifierV4 */
  readonly modifier: StorageFunctionModifierV4;
  /** StorageFunctionTypeV4 */
  readonly type: StorageFunctionTypeV4;
  /** Bytes */
  readonly fallback: Bytes;
  /** Vec<Text> */
  readonly documentation: Vec<Text>;
}

/** Struct */
export interface StorageFunctionMetadataV5 extends Struct {
  /** Text */
  readonly name: Text;
  /** StorageFunctionModifierV5 */
  readonly modifier: StorageFunctionModifierV5;
  /** StorageFunctionTypeV5 */
  readonly type: StorageFunctionTypeV5;
  /** Bytes */
  readonly fallback: Bytes;
  /** Vec<Text> */
  readonly documentation: Vec<Text>;
}

/** Struct */
export interface StorageFunctionMetadataV9 extends Struct {
  /** Text */
  readonly name: Text;
  /** StorageFunctionModifierV9 */
  readonly modifier: StorageFunctionModifierV9;
  /** StorageFunctionTypeV9 */
  readonly type: StorageFunctionTypeV9;
  /** Bytes */
  readonly fallback: Bytes;
  /** Vec<Text> */
  readonly documentation: Vec<Text>;
}

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

/** StorageFunctionModifierV8 */
export interface StorageFunctionModifierV9 extends StorageFunctionModifierV8 {}

/** Enum */
export interface StorageFunctionTypeV0 extends Enum {
  /** 0:: Plain(PlainTypeV0) */
  readonly isPlain: boolean;
  /** PlainTypeV0 */
  readonly asPlain: PlainTypeV0;
  /** 1:: Map(MapTypeV0) */
  readonly isMap: boolean;
  /** MapTypeV0 */
  readonly asMap: MapTypeV0;
}

/** StorageFunctionTypeV0 */
export interface StorageFunctionTypeV1 extends StorageFunctionTypeV0 {}

/** Enum */
export interface StorageFunctionTypeV2 extends Enum {
  /** 0:: Plain(PlainTypeV2) */
  readonly isPlain: boolean;
  /** PlainTypeV2 */
  readonly asPlain: PlainTypeV2;
  /** 1:: Map(MapTypeV2) */
  readonly isMap: boolean;
  /** MapTypeV2 */
  readonly asMap: MapTypeV2;
}

/** Enum */
export interface StorageFunctionTypeV3 extends Enum {
  /** 0:: Plain(PlainTypeV3) */
  readonly isPlain: boolean;
  /** PlainTypeV3 */
  readonly asPlain: PlainTypeV3;
  /** 1:: Map(MapTypeV3) */
  readonly isMap: boolean;
  /** MapTypeV3 */
  readonly asMap: MapTypeV3;
  /** 2:: DoubleMap(DoubleMapTypeV3) */
  readonly isDoubleMap: boolean;
  /** DoubleMapTypeV3 */
  readonly asDoubleMap: DoubleMapTypeV3;
}

/** Enum */
export interface StorageFunctionTypeV4 extends Enum {
  /** 0:: Plain(PlainTypeV4) */
  readonly isPlain: boolean;
  /** PlainTypeV4 */
  readonly asPlain: PlainTypeV4;
  /** 1:: Map(MapTypeV4) */
  readonly isMap: boolean;
  /** MapTypeV4 */
  readonly asMap: MapTypeV4;
  /** 2:: DoubleMap(DoubleMapTypeV4) */
  readonly isDoubleMap: boolean;
  /** DoubleMapTypeV4 */
  readonly asDoubleMap: DoubleMapTypeV4;
}

/** Enum */
export interface StorageFunctionTypeV5 extends Enum {
  /** 0:: Plain(PlainTypeV5) */
  readonly isPlain: boolean;
  /** PlainTypeV5 */
  readonly asPlain: PlainTypeV5;
  /** 1:: Map(MapTypeV5) */
  readonly isMap: boolean;
  /** MapTypeV5 */
  readonly asMap: MapTypeV5;
  /** 2:: DoubleMap(DoubleMapTypeV5) */
  readonly isDoubleMap: boolean;
  /** DoubleMapTypeV5 */
  readonly asDoubleMap: DoubleMapTypeV5;
}

/** Enum */
export interface StorageFunctionTypeV9 extends Enum {
  /** 0:: Plain(PlainTypeV9) */
  readonly isPlain: boolean;
  /** PlainTypeV9 */
  readonly asPlain: PlainTypeV9;
  /** 1:: Map(MapTypeV9) */
  readonly isMap: boolean;
  /** MapTypeV9 */
  readonly asMap: MapTypeV9;
  /** 2:: DoubleMap(DoubleMapTypeV5) */
  readonly isDoubleMap: boolean;
  /** DoubleMapTypeV5 */
  readonly asDoubleMap: DoubleMapTypeV5;
}

/** Enum */
export interface StorageMapTypeV9 extends Enum {
  /** 0:: Map */
  readonly isMap: boolean;
  /** 1:: LinkedMap */
  readonly isLinkedMap: boolean;
  /** 2:: PrefixedMap */
  readonly isPrefixedMap: boolean;
}

/** Struct */
export interface StorageMetadataV0 extends Struct {
  /** Text */
  readonly prefix: Text;
  /** Vec<StorageFunctionMetadataV0> */
  readonly functions: Vec<StorageFunctionMetadataV0>;
}

/** Struct */
export interface StorageMetadataV7 extends Struct {
  /** Text */
  readonly prefix: Text;
  /** Vec<StorageEntryMetadataV7> */
  readonly items: Vec<StorageEntryMetadataV7>;
}

/** StorageMetadataV7 */
export interface StorageMetadataV8 extends StorageMetadataV7 {}

/** Struct */
export interface StorageMetadataV9 extends Struct {
  /** Text */
  readonly prefix: Text;
  /** Vec<StorageEntryMetadataV9> */
  readonly items: Vec<StorageEntryMetadataV9>;
}
