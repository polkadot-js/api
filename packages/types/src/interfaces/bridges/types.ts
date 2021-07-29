// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Struct, U8aFixed, bool, u64 } from '@polkadot/types';
import type { AuthorityList, SetId } from '@polkadot/types/interfaces/grandpa';
import type { BlockNumber, H256, Header } from '@polkadot/types/interfaces/runtime';

/** @name BridgedBlockHash */
export interface BridgedBlockHash extends H256 {}

/** @name BridgedBlockNumber */
export interface BridgedBlockNumber extends BlockNumber {}

/** @name BridgedHeader */
export interface BridgedHeader extends Header {}

/** @name ChainId */
export interface ChainId extends Id {}

/** @name Id */
export interface Id extends U8aFixed {}

/** @name InitializationData */
export interface InitializationData extends Struct {
  readonly header: Header;
  readonly authorityList: AuthorityList;
  readonly setId: SetId;
  readonly isHalted: bool;
}

/** @name LaneId */
export interface LaneId extends Id {}

/** @name MessageKey */
export interface MessageKey extends Struct {
  readonly laneId: LaneId;
  readonly nonce: MessageNonce;
}

/** @name MessageNonce */
export interface MessageNonce extends u64 {}

export type PHANTOM_BRIDGES = 'bridges';
