// Auto-generated via `yarn build:interfaces`, do not edit

import { Enum } from '../../codec';
import { RawAuraPreDigest } from '../aura';
import { RawBabePreDigest } from '../babe';

/** Enum */
export interface RawAuraBorosPreDigest extends Enum {
  /** 0:: Aura(RawAuraPreDigest) */
  readonly isAura: boolean;
  /** RawAuraPreDigest */
  readonly asAura: RawAuraPreDigest;
  /** 1:: Babe(RawBabePreDigest) */
  readonly isBabe: boolean;
  /** RawBabePreDigest */
  readonly asBabe: RawBabePreDigest;
}
