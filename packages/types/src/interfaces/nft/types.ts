import type { Struct, u32, Enum, u8 } from '@polkadot/types';

/** @name TokenId */
export interface TokenId extends u32 {}

/** @name Rarity */
export interface Rarity extends Enum {
  readonly Common;
  readonly Uncommon;
  readonly Rare;
  readonly Mythical;
  readonly Legendary;
}

/** @name Socket */
export interface Socket extends Enum {
  readonly Head;
  readonly Body;
  readonly LegLeft;
  readonly LegRight;
  readonly ArmLeft;
  readonly ArmRight;
  readonly Weapon;
}

/** @name Params */
export interface Params extends Struct {
  readonly strength: u8;
  readonly agility: u8;
  readonly intelligence: u8;
}

/** @name Token */
export interface Token extends Struct {
    readonly rarity: Rarity;
    readonly socket: Socket;
    readonly params: Params;
  }