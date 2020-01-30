// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { ITuple } from '@polkadot/types/types';
import { Enum, Option, Struct, Vec } from '@polkadot/types/codec';
import { Bytes, Text, Type, bool, u16 } from '@polkadot/types/primitive';

/**
 * @name CallMetadataV0
 * @description extends [[Struct]]
 */
export interface CallMetadataV0 extends Struct {
  readonly name: Text;
  readonly functions: Vec<FunctionMetadataV0>;
}

/**
 * @name DoubleMapTypeLatest
 * @description extends [[DoubleMapTypeV10]]
 */
export interface DoubleMapTypeLatest extends DoubleMapTypeV10 {}

/**
 * @name DoubleMapTypeV10
 * @description extends [[Struct]]
 */
export interface DoubleMapTypeV10 extends Struct {
  readonly hasher: StorageHasherV10;
  readonly key1: Type;
  readonly key2: Type;
  readonly value: Type;
  readonly key2Hasher: StorageHasherV10;
}

/**
 * @name DoubleMapTypeV3
 * @description extends [[Struct]]
 */
export interface DoubleMapTypeV3 extends Struct {
  readonly key1: Type;
  readonly key2: Type;
  readonly value: Type;
  readonly key2Hasher: Text;
}

/**
 * @name DoubleMapTypeV4
 * @description extends [[Struct]]
 */
export interface DoubleMapTypeV4 extends Struct {
  readonly hasher: StorageHasherV4;
  readonly key1: Type;
  readonly key2: Type;
  readonly value: Type;
  readonly key2Hasher: Text;
}

/**
 * @name DoubleMapTypeV5
 * @description extends [[Struct]]
 */
export interface DoubleMapTypeV5 extends Struct {
  readonly hasher: StorageHasherV5;
  readonly key1: Type;
  readonly key2: Type;
  readonly value: Type;
  readonly key2Hasher: StorageHasherV5;
}

/**
 * @name DoubleMapTypeV6
 * @description extends [[DoubleMapTypeV5]]
 */
export interface DoubleMapTypeV6 extends DoubleMapTypeV5 {}

/**
 * @name DoubleMapTypeV7
 * @description extends [[DoubleMapTypeV6]]
 */
export interface DoubleMapTypeV7 extends DoubleMapTypeV6 {}

/**
 * @name DoubleMapTypeV8
 * @description extends [[DoubleMapTypeV7]]
 */
export interface DoubleMapTypeV8 extends DoubleMapTypeV7 {}

/**
 * @name DoubleMapTypeV9
 * @description extends [[DoubleMapTypeV8]]
 */
export interface DoubleMapTypeV9 extends DoubleMapTypeV8 {}

/**
 * @name ErrorMetadataV10
 * @description extends [[ErrorMetadataV9]]
 */
export interface ErrorMetadataV10 extends ErrorMetadataV9 {}

/**
 * @name ErrorMetadataV8
 * @description extends [[Struct]]
 */
export interface ErrorMetadataV8 extends Struct {
  readonly name: Text;
  readonly documentation: Vec<Text>;
}

/**
 * @name ErrorMetadataV9
 * @description extends [[ErrorMetadataV8]]
 */
export interface ErrorMetadataV9 extends ErrorMetadataV8 {}

/**
 * @name EventMetadataLatest
 * @description extends [[EventMetadataV10]]
 */
export interface EventMetadataLatest extends EventMetadataV10 {}

/**
 * @name EventMetadataV0
 * @description extends [[Struct]]
 */
export interface EventMetadataV0 extends Struct {
  readonly name: Text;
  readonly args: Vec<Type>;
  readonly documentation: Vec<Text>;
}

/**
 * @name EventMetadataV1
 * @description extends [[EventMetadataV0]]
 */
export interface EventMetadataV1 extends EventMetadataV0 {}

/**
 * @name EventMetadataV10
 * @description extends [[EventMetadataV9]]
 */
export interface EventMetadataV10 extends EventMetadataV9 {}

/**
 * @name EventMetadataV2
 * @description extends [[EventMetadataV1]]
 */
export interface EventMetadataV2 extends EventMetadataV1 {}

/**
 * @name EventMetadataV3
 * @description extends [[EventMetadataV2]]
 */
export interface EventMetadataV3 extends EventMetadataV2 {}

/**
 * @name EventMetadataV4
 * @description extends [[EventMetadataV3]]
 */
export interface EventMetadataV4 extends EventMetadataV3 {}

