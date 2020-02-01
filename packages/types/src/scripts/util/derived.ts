// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { TypeDef, TypeDefInfo } from '../../codec/types';
import { Constructor, Registry } from '../../types';

import { isChildClass, isCompactEncodable } from './class';
import { ClassOf, ClassOfUnsafe, getTypeDef } from '../../codec/create';
import AbstractInt from '../../codec/AbstractInt';
import Compact from '../../codec/Compact';
import Enum from '../../codec/Enum';
import Option from '../../codec/Option';
import Struct from '../../codec/Struct';
import Vec from '../../codec/Vec';
import { formatType } from './formatting';
import { setImports, TypeImports } from './imports';
import * as primitiveClasses from '../../primitive';

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

  const clazz = ClassOfUnsafe(registry, type);

  if (isChildClass(Vec, clazz)) {
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
  } else if (isChildClass(Enum, clazz)) {
    // TODO Handle this more gracefully (expand actual options)
    possibleTypes.push('number', 'any');
  } else if (isChildClass(AbstractInt as unknown as Constructor<any>, clazz) || isChildClass(Compact, clazz)) {
    possibleTypes.push('AnyNumber', 'Uint8Array');
  } else if (isChildClass(ClassOf(registry, 'Address'), clazz)) {
    possibleTypes.push('string', 'AccountId', 'AccountIndex', 'Uint8Array');
  } else if (isChildClass(ClassOf(registry, 'bool'), clazz)) {
    possibleTypes.push('boolean', 'Uint8Array');
  } else if (isChildClass(Struct, clazz)) {
    possibleTypes.push('object', 'string', 'Uint8Array');
  } else if (isChildClass(Option, clazz)) {
    possibleTypes.push('null', 'object', 'string', 'Uint8Array');
  } else if (isChildClass(Uint8Array, clazz)) {
    possibleTypes.push('string', 'Uint8Array');
  } else if (isChildClass(String, clazz)) {
    possibleTypes.push('string');
  }

  return possibleTypes;
}
