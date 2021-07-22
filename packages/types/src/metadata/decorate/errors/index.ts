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
export function decorateErrors (registry: Registry, { lookup, pallets }: MetadataLatest, metaVersion: number): Errors {
  return pallets.reduce((result: Errors, { errors, index, name }, _sectionIndex): Errors => {
    if (!errors.isSome) {
      return result;
    }

    const sectionIndex = metaVersion >= 12
      ? index.toNumber()
      : _sectionIndex;

    result[stringCamelCase(name)] = lookup.getSiType(errors.unwrap().type).def.asVariant.variants.reduce((newModule: ModuleErrors, variant): ModuleErrors => {
      // we don't camelCase the error name
      newModule[variant.name.toString()] = {
        is: (moduleError: DispatchErrorModule): boolean =>
          isError(moduleError, sectionIndex, variant.index.toNumber()),
        meta: registry.createType('ErrorMetadataLatest', {
          ...variant,
          args: variant.fields.map(({ type }) =>
            lookup.getTypeDef(type).type
          )
        })
      };

      return newModule;
    }, {} as ModuleErrors);

    return result;
  }, {} as Errors);
}
