// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Constructor, Registry } from '@polkadot/types/types';
import type { TypeDef } from '@polkadot/types-create/types';

import { GenericAccountId, GenericCall, GenericLookupSource, GenericVote } from '@polkadot/types/generic';
import { AllConvictions } from '@polkadot/types/interfaces/democracy/definitions';
import { AbstractInt, bool, Compact, Enum, Null, Option, Struct, Tuple, UInt, Vec, WrapperKeepOpaque, WrapperOpaque } from '@polkadot/types-codec';
import { getTypeDef, TypeDefInfo } from '@polkadot/types-create';
import { isChildClass, stringify } from '@polkadot/util';

import { formatType } from './formatting';
import { ModuleTypes, setImports, TypeImports } from './imports';

function arrayToStrType (arr: string[]): string {
  return `${arr.map((c) => `'${c}'`).join(' | ')}`;
}

const voteConvictions = arrayToStrType(AllConvictions);

// Make types a little bit more flexible
// - if param instanceof AbstractInt, then param: u64 | Uint8array | AnyNumber
// etc
/** @internal */
export function getSimilarTypes (registry: Registry, definitions: Record<string, ModuleTypes>, _type: string, imports: TypeImports): string[] {
  const typeParts = _type.split('::');
  const type = typeParts[typeParts.length - 1];
  const possibleTypes = [formatType(registry, definitions, type, imports)];

  if (type === 'Extrinsic') {
    setImports(definitions, imports, ['IExtrinsic']);

    return ['Extrinsic', 'IExtrinsic', 'string', 'Uint8Array'];
  } else if (type === 'Keys') {
    // This one is weird... surely it should popup as a Tuple? (but either way better as defined hex)
    return ['Keys', 'string', 'Uint8Array'];
  } else if (type === 'StorageKey') {
    // TODO We can do better
    return ['StorageKey', 'string', 'Uint8Array', 'any'];
  } else if (type === '()') {
    return ['null'];
  }

  const Clazz = registry.createClass(type);

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
      } else if (subDef.info === TypeDefInfo.Option || subDef.info === TypeDefInfo.Vec || subDef.info === TypeDefInfo.VecFixed) {
        // TODO: Add possibleTypes so imports work
      } else if (subDef.info === TypeDefInfo.Struct) {
        // TODO: Add possibleTypes so imports work
      } else {
        throw new Error(`Unhandled subtype in Vec, ${stringify(subDef)}`);
      }
    }
  } else if (isChildClass(Enum, Clazz)) {
    const { defKeys, isBasic } = new (Clazz as Constructor)(registry) as Enum;
    const keys = defKeys.filter((v) => !v.startsWith('__Unused'));

    if (isBasic) {
      possibleTypes.push(arrayToStrType(keys), 'number');
    } else {
      // TODO We don't really want any here, these should be expanded
      possibleTypes.push(...keys.map((k) => `{ ${k}: any }`), 'string');
    }

    possibleTypes.push('Uint8Array');
  } else if (isChildClass(AbstractInt as unknown as Constructor<UInt>, Clazz) || isChildClass(Compact, Clazz)) {
    possibleTypes.push('AnyNumber', 'Uint8Array');
  } else if (isChildClass(GenericLookupSource, Clazz)) {
    possibleTypes.push('Address', 'AccountId', 'AccountIndex', 'LookupSource', 'string', 'Uint8Array');
  } else if (isChildClass(GenericAccountId, Clazz)) {
    possibleTypes.push('string', 'Uint8Array');
  } else if (isChildClass(GenericCall, Clazz)) {
    possibleTypes.push('IMethod', 'string', 'Uint8Array');
  } else if (isChildClass(bool, Clazz)) {
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
  } else if (isChildClass(WrapperKeepOpaque, Clazz) || isChildClass(WrapperOpaque, Clazz)) {
    // TODO inspect container
    possibleTypes.push('object', 'string', 'Uint8Array');
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
