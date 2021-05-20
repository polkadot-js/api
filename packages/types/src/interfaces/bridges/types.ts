// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Struct, bool } from '@polkadot/types';
import type { AuthorityList, SetId } from '@polkadot/types/interfaces/grandpa';
import type { BlockNumber, H256, Header } from '@polkadot/types/interfaces/runtime';

/** @name BridgedBlockHash */
export interface BridgedBlockHash extends H256 {}

/** @name BridgedBlockNumber */
export interface BridgedBlockNumber extends BlockNumber {}

/** @name BridgedHeader */
export interface BridgedHeader extends Header {}

/** @name InitializationData */
export interface InitializationData extends Struct {
  readonly header: Header;
  readonly authorityList: AuthorityList;
  readonly setId: SetId;
  readonly isHalted: bool;
}

export type PHANTOM_BRIDGES = 'bridges';
