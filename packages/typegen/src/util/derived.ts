// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { TypeDef, TypeDefInfo } from '@polkadot/types/create/types';
import { Constructor, Registry } from '@polkadot/types/types';

import { stringLowerFirst } from '@polkadot/util';
import { isChildClass, isCompactEncodable } from './class';
import { ClassOf, ClassOfUnsafe, getTypeDef } from '@polkadot/types/create';
import AbstractInt from '@polkadot/types/codec/AbstractInt';
import Compact from '@polkadot/types/codec/Compact';
import Enum from '@polkadot/types/codec/Enum';
import Option from '@polkadot/types/codec/Option';
import Struct from '@polkadot/types/codec/Struct';
import Vec from '@polkadot/types/codec/Vec';
import GenericAccountId from '@polkadot/types/primitive/Generic/AccountId';
import GenericAddress from '@polkadot/types/primitive/Generic/Address';
import Vote, { convictionNames as _voteConvictions } from '@polkadot/types/primitive/Generic/Vote';
import Null from '@polkadot/types/primitive/Null';
import * as primitiveClasses from '@polkadot/types/primitive';

import { formatType } from './formatting';
import { setImports, TypeImports } from './imports';

function arrayToStrType (arr: string[]): string {
  return `(${arr.map((c): string => `'${c}'`).join(' | ')})`;
}

const voteConvictions = arrayToStrType(_voteConvictions);

// From `T`, generate `Compact<T>, Option<T>, Vec<T>`
/** @internal */
export function getDerivedTypes (definitions: object, type: string, primitiveName: string, imports: TypeImports): string[] {
  // `primitiveName` represents the actual primitive type our type is mapped to
  const isCompact = isCompactEncodable((primitiveClasses as any)[primitiveName]);
  const def = getTypeDef(type);

  setImports(definitions, imports, ['Option', 'Vec', isCompact ? 'Compact' : '']);

  const types = [
    {
      info: TypeDefInfo.Option,
      type,
      sub: def
    },
    {
      info: TypeDefInfo.Vec,
      type,
      sub: def
    }
  ];
  if (isCompact) {
    types.unshift({
      info: TypeDefInfo.Compact,
      type,
      sub: def
    });
  }

  const result = types.map(t => formatType(definitions, t, imports)).map(t => `'${t}': ${t};`);
  result.unshift(`${type}: ${type};`);

  return result;
}

// Make types a little bit more flexible
// - if param instanceof AbstractInt, then param: u64 | Uint8array | AnyNumber
// etc
/** @internal */
export function getSimilarTypes (definitions: object, registry: Registry, type: string, imports: TypeImports): string[] {
  const possibleTypes = [type];

  if (type === 'Extrinsic') {
    setImports(definitions, imports, ['IExtrinsic']);
    return ['IExtrinsic'];
  } else if (type === 'StorageKey') {
    // TODO We can do better
    return ['StorageKey', 'string', 'Uint8Array', 'any'];
  }

  const Clazz = ClassOfUnsafe(registry, type);

  if (isChildClass(Vec, Clazz)) {
    const subDef = (getTypeDef(type).sub) as TypeDef;

    if (subDef.info === TypeDefInfo.Plain) {
      possibleTypes.push(`(${getSimilarTypes(definitions, registry, subDef.type, imports).join(' | ')})[]`);
    } else if (subDef.info === TypeDefInfo.Tuple) {
      const subs = (subDef.sub as TypeDef[]).map(({ type }): string =>
        getSimilarTypes(definitions, registry, type, imports).join(' | ')
      );

      possibleTypes.push(`([${subs.join(', ')}])[]`);
    } else {
      throw new Error(`Unhandled subtype in Vec, ${JSON.stringify(subDef)}`);
    }
  } else if (isChildClass(Enum, Clazz)) {
    const e = new Clazz(registry) as Enum;

    if (e.isBasic) {
      possibleTypes.push(arrayToStrType(e.defKeys), 'number');
    } else {
      // TODO We don't really want any here, these should be expanded
      possibleTypes.push(...e.defKeys.map((key): string => `{ ${stringLowerFirst(key)}: any }`), 'string');
    }

    possibleTypes.push('Uint8Array');
  } else if (isChildClass(AbstractInt as unknown as Constructor<any>, Clazz) || isChildClass(Compact, Clazz)) {
    possibleTypes.push('AnyNumber', 'Uint8Array');
  } else if (isChildClass(GenericAddress, Clazz)) {
    possibleTypes.push('Address', 'AccountId', 'AccountIndex', 'string', 'Uint8Array');
  } else if (isChildClass(GenericAccountId, Clazz)) {
    possibleTypes.push('string', 'Uint8Array');
  } else if (isChildClass(ClassOf(registry, 'bool'), Clazz)) {
    possibleTypes.push('boolean', 'Uint8Array');
  } else if (isChildClass(Null, Clazz)) {
    possibleTypes.push('null');
  } else if (isChildClass(Struct, Clazz)) {
    // TODO We don't really want any here, these should be expanded
    const s = new Clazz(registry) as Struct;
    const obj = s.defKeys.map((key): string => `${key}?: any`).join('; ');

    possibleTypes.push(`{ ${obj} }`, 'string', 'Uint8Array');
  } else if (isChildClass(Option, Clazz)) {
    // TODO inspect container
    possibleTypes.push('null', 'object', 'string', 'Uint8Array');
  } else if (isChildClass(Vote, Clazz)) {
    possibleTypes.push(`{ aye: boolean; conviction?: ${voteConvictions} | number }`, 'boolean', 'string', 'Uint8Array');
  } else if (isChildClass(Uint8Array, Clazz)) {
    possibleTypes.push('string', 'Uint8Array');
  } else if (isChildClass(String, Clazz)) {
    possibleTypes.push('string');
  }

  return possibleTypes;
}
