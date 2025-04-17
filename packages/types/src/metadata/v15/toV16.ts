// Copyright 2017-2025 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { type Vec } from '@polkadot/types-codec';
import type { DeprecationInfoV16, DeprecationStatusV16, ExtrinsicMetadataV15, ExtrinsicMetadataV16, MetadataV15, MetadataV16, PalletCallMetadataV14, PalletCallMetadataV16, PalletConstantMetadataV14, PalletConstantMetadataV16, PalletErrorMetadataV14, PalletErrorMetadataV16, PalletEventMetadataV14, PalletEventMetadataV16, PalletMetadataV15, PalletMetadataV16, PalletStorageMetadataV14, PalletStorageMetadataV16, RuntimeApiMetadataV15, RuntimeApiMetadataV16, StorageEntryMetadataV16, TransactionExtensionMetadataV16 } from '../../interfaces/metadata/index.js';
import type { Registry } from '../../types/index.js';

import { objectSpread } from '@polkadot/util';

function palletsFromV15(registry: Registry, palletV15: PalletMetadataV15): PalletMetadataV16 {
  return registry.createTypeUnsafe('PalletMetadataV16', [
    objectSpread({}, palletV15, {
      storage: palletV15.storage.isSome? convertStorage(registry, palletV15.storage.unwrap()) : null,
      calls: palletV15.calls.isSome? convertCalls(registry, palletV15.calls.unwrap()) : null,
      events: palletV15.events.isSome? convertEvents(registry, palletV15.events.unwrap()) : null,
      constants: convertConstants(registry, palletV15.constants),
      errors: palletV15.errors.isSome? converErrors(registry, palletV15.errors.unwrap()) : null,
    })
  ])
}

function convertStorage(registry: Registry, storage: PalletStorageMetadataV14): PalletStorageMetadataV16 {
  const deprecationInfo: DeprecationStatusV16 = registry.createTypeUnsafe('DeprecationStatusV16', ['NotDeprecated']);

  const entries: StorageEntryMetadataV16[] = storage.items.map((item) =>
    registry.createTypeUnsafe('StorageEntryMetadataV16', [{
      ...item,
      deprecationInfo
    }])
  );

  return registry.createTypeUnsafe('PalletStorageMetadataV16', [{
    prefix: storage.prefix,
    entries
  }]);
}

function convertCalls(registry: Registry, calls: PalletCallMetadataV14): PalletCallMetadataV16 {
  const deprecationInfo: DeprecationInfoV16 = registry.createTypeUnsafe('DeprecationInfoV16', ['NotDeprecated']);

  return registry.createTypeUnsafe('PalletCallMetadataV16', [{
    type: calls.type,
    deprecationInfo
  }]);
}

function convertEvents(registry: Registry, events: PalletEventMetadataV14): PalletEventMetadataV16 {
  const deprecationInfo: DeprecationInfoV16 = registry.createTypeUnsafe('DeprecationInfoV16', ['NotDeprecated']);

  return registry.createTypeUnsafe('PalletEventMetadataV16', [{
    type: events.type,
    deprecationInfo
  }]);
}

function convertConstants(registry: Registry, constants: Vec<PalletConstantMetadataV14>): Vec<PalletConstantMetadataV16> {
  const deprecationInfo: DeprecationInfoV16 = registry.createTypeUnsafe('DeprecationInfoV16', ['NotDeprecated']);

  return registry.createTypeUnsafe('Vec<PalletConstantMetadataV16>', [
    constants.map((constant) => registry.createTypeUnsafe('PalletConstantMetadataV16', [{
      ...constant,
      deprecationInfo
    }]))]
  )
}


function converErrors(registry: Registry, errors: PalletErrorMetadataV14): PalletErrorMetadataV16 {
  const deprecationInfo: DeprecationInfoV16 = registry.createTypeUnsafe('DeprecationInfoV16', ['NotDeprecated']);

  return registry.createTypeUnsafe('PalletErrorMetadataV16', [{
    type: errors.type,
    deprecationInfo
  }]);
}

function extrinsicFromV15(registry: Registry, extrinsicV15: ExtrinsicMetadataV15): ExtrinsicMetadataV16 {
  const transactionExtensions: TransactionExtensionMetadataV16[] = extrinsicV15.signedExtensions.map(({identifier, type, additionalSigned}) =>
    registry.createTypeUnsafe('TransactionExtensionMetadataV16', [{
      identifier,
      type,
      implict: additionalSigned
    }])
  );

  const indexes = transactionExtensions.map((_, i) =>
    registry.createTypeUnsafe('Compact<u32>', [i])
  );

  const transactionExtensionsByVersion = registry.createTypeUnsafe(
    'BTreeMap<u8, Vec<Compact<u32>>>',
    [new Map([[registry.createTypeUnsafe('u8', [0]), registry.createTypeUnsafe('Vec<Compact<u32>>', [indexes])]])]
  );

  return registry.createTypeUnsafe('ExtrinsicMetadataV16', [
    {
      versions: [extrinsicV15.version],
      addressType: extrinsicV15.addressType,
      signatureType: extrinsicV15.signatureType,
      transactionExtensionsByVersion: transactionExtensionsByVersion,
      transactionExtensions,
    }
  ])
}

function apisFromV15(registry: Registry, runtimeApiV15: RuntimeApiMetadataV15): RuntimeApiMetadataV16 {
  const deprecationInfo: DeprecationStatusV16 = registry.createTypeUnsafe('DeprecationStatusV16', ['NotDeprecated']);


  let methods = runtimeApiV15.methods.map((method) =>
    registry.createTypeUnsafe('RuntimeApiMethodMetadataV16', [{
      ...method,
      deprecationInfo
    }])
  );

  return registry.createTypeUnsafe('RuntimeApiMetadataV16', [
    objectSpread({}, runtimeApiV15, {
      methods,
      version: registry.createTypeUnsafe('Compact<u32>', [0]),
      deprecationInfo: deprecationInfo
    })
  ])
}

/**
 * Convert the Metadata to v16
 * @internal
 **/
export function toV16 (registry: Registry, v15: MetadataV15, _: number): MetadataV16 {

  const pallets: PalletMetadataV16[] = v15.pallets.map((pallet) => {
    return palletsFromV15(registry, pallet)
  });
  const extrinsic: ExtrinsicMetadataV16 = extrinsicFromV15(registry, v15.extrinsic);
  const apis: RuntimeApiMetadataV16[] = v15.apis.map((runtimeApi) => apisFromV15(registry, runtimeApi)) ;

  return registry.createTypeUnsafe('MetadataV16', [
   objectSpread({}, v15, {
      pallets,
      extrinsic,
      apis
    })
  ]);
}
