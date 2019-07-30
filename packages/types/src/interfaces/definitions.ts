// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

// NOTE The order here is NOT alphabetical, rather it is setup so that lower
// layers can re-use types from higher layers as this is being injected. The
// injection order is critical.

// runtime before everything else, these are base definitions
export { default as runtime } from './runtime/definitions';

// consensus before grandpa, imOnline
export { default as consensus } from './consensus/definitions';

// session before imOnline
export { default as session } from './session/definitions';

// grandpa before parachains
export { default as grandpa } from './grandpa/definitions';

// elections before democracy
export { default as elections } from './elections/definitions';

// remaining, alphabetical odering
export { default as authorship } from './authorship/definitions';
export { default as babe } from './babe/definitions';
export { default as balances } from './balances/definitions';
export { default as collective } from './collective/definitions';
export { default as contracts } from './contracts/definitions';
export { default as democracy } from './democracy/definitions';
export { default as deprecated } from './deprecated/definitions';
export { default as genericAsset } from './genericAsset/definitions';
export { default as imOnline } from './imOnline/definitions';
export { default as parachains } from './parachains/definitions';
export { default as staking } from './staking/definitions';
export { default as system } from './system/definitions';
export { default as treasury } from './treasury/definitions';

// pull in rpc last, assuming that is uses info from above
export { default as rpc } from './rpc/definitions';
