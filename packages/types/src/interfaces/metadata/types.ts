// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import { ITuple } from '@polkadot/types/types';
import { Enum, Option, Struct, Vec } from '@polkadot/types/codec';
import { Bytes, Text, Type, bool, u16, u8 } from '@polkadot/types/primitive';

/** @name CallMetadataV0 */
export interface CallMetadataV0 extends Struct {
  readonly name: Text;
  readonly functions: Vec<FunctionMetadataV0>;
}

/** @name DoubleMapTypeLatest */
export interface DoubleMapTypeLatest extends DoubleMapTypeV11 {}

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

/** @name DoubleMapTypeV3 */
export interface DoubleMapTypeV3 extends Struct {
  readonly key1: Type;
  readonly key2: Type;
  readonly value: Type;
  readonly key2Hasher: Text;
}

/** @name DoubleMapTypeV4 */
export interface DoubleMapTypeV4 extends Struct {
  readonly hasher: StorageHasherV4;
  readonly key1: Type;
  readonly key2: Type;
  readonly value: Type;
  readonly key2Hasher: Text;
}

/** @name DoubleMapTypeV5 */
export interface DoubleMapTypeV5 extends Struct {
  readonly hasher: StorageHasherV5;
  readonly key1: Type;
  readonly key2: Type;
  readonly value: Type;
  readonly key2Hasher: StorageHasherV5;
}

/** @name DoubleMapTypeV6 */
export interface DoubleMapTypeV6 extends DoubleMapTypeV5 {}

/** @name DoubleMapTypeV7 */
export interface DoubleMapTypeV7 extends DoubleMapTypeV6 {}

/** @name DoubleMapTypeV8 */
export interface DoubleMapTypeV8 extends DoubleMapTypeV7 {}

/** @name DoubleMapTypeV9 */
export interface DoubleMapTypeV9 extends DoubleMapTypeV8 {}

/** @name ErrorMetadataV10 */
export interface ErrorMetadataV10 extends ErrorMetadataV9 {}

/** @name ErrorMetadataV11 */
export interface ErrorMetadataV11 extends ErrorMetadataV10 {}

/** @name ErrorMetadataV8 */
export interface ErrorMetadataV8 extends Struct {
  readonly name: Text;
  readonly documentation: Vec<Text>;
}

/** @name ErrorMetadataV9 */
export interface ErrorMetadataV9 extends ErrorMetadataV8 {}

/** @name EventMetadataLatest */
export interface EventMetadataLatest extends EventMetadataV11 {}

/** @name EventMetadataV0 */
export interface EventMetadataV0 extends Struct {
  readonly name: Text;
  readonly args: Vec<Type>;
  readonly documentation: Vec<Text>;
}

/** @name EventMetadataV1 */
export interface EventMetadataV1 extends EventMetadataV0 {}

/** @name EventMetadataV10 */
export interface EventMetadataV10 extends EventMetadataV9 {}

/** @name EventMetadataV11 */
export interface EventMetadataV11 extends EventMetadataV10 {}

/** @name EventMetadataV2 */
export interface EventMetadataV2 extends EventMetadataV1 {}

/** @name EventMetadataV3 */
export interface EventMetadataV3 extends EventMetadataV2 {}

/** @name EventMetadataV4 */
export interface EventMetadataV4 extends EventMetadataV3 {}

/** @name EventMetadataV5 */
export interface EventMetadataV5 extends EventMetadataV4 {}

/** @name EventMetadataV6 */
export interface EventMetadataV6 extends EventMetadataV5 {}

/** @name EventMetadataV7 */
export interface EventMetadataV7 extends EventMetadataV6 {}

/** @name EventMetadataV8 */
export interface EventMetadataV8 extends EventMetadataV7 {}

/** @name EventMetadataV9 */
export interface EventMetadataV9 extends EventMetadataV8 {}

/** @name ExtrinsicMetadataLatest */
export interface ExtrinsicMetadataLatest extends ExtrinsicMetadataV11 {}

