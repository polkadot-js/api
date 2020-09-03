// Copyright 2017-2019 @polkadot/rpc-core authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { InkProject, MtLookupTypeId, MtType } from '@polkadot/types/interfaces';

import { assert, isUndefined } from '@polkadot/util';

// convert the offset into project-specific, index-1
export function getRegistryOffset (id: MtLookupTypeId): number {
  return id.toNumber() - 1;
}

// extract a single ink type defintion from the project
export function getInkType (project: InkProject, id: MtLookupTypeId): MtType {
  const offset = getRegistryOffset(id);
  const type = project.types[offset];

  assert(!isUndefined(type), `getInkType:: Unable to find ${id.toNumber()} in type values`);

  return type;
}

// extract and array of ink type defs from the project
export function getInkTypes (project: InkProject, ids: MtLookupTypeId[]): MtType[] {
  return ids.map((id): MtType => getInkType(project, id));
}
