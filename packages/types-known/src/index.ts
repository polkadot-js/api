// Copyright 2017-2020 @polkadot/types-known authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import type BN from 'bn.js';
import { DefinitionRpc, DefinitionRpcSub, Registry, RegistryTypes, OverrideModuleType, OverrideVersionedType } from '@polkadot/types/types';

import { Text } from '@polkadot/types';
import { bnToBn, isUndefined } from '@polkadot/util';

import typesChain from './chain';
import typesMeta from './metadata';
import typesModules from './modules';
import typesSpec from './spec';
import warnings from './warnings';

// flatten a VersionedType[] into a Record<string, string>
/** @internal */
function filterVersions (versions: OverrideVersionedType[] = [], specVersion: number): RegistryTypes {
  return versions
    .filter(({ minmax: [min, max] }) =>
      (isUndefined(min) || specVersion >= min) &&
      (isUndefined(max) || specVersion <= max)
    )
    .reduce((result: RegistryTypes, { types }): RegistryTypes => ({
      ...result,
      ...types
    }), {});
}

/**
 * @description Based on the metadata version, return the registry types
 */
export function getMetadataTypes (_registry: Registry, specVersion: number): RegistryTypes {
  return filterVersions(typesMeta, specVersion);
}

/**
 * @description Get types for specific modules (metadata override)
 */
export function getModuleTypes ({ knownTypes }: Registry, section: string): OverrideModuleType {
  return {
    ...(typesModules[section] || {}),
    ...(knownTypes.typesAlias?.[section] || {})
  };
}

/**
 * @description Based on the chain and runtimeVersion, get the applicable types (ready for registration)
 */
export function getSpecTypes ({ knownTypes }: Registry, chainName: Text | string, specName: Text | string, specVersion: BigInt | BN | number): RegistryTypes {
  const _chainName = chainName.toString();
  const _specName = specName.toString();
  const _specVersion = bnToBn(specVersion).toNumber();

  (warnings[_specName] || []).forEach((warning) => console.warn(`*** ${warning}`));

  return {
    ...filterVersions(typesSpec[_specName], _specVersion),
    ...filterVersions(typesChain[_chainName], _specVersion),
    ...filterVersions(knownTypes.typesBundle?.spec?.[_specName]?.types, _specVersion),
    ...filterVersions(knownTypes.typesBundle?.chain?.[_chainName]?.types, _specVersion),
    ...(knownTypes.typesSpec?.[_specName] || {}),
    ...(knownTypes.typesChain?.[_chainName] || {})
  };
}

/**
 * @description Based on the chain and runtimeVersion, get the applicable rpc definitions (ready for registration)
 */
export function getSpecRpc ({ knownTypes }: Registry, chainName: Text | string, specName: Text | string): Record<string, Record<string, DefinitionRpc | DefinitionRpcSub>> {
  const _chainName = chainName.toString();
  const _specName = specName.toString();

  return {
    ...(knownTypes.typesBundle?.spec?.[_specName]?.rpc || {}),
    ...(knownTypes.typesBundle?.chain?.[_chainName]?.rpc || {})
  };
}

/**
 * @description Based on the chain and runtimeVersion, get the applicable alias definitions (ready for registration)
 */
export function getSpecAlias ({ knownTypes }: Registry, chainName: Text | string, specName: Text | string): Record<string, OverrideModuleType> {
  const _chainName = chainName.toString();
  const _specName = specName.toString();

  return {
    ...(knownTypes.typesAlias || {}),
    ...(knownTypes.typesBundle?.spec?.[_specName]?.alias || {}),
    ...(knownTypes.typesBundle?.chain?.[_chainName]?.alias || {})
  };
}
