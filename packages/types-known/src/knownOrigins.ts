// Copyright 2017-2021 @polkadot/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

// We want predictive ordering (manually managed)
/* eslint-disable sort-keys */

// Since we don't have insight into the origin specification, we can only define what we know about
// in a pure Substrate/Polkadot implementation, any other custom origins won't be handled at all
export const knownOrigins: Record<string, string> = {
  //
  // (1) Defaults from Substrate
  //
  Council: 'CollectiveOrigin',
  System: 'SystemOrigin',
  TechnicalCommittee: 'CollectiveOrigin',
  //
  // (2) Defaults from Polkadot
  //
  Xcm: 'XcmOrigin',
  XcmPallet: 'XcmOrigin',
  //
  // (3) Defaults from Acala
  //
  Authority: 'AuthorityOrigin',
  GeneralCouncil: 'CollectiveOrigin'
};