/**
 * @name EventMetadataV5
 * @description extends [[EventMetadataV4]]
 */
export interface EventMetadataV5 extends EventMetadataV4 {}

/**
 * @name EventMetadataV6
 * @description extends [[EventMetadataV5]]
 */
export interface EventMetadataV6 extends EventMetadataV5 {}

/**
 * @name EventMetadataV7
 * @description extends [[EventMetadataV6]]
 */
export interface EventMetadataV7 extends EventMetadataV6 {}

/**
 * @name EventMetadataV8
 * @description extends [[EventMetadataV7]]
 */
export interface EventMetadataV8 extends EventMetadataV7 {}

/**
 * @name EventMetadataV9
 * @description extends [[EventMetadataV8]]
 */
export interface EventMetadataV9 extends EventMetadataV8 {}

/**
 * @name FunctionArgumentMetadataLatest
 * @description extends [[FunctionArgumentMetadataV10]]
 */
export interface FunctionArgumentMetadataLatest extends FunctionArgumentMetadataV10 {}

/**
 * @name FunctionArgumentMetadataV0
 * @description extends [[Struct]]
 */
export interface FunctionArgumentMetadataV0 extends Struct {
  readonly name: Text;
  readonly type: Type;
}

/**
 * @name FunctionArgumentMetadataV1
 * @description extends [[FunctionArgumentMetadataV0]]
 */
export interface FunctionArgumentMetadataV1 extends FunctionArgumentMetadataV0 {}

/**
 * @name FunctionArgumentMetadataV10
 * @description extends [[FunctionArgumentMetadataV9]]
 */
export interface FunctionArgumentMetadataV10 extends FunctionArgumentMetadataV9 {}

/**
 * @name FunctionArgumentMetadataV2
 * @description extends [[FunctionArgumentMetadataV1]]
 */
export interface FunctionArgumentMetadataV2 extends FunctionArgumentMetadataV1 {}

/**
 * @name FunctionArgumentMetadataV3
 * @description extends [[FunctionArgumentMetadataV2]]
 */
export interface FunctionArgumentMetadataV3 extends FunctionArgumentMetadataV2 {}

/**
 * @name FunctionArgumentMetadataV4
 * @description extends [[FunctionArgumentMetadataV3]]
 */
export interface FunctionArgumentMetadataV4 extends FunctionArgumentMetadataV3 {}

/**
 * @name FunctionArgumentMetadataV5
 * @description extends [[FunctionArgumentMetadataV4]]
 */
export interface FunctionArgumentMetadataV5 extends FunctionArgumentMetadataV4 {}

/**
 * @name FunctionArgumentMetadataV6
 * @description extends [[FunctionArgumentMetadataV5]]
 */
export interface FunctionArgumentMetadataV6 extends FunctionArgumentMetadataV5 {}

/**
 * @name FunctionArgumentMetadataV7
 * @description extends [[FunctionArgumentMetadataV6]]
 */
export interface FunctionArgumentMetadataV7 extends FunctionArgumentMetadataV6 {}

/**
 * @name FunctionArgumentMetadataV8
 * @description extends [[FunctionArgumentMetadataV7]]
 */
export interface FunctionArgumentMetadataV8 extends FunctionArgumentMetadataV7 {}

/**
 * @name FunctionArgumentMetadataV9
 * @description extends [[FunctionArgumentMetadataV8]]
 */
export interface FunctionArgumentMetadataV9 extends FunctionArgumentMetadataV8 {}

/**
 * @name FunctionMetadataLatest
 * @description extends [[FunctionMetadataV10]]
 */
export interface FunctionMetadataLatest extends FunctionMetadataV10 {}

/**
 * @name FunctionMetadataV0
 * @description extends [[Struct]]
 */
export interface FunctionMetadataV0 extends Struct {
  readonly id: u16;
  readonly name: Text;
  readonly args: Vec<FunctionArgumentMetadataV0>;
  readonly documentation: Vec<Text>;
}

/**
 * @name FunctionMetadataV1
 * @description extends [[Struct]]
 */
export interface FunctionMetadataV1 extends Struct {
  readonly name: Text;
  readonly args: Vec<FunctionArgumentMetadataV1>;
  readonly documentation: Vec<Text>;
}

/**
 * @name FunctionMetadataV10
 * @description extends [[FunctionMetadataV9]]
 */
export interface FunctionMetadataV10 extends FunctionMetadataV9 {}

/**
 * @name FunctionMetadataV2
 * @description extends [[FunctionMetadataV1]]
 */
