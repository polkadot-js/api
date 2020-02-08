// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { OverrideModuleType, OverrideVersionedType } from './types';

// type overrides for modules (where duplication between modules exist)
const TYPES_MODULES: Record<string, OverrideModuleType> = {
  contracts: {
    StorageKey: 'ContractStorageKey'
  },
  identity: {
    Judgement: 'IdentityJudgement'
  },
  parachains: {
    Id: 'ParaId'
  },
  society: {
    Judgement: 'SocietyJudgement',
    Vote: 'SocietyVote'
  },
  treasury: {
    Proposal: 'TreasuryProposal'
  }
};

// these are override types for Polkadot & Kusama chains
// NOTE The SessionKeys definition for Polkadot and Substrate (OpaqueKeys
// implementation) are different. Detect Polkadot and inject the `Keys`
// definition as applicable. (4 keys in substrate vs 5 in Polkadot/CC3).
const TYPES_POLKADOT_VERSIONED: OverrideVersionedType[] = [
  {
    minmax: [1000, undefined], // from launch
    types: {
      Keys: 'SessionKeys5'
    }
  }
];

const TYPES_KUSAMA_VERSIONED: OverrideVersionedType[] = [
  {
    minmax: [1019, 1031],
    types: {
      BalanceLock: 'BalanceLockTo212',
      DispatchError: 'DispatchErrorTo198',
      Keys: 'SessionKeys5',
      LookupSource: 'Address',
      SlashingSpans: 'SlashingSpansTo204'
    }
  },
  {
    minmax: [1032, 1042],
    types: {
      BalanceLock: 'BalanceLockTo212',
      Keys: 'SessionKeys5',
      LookupSource: 'Address',
      SlashingSpans: 'SlashingSpansTo204'
    }
  },
  {
    minmax: [1043, 1045],
    types: {
      BalanceLock: 'BalanceLockTo212',
      Keys: 'SessionKeys5',
      LookupSource: 'Address'
    }
  },
  {
    minmax: [1046, undefined],
    types: {
      Keys: 'SessionKeys5',
      LookupSource: 'AccountId'
    }
  }
];

// Type overrides based on specific nodes
const TYPES_CHAIN: Record<string, OverrideVersionedType[]> = {};

// Type overrides based on  metadata versions
const TYPES_META: OverrideVersionedType[] = [
  {
    // NOTE this is for support of old, e.g. Alex, old metadata and BlockNumber/Index
    // This is detected based on metadata version, since this is what we have up-front
    //   v3 = Alex
    //   v4 = v1.0 branch
    minmax: [0, 4],
    types: {
      BlockNumber: 'u64',
      Index: 'u64',
      EventRecord: 'EventRecordTo76',
      ValidatorPrefs: 'ValidatorPrefsTo145'
    }
  }
];

// Type overrides for specific spec types & versions as given in runtimeVersion
const TYPES_SPEC: Record<string, OverrideVersionedType[]> = {
  kusama: TYPES_KUSAMA_VERSIONED,
  polkadot: TYPES_POLKADOT_VERSIONED
};

export { TYPES_CHAIN, TYPES_META, TYPES_MODULES, TYPES_SPEC };
