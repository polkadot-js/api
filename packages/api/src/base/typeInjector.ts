// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { RuntimeVersion } from '@polkadot/types/interfaces';
import { RegistryTypes } from '@polkadot/types/types';

import { Text } from '@polkadot/types';
import { isUndefined } from '@polkadot/util';

interface VersionedType {
  minmax: [number?, number?]; // min (v >= min) and max (v <= max)
  types: Record<string, string>;
}

// these are override types for polkadot chains
// NOTE The SessionKeys definition for Polkadot and Substrate (OpaqueKeys
// implementation) are different. Detect Polkadot and inject the `Keys`
// definition as applicable. (3 keys in substrate vs 4 in Polkadot).
const TYPES_POLKADOT_VERSIONED: VersionedType[] = [
  {
    minmax: [0, undefined],
    types: {
      Keys: 'SessionKeysPolkadot'
    }
  }
];

// Type overrides based on specific nodes
const TYPES_CHAIN: Record<string, VersionedType[]> = {};

// Type overrides based on  metadata versions
const TYPES_META: VersionedType[] = [
  {
    // NOTE this is for support of old, e.g. Alex, old metadata and BlockNumber/Index
    // This is detected based on metadata version, since this is what we have up-front
    //   v3 = Alex
    //   v4 = v1.0 branch
    minmax: [0, 4],
    types: {
      BlockNumber: 'u64',
      Index: 'u64',
      EventRecord: 'EventRecord0to76',
      ValidatorPrefs: 'ValidatorPrefs0to145'
    }
  }
];

// Type overrides for specific spec types & versions as given in runtimeVersion
const TYPES_SPEC: Record<string, VersionedType[]> = {
  kusama: TYPES_POLKADOT_VERSIONED,
  polkadot: TYPES_POLKADOT_VERSIONED
};

// flatten a VersionedType[] into a Record<string, string>
function filterVersions (versions: VersionedType[], version: number): Record<string, string> {
  return versions
    .filter(({ minmax: [min, max] }): boolean =>
      (isUndefined(min) || version >= min) &&
      (isUndefined(max) || version <= max)
    )
    .reduce((result: Record<string, string>, { types }): Record<string, string> => ({
      ...result,
      ...types
    }), {});
}

// based on the metadata version, return the registry types
export function getMetadataTypes (version: number): RegistryTypes {
  return filterVersions(TYPES_META, version);
}

// based on the chain and runtimeVersion, get the applicable types (ready for registration)
export function getChainTypes (chainName: Text, { specName, specVersion }: RuntimeVersion, typesChain: Record<string, RegistryTypes> = {}, typesSpec: Record<string, RegistryTypes> = {}): RegistryTypes {
  const _chainName = chainName.toString();
  const _specName = specName.toString();
  const _specVersion = specVersion.toNumber()

  return {
    ...filterVersions(TYPES_SPEC[_specName], _specVersion),
    ...filterVersions(TYPES_CHAIN[_chainName], _specVersion),
    ...(typesSpec[_specName] || {}),
    ...(typesChain[_chainName] || {})
  };
}
