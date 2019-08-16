// Auto-generated via `yarn build:interfaces`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Struct, Vec } from '../../codec';
import { Text, Type, u16 } from '../../primitive';

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
