// Copyright 2017-2025 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ExtrinsicMetadataV15, ExtrinsicMetadataV16, ItemDeprecationInfoV16, MetadataV15, MetadataV16, PalletAssociatedTypeMetadataV16, PalletCallMetadataV14, PalletCallMetadataV16, PalletConstantMetadataV14, PalletConstantMetadataV16, PalletErrorMetadataV14, PalletErrorMetadataV16, PalletEventMetadataV14, PalletEventMetadataV16, PalletMetadataV15, PalletMetadataV16, PalletStorageMetadataV14, PalletStorageMetadataV16, RuntimeApiMetadataV15, RuntimeApiMetadataV16, StorageEntryMetadataV16, TransactionExtensionMetadataV16 } from '../../interfaces/metadata/index.js';
import type { Registry } from '../../types/index.js';

import { type Vec } from '@polkadot/types-codec';
import { objectSpread } from '@polkadot/util';

function palletsFromV15 (registry: Registry, palletV15: PalletMetadataV15): PalletMetadataV16 {
  const deprecationInfo: ItemDeprecationInfoV16 = registry.createTypeUnsafe('ItemDeprecationInfoV16', ['NotDeprecated']);
  const associatedTypes: Vec<PalletAssociatedTypeMetadataV16> = registry.createTypeUnsafe('Vec<PalletAssociatedTypeMetadataV16>',[[]]);
  const viewFunctions: Vec<PalletAssociatedTypeMetadataV16> = registry.createTypeUnsafe('Vec<PalletViewFunctionMetadataV16>',[[]]);

  return registry.createTypeUnsafe('PalletMetadataV16', [
    objectSpread({}, palletV15, {
      associatedTypes,
      calls: palletV15.calls.isSome ? convertCalls(registry, palletV15.calls.unwrap()) : null,
      constants: convertConstants(registry, palletV15.constants),
      deprecationInfo,
      errors: palletV15.errors.isSome ? converErrors(registry, palletV15.errors.unwrap()) : null,
      events: palletV15.events.isSome ? convertEvents(registry, palletV15.events.unwrap()) : null,
      storage: palletV15.storage.isSome ? convertStorage(registry, palletV15.storage.unwrap()) : null,
      viewFunctions
    })
  ]);
}

function convertStorage (registry: Registry, storage: PalletStorageMetadataV14): PalletStorageMetadataV16 {
  const deprecationInfo: ItemDeprecationInfoV16 = registry.createTypeUnsafe('ItemDeprecationInfoV16', ['NotDeprecated']);

  const items: StorageEntryMetadataV16[] = storage.items.map((item) =>
    registry.createTypeUnsafe('StorageEntryMetadataV16', [
      objectSpread({}, item, { deprecationInfo })
    ])
  );

  return registry.createTypeUnsafe('PalletStorageMetadataV16', [{
    items: registry.createTypeUnsafe('Vec<StorageEntryMetadataV16>', [items]),
    prefix: storage.prefix
  }]);
}

function convertCalls (registry: Registry, calls: PalletCallMetadataV14): PalletCallMetadataV16 {
  const deprecationInfo = registry.createTypeUnsafe('EnumDeprecationInfoV16', []);

  return registry.createTypeUnsafe('PalletCallMetadataV16', [{
    deprecationInfo,
    type: calls.type
  }]);
}

function convertEvents (registry: Registry, events: PalletEventMetadataV14): PalletEventMetadataV16 {
  const deprecationInfo = registry.createTypeUnsafe('EnumDeprecationInfoV16', []);

  return registry.createTypeUnsafe('PalletEventMetadataV16', [{
    deprecationInfo,
    type: events.type
  }]);
}

function convertConstants (registry: Registry, constants: Vec<PalletConstantMetadataV14>): Vec<PalletConstantMetadataV16> {
  const deprecationInfo: ItemDeprecationInfoV16 = registry.createTypeUnsafe('ItemDeprecationInfoV16', ['NotDeprecated']);

  return registry.createTypeUnsafe('Vec<PalletConstantMetadataV16>', [
    constants.map((constant) => registry.createTypeUnsafe('PalletConstantMetadataV16', [
      objectSpread({}, constant, { deprecationInfo })
    ]))]
  );
}

function converErrors (registry: Registry, errors: PalletErrorMetadataV14): PalletErrorMetadataV16 {
  const deprecationInfo = registry.createTypeUnsafe('EnumDeprecationInfoV16', []);

  return registry.createTypeUnsafe('PalletErrorMetadataV16', [{
    deprecationInfo,
    type: errors.type
  }]);
}

function extrinsicFromV15 (registry: Registry, extrinsicV15: ExtrinsicMetadataV15): ExtrinsicMetadataV16 {
  const transactionExtensions: TransactionExtensionMetadataV16[] = extrinsicV15.signedExtensions.map(({ additionalSigned, identifier, type }) =>
    registry.createTypeUnsafe('TransactionExtensionMetadataV16', [{
      identifier,
      implict: additionalSigned,
      type
    }])
  );

  const indexes = transactionExtensions.map((_, i) =>
    registry.createTypeUnsafe('Compact<u32>', [i])
  );

  const transactionExtensionsByVersion = registry.createTypeUnsafe(
    'BTreeMap<u8, Vec<Compact<u32>>>',
    [new Map([[registry.createTypeUnsafe('u8', [extrinsicV15.version]), registry.createTypeUnsafe('Vec<Compact<u32>>', [indexes])]])]
  );

  return registry.createTypeUnsafe('ExtrinsicMetadataV16', [
    {
      addressType: extrinsicV15.addressType,
      callType: extrinsicV15.callType,
      signatureType: extrinsicV15.signatureType,
      transactionExtensions,
      transactionExtensionsByVersion,
      versions: [extrinsicV15.version]
    }
  ]);
}

function apisFromV15 (registry: Registry, runtimeApiV15: RuntimeApiMetadataV15): RuntimeApiMetadataV16 {
  const deprecationInfo = registry.createTypeUnsafe('ItemDeprecationInfoV16', ['NotDeprecated']);

  const methods = runtimeApiV15.methods.map((method) =>
    registry.createTypeUnsafe('RuntimeApiMethodMetadataV16',
      [objectSpread({}, method, { deprecationInfo })]
    )
  );

  return registry.createTypeUnsafe('RuntimeApiMetadataV16', [
    objectSpread({}, runtimeApiV15, {
      deprecationInfo,
      methods,
      version: registry.createTypeUnsafe('Compact<u32>', [0])
    })
  ]);
}

/**
 * Convert the Metadata to v16
 * @internal
 **/
export function toV16 (registry: Registry, v15: MetadataV15, _: number): MetadataV16 {
  const pallets: PalletMetadataV16[] = v15.pallets.map((pallet) => {
    return palletsFromV15(registry, pallet);
  });
  const extrinsic: ExtrinsicMetadataV16 = extrinsicFromV15(registry, v15.extrinsic);
  const apis: RuntimeApiMetadataV16[] = v15.apis.map((runtimeApi) => apisFromV15(registry, runtimeApi));

  return registry.createTypeUnsafe('MetadataV16', [
    objectSpread({}, v15, {
      apis,
      extrinsic,
      pallets
    })
  ]);
}
