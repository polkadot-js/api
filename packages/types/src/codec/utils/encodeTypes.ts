// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { TypeDef, TypeDefInfo, TypeDefExtVecFixed } from '../types';

import { assert } from '@polkadot/util';

import { getTypeDef } from '../create';

export function paramsNotation (outer: string, inner?: string | any[], transform?: (_: any) => string): string {
  let array;
  if (inner) {
    array = Array.isArray(inner) ? inner : [inner];

    if (transform) {
      array = array.map(transform);
    }
  }
  return `${outer}${array ? `<${array.join(', ')}>` : ''}`;
}

class TypeEncoder {
  private static enum (typeDef: Pick<TypeDef, any>): string {
    assert(typeDef.sub && Array.isArray(typeDef.sub), 'Unable to encode Enum type');

    const sub = typeDef.sub as TypeDef[];

    const isClikeEnum = sub.reduce(
      (bool: boolean, { type }: TypeDef): boolean => bool && type === 'Null',
      true
    );

    if (isClikeEnum) {
      return `[${
        sub
          .map(({ name }: TypeDef): string => `"${name}"`)
          .join(', ')
      }]`;
    }

    return this.subTypes(sub, true);
  }

  private static struct (typeDef: Pick<TypeDef, any>): string {
    assert(typeDef.sub && Array.isArray(typeDef.sub), 'Unable to encode Struct type');

    const sub = typeDef.sub as TypeDef[];

    return this.subTypes(sub);
  }

  private static tuple (typeDef: Pick<TypeDef, any>): string {
    assert(typeDef.sub && Array.isArray(typeDef.sub), 'Unable to encode Tuple type');

    const sub = typeDef.sub as TypeDef[];

    return `(${
      sub
        .map((type: TypeDef): string => TypeEncoder.withParams(type))
        .join(', ')
    })`;
  }

  private static vecFixed (typeDef: Pick<TypeDef, any>): string {
    assert(typeDef.ext, 'Unable to encode VecFixed type');

    const { type, length } = typeDef.ext as TypeDefExtVecFixed;

    return `[${
      this.withParams(getTypeDef(type))
    };${
      length
    }]`;
  }

  private static subTypes (sub: TypeDef[], asEnum?: boolean): string {
    return `{ ${asEnum ? '"_enum": { ' : ''}${
      sub
        .map((type: TypeDef): string => `"${type.name}": "${this.withParams(type)}"`)
        .join(', ')
    }} }`;
  }

  private static withParams (typeDef: Pick<TypeDef, any>, outer = typeDef.displayName || typeDef.type): string {
    const { params } = typeDef;

    return paramsNotation(
      outer,
      params,
      (param: TypeDef) => TypeEncoder.display(param)
    );
  }

  public static encode (typeDef: Pick<TypeDef, any>): string {
    switch (typeDef.info) {
      case TypeDefInfo.Null: {
        return '()';
      }
      case TypeDefInfo.Plain: {
        return typeDef.displayName || typeDef.type;
      }
      case TypeDefInfo.Compact: {
        return TypeEncoder.withParams(typeDef, 'Compact');
      }
      case TypeDefInfo.DoubleMap: {
        return TypeEncoder.withParams(typeDef, 'DoubleMap');
      }
      case TypeDefInfo.Linkage: {
        return TypeEncoder.withParams(typeDef, 'Linkage');
      }
      case TypeDefInfo.Option: {
        return TypeEncoder.withParams(typeDef, 'Option');
      }
      case TypeDefInfo.Vec: {
        return TypeEncoder.withParams(typeDef, 'Vec');
      }
      case TypeDefInfo.Enum: {
        return TypeEncoder.enum(typeDef);
      }
      case TypeDefInfo.Struct: {
        return TypeEncoder.struct(typeDef);
      }
      case TypeDefInfo.Tuple: {
        return TypeEncoder.tuple(typeDef);
      }
      case TypeDefInfo.VecFixed: {
        return TypeEncoder.vecFixed(typeDef);
      }
      default: {
        throw new Error(`Cannot encode type: ${typeDef}.`);
      }
    }
  }

  public static display (typeDef: Pick<TypeDef, any>): string {
    if (typeDef.displayName) {
      return TypeEncoder.withParams(typeDef);
    }

    switch (typeDef.info) {
      case TypeDefInfo.Struct:
      case TypeDefInfo.Enum:
        return TypeEncoder.withParams(typeDef);
      default:
        return TypeEncoder.encode(typeDef);
    }
  }
}

export function encodeType (typeDef: Pick<TypeDef, any>): string {
  return TypeEncoder.encode(typeDef);
}

export function displayType (typeDef: Pick<TypeDef, any>): string {
  return TypeEncoder.display(typeDef);
}

export function withTypeString (typeDef: Pick<TypeDef, any>): Pick<TypeDef, any> {
  return {
    ...typeDef,
    type: encodeType(typeDef)
  };
}
