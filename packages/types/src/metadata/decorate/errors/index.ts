// Copyright 2017-2021 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DispatchErrorModule, MetadataLatest } from '@polkadot/types/interfaces';
import type { Registry } from '@polkadot/types/types';
import type { Errors, ModuleErrors } from '../types';

import { stringCamelCase } from '@polkadot/util';

function isError ({ error, index }: DispatchErrorModule, sectionIndex: number, errorIndex: number): boolean {
  return index.eq(sectionIndex) && error.eq(errorIndex);
}

/** @internal */
export function decorateErrors (_: Registry, { modules }: MetadataLatest, metaVersion: number): Errors {
  return modules.reduce((result: Errors, { errors, index, name }, _sectionIndex): Errors => {
    if (!errors.length) {
      return result;
    }

    const sectionIndex = metaVersion >= 12 ? index.toNumber() : _sectionIndex;

    result[stringCamelCase(name)] = errors.reduce((newModule: ModuleErrors, meta, errorIndex): ModuleErrors => {
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
