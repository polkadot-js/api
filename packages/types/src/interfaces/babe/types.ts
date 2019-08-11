// Auto-generated via `yarn build:interfaces`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Struct } from '../../codec';
import { H256, u32, u64 } from '../../primitive';

/** u64 */
export type BabeWeight = u64;

/** Struct */
export interface RawBabePreDigest extends Struct {
  /** SlotNumber */
  readonly slotNumber: SlotNumber;
  /** u32 */
  readonly authorityIndex: u32;
  /** H256 */
  readonly vrfOutput: H256;
  /** H256 */
  readonly vrfProof: H256;
}

/** u64 */
export type SlotNumber = u64;