export interface FunctionMetadataV2 extends FunctionMetadataV1 {}

/**
 * @name FunctionMetadataV3
 * @description extends [[FunctionMetadataV2]]
 */
export interface FunctionMetadataV3 extends FunctionMetadataV2 {}

/**
 * @name FunctionMetadataV4
 * @description extends [[FunctionMetadataV3]]
 */
export interface FunctionMetadataV4 extends FunctionMetadataV3 {}

/**
 * @name FunctionMetadataV5
 * @description extends [[FunctionMetadataV4]]
 */
export interface FunctionMetadataV5 extends FunctionMetadataV4 {}

/**
 * @name FunctionMetadataV6
 * @description extends [[FunctionMetadataV5]]
 */
export interface FunctionMetadataV6 extends FunctionMetadataV5 {}

/**
 * @name FunctionMetadataV7
 * @description extends [[FunctionMetadataV6]]
 */
export interface FunctionMetadataV7 extends FunctionMetadataV6 {}

/**
 * @name FunctionMetadataV8
 * @description extends [[FunctionMetadataV7]]
 */
export interface FunctionMetadataV8 extends FunctionMetadataV7 {}

/**
 * @name FunctionMetadataV9
 * @description extends [[FunctionMetadataV8]]
 */
export interface FunctionMetadataV9 extends FunctionMetadataV8 {}

/**
 * @name MapTypeLatest
 * @description extends [[MapTypeV10]]
 */
export interface MapTypeLatest extends MapTypeV10 {}

/**
 * @name MapTypeV0
 * @description extends [[Struct]]
 */
export interface MapTypeV0 extends Struct {
  readonly key: Type;
  readonly value: Type;
}

/**
 * @name MapTypeV10
 * @description extends [[Struct]]
 */
export interface MapTypeV10 extends Struct {
  readonly hasher: StorageHasherV10;
  readonly key: Type;
  readonly value: Type;
  readonly linked: bool;
}

/**
 * @name MapTypeV2
 * @description extends [[Struct]]
 */
export interface MapTypeV2 extends Struct {
  readonly key: Type;
  readonly value: Type;
  readonly linked: bool;
}

/**
 * @name MapTypeV3
 * @description extends [[MapTypeV2]]
 */
export interface MapTypeV3 extends MapTypeV2 {}

/**
 * @name MapTypeV4
 * @description extends [[Struct]]
 */
export interface MapTypeV4 extends Struct {
  readonly hasher: StorageHasherV4;
  readonly key: Type;
  readonly value: Type;
  readonly linked: bool;
}

/**
 * @name MapTypeV5
 * @description extends [[MapTypeV4]]
 */
export interface MapTypeV5 extends MapTypeV4 {}

/**
 * @name MapTypeV6
 * @description extends [[MapTypeV5]]
 */
export interface MapTypeV6 extends MapTypeV5 {}

/**
 * @name MapTypeV7
 * @description extends [[MapTypeV6]]
 */
export interface MapTypeV7 extends MapTypeV6 {}

/**
 * @name MapTypeV8
 * @description extends [[MapTypeV7]]
 */
export interface MapTypeV8 extends MapTypeV7 {}

/**
 * @name MapTypeV9
 * @description extends [[MapTypeV8]]
 */
export interface MapTypeV9 extends MapTypeV8 {}

/**
 * @name MetadataAll
 * @description extends [[Enum]]
 */
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
}

/**
 * @name MetadataLatest
 * @description extends [[MetadataV10]]
 */
export interface MetadataLatest extends MetadataV10 {}

/**
 * @name MetadataV0
 * @description extends [[Struct]]
 */
export interface MetadataV0 extends Struct {
  readonly outerEvent: OuterEventMetadataV0;
  readonly modules: Vec<RuntimeModuleMetadataV0>;
  readonly outerDispatch: OuterDispatchMetadataV0;
}

/**
 * @name MetadataV1
 * @description extends [[Struct]]
 */
export interface MetadataV1 extends Struct {
  readonly modules: Vec<ModuleMetadataV1>;
}

/**
 * @name MetadataV10
 * @description extends [[Struct]]
 */
export interface MetadataV10 extends Struct {
  readonly modules: Vec<ModuleMetadataV10>;
}

/**
 * @name MetadataV2
 * @description extends [[Struct]]
 */
export interface MetadataV2 extends Struct {
  readonly modules: Vec<ModuleMetadataV2>;
}

