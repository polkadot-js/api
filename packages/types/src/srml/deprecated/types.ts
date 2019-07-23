/* eslint-disable @typescript-eslint/no-empty-interface */
// Auto-generated via `yarn build:srmlTs`, do not edit

import { Codec } from '../../types';
import { AccountId, i8, u32 } from '../../primitive';

export interface AssetOf extends u32 {}

type _InherentOfflineReport = [];
export interface InherentOfflineReport extends Codec, _InherentOfflineReport {}

export interface LockPeriods extends i8 {}

export interface SessionKey extends AccountId {}
