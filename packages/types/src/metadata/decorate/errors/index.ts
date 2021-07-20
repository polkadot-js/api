// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DispatchErrorModule, MetadataLatest } from '../../../interfaces';
import type { Registry } from '../../../types';
import type { Errors, ModuleErrors } from '../types';

import { stringCamelCase } from '@polkadot/util';

function isError ({ error, index }: DispatchErrorModule, sectionIndex: number, errorIndex: number): boolean {
  return index.eq(sectionIndex) && error.eq(errorIndex);
}

/** @internal */
export function decorateErrors (_: Registry, { lookup, pallets }: MetadataLatest): Errors {
  return pallets.reduce((result: Errors, { errors, index, name }): Errors => {
    if (!errors.isSome) {
      return result;
    }

    result[stringCamelCase(name)] = lookup.getSiType(errors.unwrap().type).def.asVariant.variants.reduce((newModule: ModuleErrors, meta): ModuleErrors => {
      // we don't camelCase the error name
      newModule[meta.name.toString()] = {
        is: (moduleError: DispatchErrorModule): boolean =>
          isError(moduleError, index.toNumber(), meta.index.toNumber()),
        meta
      };

      return newModule;
    }, {} as ModuleErrors);

    return result;
  }, {} as Errors);
}
