// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Vec } from '../codec/Vec';
import type { PortableType } from '../interfaces/metadata';
import type { SiField, SiLookupTypeId, SiType, SiTypeDefArray, SiTypeDefCompact, SiTypeDefComposite, SiTypeDefSequence, SiTypeDefTuple, SiTypeDefVariant, SiVariant } from '../interfaces/scaleInfo';
import type { Registry, TypeDef } from '../types';

import { assert, isNumber, isString, stringCamelCase, stringify } from '@polkadot/util';

import { Struct } from '../codec/Struct';
import { getTypeDef } from '../create/getTypeDef';
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
      types: 'Vec<PortableType>'
    }, value);
  }

  /**
   * @description The types of the registry
   */
  public get types (): Vec<PortableType> {
    return this.get('types') as Vec<PortableType>;
  }

  /**
   * @description Finds a specific type in the registry
   */
  public getSiType (lookupId: SiLookupTypeId | string | number): SiType {
    const found = this.types[this.#getLookupId(lookupId)];

    assert(found, () => `PortableRegistry: Unable to find type with lookupId ${lookupId.toString()}`);

    return found.type;
  }

  /**
   * @description Lookup the type definition for the index
   */
  public getTypeDef (lookupId: SiLookupTypeId | string | number): TypeDef {
    const index = this.#getLookupId(lookupId);

    if (!this.#typeDefs[index]) {
      this.#typeDefs[index] = this.#extract(this.getSiType(lookupId), index);
    }

    return this.#typeDefs[index];
  }

  #createSiDef (type: SiLookupTypeId): TypeDef {
    return {
      info: TypeDefInfo.Si,
      type: this.registry.createLookupType(type)
    };
  }

  #getLookupId (lookupId: SiLookupTypeId | string | number): number {
    if (isString(lookupId)) {
      assert(this.registry.isLookupType(lookupId), () => `PortableRegistry: Expected a lookup string type, found ${lookupId}`);

      return parseInt(lookupId.replace('Lookup', ''), 10);
    } else if (isNumber(lookupId)) {
      return lookupId;
    }

    return lookupId.toNumber();
  }

  #extract (type: SiType, lookupIndex: number): TypeDef {
    const path = [...type.path];

    // We handle ink! here as well, although we still have a different registry there
    const isPrimitivePath = !!path.length && (
      (
        path.length > 2 &&
        path[0].eq('ink_env') &&
        path[1].eq('types')
      ) ||
      INK_PRIMITIVE_ALWAYS.includes(path[path.length - 1].toString())
    );
    let typeDef: TypeDef;

    try {
      if (isPrimitivePath) {
        typeDef = this.#extractPrimitivePath(lookupIndex, type);
      } else if (type.def.isArray) {
        typeDef = this.#extractArray(lookupIndex, type.def.asArray);
      } else if (type.def.isCompact) {
        typeDef = this.#extractCompact(lookupIndex, type.def.asCompact);
      } else if (type.def.isComposite) {
        typeDef = this.#extractComposite(lookupIndex, type.def.asComposite);
      } else if (type.def.isHistoricMetaCompat) {
        typeDef = { ...getTypeDef(type.def.asHistoricMetaCompat), isFromSi: true };
      } else if (type.def.isPrimitive) {
        typeDef = this.#extractPrimitive(lookupIndex, type);
      } else if (type.def.isSequence) {
        typeDef = this.#extractSequence(lookupIndex, type.def.asSequence);
      } else if (type.def.isTuple) {
        typeDef = this.#extractTuple(lookupIndex, type.def.asTuple);
      } else if (type.def.isVariant) {
        typeDef = this.#extractVariant(lookupIndex, type, type.def.asVariant);
      } else {
        throw new Error(`Invalid type at index ${lookupIndex}: No handler for ${type.def.toString()}`);
      }
    } catch (error) {
      throw new Error(`PortableRegistry: Error extracting ${stringify(type)}: ${(error as Error).message}`);
    }

    const displayName = path.pop()?.toString();

    return {
      ...(displayName
        ? { displayName }
        : {}
      ),
      ...(path.length > 1
        ? { namespace: path.map((s) => s.toString()).join('::') }
        : {}
      ),
      ...typeDef
    };
  }

  #extractArray (lookupIndex: number, { len: length, type }: SiTypeDefArray): TypeDef {
    assert(!length || length.toNumber() <= 256, 'PortableRegistry: Only support for [Type; <length>], where length <= 256');

    return {
      info: TypeDefInfo.VecFixed,
      length: length.toNumber(),
      sub: this.#createSiDef(type),
      type: this.registry.createLookupType(lookupIndex)
    };
  }

  #extractCompact (lookupIndex: number, { type }: SiTypeDefCompact): TypeDef {
    return {
      info: TypeDefInfo.Compact,
      sub: this.#createSiDef(type),
      type: this.registry.createLookupType(lookupIndex)
    };
  }

  #extractComposite (lookupIndex: number, { fields }: SiTypeDefComposite): TypeDef {
    return this.#extractFields(lookupIndex, fields);
  }

  #extractFields (lookupIndex: number, fields: SiField[]): TypeDef {
    const [isStruct, isTuple] = fields.reduce(([isAllNamed, isAllUnnamed], { name }) => ([
      isAllNamed && name.isSome,
      isAllUnnamed && name.isNone
    ]),
    [true, true]);

    assert(isTuple || isStruct, 'PortableRegistry: Invalid fields type detected, expected either Tuple or Struct');

    if (isTuple) {
      if (fields.length === 0) {
        return {
          info: TypeDefInfo.Null,
          type: 'Null'
        };
      } else if (fields.length === 1) {
        return {
          ...this.#createSiDef(fields[0].type),
          ...(fields[0].name.isSome
            ? { name: stringCamelCase(fields[0].name.unwrap()) }
            : {}
          )
        };
      }
    }

    const sub = fields.map(({ name, type }) => ({
      ...this.#createSiDef(type),
      ...(name.isSome
        ? { name: stringCamelCase(name.unwrap()) }
        : {}
      )
    }));

    return {
      info: isTuple // Tuple check first
        ? TypeDefInfo.Tuple
        : TypeDefInfo.Struct,
      sub,
      type: `(${sub.map(({ type }) => type).join(',')})`
    };
  }

  #extractPrimitive (lookupIndex: number, type: SiType): TypeDef {
    const typeStr = type.def.asPrimitive.type.toString();

    return {
      info: TypeDefInfo.Plain,
      type: PRIMITIVE_ALIAS[typeStr] || typeStr.toLowerCase()
    };
  }

  #extractPrimitivePath (lookupIndex: number, type: SiType): TypeDef {
    return {
      info: TypeDefInfo.Plain,
      type: type.path[type.path.length - 1].toString()
    };
  }

  #extractSequence (lookupIndex: number, { type }: SiTypeDefSequence): TypeDef {
    return {
      info: TypeDefInfo.Vec,
      sub: this.#createSiDef(type),
      type: this.registry.createLookupType(lookupIndex)
    };
  }

  #extractTuple (lookupIndex: number, ids: SiTypeDefTuple): TypeDef {
    return ids.length === 1
      ? this.getTypeDef(ids[0])
      : {
        info: TypeDefInfo.Tuple,
        sub: ids.map((type) => this.#createSiDef(type)),
        type: this.registry.createLookupType(lookupIndex)
      };
  }

  #extractVariant (lookupIndex: number, { params, path }: SiType, { variants }: SiTypeDefVariant): TypeDef {
    const specialVariant = path[0].toString();

    return specialVariant === 'Option'
      ? {
        info: TypeDefInfo.Option,
        sub: this.#createSiDef(params[0].type.unwrap()),
        type: this.registry.createLookupType(lookupIndex)
      }
      : specialVariant === 'Result'
        ? {
          info: TypeDefInfo.Result,
          sub: params.map((p, index) => ({
            name: ['Ok', 'Error'][index],
            ...this.#createSiDef(p.type.unwrap())
          })),
          type: this.registry.createLookupType(lookupIndex)
        }
        : {
          info: TypeDefInfo.Enum,
          sub: this.#extractVariantSub(lookupIndex, variants),
          type: this.registry.createLookupType(lookupIndex)
        };
  }

  #extractVariantSub (lookupIndex: number, variants: SiVariant[]): TypeDef[] {
    return variants.every(({ fields }) => fields.length === 0)
      ? variants.map(({ index, name }) => ({
        index: index.toNumber(),
        info: TypeDefInfo.Plain,
        name: name.toString(),
        type: 'Null'
      }))
      : variants.map(({ fields, index, name }) => ({
        ...this.#extractFields(lookupIndex, fields),
        index: index.toNumber(),
        name: name.toString()
      }));
  }
}
