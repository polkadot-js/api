// Copyright 2017-2020 @polkadot/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type BN from 'bn.js';
import type { Text } from '@polkadot/types';
import type { Hash } from '@polkadot/types/interfaces';
import type { ChainUpgradeVersion, DefinitionRpc, DefinitionRpcSub, OverrideModuleType, OverrideVersionedType, Registry, RegistryTypes } from '@polkadot/types/types';

import { bnToBn, isUndefined } from '@polkadot/util';

import typesChain from './chain';
import typesModules from './modules';
import typesSpec from './spec';
import upgrades from './upgrades';

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

  // The order here is always, based on -
  //   - spec then chain
  //   - typesBundle takes higher precedence
  //   - types is the final catch-all override
  return {
    ...filterVersions(typesSpec[_specName], _specVersion),
    ...filterVersions(typesChain[_chainName], _specVersion),
    ...filterVersions(knownTypes.typesBundle?.spec?.[_specName]?.types, _specVersion),
    ...filterVersions(knownTypes.typesBundle?.chain?.[_chainName]?.types, _specVersion),
    ...(knownTypes.typesSpec?.[_specName] || {}),
    ...(knownTypes.typesChain?.[_chainName] || {}),
    ...(knownTypes.types || {})
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

  // as per versions, first spec, then chain then finally non-versioned
  return {
    ...(knownTypes.typesBundle?.spec?.[_specName]?.alias || {}),
    ...(knownTypes.typesBundle?.chain?.[_chainName]?.alias || {}),
    ...(knownTypes.typesAlias || {})
  };
}

/**
 * @description Returns a version record for known chains where upgrades are being tracked
 */
export function getUpgradeVersion (genesisHash: Hash, blockNumber: BN): [ChainUpgradeVersion | undefined, ChainUpgradeVersion | undefined] {
  const known = upgrades.find((u) => genesisHash.eq(u.genesisHash));

  return known
    ? [
      known.versions.reduce((last: ChainUpgradeVersion | undefined, version): ChainUpgradeVersion | undefined => {
        return blockNumber.gt(version.blockNumber)
          ? version
          : last;
      }, undefined),
      known.versions.find((version) => blockNumber.lte(version.blockNumber))
    ]
    : [undefined, undefined];
}