/** @name ExtrinsicMetadataV11 */
export interface ExtrinsicMetadataV11 extends Struct {
  readonly version: u8;
  readonly signedExtensions: Vec<Text>;
}

/** @name FunctionArgumentMetadataLatest */
export interface FunctionArgumentMetadataLatest extends FunctionArgumentMetadataV11 {}

/** @name FunctionArgumentMetadataV0 */
export interface FunctionArgumentMetadataV0 extends Struct {
  readonly name: Text;
  readonly type: Type;
}

/** @name FunctionArgumentMetadataV1 */
export interface FunctionArgumentMetadataV1 extends FunctionArgumentMetadataV0 {}

/** @name FunctionArgumentMetadataV10 */
export interface FunctionArgumentMetadataV10 extends FunctionArgumentMetadataV9 {}

/** @name FunctionArgumentMetadataV11 */
export interface FunctionArgumentMetadataV11 extends FunctionArgumentMetadataV10 {}

/** @name FunctionArgumentMetadataV2 */
export interface FunctionArgumentMetadataV2 extends FunctionArgumentMetadataV1 {}

/** @name FunctionArgumentMetadataV3 */
export interface FunctionArgumentMetadataV3 extends FunctionArgumentMetadataV2 {}

/** @name FunctionArgumentMetadataV4 */
export interface FunctionArgumentMetadataV4 extends FunctionArgumentMetadataV3 {}

/** @name FunctionArgumentMetadataV5 */
export interface FunctionArgumentMetadataV5 extends FunctionArgumentMetadataV4 {}

/** @name FunctionArgumentMetadataV6 */
export interface FunctionArgumentMetadataV6 extends FunctionArgumentMetadataV5 {}

/** @name FunctionArgumentMetadataV7 */
export interface FunctionArgumentMetadataV7 extends FunctionArgumentMetadataV6 {}

/** @name FunctionArgumentMetadataV8 */
export interface FunctionArgumentMetadataV8 extends FunctionArgumentMetadataV7 {}

/** @name FunctionArgumentMetadataV9 */
export interface FunctionArgumentMetadataV9 extends FunctionArgumentMetadataV8 {}

/** @name FunctionMetadataLatest */
export interface FunctionMetadataLatest extends FunctionMetadataV11 {}

/** @name FunctionMetadataV0 */
export interface FunctionMetadataV0 extends Struct {
  readonly id: u16;
  readonly name: Text;
  readonly args: Vec<FunctionArgumentMetadataV0>;
  readonly documentation: Vec<Text>;
}

/** @name FunctionMetadataV1 */
export interface FunctionMetadataV1 extends Struct {
  readonly name: Text;
  readonly args: Vec<FunctionArgumentMetadataV1>;
  readonly documentation: Vec<Text>;
}

/** @name FunctionMetadataV10 */
export interface FunctionMetadataV10 extends FunctionMetadataV9 {}

/** @name FunctionMetadataV11 */
export interface FunctionMetadataV11 extends FunctionMetadataV10 {}

/** @name FunctionMetadataV2 */
export interface FunctionMetadataV2 extends FunctionMetadataV1 {}

/** @name FunctionMetadataV3 */
export interface FunctionMetadataV3 extends FunctionMetadataV2 {}

/** @name FunctionMetadataV4 */
export interface FunctionMetadataV4 extends FunctionMetadataV3 {}

/** @name FunctionMetadataV5 */
export interface FunctionMetadataV5 extends FunctionMetadataV4 {}

/** @name FunctionMetadataV6 */
export interface FunctionMetadataV6 extends FunctionMetadataV5 {}

/** @name FunctionMetadataV7 */
export interface FunctionMetadataV7 extends FunctionMetadataV6 {}

/** @name FunctionMetadataV8 */
export interface FunctionMetadataV8 extends FunctionMetadataV7 {}

/** @name FunctionMetadataV9 */
export interface FunctionMetadataV9 extends FunctionMetadataV8 {}

