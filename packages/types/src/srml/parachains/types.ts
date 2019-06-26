// Auto-generated, do not edit

import { Enum, Struct, Tuple, Vector } from '../../codec';
import { AccountId, Bytes, Hash, U32 } from '../../primitive';

export interface ParaId extends U32 {}

export interface ParaIdOf extends ParaId {}

export interface SubId extends U32 {}

export interface NewBidder extends Struct {
  readonly who: AccountId;
  readonly sub: SubId;
}

export interface Bidder extends Enum {
  readonly isNew: boolean;
  readonly isExisting: boolean;
}

export interface IncomingParachainDeploy extends Struct {
  readonly code: Bytes;
  readonly initialHeadData: Bytes;
}

export interface IncomingParachainFixed extends Struct {
  readonly codeHash: Hash;
  readonly initialHeadData: Bytes;
}

export interface IncomingParachain extends Enum {
  readonly isUnset: boolean;
  readonly isFixed: boolean;
  readonly isDeploy: boolean;
}

export interface WinningDataEntry extends Tuple {}

export interface WinningData extends Vector<WinningDataEntry> {}
