// Auto-generated via `yarn build:interfaces`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { ITuple } from '@polkadot/types/types';
import { Enum, Option, Struct, Vec } from '@polkadot/types/codec';
import { Bytes, Text, Type, bool, u16 } from '@polkadot/types/primitive';

/** Struct */
export interface CallMetadataV0 extends Struct {
  /** Text */
  readonly name: Text;
  /** Vec<FunctionMetadataV0> */
  readonly functions: Vec<FunctionMetadataV0>;
}

/** DoubleMapTypeV10 */
export interface DoubleMapTypeLatest extends DoubleMapTypeV10 {}

/** Struct */
export interface DoubleMapTypeV10 extends Struct {
  /** StorageHasherV10 */
  readonly hasher: StorageHasherV10;
  /** Type */
  readonly key1: Type;
  /** Type */
  readonly key2: Type;
  /** Type */
  readonly value: Type;
  /** StorageHasherV10 */
  readonly key2Hasher: StorageHasherV10;
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
  /** StorageHasherV4 */
  readonly hasher: StorageHasherV4;
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
  /** StorageHasherV5 */
  readonly hasher: StorageHasherV5;
  /** Type */
  readonly key1: Type;
  /** Type */
  readonly key2: Type;
  /** Type */
  readonly value: Type;
  /** StorageHasherV5 */
  readonly key2Hasher: StorageHasherV5;
}

/** DoubleMapTypeV5 */
export interface DoubleMapTypeV6 extends DoubleMapTypeV5 {}

/** DoubleMapTypeV6 */
export interface DoubleMapTypeV7 extends DoubleMapTypeV6 {}

/** DoubleMapTypeV7 */
export interface DoubleMapTypeV8 extends DoubleMapTypeV7 {}

/** DoubleMapTypeV8 */
export interface DoubleMapTypeV9 extends DoubleMapTypeV8 {}

/** ErrorMetadataV9 */
export interface ErrorMetadataV10 extends ErrorMetadataV9 {}

/** Struct */
export interface ErrorMetadataV8 extends Struct {
  /** Text */
  readonly name: Text;
  /** Vec<Text> */
  readonly documentation: Vec<Text>;
}

/** ErrorMetadataV8 */
export interface ErrorMetadataV9 extends ErrorMetadataV8 {}

/** EventMetadataV10 */
export interface EventMetadataLatest extends EventMetadataV10 {}

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

/** EventMetadataV9 */
export interface EventMetadataV10 extends EventMetadataV9 {}

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

/** FunctionArgumentMetadataV10 */
export interface FunctionArgumentMetadataLatest extends FunctionArgumentMetadataV10 {}

/** Struct */
export interface FunctionArgumentMetadataV0 extends Struct {
  /** Text */
  readonly name: Text;
  /** Type */
  readonly type: Type;
}

/** FunctionArgumentMetadataV0 */
export interface FunctionArgumentMetadataV1 extends FunctionArgumentMetadataV0 {}

/** FunctionArgumentMetadataV9 */
export interface FunctionArgumentMetadataV10 extends FunctionArgumentMetadataV9 {}

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

/** FunctionMetadataV10 */
export interface FunctionMetadataLatest extends FunctionMetadataV10 {}

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

/** FunctionMetadataV9 */
export interface FunctionMetadataV10 extends FunctionMetadataV9 {}

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

/** MapTypeV10 */
export interface MapTypeLatest extends MapTypeV10 {}

/** Struct */
export interface MapTypeV0 extends Struct {
  /** Type */
  readonly key: Type;
  /** Type */
  readonly value: Type;
}