/** @name MapTypeLatest */
export interface MapTypeLatest extends MapTypeV11 {}

/** @name MapTypeV0 */
export interface MapTypeV0 extends Struct {
  readonly key: Type;
  readonly value: Type;
}

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

/** @name MapTypeV2 */
export interface MapTypeV2 extends Struct {
  readonly key: Type;
  readonly value: Type;
  readonly linked: bool;
}

/** @name MapTypeV3 */
export interface MapTypeV3 extends MapTypeV2 {}

/** @name MapTypeV4 */
export interface MapTypeV4 extends Struct {
  readonly hasher: StorageHasherV4;
  readonly key: Type;
  readonly value: Type;
  readonly linked: bool;
}

/** @name MapTypeV5 */
export interface MapTypeV5 extends MapTypeV4 {}

/** @name MapTypeV6 */
export interface MapTypeV6 extends MapTypeV5 {}

/** @name MapTypeV7 */
export interface MapTypeV7 extends MapTypeV6 {}

/** @name MapTypeV8 */
export interface MapTypeV8 extends MapTypeV7 {}

/** @name MapTypeV9 */
export interface MapTypeV9 extends MapTypeV8 {}

/** @name MetadataAll */
export interface MetadataAll extends Enum {
  readonly isV0: boolean;
  readonly asV0: MetadataV0;
  readonly isV1: boolean;
  readonly asV1: MetadataV1;
  readonly isV2: boolean;
  readonly asV2: MetadataV2;
  readonly isV3: boolean;
  readonly asV3: MetadataV3;
  readonly isV4: boolean;
  readonly asV4: MetadataV4;
  readonly isV5: boolean;
  readonly asV5: MetadataV5;
  readonly isV6: boolean;
  readonly asV6: MetadataV6;
  readonly isV7: boolean;
  readonly asV7: MetadataV7;
  readonly isV8: boolean;
  readonly asV8: MetadataV8;
  readonly isV9: boolean;
  readonly asV9: MetadataV9;
  readonly isV10: boolean;
  readonly asV10: MetadataV10;
  readonly isV11: boolean;
  readonly asV11: MetadataV11;
}

/** @name MetadataLatest */
export interface MetadataLatest extends MetadataV11 {}

/** @name MetadataV0 */
export interface MetadataV0 extends Struct {
  readonly outerEvent: OuterEventMetadataV0;
  readonly modules: Vec<RuntimeModuleMetadataV0>;
  readonly outerDispatch: OuterDispatchMetadataV0;
}

/** @name MetadataV1 */
export interface MetadataV1 extends Struct {
  readonly modules: Vec<ModuleMetadataV1>;
}

/** @name MetadataV10 */
export interface MetadataV10 extends Struct {
  readonly modules: Vec<ModuleMetadataV10>;
}

/** @name MetadataV11 */
export interface MetadataV11 extends Struct {
  readonly modules: Vec<ModuleMetadataV11>;
  readonly extrinsic: ExtrinsicMetadataV11;
}

/** @name MetadataV2 */
export interface MetadataV2 extends Struct {
  readonly modules: Vec<ModuleMetadataV2>;
}

/** @name MetadataV3 */
export interface MetadataV3 extends Struct {
  readonly modules: Vec<ModuleMetadataV3>;
}

/** @name MetadataV4 */
export interface MetadataV4 extends Struct {
  readonly modules: Vec<ModuleMetadataV4>;
}

/** @name MetadataV5 */
export interface MetadataV5 extends Struct {
  readonly modules: Vec<ModuleMetadataV5>;
}

/** @name MetadataV6 */
export interface MetadataV6 extends Struct {
  readonly modules: Vec<ModuleMetadataV6>;
}

/** @name MetadataV7 */
export interface MetadataV7 extends Struct {
  readonly modules: Vec<ModuleMetadataV7>;
}

/** @name MetadataV8 */
export interface MetadataV8 extends Struct {
  readonly modules: Vec<ModuleMetadataV8>;
}