/**
 * @name MetadataV3
 * @description extends [[Struct]]
 */
export interface MetadataV3 extends Struct {
  readonly modules: Vec<ModuleMetadataV3>;
}

/**
 * @name MetadataV4
 * @description extends [[Struct]]
 */
export interface MetadataV4 extends Struct {
  readonly modules: Vec<ModuleMetadataV4>;
}

/**
 * @name MetadataV5
 * @description extends [[Struct]]
 */
export interface MetadataV5 extends Struct {
  readonly modules: Vec<ModuleMetadataV5>;
}

/**
 * @name MetadataV6
 * @description extends [[Struct]]
 */
export interface MetadataV6 extends Struct {
  readonly modules: Vec<ModuleMetadataV6>;
}

/**
 * @name MetadataV7
 * @description extends [[Struct]]
 */
export interface MetadataV7 extends Struct {
  readonly modules: Vec<ModuleMetadataV7>;
}

/**
 * @name MetadataV8
 * @description extends [[Struct]]
 */
export interface MetadataV8 extends Struct {
  readonly modules: Vec<ModuleMetadataV8>;
}

/**
 * @name MetadataV9
 * @description extends [[MetadataV8]]
 */
export interface MetadataV9 extends MetadataV8 {}

/**
 * @name ModuleConstantMetadataLatest
 * @description extends [[ModuleConstantMetadataV10]]
 */
export interface ModuleConstantMetadataLatest extends ModuleConstantMetadataV10 {}

/**
 * @name ModuleConstantMetadataV10
 * @description extends [[ModuleConstantMetadataV9]]
 */
export interface ModuleConstantMetadataV10 extends ModuleConstantMetadataV9 {}

/**
 * @name ModuleConstantMetadataV6
 * @description extends [[Struct]]
 */
export interface ModuleConstantMetadataV6 extends Struct {
  readonly name: Text;
  readonly type: Type;
  readonly value: Bytes;
  readonly documentation: Vec<Text>;
}

/**
 * @name ModuleConstantMetadataV7
 * @description extends [[ModuleConstantMetadataV6]]
 */
export interface ModuleConstantMetadataV7 extends ModuleConstantMetadataV6 {}

/**
 * @name ModuleConstantMetadataV8
 * @description extends [[ModuleConstantMetadataV7]]
 */
export interface ModuleConstantMetadataV8 extends ModuleConstantMetadataV7 {}

/**
 * @name ModuleConstantMetadataV9
 * @description extends [[ModuleConstantMetadataV8]]
 */
export interface ModuleConstantMetadataV9 extends ModuleConstantMetadataV8 {}

/**
 * @name ModuleMetadataLatest
 * @description extends [[ModuleMetadataV10]]
 */
export interface ModuleMetadataLatest extends ModuleMetadataV10 {}

/**
 * @name ModuleMetadataV0
 * @description extends [[Struct]]
 */
export interface ModuleMetadataV0 extends Struct {
  readonly name: Text;
  readonly call: CallMetadataV0;
}

/**
 * @name ModuleMetadataV1
 * @description extends [[Struct]]
 */
export interface ModuleMetadataV1 extends Struct {
  readonly name: Text;
  readonly prefix: Text;
  readonly storage: Option<Vec<StorageFunctionMetadataV1>>;
  readonly calls: Option<Vec<FunctionMetadataV1>>;
  readonly events: Option<Vec<EventMetadataV1>>;
}

/**
 * @name ModuleMetadataV10
 * @description extends [[Struct]]
 */
export interface ModuleMetadataV10 extends Struct {
  readonly name: Text;
  readonly storage: Option<StorageMetadataV10>;
  readonly calls: Option<Vec<FunctionMetadataV10>>;
  readonly events: Option<Vec<EventMetadataV10>>;
  readonly constants: Vec<ModuleConstantMetadataV10>;
  readonly errors: Vec<ErrorMetadataV10>;
}

/**
 * @name ModuleMetadataV2
 * @description extends [[Struct]]
 */
export interface ModuleMetadataV2 extends Struct {
  readonly name: Text;
  readonly prefix: Text;
  readonly storage: Option<Vec<StorageFunctionMetadataV2>>;
  readonly calls: Option<Vec<FunctionMetadataV2>>;
  readonly events: Option<Vec<EventMetadataV2>>;
}

/**
 * @name ModuleMetadataV3
 * @description extends [[Struct]]
 */
