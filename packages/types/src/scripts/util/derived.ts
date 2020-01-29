// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { TypeDef, TypeDefInfo } from '../../codec/types';
import { Constructor, Registry } from '../../types';

import { isChildClass, isCompactEncodable } from './class';
import { ClassOfUnsafe, getTypeDef } from '../../codec/create';
import AbstractInt from '../../codec/AbstractInt';
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
// - if param instanceof AbstractInt, then param: u64 | Uint8array | string | number
// etc
/** @internal */
export function getSimilarTypes (definitions: object, registry: Registry, type: string, imports: TypeImports): string[] {
  const possibleTypes = [type];

  if (type === 'Extrinsic') {
    setImports(definitions, imports, ['IExtrinsic']);
    return ['IExtrinsic'];
  }

  if (isChildClass(Vec, ClassOfUnsafe(registry, type))) {
    return [`(${getSimilarTypes(definitions, registry, ((getTypeDef(type).sub) as TypeDef).type, imports).join(' | ')})[]`];
  }

  // FIXME This is a hack, it's hard to correctly type StorageKeys in the
  // current state
  if (type === 'StorageKey') {
    return ['any'];
  }

  // Cannot get isChildClass of abstract class, but it works
  if (isChildClass(AbstractInt as unknown as Constructor<any>, ClassOfUnsafe(registry, type))) {
    possibleTypes.push('Uint8Array', 'number', 'string');
  } else if (isChildClass(Uint8Array, ClassOfUnsafe(registry, type))) {
    possibleTypes.push('Uint8Array', 'string');
  } else if (isChildClass(String, ClassOfUnsafe(registry, type))) {
    possibleTypes.push('string');
  }

  return possibleTypes;
}