/** @name MetadataV9 */
export interface MetadataV9 extends MetadataV8 {}

/** @name ModuleConstantMetadataLatest */
export interface ModuleConstantMetadataLatest extends ModuleConstantMetadataV11 {}

/** @name ModuleConstantMetadataV10 */
export interface ModuleConstantMetadataV10 extends ModuleConstantMetadataV9 {}

/** @name ModuleConstantMetadataV11 */
export interface ModuleConstantMetadataV11 extends ModuleConstantMetadataV10 {}

/** @name ModuleConstantMetadataV6 */
export interface ModuleConstantMetadataV6 extends Struct {
  readonly name: Text;
  readonly type: Type;
  readonly value: Bytes;
  readonly documentation: Vec<Text>;
}

/** @name ModuleConstantMetadataV7 */
export interface ModuleConstantMetadataV7 extends ModuleConstantMetadataV6 {}

/** @name ModuleConstantMetadataV8 */
export interface ModuleConstantMetadataV8 extends ModuleConstantMetadataV7 {}

/** @name ModuleConstantMetadataV9 */
export interface ModuleConstantMetadataV9 extends ModuleConstantMetadataV8 {}

/** @name ModuleMetadataLatest */
export interface ModuleMetadataLatest extends ModuleMetadataV11 {}

/** @name ModuleMetadataV0 */
export interface ModuleMetadataV0 extends Struct {
  readonly name: Text;
  readonly call: CallMetadataV0;
}

