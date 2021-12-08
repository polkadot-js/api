// Copyright 2017-2021 @polkadot/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Text } from '@polkadot/types';
import type { ExtDef } from '@polkadot/types/extrinsic/signedExtensions/types';
import type { Hash } from '@polkadot/types/interfaces';
import type { ChainUpgradeVersion, CodecHasher, DefinitionRpc, DefinitionRpcSub, OverrideModuleType, OverrideVersionedType, Registry, RegistryTypes } from '@polkadot/types/types';
import type { BN } from '@polkadot/util';

import { bnToBn, isNull, isUndefined, objectSpread } from '@polkadot/util';

import typesChain from './chain';
import typesModules from './modules';
import typesSpec from './spec';
import upgrades from './upgrades';

export { knownOrigins } from './knownOrigins';
export { packageInfo } from './packageInfo';
export { mapXcmTypes } from './xcm';

function withNames <T> (chainName: Text | string, specName: Text | string, fn: (c: string, s: string) => T): T {
  return fn(chainName.toString(), specName.toString());
}

// flatten a VersionedType[] into a Record<string, string>
/** @internal */
function filterVersions (versions: OverrideVersionedType[] = [], specVersion: number): RegistryTypes {
  return versions
    .filter(({ minmax: [min, max] }) =>
      (isUndefined(min) || isNull(min) || specVersion >= min) &&
      (isUndefined(max) || isNull(max) || specVersion <= max)
    )
    .reduce((result: RegistryTypes, { types }): RegistryTypes =>
      objectSpread(result, types), {}
    );
}

/**
 * @description Get types for specific modules (metadata override)
 */
export function getModuleTypes ({ knownTypes }: Registry, section: string): OverrideModuleType {
  return objectSpread({}, typesModules[section], knownTypes.typesAlias?.[section]);
}

/**
 * @description Based on the chain and runtimeVersion, get the applicable signed extensions (ready for registration)
 */
export function getSpecExtensions ({ knownTypes }: Registry, chainName: Text | string, specName: Text | string): ExtDef {
  return withNames(chainName, specName, (chainName, specName) =>
    objectSpread({},
      knownTypes.typesBundle?.spec?.[specName]?.signedExtensions,
      knownTypes.typesBundle?.chain?.[chainName]?.signedExtensions
    )
  );
}

/**
 * @description Based on the chain and runtimeVersion, get the applicable types (ready for registration)
 */
export function getSpecTypes ({ knownTypes }: Registry, chainName: Text | string, specName: Text | string, specVersion: bigint | BN | number): RegistryTypes {
  const _specVersion = bnToBn(specVersion).toNumber();

  return withNames(chainName, specName, (chainName, specName) =>
    // The order here is always, based on -
    //   - spec then chain
    //   - typesBundle takes higher precedence
    //   - types is the final catch-all override
    objectSpread({},
      filterVersions(typesSpec[specName], _specVersion),
      filterVersions(typesChain[chainName], _specVersion),
      filterVersions(knownTypes.typesBundle?.spec?.[specName]?.types, _specVersion),
      filterVersions(knownTypes.typesBundle?.chain?.[chainName]?.types, _specVersion),
      knownTypes.typesSpec?.[specName],
      knownTypes.typesChain?.[chainName],
      knownTypes.types
    )
  );
}

export function getSpecHasher ({ knownTypes }: Registry, chainName: Text | string, specName: Text | string): CodecHasher | null {
  return withNames(chainName, specName, (chainName, specName) =>
    knownTypes.hasher || knownTypes.typesBundle?.chain?.[chainName]?.hasher || knownTypes.typesBundle?.spec?.[specName]?.hasher || null
  );
}

/**
 * @description Based on the chain and runtimeVersion, get the applicable rpc definitions (ready for registration)
 */
export function getSpecRpc ({ knownTypes }: Registry, chainName: Text | string, specName: Text | string): Record<string, Record<string, DefinitionRpc | DefinitionRpcSub>> {
  return withNames(chainName, specName, (chainName, specName) =>
    objectSpread({},
      knownTypes.typesBundle?.spec?.[specName]?.rpc,
      knownTypes.typesBundle?.chain?.[chainName]?.rpc
    )
  );
}

/**
 * @description Based on the chain and runtimeVersion, get the applicable alias definitions (ready for registration)
 */
export function getSpecAlias ({ knownTypes }: Registry, chainName: Text | string, specName: Text | string): Record<string, OverrideModuleType> {
  return withNames(chainName, specName, (chainName, specName) =>
    // as per versions, first spec, then chain then finally non-versioned
    objectSpread({},
      knownTypes.typesBundle?.spec?.[specName]?.alias,
      knownTypes.typesBundle?.chain?.[chainName]?.alias,
      knownTypes.typesAlias
    )
  );
}

/**
 * @description Returns a version record for known chains where upgrades are being tracked
 */
export function getUpgradeVersion (genesisHash: Hash, blockNumber: BN): [ChainUpgradeVersion | undefined, ChainUpgradeVersion | undefined] {
  const known = upgrades.find((u) => genesisHash.eq(u.genesisHash));

  return known
    ? [
      known.versions.reduce<ChainUpgradeVersion | undefined>((last, version) => {
        return blockNumber.gt(version.blockNumber)
          ? version
          : last;
      }, undefined),
      known.versions.find((version) => blockNumber.lte(version.blockNumber))
    ]
    : [undefined, undefined];
}
