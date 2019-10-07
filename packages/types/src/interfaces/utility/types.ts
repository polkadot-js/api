// Auto-generated via `yarn build:interfaces`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Result } from '@polkadot/types/codec';
import { Null, Text } from '@polkadot/types/primitive';

/** Result<Null, Text> */
export interface DispatchResult extends Result<Null, Text> {
  /** Error:: (Text) */
  readonly isError: boolean;
  /** Text */
  readonly asError: Text;
  /** Ok::  */
  readonly isOk: boolean;
}

/** DispatchResult */
export interface DispatchResultOf extends DispatchResult {}
