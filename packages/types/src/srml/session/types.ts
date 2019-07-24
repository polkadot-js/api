/* eslint-disable @typescript-eslint/no-empty-interface */
// Auto-generated via `yarn build:srmlTs`, do not edit

import { Struct, Vector } from '../../codec';
import { u32 } from '../../primitive';
import { SessionKeys } from '../runtime/types';

export interface EraRewards extends Struct {
  readonly total: u32;
  readonly rewards: Vector<u32>;
}

export interface Keys extends SessionKeys {}

export interface KeyTypeId extends u32 {}

export interface SessionIndex extends u32 {}
