// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Enum, Option, Result, Struct, Vec } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { Pays, Weight } from '@polkadot/types/interfaces/runtime';
import type { DispatchError, Event } from '@polkadot/types/interfaces/system';
import type { Outcome } from '@polkadot/types/interfaces/xcm';

/** @name CallDryRunEffects */
export interface CallDryRunEffects extends Struct {
  readonly executionResult: DispatchResultWithPostInfo;
  readonly emittedEvents: Vec<Event>;
  readonly localXcm: Option<XcmVersionedXcm>;
  readonly forwardedXcms: Vec<ITuple<[XcmVersionedLocation, Vec<XcmVersionedXcm>]>>;
}

/** @name DispatchResultWithPostInfo */
export interface DispatchResultWithPostInfo extends Result<PostDispatchInfo, DispatchError> {
  readonly isErr: boolean;
  readonly asErr: DispatchError;
  readonly isOk: boolean;
  readonly asOk: PostDispatchInfo;
}

/** @name PostDispatchInfo */
export interface PostDispatchInfo extends Struct {
  readonly actualWeight: Option<Weight>;
  readonly paysFee: Pays;
}

/** @name XcmDryRunApiError */
export interface XcmDryRunApiError extends Enum {
  readonly isUnimplemented: boolean;
  readonly isVersionedConversionFailed: boolean;
  readonly type: 'Unimplemented' | 'VersionedConversionFailed';
}

/** @name XcmDryRunEffects */
export interface XcmDryRunEffects extends Struct {
  readonly executionResult: Outcome;
  readonly emittedEvents: Vec<Event>;
  readonly forwardedXcms: Vec<ITuple<[XcmVersionedLocation, Vec<XcmVersionedXcm>]>>;
}

export type PHANTOM_XCMDRYRUNAPI = 'xcmDryRunApi';