export interface ModuleMetadataV3 extends Struct {
  readonly name: Text;
  readonly prefix: Text;
  readonly storage: Option<Vec<StorageFunctionMetadataV3>>;
  readonly calls: Option<Vec<FunctionMetadataV3>>;
  readonly events: Option<Vec<EventMetadataV3>>;
}

/**
 * @name ModuleMetadataV4
 * @description extends [[Struct]]
 */
export interface ModuleMetadataV4 extends Struct {
  readonly name: Text;
  readonly prefix: Text;
  readonly storage: Option<Vec<StorageFunctionMetadataV4>>;
  readonly calls: Option<Vec<FunctionMetadataV4>>;
  readonly events: Option<Vec<EventMetadataV4>>;
}

/**
 * @name ModuleMetadataV5
 * @description extends [[Struct]]
 */
export interface ModuleMetadataV5 extends Struct {
  readonly name: Text;
  readonly prefix: Text;
  readonly storage: Option<Vec<StorageFunctionMetadataV5>>;
  readonly calls: Option<Vec<FunctionMetadataV5>>;
  readonly events: Option<Vec<EventMetadataV5>>;
}

/**
 * @name ModuleMetadataV6
 * @description extends [[Struct]]
 */
export interface ModuleMetadataV6 extends Struct {
  readonly name: Text;
  readonly prefix: Text;
  readonly storage: Option<Vec<StorageEntryMetadataV6>>;
  readonly calls: Option<Vec<FunctionMetadataV6>>;
  readonly events: Option<Vec<EventMetadataV6>>;
  readonly constants: Vec<ModuleConstantMetadataV6>;
}

/**
 * @name ModuleMetadataV7
 * @description extends [[Struct]]
 */
export interface ModuleMetadataV7 extends Struct {
  readonly name: Text;
  readonly storage: Option<StorageMetadataV7>;
  readonly calls: Option<Vec<FunctionMetadataV7>>;
  readonly events: Option<Vec<EventMetadataV7>>;
  readonly constants: Vec<ModuleConstantMetadataV7>;
}

/**
 * @name ModuleMetadataV8
 * @description extends [[Struct]]
 */
export interface ModuleMetadataV8 extends Struct {
  readonly name: Text;
  readonly storage: Option<StorageMetadataV8>;
  readonly calls: Option<Vec<FunctionMetadataV8>>;
  readonly events: Option<Vec<EventMetadataV8>>;
  readonly constants: Vec<ModuleConstantMetadataV8>;
  readonly errors: Vec<ErrorMetadataV8>;
}

/**
 * @name ModuleMetadataV9
 * @description extends [[ModuleMetadataV8]]
 */
export interface ModuleMetadataV9 extends ModuleMetadataV8 {}

/**
 * @name OuterDispatchCallV0
 * @description extends [[Struct]]
 */
export interface OuterDispatchCallV0 extends Struct {
  readonly name: Text;
  readonly prefix: Text;
  readonly index: u16;
}

/**
 * @name OuterDispatchMetadataV0
 * @description extends [[Struct]]
 */
export interface OuterDispatchMetadataV0 extends Struct {
  readonly name: Text;
  readonly calls: Vec<OuterDispatchCallV0>;
}

/**
 * @name OuterEventEventMetadataEventsV0
 * @description extends [[Vec<EventMetadataV0>]]
 */
export interface OuterEventEventMetadataEventsV0 extends Vec<EventMetadataV0> {}

/**
 * @name OuterEventEventMetadataV0
 * @description extends [[ITuple<[Text, OuterEventEventMetadataEventsV0]>]]
 */
export interface OuterEventEventMetadataV0 extends ITuple<[Text, OuterEventEventMetadataEventsV0]> {}

/**
 * @name OuterEventMetadataV0
 * @description extends [[Struct]]
 */
export interface OuterEventMetadataV0 extends Struct {
  readonly name: Text;
  readonly events: Vec<OuterEventEventMetadataV0>;
}

/**
 * @name PlainTypeLatest
 * @description extends [[PlainTypeV10]]
 */
export interface PlainTypeLatest extends PlainTypeV10 {}

/**
 * @name PlainTypeV0
 * @description extends [[Type]]
 */
export interface PlainTypeV0 extends Type {}

/**
 * @name PlainTypeV10
 * @description extends [[Type]]
 */
export interface PlainTypeV10 extends Type {}

/**
 * @name PlainTypeV2
 * @description extends [[Type]]
 */
export interface PlainTypeV2 extends Type {}

/**
 * @name PlainTypeV3
 * @description extends [[Type]]
 */