/** @name ModuleMetadataV1 */
export interface ModuleMetadataV1 extends Struct {
  readonly name: Text;
  readonly prefix: Text;
  readonly storage: Option<Vec<StorageFunctionMetadataV1>>;
  readonly calls: Option<Vec<FunctionMetadataV1>>;
  readonly events: Option<Vec<EventMetadataV1>>;
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

/** @name ModuleMetadataV2 */
export interface ModuleMetadataV2 extends Struct {
  readonly name: Text;
  readonly prefix: Text;
  readonly storage: Option<Vec<StorageFunctionMetadataV2>>;
  readonly calls: Option<Vec<FunctionMetadataV2>>;
  readonly events: Option<Vec<EventMetadataV2>>;
}

/** @name ModuleMetadataV3 */
export interface ModuleMetadataV3 extends Struct {
  readonly name: Text;
  readonly prefix: Text;
  readonly storage: Option<Vec<StorageFunctionMetadataV3>>;
  readonly calls: Option<Vec<FunctionMetadataV3>>;
  readonly events: Option<Vec<EventMetadataV3>>;
}

/** @name ModuleMetadataV4 */
export interface ModuleMetadataV4 extends Struct {
  readonly name: Text;
  readonly prefix: Text;
  readonly storage: Option<Vec<StorageFunctionMetadataV4>>;
  readonly calls: Option<Vec<FunctionMetadataV4>>;
  readonly events: Option<Vec<EventMetadataV4>>;
}

/** @name ModuleMetadataV5 */
export interface ModuleMetadataV5 extends Struct {
  readonly name: Text;
  readonly prefix: Text;
  readonly storage: Option<Vec<StorageFunctionMetadataV5>>;
  readonly calls: Option<Vec<FunctionMetadataV5>>;
  readonly events: Option<Vec<EventMetadataV5>>;
}

/** @name ModuleMetadataV6 */
export interface ModuleMetadataV6 extends Struct {
  readonly name: Text;
  readonly prefix: Text;
  readonly storage: Option<Vec<StorageEntryMetadataV6>>;
  readonly calls: Option<Vec<FunctionMetadataV6>>;
  readonly events: Option<Vec<EventMetadataV6>>;
  readonly constants: Vec<ModuleConstantMetadataV6>;
}

/** @name ModuleMetadataV7 */
export interface ModuleMetadataV7 extends Struct {
  readonly name: Text;
  readonly storage: Option<StorageMetadataV7>;
  readonly calls: Option<Vec<FunctionMetadataV7>>;
  readonly events: Option<Vec<EventMetadataV7>>;
  readonly constants: Vec<ModuleConstantMetadataV7>;
}

/** @name ModuleMetadataV8 */
export interface ModuleMetadataV8 extends Struct {
  readonly name: Text;
  readonly storage: Option<StorageMetadataV8>;
  readonly calls: Option<Vec<FunctionMetadataV8>>;
  readonly events: Option<Vec<EventMetadataV8>>;
  readonly constants: Vec<ModuleConstantMetadataV8>;
  readonly errors: Vec<ErrorMetadataV8>;
}

/** @name ModuleMetadataV9 */
export interface ModuleMetadataV9 extends ModuleMetadataV8 {}

/** @name OuterDispatchCallV0 */
export interface OuterDispatchCallV0 extends Struct {
  readonly name: Text;
  readonly prefix: Text;
  readonly index: u16;
}

/** @name OuterDispatchMetadataV0 */
export interface OuterDispatchMetadataV0 extends Struct {
  readonly name: Text;
  readonly calls: Vec<OuterDispatchCallV0>;
}

/** @name OuterEventEventMetadataEventsV0 */
export interface OuterEventEventMetadataEventsV0 extends Vec<EventMetadataV0> {}

/** @name OuterEventEventMetadataV0 */
export interface OuterEventEventMetadataV0 extends ITuple<[Text, OuterEventEventMetadataEventsV0]> {}

/** @name OuterEventMetadataV0 */
export interface OuterEventMetadataV0 extends Struct {
  readonly name: Text;
  readonly events: Vec<OuterEventEventMetadataV0>;
}

/** @name PlainTypeLatest */
export interface PlainTypeLatest extends PlainTypeV11 {}

/** @name PlainTypeV0 */
export interface PlainTypeV0 extends Type {}

/** @name PlainTypeV10 */
export interface PlainTypeV10 extends Type {}

/** @name PlainTypeV11 */
export interface PlainTypeV11 extends Type {}

/** @name PlainTypeV2 */
export interface PlainTypeV2 extends Type {}

/** @name PlainTypeV3 */
export interface PlainTypeV3 extends Type {}

/** @name PlainTypeV4 */
export interface PlainTypeV4 extends Type {}

/** @name PlainTypeV5 */
export interface PlainTypeV5 extends Type {}

/** @name PlainTypeV6 */
export interface PlainTypeV6 extends Type {}

/** @name PlainTypeV7 */
export interface PlainTypeV7 extends Type {}

/** @name PlainTypeV8 */
export interface PlainTypeV8 extends Type {}

/** @name PlainTypeV9 */
export interface PlainTypeV9 extends Type {}

/** @name RuntimeModuleMetadataV0 */
export interface RuntimeModuleMetadataV0 extends Struct {
  readonly prefix: Text;
  readonly module: ModuleMetadataV0;
  readonly storage: Option<StorageMetadataV0>;
}

/** @name StorageEntryMetadataLatest */
export interface StorageEntryMetadataLatest extends StorageEntryMetadataV11 {}

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

/** @name StorageEntryMetadataV6 */
export interface StorageEntryMetadataV6 extends StorageFunctionMetadataV5 {}

/** @name StorageEntryMetadataV7 */
export interface StorageEntryMetadataV7 extends StorageEntryMetadataV6 {}

/** @name StorageEntryMetadataV8 */
export interface StorageEntryMetadataV8 extends StorageEntryMetadataV7 {}

/** @name StorageEntryMetadataV9 */
export interface StorageEntryMetadataV9 extends StorageEntryMetadataV8 {}

/** @name StorageEntryModifierLatest */
export interface StorageEntryModifierLatest extends StorageEntryModifierV11 {}

/** @name StorageEntryModifierV10 */
export interface StorageEntryModifierV10 extends StorageEntryModifierV9 {}

/** @name StorageEntryModifierV11 */
export interface StorageEntryModifierV11 extends StorageEntryModifierV10 {}

/** @name StorageEntryModifierV6 */
export interface StorageEntryModifierV6 extends StorageFunctionModifierV5 {}

/** @name StorageEntryModifierV7 */
export interface StorageEntryModifierV7 extends StorageEntryModifierV6 {}

/** @name StorageEntryModifierV8 */
export interface StorageEntryModifierV8 extends StorageEntryModifierV7 {}

/** @name StorageEntryModifierV9 */
export interface StorageEntryModifierV9 extends StorageEntryModifierV8 {}

/** @name StorageEntryTypeLatest */
export interface StorageEntryTypeLatest extends StorageEntryTypeV11 {}

/** @name StorageEntryTypeV10 */
export interface StorageEntryTypeV10 extends Enum {
  readonly isPlain: boolean;
  readonly asPlain: PlainTypeV10;
  readonly isMap: boolean;
  readonly asMap: MapTypeV10;
  readonly isDoubleMap: boolean;
  readonly asDoubleMap: DoubleMapTypeV10;
}

/** @name StorageEntryTypeV11 */
export interface StorageEntryTypeV11 extends Enum {
  readonly isPlain: boolean;
  readonly asPlain: PlainTypeV11;
  readonly isMap: boolean;
  readonly asMap: MapTypeV11;
  readonly isDoubleMap: boolean;
  readonly asDoubleMap: DoubleMapTypeV11;
}

/** @name StorageEntryTypeV6 */
export interface StorageEntryTypeV6 extends StorageFunctionTypeV5 {}

/** @name StorageEntryTypeV7 */
export interface StorageEntryTypeV7 extends StorageEntryTypeV6 {}

/** @name StorageEntryTypeV8 */
export interface StorageEntryTypeV8 extends StorageEntryTypeV7 {}

/** @name StorageEntryTypeV9 */
export interface StorageEntryTypeV9 extends StorageEntryTypeV8 {}

/** @name StorageFunctionMetadataV0 */
export interface StorageFunctionMetadataV0 extends Struct {
  readonly name: Text;
  readonly modifier: StorageFunctionModifierV0;
  readonly type: StorageFunctionTypeV0;
  readonly fallback: Bytes;
  readonly documentation: Vec<Text>;
}

/** @name StorageFunctionMetadataV1 */
export interface StorageFunctionMetadataV1 extends StorageFunctionMetadataV0 {}

/** @name StorageFunctionMetadataV2 */
export interface StorageFunctionMetadataV2 extends Struct {
  readonly name: Text;
  readonly modifier: StorageFunctionModifierV2;
  readonly type: StorageFunctionTypeV2;
  readonly fallback: Bytes;
  readonly documentation: Vec<Text>;
}

/** @name StorageFunctionMetadataV3 */
export interface StorageFunctionMetadataV3 extends Struct {
  readonly name: Text;
  readonly modifier: StorageFunctionModifierV3;
  readonly type: StorageFunctionTypeV3;
  readonly fallback: Bytes;
  readonly documentation: Vec<Text>;
}

/** @name StorageFunctionMetadataV4 */
export interface StorageFunctionMetadataV4 extends Struct {
  readonly name: Text;
  readonly modifier: StorageFunctionModifierV4;
  readonly type: StorageFunctionTypeV4;
  readonly fallback: Bytes;
  readonly documentation: Vec<Text>;
}

/** @name StorageFunctionMetadataV5 */
export interface StorageFunctionMetadataV5 extends Struct {
  readonly name: Text;
  readonly modifier: StorageFunctionModifierV5;
  readonly type: StorageFunctionTypeV5;
  readonly fallback: Bytes;
  readonly documentation: Vec<Text>;
}

/** @name StorageFunctionModifierV0 */
export interface StorageFunctionModifierV0 extends Enum {
  readonly isOptional: boolean;
  readonly isDefault: boolean;
  readonly isRequired: boolean;
}

/** @name StorageFunctionModifierV1 */
export interface StorageFunctionModifierV1 extends StorageFunctionModifierV0 {}

/** @name StorageFunctionModifierV2 */
export interface StorageFunctionModifierV2 extends StorageFunctionModifierV1 {}

/** @name StorageFunctionModifierV3 */
export interface StorageFunctionModifierV3 extends StorageFunctionModifierV2 {}

/** @name StorageFunctionModifierV4 */
export interface StorageFunctionModifierV4 extends StorageFunctionModifierV3 {}

/** @name StorageFunctionModifierV5 */
export interface StorageFunctionModifierV5 extends StorageFunctionModifierV4 {}

/** @name StorageFunctionTypeV0 */
export interface StorageFunctionTypeV0 extends Enum {
  readonly isPlain: boolean;
  readonly asPlain: PlainTypeV0;
  readonly isMap: boolean;
  readonly asMap: MapTypeV0;
}

/** @name StorageFunctionTypeV1 */
export interface StorageFunctionTypeV1 extends StorageFunctionTypeV0 {}

/** @name StorageFunctionTypeV2 */
export interface StorageFunctionTypeV2 extends Enum {
  readonly isPlain: boolean;
  readonly asPlain: PlainTypeV2;
  readonly isMap: boolean;
  readonly asMap: MapTypeV2;
}

/** @name StorageFunctionTypeV3 */
export interface StorageFunctionTypeV3 extends Enum {
  readonly isPlain: boolean;
  readonly asPlain: PlainTypeV3;
  readonly isMap: boolean;
  readonly asMap: MapTypeV3;
  readonly isDoubleMap: boolean;
  readonly asDoubleMap: DoubleMapTypeV3;
}

/** @name StorageFunctionTypeV4 */
export interface StorageFunctionTypeV4 extends Enum {
  readonly isPlain: boolean;
  readonly asPlain: PlainTypeV4;
  readonly isMap: boolean;
  readonly asMap: MapTypeV4;
  readonly isDoubleMap: boolean;
  readonly asDoubleMap: DoubleMapTypeV4;
}

/** @name StorageFunctionTypeV5 */
export interface StorageFunctionTypeV5 extends Enum {
  readonly isPlain: boolean;
  readonly asPlain: PlainTypeV5;
  readonly isMap: boolean;
  readonly asMap: MapTypeV5;
  readonly isDoubleMap: boolean;
  readonly asDoubleMap: DoubleMapTypeV5;
}

/** @name StorageHasher */
export interface StorageHasher extends StorageHasherV11 {}

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

/** @name StorageHasherV4 */
export interface StorageHasherV4 extends Enum {
  readonly isBlake2128: boolean;
  readonly isBlake2256: boolean;
  readonly isTwox128: boolean;
  readonly isTwox256: boolean;
  readonly isTwox64Concat: boolean;
}

/** @name StorageHasherV5 */
export interface StorageHasherV5 extends StorageHasherV4 {}

/** @name StorageHasherV6 */
export interface StorageHasherV6 extends StorageHasherV5 {}

/** @name StorageHasherV7 */
export interface StorageHasherV7 extends StorageHasherV6 {}

/** @name StorageHasherV8 */
export interface StorageHasherV8 extends StorageHasherV7 {}

/** @name StorageHasherV9 */
export interface StorageHasherV9 extends StorageHasherV8 {}

/** @name StorageMetadataLatest */
export interface StorageMetadataLatest extends StorageMetadataV11 {}

/** @name StorageMetadataV0 */
export interface StorageMetadataV0 extends Struct {
  readonly prefix: Text;
  readonly functions: Vec<StorageFunctionMetadataV0>;
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

/** @name StorageMetadataV7 */
export interface StorageMetadataV7 extends Struct {
  readonly prefix: Text;
  readonly items: Vec<StorageEntryMetadataV7>;
}

/** @name StorageMetadataV8 */
export interface StorageMetadataV8 extends StorageMetadataV7 {}

/** @name StorageMetadataV9 */
export interface StorageMetadataV9 extends StorageMetadataV8 {}

export type PHANTOM_METADATA = 'metadata';