/** Struct */
export interface MapTypeV10 extends Struct {
  /** StorageHasherV10 */
  readonly hasher: StorageHasherV10;
  /** Type */
  readonly key: Type;
  /** Type */
  readonly value: Type;
  /** bool */
  readonly linked: bool;
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
  /** StorageHasherV4 */
  readonly hasher: StorageHasherV4;
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

/** MapTypeV8 */
export interface MapTypeV9 extends MapTypeV8 {}

/** Enum */
export interface MetadataAll extends Enum {
  /** 0:: V0(MetadataV0) */
  readonly isV0: boolean;
  /** MetadataV0 */
  readonly asV0: MetadataV0;
  /** 1:: V1(MetadataV1) */
  readonly isV1: boolean;
  /** MetadataV1 */
  readonly asV1: MetadataV1;
  /** 2:: V2(MetadataV2) */
  readonly isV2: boolean;
  /** MetadataV2 */
  readonly asV2: MetadataV2;
  /** 3:: V3(MetadataV3) */
  readonly isV3: boolean;
  /** MetadataV3 */
  readonly asV3: MetadataV3;
  /** 4:: V4(MetadataV4) */
  readonly isV4: boolean;
  /** MetadataV4 */
  readonly asV4: MetadataV4;
  /** 5:: V5(MetadataV5) */
  readonly isV5: boolean;
  /** MetadataV5 */
  readonly asV5: MetadataV5;
  /** 6:: V6(MetadataV6) */
  readonly isV6: boolean;
  /** MetadataV6 */
  readonly asV6: MetadataV6;
  /** 7:: V7(MetadataV7) */
  readonly isV7: boolean;
  /** MetadataV7 */
  readonly asV7: MetadataV7;
  /** 8:: V8(MetadataV8) */
  readonly isV8: boolean;
  /** MetadataV8 */
  readonly asV8: MetadataV8;
  /** 9:: V9(MetadataV9) */
  readonly isV9: boolean;
  /** MetadataV9 */
  readonly asV9: MetadataV9;
  /** 10:: V10(MetadataV10) */
  readonly isV10: boolean;
  /** MetadataV10 */
  readonly asV10: MetadataV10;
}

/** MetadataV10 */
export interface MetadataLatest extends MetadataV10 {}

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
export interface MetadataV10 extends Struct {
  /** Vec<ModuleMetadataV10> */
  readonly modules: Vec<ModuleMetadataV10>;
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

/** MetadataV8 */
export interface MetadataV9 extends MetadataV8 {}

/** ModuleConstantMetadataV10 */
export interface ModuleConstantMetadataLatest extends ModuleConstantMetadataV10 {}

/** ModuleConstantMetadataV9 */
export interface ModuleConstantMetadataV10 extends ModuleConstantMetadataV9 {}

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

/** ModuleMetadataV10 */
export interface ModuleMetadataLatest extends ModuleMetadataV10 {}

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
export interface ModuleMetadataV10 extends Struct {
  /** Text */
  readonly name: Text;
  /** Option<StorageMetadataV10> */
  readonly storage: Option<StorageMetadataV10>;
  /** Option<Vec<FunctionMetadataV10>> */
  readonly calls: Option<Vec<FunctionMetadataV10>>;
  /** Option<Vec<EventMetadataV10>> */
  readonly events: Option<Vec<EventMetadataV10>>;
  /** Vec<ModuleConstantMetadataV10> */
  readonly constants: Vec<ModuleConstantMetadataV10>;
  /** Vec<ErrorMetadataV10> */
  readonly errors: Vec<ErrorMetadataV10>;
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

/** ModuleMetadataV8 */
export interface ModuleMetadataV9 extends ModuleMetadataV8 {}

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

/** PlainTypeV10 */
export interface PlainTypeLatest extends PlainTypeV10 {}

/** Type */
export interface PlainTypeV0 extends Type {}

/** Type */
export interface PlainTypeV10 extends Type {}

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
export interface PlainTypeV9 extends Type {}

/** Struct */
export interface RuntimeModuleMetadataV0 extends Struct {
  /** Text */
  readonly prefix: Text;
  /** ModuleMetadataV0 */
  readonly module: ModuleMetadataV0;
  /** Option<StorageMetadataV0> */
  readonly storage: Option<StorageMetadataV0>;
}

/** StorageEntryMetadataV10 */
export interface StorageEntryMetadataLatest extends StorageEntryMetadataV10 {}

/** Struct */
export interface StorageEntryMetadataV10 extends Struct {
  /** Text */
  readonly name: Text;
  /** StorageEntryModifierV10 */
  readonly modifier: StorageEntryModifierV10;
  /** StorageEntryTypeV10 */
  readonly type: StorageEntryTypeV10;
  /** Bytes */
  readonly fallback: Bytes;
  /** Vec<Text> */
  readonly documentation: Vec<Text>;
}

/** StorageFunctionMetadataV5 */
export interface StorageEntryMetadataV6 extends StorageFunctionMetadataV5 {}

/** StorageEntryMetadataV6 */
export interface StorageEntryMetadataV7 extends StorageEntryMetadataV6 {}

/** StorageEntryMetadataV7 */
export interface StorageEntryMetadataV8 extends StorageEntryMetadataV7 {}

/** StorageEntryMetadataV8 */
export interface StorageEntryMetadataV9 extends StorageEntryMetadataV8 {}

/** StorageEntryModifierV10 */
export interface StorageEntryModifierLatest extends StorageEntryModifierV10 {}

/** StorageEntryModifierV9 */
export interface StorageEntryModifierV10 extends StorageEntryModifierV9 {}

/** StorageFunctionModifierV5 */
export interface StorageEntryModifierV6 extends StorageFunctionModifierV5 {}

/** StorageEntryModifierV6 */
export interface StorageEntryModifierV7 extends StorageEntryModifierV6 {}

/** StorageEntryModifierV7 */
export interface StorageEntryModifierV8 extends StorageEntryModifierV7 {}

/** StorageEntryModifierV8 */
export interface StorageEntryModifierV9 extends StorageEntryModifierV8 {}

/** StorageEntryTypeV10 */
export interface StorageEntryTypeLatest extends StorageEntryTypeV10 {}

/** Enum */
export interface StorageEntryTypeV10 extends Enum {
  /** 0:: Plain(PlainTypeV10) */
  readonly isPlain: boolean;
  /** PlainTypeV10 */
  readonly asPlain: PlainTypeV10;
  /** 1:: Map(MapTypeV10) */
  readonly isMap: boolean;
  /** MapTypeV10 */
  readonly asMap: MapTypeV10;
  /** 2:: DoubleMap(DoubleMapTypeV10) */
  readonly isDoubleMap: boolean;
  /** DoubleMapTypeV10 */
  readonly asDoubleMap: DoubleMapTypeV10;
}

/** StorageFunctionTypeV5 */
export interface StorageEntryTypeV6 extends StorageFunctionTypeV5 {}

/** StorageEntryTypeV6 */
export interface StorageEntryTypeV7 extends StorageEntryTypeV6 {}

/** StorageEntryTypeV7 */
export interface StorageEntryTypeV8 extends StorageEntryTypeV7 {}

/** StorageEntryTypeV8 */
export interface StorageEntryTypeV9 extends StorageEntryTypeV8 {}

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

/** StorageHasherV10 */
export interface StorageHasher extends StorageHasherV10 {}

/** Enum */
export interface StorageHasherV10 extends Enum {
  /** 0:: Blake2_128 */
  readonly isBlake2128: boolean;
  /** 1:: Blake2_256 */
  readonly isBlake2256: boolean;
  /** 2:: Blake2_128Concat */
  readonly isBlake2128Concat: boolean;
  /** 3:: Twox128 */
  readonly isTwox128: boolean;
  /** 4:: Twox256 */
  readonly isTwox256: boolean;
  /** 5:: Twox64Concat */
  readonly isTwox64Concat: boolean;
}

/** Enum */
export interface StorageHasherV4 extends Enum {
  /** 0:: Blake2_128 */
  readonly isBlake2128: boolean;
  /** 1:: Blake2_256 */
  readonly isBlake2256: boolean;
  /** 2:: Twox128 */
  readonly isTwox128: boolean;
  /** 3:: Twox256 */
  readonly isTwox256: boolean;
  /** 4:: Twox64Concat */
  readonly isTwox64Concat: boolean;
  /** 5:: InvalidEntry */
  readonly isInvalidEntry: boolean;
}

/** StorageHasherV4 */
export interface StorageHasherV5 extends StorageHasherV4 {}

/** StorageHasherV5 */
export interface StorageHasherV6 extends StorageHasherV5 {}

/** StorageHasherV6 */
export interface StorageHasherV7 extends StorageHasherV6 {}

/** StorageHasherV7 */
export interface StorageHasherV8 extends StorageHasherV7 {}

/** StorageHasherV8 */
export interface StorageHasherV9 extends StorageHasherV8 {}

/** StorageMetadataV10 */
export interface StorageMetadataLatest extends StorageMetadataV10 {}

/** Struct */
export interface StorageMetadataV0 extends Struct {
  /** Text */
  readonly prefix: Text;
  /** Vec<StorageFunctionMetadataV0> */
  readonly functions: Vec<StorageFunctionMetadataV0>;
}

/** Struct */
export interface StorageMetadataV10 extends Struct {
  /** Text */
  readonly prefix: Text;
  /** Vec<StorageEntryMetadataV10> */
  readonly items: Vec<StorageEntryMetadataV10>;
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

/** StorageMetadataV8 */
export interface StorageMetadataV9 extends StorageMetadataV8 {}
