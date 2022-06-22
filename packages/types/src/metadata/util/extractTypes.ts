// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { TypeDef } from '@polkadot/types-create/types';

import { getTypeDef, TypeDefInfo } from '@polkadot/types-create';

type Extracted = string | Extracted[];

function extractSubSingle (_: string, { sub }: TypeDef): Extracted[] {
  const { lookupName, type } = sub as TypeDef;

  return extractTypes([lookupName || type]);
}

function extractSubArray (_: string, { sub }: TypeDef): Extracted[] {
  return extractTypes((sub as TypeDef[]).map(({ lookupName, type }) => lookupName || type));
}

function unhandled (type: string, { info }: TypeDef): never {
  throw new Error(`Unhandled: Unable to create and validate type from ${type} (info=${TypeDefInfo[info]})`);
}

// we only handle the types with params here
const mapping: Record<TypeDefInfo, (type: string, typeDef: TypeDef) => Extracted> = {
  [TypeDefInfo.BTreeMap]: extractSubArray,
  [TypeDefInfo.BTreeSet]: extractSubSingle,
  [TypeDefInfo.Compact]: extractSubSingle,
  [TypeDefInfo.DoNotConstruct]: unhandled,
  [TypeDefInfo.Enum]: extractSubArray,
  [TypeDefInfo.HashMap]: extractSubArray,
  [TypeDefInfo.Int]: unhandled,
  [TypeDefInfo.Linkage]: extractSubSingle,
  [TypeDefInfo.Null]: unhandled,
  [TypeDefInfo.Option]: extractSubSingle,
  [TypeDefInfo.Plain]: (_: string, typeDef: TypeDef) => typeDef.lookupName || typeDef.type,
  [TypeDefInfo.Range]: extractSubSingle,
  [TypeDefInfo.RangeInclusive]: extractSubSingle,
  [TypeDefInfo.Result]: extractSubArray,
  [TypeDefInfo.Set]: extractSubArray,
  [TypeDefInfo.Si]: unhandled,
  [TypeDefInfo.Struct]: extractSubArray,
  [TypeDefInfo.Tuple]: extractSubArray,
  [TypeDefInfo.UInt]: unhandled,
  [TypeDefInfo.Vec]: extractSubSingle,
  [TypeDefInfo.VecFixed]: extractSubSingle,
  [TypeDefInfo.WrapperKeepOpaque]: extractSubSingle,
  [TypeDefInfo.WrapperOpaque]: extractSubSingle
};

/** @internal */
export function extractTypes (types: string[]): Extracted[] {
  const count = types.length;
  const result = new Array<Extracted>(count);

  for (let i = 0; i < count; i++) {
    const type = types[i];
    const typeDef = getTypeDef(type);

    result[i] = mapping[typeDef.info](type, typeDef);
  }

  return result;
}
