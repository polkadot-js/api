// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Compact, Enum, Null, Struct, U8aFixed, Vec, u16, u32 } from '@polkadot/types';
import type { PerU16 } from '@polkadot/types/interfaces/runtime';
import type { ITuple } from '@polkadot/types/types';

declare module '@polkadot/types/lookup' {

  /** @name PolkadotRuntimeCommonClaimsEthereumAddress (66) */
  export interface PolkadotRuntimeCommonClaimsEthereumAddress extends U8aFixed {}

  /** @name PolkadotRuntimeProxyType (72) */
  export interface PolkadotRuntimeProxyType extends Enum {
    readonly isAny: boolean;
    readonly isNonTransfer: boolean;
    readonly isGovernance: boolean;
    readonly isStaking: boolean;
    readonly isUnused4: boolean;
    readonly isIdentityJudgement: boolean;
    readonly isCancelProxy: boolean;
  }

  /** @name PolkadotRuntimeSessionKeys (139) */
  export interface PolkadotRuntimeSessionKeys extends Struct {
    readonly grandpa: SpFinalityGrandpaAppPublic;
    readonly babe: SpConsensusBabeAppPublic;
    readonly imOnline: PalletImOnlineSr25519AppSr25519Public;
    readonly paraValidator: PolkadotPrimitivesV0ValidatorAppPublic;
    readonly paraAssignment: PolkadotPrimitivesV1AssignmentAppPublic;
    readonly authorityDiscovery: SpAuthorityDiscoveryAppPublic;
  }

  /** @name PolkadotPrimitivesV0ValidatorAppPublic (140) */
  export interface PolkadotPrimitivesV0ValidatorAppPublic extends SpCoreSr25519Public {}

  /** @name PolkadotPrimitivesV1AssignmentAppPublic (141) */
  export interface PolkadotPrimitivesV1AssignmentAppPublic extends SpCoreSr25519Public {}

  /** @name PolkadotRuntimeCommonClaimsEcdsaSignature (175) */
  export interface PolkadotRuntimeCommonClaimsEcdsaSignature extends U8aFixed {}

  /** @name PolkadotRuntimeCommonClaimsStatementKind (180) */
  export interface PolkadotRuntimeCommonClaimsStatementKind extends Enum {
    readonly isRegular: boolean;
    readonly isSaft: boolean;
  }

  /** @name PolkadotRuntimeNposCompactSolution16 (233) */
  export interface PolkadotRuntimeNposCompactSolution16 extends Struct {
    readonly votes1: Vec<ITuple<[Compact<u32>, Compact<u16>]>>;
    readonly votes2: Vec<ITuple<[Compact<u32>, ITuple<[Compact<u16>, Compact<PerU16>]>, Compact<u16>]>>;
    readonly votes3: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes4: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes5: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes6: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes7: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes8: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes9: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes10: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes11: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes12: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes13: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes14: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes15: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes16: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
  }

  /** @name PolkadotRuntimeOriginCaller (290) */
  export interface PolkadotRuntimeOriginCaller extends Enum {
    readonly isSystem: boolean;
    readonly asSystem: FrameSystemRawOrigin;
    readonly isUnused1: boolean;
    readonly isUnused2: boolean;
    readonly isVoid: boolean;
    readonly isUnused4: boolean;
    readonly isUnused5: boolean;
    readonly isUnused6: boolean;
    readonly isUnused7: boolean;
    readonly isUnused8: boolean;
    readonly isUnused9: boolean;
    readonly isUnused10: boolean;
    readonly isUnused11: boolean;
    readonly isUnused12: boolean;
    readonly isUnused13: boolean;
    readonly isUnused14: boolean;
    readonly isCouncil: boolean;
    readonly asCouncil: PalletCollectiveRawOrigin;
    readonly isTechnicalCommittee: boolean;
    readonly asTechnicalCommittee: PalletCollectiveRawOrigin;
  }

  /** @name PolkadotRuntimeCommonClaimsPrevalidateAttests (441) */
  export type PolkadotRuntimeCommonClaimsPrevalidateAttests = Null;

  /** @name PolkadotRuntimeRuntime (442) */
  export type PolkadotRuntimeRuntime = Null;

}
