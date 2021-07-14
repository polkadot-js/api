// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Vec } from '../codec/Vec';
import type { SiField, SiLookupTypeId, SiType, SiTypeDefArray, SiTypeDefSequence, SiTypeDefTuple, SiTypeDefVariant, SiVariant } from '../interfaces/scaleInfo';
import type { Registry, TypeDef } from '../types';

import { assert } from '@polkadot/util';

import { Struct } from '../codec/Struct';
import { withTypeString } from '../create/encodeTypes';
import { TypeDefInfo } from '../types';

const PRIMITIVE_ALIAS: Record<string, string> = {
  Char: 'u32', // Rust char is 4-bytes
  Str: 'Text'
};

const INK_PRIMITIVE_ALWAYS = ['AccountId', 'AccountIndex', 'Address', 'Balance'];

export class GenericPortableRegistry extends Struct {
  #typeDefs: Record<number, TypeDef> = {};

  constructor (registry: Registry, value?: Uint8Array) {
    super(registry, {
      types: 'Vec<SiType>'
    }, value);
  }

  /**
   * @description The types of the registry
   */
  public get types (): Vec<SiType> {
    return this.get('types') as Vec<SiType>;
  }

  /**
   * @description Finds a specific type in the registry
   */
  lookupType (typeIndex: SiLookupTypeId): SiType {
    return this.#lookupType(typeIndex.toNumber());
  }

  /**
   * @description Lookup the type definition for the index
   */
  lookupTypeDef (typeIndex: SiLookupTypeId): TypeDef {
    const index = typeIndex.toNumber();
    let typeDef = this.#lookupTypeDef(index);

    if (typeDef) {
      return typeDef;
    }

    const siType = this.#lookupType(index);

    typeDef = this.#extract(siType, index);
    this.#typeDefs[index] = typeDef;

    return typeDef;
  }

  #extract (type: SiType, id: number): TypeDef {
    const path = [...type.path];

    // We handle ink! here as well, although we still have a different registry there
    const isPrimitivePath = !!path.length && (
      (path.length > 2 && path[0].eq('ink_env') && path[1].eq('types')) ||
      INK_PRIMITIVE_ALWAYS.includes(path[path.length - 1].toString())
    );
    let typeDef: Omit<TypeDef, 'type'>;

    if (isPrimitivePath) {
      typeDef = this.#extractPrimitivePath(type);
    } else if (type.def.isPrimitive) {
      typeDef = this.#extractPrimitive(type);
    } else if (type.def.isComposite) {
      typeDef = this.#extractFields(type.def.asComposite.fields);
    } else if (type.def.isVariant) {
      typeDef = this.#extractVariant(type.def.asVariant, id);
    } else if (type.def.isArray) {
      typeDef = this.#extractArray(type.def.asArray);
    } else if (type.def.isSequence) {
      typeDef = this.#extractSequence(type.def.asSequence, id);
    } else if (type.def.isTuple) {
      typeDef = this.#extractTuple(type.def.asTuple);
    } else {
      throw new Error(`PortableRegistry: Invalid type at index ${id}: No handler for ${type.def.toString()}`);
    }

    const displayName = path.pop()?.toString();

    return withTypeString({
      ...(displayName
        ? { displayName }
        : {}
      ),
      ...(path.length > 1
        ? { namespace: path.map((s) => s.toString()).join('::') }
        : {}
      ),
      ...(type.params.length > 0
        ? { sub: type.params.map((type) => this.lookupTypeDef(type.type.unwrap())) }
        : {}
      ),
      ...typeDef
    });
  }

  #lookupType (index: number): SiType {
    assert(index >= 0, 'PortableRegistry: Invalid type index provided');

    const type = this.types[index];

    assert(type, () => `PortableRegistry: Unable to find lookupTypeId ${index}`);

    return type;
  }

  #lookupTypeDef (index: number): TypeDef | undefined {
    assert(index >= 0, 'PortableRegistry: Invalid type index provided');

    return this.#typeDefs[index];
  }

  #extractArray ({ len: length, type }: SiTypeDefArray): Omit<TypeDef, 'type'> {
    assert(!length || length.toNumber() <= 256, 'PortableRegistry: Only support for [Type; <length>], where length <= 256');

    return {
      info: TypeDefInfo.VecFixed,
      length: length.toNumber(),
      sub: this.lookupTypeDef(type)
    };
  }

  #extractFields (fields: SiField[]): Omit<TypeDef, 'type'> {
    const [isStruct, isTuple] = fields.reduce(([isAllNamed, isAllUnnamed], { name }) => ([
      isAllNamed && name.isSome,
      isAllUnnamed && name.isNone
    ]),
    [true, true]);

    assert(isTuple || isStruct, 'PortableRegistry: Invalid fields type detected, expected either Tuple or Struct');

    const sub = fields.map(({ name, type }) => ({
      ...this.lookupTypeDef(type),
      ...(name.isSome
        ? { name: name.unwrap().toString() }
        : {}
      )
    }));

    return isTuple && sub.length === 1
      ? sub[0]
      : {
        // check for tuple first (no fields may be available)
        info: isTuple
          ? TypeDefInfo.Tuple
          : TypeDefInfo.Struct,
        sub
      };
  }

  #extractPrimitive (type: SiType): TypeDef {
    const typeStr = type.def.asPrimitive.type.toString();

    return {
      info: TypeDefInfo.Plain,
      type: PRIMITIVE_ALIAS[typeStr] || typeStr.toLowerCase()
    };
  }

  #extractPrimitivePath (type: SiType): TypeDef {
    return {
      info: TypeDefInfo.Plain,
      type: type.path[type.path.length - 1].toString()
    };
  }

  #extractSequence ({ type }: SiTypeDefSequence, id: number): Omit<TypeDef, 'type'> {
    assert(!!type, () => `ContractRegistry: Invalid sequence type found at id ${id}`);

    return {
      info: TypeDefInfo.Vec,
      sub: this.lookupTypeDef(type)
    };
  }

  #extractTuple (ids: SiTypeDefTuple): Omit<TypeDef, 'type'> {
    return ids.length === 1
      ? this.lookupTypeDef(ids[0])
      : {
        info: TypeDefInfo.Tuple,
        sub: ids.map((type) => this.lookupTypeDef(type))
      };
  }

  #extractVariant ({ variants }: SiTypeDefVariant, id: number): Omit<TypeDef, 'type'> {
    const { params, path } = this.#lookupType(id);
    const specialVariant = path[0].toString();

    return specialVariant === 'Option'
      ? {
        info: TypeDefInfo.Option,
        sub: this.lookupTypeDef(params[0].type.unwrap())
      }
      : specialVariant === 'Result'
        ? {
          info: TypeDefInfo.Result,
          sub: params.map((p, index) => ({
            name: ['Ok', 'Error'][index],
            ...this.lookupTypeDef(p.type.unwrap())
          }))
        }
        : {
          info: TypeDefInfo.Enum,
          sub: this.#extractVariantSub(variants)
        };
  }

  #extractVariantSub (variants: SiVariant[]): TypeDef[] {
    return variants.every(({ fields }) => fields.length === 0)
      ? variants.map(({ discriminant, name }) => ({
        ...(
          discriminant.isSome
            ? { ext: { discriminant: discriminant.unwrap().toNumber() } }
            : {}
        ),
        info: TypeDefInfo.Plain,
        name: name.toString(),
        type: 'Null'
      }))
      : variants.map(({ fields, name }) => withTypeString({
        ...this.#extractFields(fields),
        name: name.toString()
      }));
  }
}
