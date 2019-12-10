// Auto-generated via `yarn build:interfaces`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Option, Raw, Struct, Vec } from '@polkadot/types/codec';
import { Text, bool, u32 } from '@polkadot/types/primitive';

/** Struct */
export interface AbiArg extends Struct {
  /** u32 */
  readonly name: u32;
}

/** Struct */
export interface AbiConstructor extends Struct {
  /** u32 */
  readonly name: u32;
  /** Raw */
  readonly selector: Raw;
  /** Vec<AbiArg> */
  readonly args: Vec<AbiArg>;
  /** Vec<Text> */
  readonly docs: Vec<Text>;
}

/** Struct */
export interface AbiContract extends Struct {
  /** u32 */
  readonly name: u32;
  /** Vec<AbiConstructor> */
  readonly constructors: Vec<AbiConstructor>;
  /** Vec<AbiMessage> */
  readonly messages: Vec<AbiMessage>;
  /** Vec<AbiEvent> */
  readonly events: Vec<AbiEvent>;
  /** Vec<Text> */
  readonly docs: Vec<Text>;
}

/** Struct */
export interface AbiDef extends Struct {
  /** AbiRegistry */
  readonly registry: AbiRegistry;
  /** AbiTypes */
  readonly types: AbiTypes;
  /** AbiStorage */
  readonly storage: AbiStorage;
  /** AbiContract */
  readonly contracts: AbiContract;
}

/** Struct */
export interface AbiEvent extends Struct {}

/** Struct */
export interface AbiMessage extends Struct {
  /** u32 */
  readonly name: u32;
  /** Raw */
  readonly selector: Raw;
  /** bool */
  readonly mutates: bool;
  /** Vec<AbiArg> */
  readonly args: Vec<AbiArg>;
  /** Option<AbiReturn> */
  readonly returnType: Option<AbiReturn>;
}

/** Struct */
export interface AbiRegistry extends Struct {
  /** Vec<Text> */
  readonly strings: Vec<Text>;
}

/** Struct */
export interface AbiReturn extends Struct {}

/** Struct */
export interface AbiStorage extends Struct {}

/** Struct */
export interface AbiTypes extends Struct {}