export interface PlainTypeV3 extends Type {}

/**
 * @name PlainTypeV4
 * @description extends [[Type]]
 */
export interface PlainTypeV4 extends Type {}

/**
 * @name PlainTypeV5
 * @description extends [[Type]]
 */
export interface PlainTypeV5 extends Type {}

/**
 * @name PlainTypeV6
 * @description extends [[Type]]
 */
export interface PlainTypeV6 extends Type {}

/**
 * @name PlainTypeV7
 * @description extends [[Type]]
 */
export interface PlainTypeV7 extends Type {}

/**
 * @name PlainTypeV8
 * @description extends [[Type]]
 */
export interface PlainTypeV8 extends Type {}

/**
 * @name PlainTypeV9
 * @description extends [[Type]]
 */
export interface PlainTypeV9 extends Type {}

/**
 * @name RuntimeModuleMetadataV0
 * @description extends [[Struct]]
 */
export interface RuntimeModuleMetadataV0 extends Struct {
  readonly prefix: Text;
  readonly module: ModuleMetadataV0;
  readonly storage: Option<StorageMetadataV0>;
}

/**
 * @name StorageEntryMetadataLatest
 * @description extends [[StorageEntryMetadataV10]]
 */
export interface StorageEntryMetadataLatest extends StorageEntryMetadataV10 {}

/**
 * @name StorageEntryMetadataV10
 * @description extends [[Struct]]
 */
export interface StorageEntryMetadataV10 extends Struct {
  readonly name: Text;
  readonly modifier: StorageEntryModifierV10;
  readonly type: StorageEntryTypeV10;
  readonly fallback: Bytes;
  readonly documentation: Vec<Text>;
}

/**
 * @name StorageEntryMetadataV6
 * @description extends [[StorageFunctionMetadataV5]]
 */
export interface StorageEntryMetadataV6 extends StorageFunctionMetadataV5 {}

/**
 * @name StorageEntryMetadataV7
 * @description extends [[StorageEntryMetadataV6]]
 */
export interface StorageEntryMetadataV7 extends StorageEntryMetadataV6 {}

/**
 * @name StorageEntryMetadataV8
 * @description extends [[StorageEntryMetadataV7]]
 */
export interface StorageEntryMetadataV8 extends StorageEntryMetadataV7 {}

/**
 * @name StorageEntryMetadataV9
 * @description extends [[StorageEntryMetadataV8]]
 */
export interface StorageEntryMetadataV9 extends StorageEntryMetadataV8 {}

/**
 * @name StorageEntryModifierLatest
 * @description extends [[StorageEntryModifierV10]]
 */
export interface StorageEntryModifierLatest extends StorageEntryModifierV10 {}

/**
 * @name StorageEntryModifierV10
 * @description extends [[StorageEntryModifierV9]]
 */
export interface StorageEntryModifierV10 extends StorageEntryModifierV9 {}

/**
 * @name StorageEntryModifierV6
 * @description extends [[StorageFunctionModifierV5]]
 */
export interface StorageEntryModifierV6 extends StorageFunctionModifierV5 {}

/**
 * @name StorageEntryModifierV7
 * @description extends [[StorageEntryModifierV6]]
 */
export interface StorageEntryModifierV7 extends StorageEntryModifierV6 {}

/**
 * @name StorageEntryModifierV8
 * @description extends [[StorageEntryModifierV7]]
 */
export interface StorageEntryModifierV8 extends StorageEntryModifierV7 {}

/**
 * @name StorageEntryModifierV9
 * @description extends [[StorageEntryModifierV8]]
 */
export interface StorageEntryModifierV9 extends StorageEntryModifierV8 {}

/**
 * @name StorageEntryTypeLatest
 * @description extends [[StorageEntryTypeV10]]
 */
export interface StorageEntryTypeLatest extends StorageEntryTypeV10 {}

/**
 * @name StorageEntryTypeV10
 * @description extends [[Enum]]
 */
export interface StorageEntryTypeV10 extends Enum {
  readonly isPlain: boolean;
  readonly asPlain: PlainTypeV10;
  readonly isMap: boolean;
  readonly asMap: MapTypeV10;
  readonly isDoubleMap: boolean;
  readonly asDoubleMap: DoubleMapTypeV10;
}

/**
 * @name StorageEntryTypeV6
 * @description extends [[StorageFunctionTypeV5]]
 */
export interface StorageEntryTypeV6 extends StorageFunctionTypeV5 {}

