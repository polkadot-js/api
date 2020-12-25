// Copyright 2017-2020 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DispatchError, MetadataLatest } from '@polkadot/types/interfaces';
import type { Registry } from '@polkadot/types/types';
import type { Errors, IsError, ModuleErrors } from '../types';

import { stringCamelCase } from '@polkadot/util';

function isError (dispatchError: DispatchError, sectionIndex: number, errorIndex: number): boolean {
  if (!dispatchError.isModule) {
    return false;
  }

  const { error, index } = dispatchError.asModule;

  return index.eq(sectionIndex) && error.eq(errorIndex);
}

/** @internal */
export function decorateErrors (_: Registry, { modules }: MetadataLatest, metaVersion: number): Errors {
  return modules.reduce((result: Errors, { errors, index, name }, _sectionIndex): Errors => {
    if (!errors.length) {
      return result;
    }

    const sectionIndex = metaVersion === 12 ? index.toNumber() : _sectionIndex;

    result[stringCamelCase(name)] = errors.reduce((newModule: ModuleErrors, meta, errorIndex): ModuleErrors => {
      const isA = ((dispatchError: DispatchError) => isError(dispatchError, sectionIndex, errorIndex)) as IsError;

      isA.meta = meta;
      newModule[stringCamelCase(`is_${meta.name.toString()}`)] = isA;

      return newModule;
    }, {} as ModuleErrors);

    return result;
  }, {} as Errors);
}
