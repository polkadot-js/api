// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Vec } from '../codec/Vec';
import type { PortableType } from '../interfaces/metadata';
import type { SiField, SiLookupTypeId, SiType, SiTypeDefArray, SiTypeDefCompact, SiTypeDefComposite, SiTypeDefSequence, SiTypeDefTuple, SiTypeDefVariant, SiVariant } from '../interfaces/scaleInfo';
import type { Codec, Registry, TypeDef, WrappedConstructor } from '../types';

import { assert, isNumber, isString, stringCamelCase } from '@polkadot/util';

import { Option } from '../codec/Option';
import { Struct } from '../codec/Struct';
import { getTypeClass } from '../create/createClass';
import { withTypeString } from '../create/encodeTypes';
import { getTypeDef } from '../create/getTypeDef';
import { TypeDefInfo } from '../types';

interface CreateOptions {
  blockHash?: Uint8Array | string | null;
  isOptional?: boolean;
}

const PRIMITIVE_ALIAS: Record<string, string> = {
  Char: 'u32', // Rust char is 4-bytes
  Str: 'Text'
};

const INK_PRIMITIVE_ALWAYS = ['AccountId', 'AccountIndex', 'Address', 'Balance'];

const LOOKUP_PREFIX = '__lookup_';

export class GenericPortableRegistry extends Struct {
  #classes: Record<number, WrappedConstructor> = {};
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
   * @description Returns tru if the type is in a Compat format
   */
  public isSiString (value: string): boolean {
    return value.startsWith(LOOKUP_PREFIX);
  }

  /**
   * @description Creates a lookup string from the supplied id
   */
  public createSiString (lookupId: SiLookupTypeId | number): string {
    return `${LOOKUP_PREFIX}${lookupId.toString()}`;
  }

  /**
   * @description creates a type from the id
   */
  public createType <T extends Codec> (lookupId: SiLookupTypeId | string | number, params: unknown[], { blockHash, isOptional }: CreateOptions = {}): T {
    const { Clazz } = this.getClass<T>(lookupId);
    const instance = new (isOptional ? Option.with(Clazz) : Clazz)(this.registry, ...params);

    if (blockHash) {
      instance.createdAtHash = this.registry.createType('Hash', blockHash);
    }

    return instance as T;
  }

  /**
   * @description Returns a class from the specified id
   */
  public getClass <T extends Codec = Codec> (lookupId: SiLookupTypeId | string | number): WrappedConstructor<T> {
    const index = this.#getSiIndex(lookupId);

    if (!this.#classes[index]) {
      // since we may have recursive lookups, fill in empty details as a start
      this.#classes[index] = getTypeClass(this.registry, this.getTypeDef(lookupId));
    }

    return this.#classes[index] as WrappedConstructor<T>;
  }

  /**
   * @description Finds a specific type in the registry
   */
  public getSiType (lookupId: SiLookupTypeId | string | number): SiType {
    const found = this.types[this.#getSiIndex(lookupId)];

    assert(found, () => `PortableRegistry: Unable to find type with lookupId ${lookupId.toString()}`);

    return found.type;
  }

  /**
   * @description Lookup the type definition for the index
   */
  public getTypeDef (lookupId: SiLookupTypeId | string | number): TypeDef {
    const index = this.#getSiIndex(lookupId);

    if (!this.#typeDefs[index]) {
      // since we may have recursive lookups, fill in empty details as a start
      this.#typeDefs[index] = { info: TypeDefInfo.DoNotConstruct, type: this.createSiString(index) };

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

  #getSiIndex (lookupId: SiLookupTypeId | string | number): number {
    if (isString(lookupId)) {
      assert(this.isSiString(lookupId), () => `PortableRegistry: Expected a lookup string type, found ${lookupId}`);

      return parseInt(lookupId.replace(LOOKUP_PREFIX, ''), 10);
    } else if (isNumber(lookupId)) {
      return lookupId;
    }

    return lookupId.toNumber();
  }

  #extract (type: SiType, lookupId: SiLookupTypeId | string | number): TypeDef {
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
      typeDef = this.#extractComposite(type.def.asComposite);
    } else if (type.def.isHistoricMetaCompat) {
      typeDef = getTypeDef(type.def.asHistoricMetaCompat);
    } else if (type.def.isPrimitive) {
      typeDef = this.#extractPrimitive(type);
    } else if (type.def.isSequence) {
      typeDef = this.#extractSequence(type.def.asSequence, lookupId);
    } else if (type.def.isTuple) {
      typeDef = this.#extractTuple(type.def.asTuple);
    } else if (type.def.isVariant) {
      typeDef = this.#extractVariant(type.def.asVariant, lookupId);
    } else {
      throw new Error(`PortableRegistry: Invalid type at index ${lookupId.toString()}: No handler for ${type.def.toString()}`);
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

  #extractComposite ({ fields }: SiTypeDefComposite): Omit<TypeDef, 'type'> {
    return this.#extractFields(fields);
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
        ? { name: stringCamelCase(name.unwrap()) }
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

  #extractSequence ({ type }: SiTypeDefSequence, lookupId: SiLookupTypeId | string | number): Omit<TypeDef, 'type'> {
    assert(!!type, () => `ContractRegistry: Invalid sequence type found at id ${lookupId.toString()}`);

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

  #extractVariant ({ variants }: SiTypeDefVariant, lookupId: SiLookupTypeId | string | number): Omit<TypeDef, 'type'> {
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
      ? variants.map(({ index, name }) => ({
        index: index.toNumber(),
        info: TypeDefInfo.Plain,
        name: name.toString(),
        type: 'Null'
      }))
      : variants.map(({ fields, index, name }) => withTypeString({
        ...this.#extractFields(fields),
        index: index.toNumber(),
        name: name.toString()
      }));
  }
}
