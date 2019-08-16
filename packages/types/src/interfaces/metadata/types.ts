// Auto-generated via `yarn build:interfaces`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Struct, Vec } from '../../codec';
import { Bytes, StorageHasher, Text, Type, u16 } from '../../primitive';

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