/**
 * @name StorageEntryTypeV7
 * @description extends [[StorageEntryTypeV6]]
 */
export interface StorageEntryTypeV7 extends StorageEntryTypeV6 {}

/**
 * @name StorageEntryTypeV8
 * @description extends [[StorageEntryTypeV7]]
 */
export interface StorageEntryTypeV8 extends StorageEntryTypeV7 {}

/**
 * @name StorageEntryTypeV9
 * @description extends [[StorageEntryTypeV8]]
 */
export interface StorageEntryTypeV9 extends StorageEntryTypeV8 {}

/**
 * @name StorageFunctionMetadataV0
 * @description extends [[Struct]]
 */
export interface StorageFunctionMetadataV0 extends Struct {
  readonly name: Text;
  readonly modifier: StorageFunctionModifierV0;
  readonly type: StorageFunctionTypeV0;
  readonly fallback: Bytes;
  readonly documentation: Vec<Text>;
}

/**
 * @name StorageFunctionMetadataV1
 * @description extends [[StorageFunctionMetadataV0]]
 */
export interface StorageFunctionMetadataV1 extends StorageFunctionMetadataV0 {}

/**
 * @name StorageFunctionMetadataV2
 * @description extends [[Struct]]
 */
export interface StorageFunctionMetadataV2 extends Struct {
  readonly name: Text;
  readonly modifier: StorageFunctionModifierV2;
  readonly type: StorageFunctionTypeV2;
  readonly fallback: Bytes;
  readonly documentation: Vec<Text>;
}

/**
 * @name StorageFunctionMetadataV3
 * @description extends [[Struct]]
 */
export interface StorageFunctionMetadataV3 extends Struct {
  readonly name: Text;
  readonly modifier: StorageFunctionModifierV3;
  readonly type: StorageFunctionTypeV3;
  readonly fallback: Bytes;
  readonly documentation: Vec<Text>;
}

/**
 * @name StorageFunctionMetadataV4
 * @description extends [[Struct]]
 */
export interface StorageFunctionMetadataV4 extends Struct {
  readonly name: Text;
  readonly modifier: StorageFunctionModifierV4;
  readonly type: StorageFunctionTypeV4;
  readonly fallback: Bytes;
  readonly documentation: Vec<Text>;
}

/**
 * @name StorageFunctionMetadataV5
 * @description extends [[Struct]]
 */
export interface StorageFunctionMetadataV5 extends Struct {
  readonly name: Text;
  readonly modifier: StorageFunctionModifierV5;
  readonly type: StorageFunctionTypeV5;
  readonly fallback: Bytes;
  readonly documentation: Vec<Text>;
}

/**
 * @name StorageFunctionModifierV0
 * @description extends [[Enum]]
 */
export interface StorageFunctionModifierV0 extends Enum {
  readonly isOptional: boolean;
  readonly isDefault: boolean;
  readonly isRequired: boolean;
}

/**
 * @name StorageFunctionModifierV1
 * @description extends [[StorageFunctionModifierV0]]
 */
export interface StorageFunctionModifierV1 extends StorageFunctionModifierV0 {}

/**
 * @name StorageFunctionModifierV2
 * @description extends [[StorageFunctionModifierV1]]
 */
export interface StorageFunctionModifierV2 extends StorageFunctionModifierV1 {}

/**
 * @name StorageFunctionModifierV3
 * @description extends [[StorageFunctionModifierV2]]
 */
export interface StorageFunctionModifierV3 extends StorageFunctionModifierV2 {}

/**
 * @name StorageFunctionModifierV4
 * @description extends [[StorageFunctionModifierV3]]
 */
export interface StorageFunctionModifierV4 extends StorageFunctionModifierV3 {}

/**
 * @name StorageFunctionModifierV5
 * @description extends [[StorageFunctionModifierV4]]
 */
export interface StorageFunctionModifierV5 extends StorageFunctionModifierV4 {}

/**
 * @name StorageFunctionTypeV0
 * @description extends [[Enum]]
 */
export interface StorageFunctionTypeV0 extends Enum {
  readonly isPlain: boolean;
  readonly asPlain: PlainTypeV0;
  readonly isMap: boolean;
  readonly asMap: MapTypeV0;
}

/**
 * @name StorageFunctionTypeV1
 * @description extends [[StorageFunctionTypeV0]]
 */
export interface StorageFunctionTypeV1 extends StorageFunctionTypeV0 {}

/**
 * @name StorageFunctionTypeV2
 * @description extends [[Enum]]
 */
