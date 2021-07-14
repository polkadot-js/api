// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DispatchErrorModule, MetadataLatest } from '../../../interfaces';
import type { Registry } from '../../../types';
import type { Errors, ModuleErrors } from '../types';

import { assert, stringCamelCase } from '@polkadot/util';

function isError ({ error, index }: DispatchErrorModule, sectionIndex: number, errorIndex: number): boolean {
  return index.eq(sectionIndex) && error.eq(errorIndex);
}

/** @internal */
export function decorateErrors (_: Registry, { pallets, types }: MetadataLatest, metaVersion: number): Errors {
  return pallets.reduce((result: Errors, { errors, index, name }, _sectionIndex): Errors => {
    if (!errors.isSome) {
      return result;
    }

    const sectionName = stringCamelCase(name);
    const sectionIndex = metaVersion >= 12
      ? index.toNumber()
      : _sectionIndex;
    const { def } = types.lookupType(errors.unwrap().type);

    assert(def.isVariant, () => `Expected a variant type for Errors from ${sectionName}`);

    result[sectionName] = def.asVariant.variants.reduce((newModule: ModuleErrors, meta, errorIndex): ModuleErrors => {
      // we don't camelCase the error name
      newModule[meta.name.toString()] = {
        is: (moduleError: DispatchErrorModule): boolean =>
          isError(moduleError, sectionIndex, errorIndex),
        meta
      };

      return newModule;
    }, {} as ModuleErrors);

    return result;
  }, {} as Errors);
}
