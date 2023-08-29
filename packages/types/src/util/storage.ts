// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { StorageEntryTypeLatest } from '../interfaces/metadata/index.js';
import type { SiLookupTypeId } from '../interfaces/scaleInfo/index.js';
import type { InterfaceTypes, Registry } from '../types/index.js';

import { getSiName } from '../metadata/util/index.js';

/** @internal */
export function unwrapStorageSi (type: StorageEntryTypeLatest): SiLookupTypeId {
  return type.isPlain
    ? type.asPlain
    : type.asMap.value;
}

/** @internal */
export function unwrapStorageType (registry: Registry, type: StorageEntryTypeLatest, isOptional?: boolean): keyof InterfaceTypes {
  const outputType = getSiName(registry.lookup, unwrapStorageSi(type));

  return isOptional
    ? `Option<${outputType}>` as unknown as keyof InterfaceTypes
    : outputType as keyof InterfaceTypes;
}
