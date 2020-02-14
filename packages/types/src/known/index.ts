// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { RuntimeVersion } from '../interfaces';
import { RegistryTypes } from '../types';
import { OverrideModuleType, OverrideVersionedType } from './types';

import { Text } from '@polkadot/types';
import { isUndefined } from '@polkadot/util';

import { TYPES_CHAIN, TYPES_META, TYPES_MODULES, TYPES_SPEC } from './overrides';

// flatten a VersionedType[] into a Record<string, string>
/** @internal */
function filterVersions (versions: OverrideVersionedType[] = [], version: number): RegistryTypes {
  return versions
    .filter(({ minmax: [min, max] }): boolean =>
      (isUndefined(min) || version >= min) &&
      (isUndefined(max) || version <= max)
    )
    .reduce((result: RegistryTypes, { types }): RegistryTypes => ({
      ...result,
      ...types
    }), {});
}

// based on the metadata version, return the registry types
/** @internal */
export function getMetadataTypes (version: number): RegistryTypes {
  return filterVersions(TYPES_META, version);
}

// based on the chain and runtimeVersion, get the applicable types (ready for registration)
/** @internal */
export function getChainTypes (chainName: Text, { specName, specVersion }: RuntimeVersion, typesChain: Record<string, RegistryTypes> = {}, typesSpec: Record<string, RegistryTypes> = {}): RegistryTypes {
  const _chainName = chainName.toString();
  const _specName = specName.toString();
  const _specVersion = specVersion.toNumber();

  return {
    ...filterVersions(TYPES_SPEC[_specName], _specVersion),
    ...filterVersions(TYPES_CHAIN[_chainName], _specVersion),
    ...(typesSpec[_specName] || {}),
    ...(typesChain[_chainName] || {})
  };
}

// get types for specific modules (metadata override)
/** @internal */
export function getModuleTypes (section: string): OverrideModuleType {
  return TYPES_MODULES[section] || {};
}