export interface StorageFunctionTypeV2 extends Enum {
  readonly isPlain: boolean;
  readonly asPlain: PlainTypeV2;
  readonly isMap: boolean;
  readonly asMap: MapTypeV2;
}

/**
 * @name StorageFunctionTypeV3
 * @description extends [[Enum]]
 */
export interface StorageFunctionTypeV3 extends Enum {
  readonly isPlain: boolean;
  readonly asPlain: PlainTypeV3;
  readonly isMap: boolean;
  readonly asMap: MapTypeV3;
  readonly isDoubleMap: boolean;
  readonly asDoubleMap: DoubleMapTypeV3;
}

/**
 * @name StorageFunctionTypeV4
 * @description extends [[Enum]]
 */
export interface StorageFunctionTypeV4 extends Enum {
  readonly isPlain: boolean;
  readonly asPlain: PlainTypeV4;
  readonly isMap: boolean;
  readonly asMap: MapTypeV4;
  readonly isDoubleMap: boolean;
  readonly asDoubleMap: DoubleMapTypeV4;
}

/**
 * @name StorageFunctionTypeV5
 * @description extends [[Enum]]
 */
export interface StorageFunctionTypeV5 extends Enum {
  readonly isPlain: boolean;
  readonly asPlain: PlainTypeV5;
  readonly isMap: boolean;
  readonly asMap: MapTypeV5;
  readonly isDoubleMap: boolean;
  readonly asDoubleMap: DoubleMapTypeV5;
}

/**
 * @name StorageHasher
 * @description extends [[StorageHasherV10]]
 */
export interface StorageHasher extends StorageHasherV10 {}

/**
 * @name StorageHasherV10
 * @description extends [[Enum]]
 */
export interface StorageHasherV10 extends Enum {
  readonly isBlake2128: boolean;
  readonly isBlake2256: boolean;
  readonly isBlake2128Concat: boolean;
  readonly isTwox128: boolean;
  readonly isTwox256: boolean;
  readonly isTwox64Concat: boolean;
}

/**
 * @name StorageHasherV4
 * @description extends [[Enum]]
 */
export interface StorageHasherV4 extends Enum {
  readonly isBlake2128: boolean;
  readonly isBlake2256: boolean;
  readonly isTwox128: boolean;
  readonly isTwox256: boolean;
  readonly isTwox64Concat: boolean;
  readonly isInvalidEntry: boolean;
}

/**
 * @name StorageHasherV5
 * @description extends [[StorageHasherV4]]
 */
export interface StorageHasherV5 extends StorageHasherV4 {}

/**
 * @name StorageHasherV6
 * @description extends [[StorageHasherV5]]
 */
export interface StorageHasherV6 extends StorageHasherV5 {}

/**
 * @name StorageHasherV7
 * @description extends [[StorageHasherV6]]
 */
export interface StorageHasherV7 extends StorageHasherV6 {}

/**
 * @name StorageHasherV8
 * @description extends [[StorageHasherV7]]
 */
export interface StorageHasherV8 extends StorageHasherV7 {}

/**
 * @name StorageHasherV9
 * @description extends [[StorageHasherV8]]
 */
export interface StorageHasherV9 extends StorageHasherV8 {}

/**
 * @name StorageMetadataLatest
 * @description extends [[StorageMetadataV10]]
 */
export interface StorageMetadataLatest extends StorageMetadataV10 {}

/**
 * @name StorageMetadataV0
 * @description extends [[Struct]]
 */
export interface StorageMetadataV0 extends Struct {
  readonly prefix: Text;
  readonly functions: Vec<StorageFunctionMetadataV0>;
}

/**
 * @name StorageMetadataV10
 * @description extends [[Struct]]
 */
export interface StorageMetadataV10 extends Struct {
  readonly prefix: Text;
  readonly items: Vec<StorageEntryMetadataV10>;
}

/**
 * @name StorageMetadataV7
 * @description extends [[Struct]]
 */
export interface StorageMetadataV7 extends Struct {
  readonly prefix: Text;
  readonly items: Vec<StorageEntryMetadataV7>;
}

/**
 * @name StorageMetadataV8
 * @description extends [[StorageMetadataV7]]
 */
export interface StorageMetadataV8 extends StorageMetadataV7 {}

/**
 * @name StorageMetadataV9
 * @description extends [[StorageMetadataV8]]
 */
export interface StorageMetadataV9 extends StorageMetadataV8 {}
