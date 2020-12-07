// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { TypeDef } from '@polkadot/types/create/types';
import type { Constructor, Registry } from '@polkadot/types/types';

import { Compact, Enum, Option, Struct, Tuple, UInt, Vec } from '@polkadot/types/codec';
import { AbstractInt } from '@polkadot/types/codec/AbstractInt';
import { ClassOfUnsafe, getTypeDef } from '@polkadot/types/create';
import { TypeDefInfo } from '@polkadot/types/create/types';
import { GenericAccountId, GenericLookupSource, GenericVote } from '@polkadot/types/generic';
import { AllConvictions } from '@polkadot/types/interfaces/democracy/definitions';
import { Null } from '@polkadot/types/primitive';
import * as primitiveClasses from '@polkadot/types/primitive';
import { isChildClass } from '@polkadot/util';

import { isCompactEncodable } from './class';
import { formatType } from './formatting';
import { ModuleTypes, setImports, TypeImports } from './imports';

function arrayToStrType (arr: string[]): string {
  return `${arr.map((c) => `'${c}'`).join(' | ')}`;
}

const voteConvictions = arrayToStrType(AllConvictions);

// From `T`, generate `Compact<T>, Option<T>, Vec<T>`
/** @internal */
export function getDerivedTypes (registry: Registry, definitions: Record<string, ModuleTypes>, type: string, primitiveName: string, imports: TypeImports): string[] {
  // `primitiveName` represents the actual primitive type our type is mapped to
  const isCompact = isCompactEncodable((primitiveClasses as Record<string, any>)[primitiveName] || ClassOfUnsafe(registry, type));
  const def = getTypeDef(type);

  setImports(definitions, imports, ['Option', 'Vec', isCompact ? 'Compact' : '']);

  const types = [
    {
      info: TypeDefInfo.Option,
      sub: def,
      type
    },
    {
      info: TypeDefInfo.Vec,
      sub: def,
      type
    }
  ];

  if (isCompact) {
    types.unshift({
      info: TypeDefInfo.Compact,
      sub: def,
      type
    });
  }

  const result = types.map((t) => formatType(definitions, t, imports)).map((t) => `'${t}': ${t};`);

  result.unshift(`${type}: ${type};`);

  return result;
}

// Make types a little bit more flexible
// - if param instanceof AbstractInt, then param: u64 | Uint8array | AnyNumber
// etc
/** @internal */
export function getSimilarTypes (registry: Registry, definitions: Record<string, ModuleTypes>, _type: string, imports: TypeImports): string[] {
  const typeParts = _type.split('::');
  const type = typeParts[typeParts.length - 1];
  const possibleTypes = [formatType(definitions, type, imports)];

  if (type === 'Extrinsic') {
    setImports(definitions, imports, ['IExtrinsic']);

    return ['IExtrinsic'];
  } else if (type === 'StorageKey') {
    // TODO We can do better
    return ['StorageKey', 'string', 'Uint8Array', 'any'];
  } else if (type === '()') {
    return ['null'];
  }

  const Clazz = ClassOfUnsafe(registry, type);

  if (isChildClass(Vec, Clazz)) {
    const vecDef = getTypeDef(type);
    const subDef = (vecDef.sub) as TypeDef;

    // this could be that we define a Vec type and refer to it by name
    if (subDef) {
      if (subDef.info === TypeDefInfo.Plain) {
        possibleTypes.push(`(${getSimilarTypes(registry, definitions, subDef.type, imports).join(' | ')})[]`);
      } else if (subDef.info === TypeDefInfo.Tuple) {
        const subs = (subDef.sub as TypeDef[]).map(({ type }): string =>
          getSimilarTypes(registry, definitions, type, imports).join(' | ')
        );

        possibleTypes.push(`([${subs.join(', ')}])[]`);
      } else {
        throw new Error(`Unhandled subtype in Vec, ${JSON.stringify(subDef)}`);
      }
    }
  } else if (isChildClass(Enum, Clazz)) {
    const e = new (Clazz as Constructor)(registry) as Enum;

    if (e.isBasic) {
      possibleTypes.push(arrayToStrType(e.defKeys), 'number');
    } else {
      // TODO We don't really want any here, these should be expanded
      possibleTypes.push(...e.defKeys.map((key): string => `{ ${key}: any }`), 'string');
    }

    possibleTypes.push('Uint8Array');
  } else if (isChildClass(AbstractInt as unknown as Constructor<UInt>, Clazz) || isChildClass(Compact, Clazz)) {
    possibleTypes.push('AnyNumber', 'Uint8Array');
  } else if (isChildClass(GenericLookupSource, Clazz)) {
    possibleTypes.push('Address', 'AccountId', 'AccountIndex', 'LookupSource', 'string', 'Uint8Array');
  } else if (isChildClass(GenericAccountId, Clazz)) {
    possibleTypes.push('string', 'Uint8Array');
  } else if (isChildClass(registry.createClass('bool'), Clazz)) {
    possibleTypes.push('boolean', 'Uint8Array');
  } else if (isChildClass(Null, Clazz)) {
    possibleTypes.push('null');
  } else if (isChildClass(Struct, Clazz)) {
    const s = new (Clazz as Constructor)(registry) as Struct;
    const obj = s.defKeys.map((key): string => `${key}?: any`).join('; ');

    possibleTypes.push(`{ ${obj} }`, 'string', 'Uint8Array');
  } else if (isChildClass(Option, Clazz)) {
    // TODO inspect container
    possibleTypes.push('null', 'object', 'string', 'Uint8Array');
  } else if (isChildClass(GenericVote, Clazz)) {
    possibleTypes.push(`{ aye: boolean; conviction?: ${voteConvictions} | number }`, 'boolean', 'string', 'Uint8Array');
  } else if (isChildClass(Uint8Array, Clazz)) {
    possibleTypes.push('string', 'Uint8Array');
  } else if (isChildClass(String, Clazz)) {
    possibleTypes.push('string');
  } else if (isChildClass(Tuple, Clazz)) {
    const tupDef = getTypeDef(type);
    const subDef = tupDef.sub;

    // this could be that we define a Tuple type and refer to it by name
    if (Array.isArray(subDef)) {
      const subs = subDef.map(({ type }) => getSimilarTypes(registry, definitions, type, imports).join(' | '));

      possibleTypes.push(`[${subs.join(', ')}]`);
    }
  }

  return [...new Set(possibleTypes)];
}
