// Auto-generated via `yarn build:interfaces`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Enum } from '@polkadot/types/codec';
import { Text } from '@polkadot/types/primitive';

/** Enum */
export interface DispatchResult extends Enum {
  /** 0:: Ok */
  readonly isOk: boolean;
  /** 1:: Error(Text) */
  readonly isError: boolean;
  /** Text */
  readonly asError: Text;
}
