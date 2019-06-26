// Auto-generated, do not edit

import { Enum, Struct, Tuple, Vector } from '../../codec';
import { AccountId, Bytes, Hash, U32 } from '../../primitive';

export interface AuctionIndex extends U32 {}

export interface ParaId extends U32 {}

export interface ParaIdOf extends ParaId {}

export interface SubId extends U32 {}

export interface NewBidder extends Struct {
  readonly who: AccountId;
  readonly sub: SubId;
}

export interface Bidder extends Enum {
  /**
   * @description 0:: New(NewBidder)
   */
  readonly isNew: boolean;
  readonly asNew: NewBidder;
  /**
   * @description 1:: Existing(ParaId)
   */
  readonly isExisting: boolean;
  readonly asExisting: ParaId;
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
  /**
   * @description 0:: Unset(NewBidder)
   */
  readonly isUnset: boolean;
  readonly asUnset: NewBidder;
  /**
   * @description 1:: Fixed(IncomingParachainFixed)
   */
  readonly isFixed: boolean;
  readonly asFixed: IncomingParachainFixed;
  /**
   * @description 2:: Deploy(IncomingParachainDeploy)
   */
  readonly isDeploy: boolean;
  readonly asDeploy: IncomingParachainDeploy;
}

export interface ParachainDispatchOrigin extends Enum {
  /**
   * @description 0:: Signed
   */
  readonly isSigned: boolean;
  /**
   * @description 1:: Parachain
   */
  readonly isParachain: boolean;
}

export interface SlotRange extends Enum {
  /**
   * @description 0:: ZeroZero
   */
  readonly isZeroZero: boolean;
  /**
   * @description 1:: ZeroOne
   */
  readonly isZeroOne: boolean;
  /**
   * @description 2:: ZeroTwo
   */
  readonly isZeroTwo: boolean;
  /**
   * @description 3:: ZeroThree
   */
  readonly isZeroThree: boolean;
  /**
   * @description 4:: OneOne
   */
  readonly isOneOne: boolean;
  /**
   * @description 5:: OneTwo
   */
  readonly isOneTwo: boolean;
  /**
   * @description 6:: OneThree
   */
  readonly isOneThree: boolean;
  /**
   * @description 7:: TwoTwo
   */
  readonly isTwoTwo: boolean;
  /**
   * @description 8:: TwoThree
   */
  readonly isTwoThree: boolean;
  /**
   * @description 9:: ThreeThree
   */
  readonly isThreeThree: boolean;
}

export interface UpwardMessage extends Struct {
  readonly origin: ParachainDispatchOrigin;
  readonly data: Bytes;
}

export interface WinningDataEntry extends Tuple {}

export interface WinningData extends Vector<WinningDataEntry> {}
