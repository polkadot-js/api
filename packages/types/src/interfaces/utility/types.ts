// Auto-generated via `yarn build:interfaces`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Result } from '@polkadot/types/codec';
import { Text, u32 } from '@polkadot/types/primitive';

/** Result<u32, Text> */
export interface DispatchResult extends Result<u32, Text> {
  /** Error:: (Text) */
  readonly isError: boolean;
  /** Text */
  readonly asError: Text;
  /** Ok:: (u32) */
  readonly isOk: boolean;
  /** u32 */
  readonly asOk: u32;
}

/** DispatchResult */
export interface DispatchResultOf extends DispatchResult {}
