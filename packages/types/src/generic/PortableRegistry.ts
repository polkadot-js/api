// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Vec } from '../codec/Vec';
import type { SiField, SiLookupTypeId, SiType, SiTypeDefArray, SiTypeDefCompact, SiTypeDefSequence, SiTypeDefTuple, SiTypeDefVariant, SiVariant } from '../interfaces/scaleInfo';
import type { Codec, Registry, TypeDef, WrappedConstructor } from '../types';

import { assert } from '@polkadot/util';

import { DoNotConstruct } from '../codec/DoNotConstruct';
import { Struct } from '../codec/Struct';
import { getTypeClass } from '../create/createClass';
import { withTypeString } from '../create/encodeTypes';
import { getTypeDef } from '../create/getTypeDef';
import { TypeDefInfo } from '../types';

interface CreateOptions {
  blockHash?: Uint8Array | string | null;
}

const PRIMITIVE_ALIAS: Record<string, string> = {
  Char: 'u32', // Rust char is 4-bytes
  Str: 'Text'
};

const INK_PRIMITIVE_ALWAYS = ['AccountId', 'AccountIndex', 'Address', 'Balance'];

export class GenericPortableRegistry extends Struct {
  #classes: Record<number, WrappedConstructor> = {};
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
   * @description creates a type from the id
   */
  createType <T extends Codec> (typeIndex: SiLookupTypeId, params: unknown[], { blockHash }: CreateOptions = {}): T {
    const instance = new (this.getClass<T>(typeIndex).Clazz)(this.registry, ...params);

    if (blockHash) {
      instance.createdAtHash = this.registry.createType('Hash', blockHash);
    }

    return instance;
  }

  getClass <T extends Codec = Codec> (lookupId: SiLookupTypeId): WrappedConstructor<T> {
    const index = lookupId.toNumber();

    if (!this.#classes[index]) {
      // since we may have recursive lookups, fill in empty details as a start
      this.#classes[index] = { Clazz: DoNotConstruct, isWrapped: true };
      this.#classes[index].Clazz = getTypeClass(this.registry, this.getTypeDef(lookupId));
    }

    return this.#classes[index] as WrappedConstructor<T>;
  }

  /**
   * @description Finds a specific type in the registry
   */
  getSiType (lookupId: SiLookupTypeId): SiType {
    const type = this.types[lookupId.toNumber()];

    assert(type, () => `PortableRegistry: Unable to find type with lookupId ${lookupId.toNumber()}`);

    return type;
  }

  /**
   * @description Lookup the type definition for the index
   */
  getTypeDef (lookupId: SiLookupTypeId): TypeDef {
    const index = lookupId.toNumber();

    if (!this.#typeDefs[index]) {
      // since we may have recursive lookups, fill in empty details as a start
      this.#typeDefs[index] = { info: TypeDefInfo.DoNotConstruct, type: 'DoNotConstruct' };

      const siType = this.getSiType(lookupId);

      Object.entries(this.#extract(siType, lookupId)).forEach(([k, v]): void => {
        /* eslint-disable */
        // @ts-ignore Yes... these are crappy, however we do go through key/values, so all safe
        this.#typeDefs[index][k] = v;
        /* eslint-enable */
      });
    }

    return this.#typeDefs[index];
  }

  #extract (type: SiType, lookupId: SiLookupTypeId): TypeDef {
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
    let typeDef: Omit<TypeDef, 'type'>;

    if (isPrimitivePath) {
      typeDef = this.#extractPrimitivePath(type);
    } else if (type.def.isArray) {
      typeDef = this.#extractArray(type.def.asArray);
    } else if (type.def.isCompact) {
      typeDef = this.#extractCompact(type.def.asCompact);
    } else if (type.def.isComposite) {
      typeDef = this.#extractFields(type.def.asComposite.fields);
    } else if (type.def.isHistoricMetaCompat) {
      typeDef = getTypeDef(type.def.asHistoricMetaCompat);
    } else if (type.def.isPhantom) {
      typeDef = this.#extractPhantom();
    } else if (type.def.isPrimitive) {
      typeDef = this.#extractPrimitive(type);
    } else if (type.def.isSequence) {
      typeDef = this.#extractSequence(type.def.asSequence, lookupId);
    } else if (type.def.isTuple) {
      typeDef = this.#extractTuple(type.def.asTuple);
    } else if (type.def.isVariant) {
      typeDef = this.#extractVariant(type.def.asVariant, lookupId);
    } else {
      throw new Error(`PortableRegistry: Invalid type at index ${lookupId.toNumber()}: No handler for ${type.def.toString()}`);
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
        ? { sub: type.params.filter(({ type }) => type.isSome).map(({ type }) => this.getTypeDef(type.unwrap())) }
        : {}
      ),
      ...typeDef
    });
  }

  #extractArray ({ len: length, type }: SiTypeDefArray): Omit<TypeDef, 'type'> {
    assert(!length || length.toNumber() <= 256, 'PortableRegistry: Only support for [Type; <length>], where length <= 256');

    return {
      info: TypeDefInfo.VecFixed,
      length: length.toNumber(),
      sub: this.getTypeDef(type)
    };
  }

  #extractCompact ({ type }: SiTypeDefCompact): Omit<TypeDef, 'type'> {
    return {
      info: TypeDefInfo.Compact,
      sub: this.getTypeDef(type)
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
      ...this.getTypeDef(type),
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

  #extractPhantom (): TypeDef {
    return {
      info: TypeDefInfo.Null,
      type: 'Null'
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

  #extractSequence ({ type }: SiTypeDefSequence, lookupId: SiLookupTypeId): Omit<TypeDef, 'type'> {
    assert(!!type, () => `ContractRegistry: Invalid sequence type found at id ${lookupId.toNumber()}`);

    return {
      info: TypeDefInfo.Vec,
      sub: this.getTypeDef(type)
    };
  }

  #extractTuple (ids: SiTypeDefTuple): Omit<TypeDef, 'type'> {
    return ids.length === 1
      ? this.getTypeDef(ids[0])
      : {
        info: TypeDefInfo.Tuple,
        sub: ids.map((type) => this.getTypeDef(type))
      };
  }

  #extractVariant ({ variants }: SiTypeDefVariant, lookupId: SiLookupTypeId): Omit<TypeDef, 'type'> {
    const { params, path } = this.getSiType(lookupId);
    const specialVariant = path[0].toString();

    return specialVariant === 'Option'
      ? {
        info: TypeDefInfo.Option,
        sub: this.getTypeDef(params[0].type.unwrap())
      }
      : specialVariant === 'Result'
        ? {
          info: TypeDefInfo.Result,
          sub: params.map((p, index) => ({
            name: ['Ok', 'Error'][index],
            ...this.getTypeDef(p.type.unwrap())
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
