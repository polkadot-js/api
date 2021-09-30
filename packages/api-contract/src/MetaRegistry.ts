// Copyright 2017-2021 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ChainProperties, ContractDisplayName, Si0Field, Si0LookupTypeId, Si0Type, Si0TypeDefArray, Si0TypeDefSequence, Si0TypeDefTuple, Si0TypeDefVariant, Si0Variant } from '@polkadot/types/interfaces';
import type { InterfaceTypes, TypeDef } from '@polkadot/types/types';

import { TypeDefInfo, TypeRegistry, withTypeString } from '@polkadot/types';
import { assert, isUndefined } from '@polkadot/util';

interface PartialTypeSpec {
  readonly type: Si0LookupTypeId;
  readonly displayName?: ContractDisplayName;
}

// convert the offset into project-specific, index-1
export function getRegistryOffset (id: Si0LookupTypeId, typeOffset: number): number {
  return id.toNumber() - typeOffset;
}

const PRIMITIVE_ALIAS: Record<string, keyof InterfaceTypes> = {
  Char: 'u32', // Rust char is 4-bytes
  Str: 'Text'
};

const PRIMITIVE_ALWAYS = ['AccountId', 'AccountIndex', 'Address', 'Balance'];

// TODO Replace usages with PortableRegistry
export class MetaRegistry extends TypeRegistry {
  public readonly metaTypeDefs: TypeDef[] = [];

  public readonly typeOffset;

  #siTypes: Si0Type[] = [];

  constructor (metadataVersion: string, chainProperties?: ChainProperties) {
    super();

    const [major, minor] = metadataVersion.split('.').map((n) => parseInt(n, 10));

    // type indexes are 1-based pre 0.7 and 0-based post
    this.typeOffset = (major === 0 && minor < 7) ? 1 : 0;

    if (chainProperties) {
      this.setChainProperties(chainProperties);
    }
  }

  public setMetaTypes (metaTypes: Si0Type[]): void {
    this.#siTypes = metaTypes;
  }

  public getMetaTypeDef (typeSpec: PartialTypeSpec): TypeDef {
    const offset = getRegistryOffset(typeSpec.type, this.typeOffset);
    let typeDef = this.metaTypeDefs[offset];

    if (!typeDef) {
      typeDef = this.#extract(this.#getMetaType(typeSpec.type), typeSpec.type);

      this.metaTypeDefs[offset] = typeDef;
    }

    if (typeSpec.displayName && typeSpec.displayName.length) {
      const displayName = typeSpec.displayName[typeSpec.displayName.length - 1].toString();

      if (!typeDef.type.startsWith(displayName)) {
        typeDef = {
          ...typeDef,
          displayName,
          type: PRIMITIVE_ALWAYS.includes(displayName)
            ? displayName
            : typeDef.type
        };
      }
    }

    // Here we protect against the following cases
    //   - No displayName present, these are generally known primitives
    //   - displayName === type, these generate circular references
    //   - displayName Option & type Option<...something...>
    if (typeDef.displayName && !this.hasType(typeDef.displayName) && !(typeDef.type === typeDef.displayName || typeDef.type.startsWith(`${typeDef.displayName}<`))) {
      this.register({ [typeDef.displayName]: typeDef.type });
    }

    return typeDef;
  }

  #getMetaType = (id: Si0LookupTypeId): Si0Type => {
    const type = this.#siTypes[getRegistryOffset(id, this.typeOffset)];

    assert(!isUndefined(type), () => `getMetaType:: Unable to find ${id.toNumber()} in type values`);

    return this.createType('Si0Type', type);
  }

  #extract = (type: Si0Type, id: Si0LookupTypeId): TypeDef => {
    const path = [...type.path];
    const isPrimitivePath = !!path.length && (
      (path.length > 2 && path[0].eq('ink_env') && path[1].eq('types')) ||
      PRIMITIVE_ALWAYS.includes(path[path.length - 1].toString())
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
      throw new Error(`Invalid ink! type at index ${id.toString()}`);
    }

    const displayName = path.pop()?.toString();

    return withTypeString(this, {
      ...(displayName
        ? { displayName }
        : {}
      ),
      ...(path.length > 1
        ? { namespace: path.map((s) => s.toString()).join('::') }
        : {}
      ),
      ...(type.params.length > 0
        ? { sub: type.params.map((type) => this.getMetaTypeDef({ type })) }
        : {}
      ),
      ...typeDef
    });
  }

  #extractArray = ({ len: length, type }: Si0TypeDefArray): Omit<TypeDef, 'type'> => {
    assert(!length || length.toNumber() <= 256, 'MetaRegistry: Only support for [Type; <length>], where length <= 256');

    return {
      info: TypeDefInfo.VecFixed,
      length: length.toNumber(),
      sub: this.getMetaTypeDef({ type })
    };
  }

  #extractFields = (fields: Si0Field[]): Omit<TypeDef, 'type'> => {
    const [isStruct, isTuple] = fields.reduce(([isAllNamed, isAllUnnamed], { name }) => ([
      isAllNamed && name.isSome,
      isAllUnnamed && name.isNone
    ]),
    [true, true]);

    assert(isTuple || isStruct, 'Invalid fields type detected, expected either Tuple or Struct');

    const sub = fields.map(({ name, type }) => ({
      ...this.getMetaTypeDef({ type }),
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

  #extractPrimitive = (type: Si0Type): TypeDef => {
    const typeStr = type.def.asPrimitive.type.toString();

    return {
      info: TypeDefInfo.Plain,
      type: PRIMITIVE_ALIAS[typeStr] || typeStr.toLowerCase()
    };
  }

  #extractPrimitivePath = (type: Si0Type): TypeDef => {
    return {
      info: TypeDefInfo.Plain,
      type: type.path[type.path.length - 1].toString()
    };
  }

  #extractSequence = ({ type }: Si0TypeDefSequence, id: Si0LookupTypeId): Omit<TypeDef, 'type'> => {
    assert(!!type, () => `ContractRegistry: Invalid sequence type found at id ${id.toString()}`);

    return {
      info: TypeDefInfo.Vec,
      sub: this.getMetaTypeDef({ type })
    };
  }

  #extractTuple = (ids: Si0TypeDefTuple): Omit<TypeDef, 'type'> => {
    return ids.length === 1
      ? this.getMetaTypeDef({ type: ids[0] })
      : {
        info: TypeDefInfo.Tuple,
        sub: ids.map((type) => this.getMetaTypeDef({ type }))
      };
  }

  #extractVariant = ({ variants }: Si0TypeDefVariant, id: Si0LookupTypeId): Omit<TypeDef, 'type'> => {
    const { params, path } = this.#getMetaType(id);
    const specialVariant = path[0].toString();

    return specialVariant === 'Option'
      ? {
        info: TypeDefInfo.Option,
        sub: this.getMetaTypeDef({ type: params[0] })
      }
      : specialVariant === 'Result'
        ? {
          info: TypeDefInfo.Result,
          sub: params.map((type, index) => ({
            name: ['Ok', 'Error'][index],
            ...this.getMetaTypeDef({ type })
          }))
        }
        : {
          info: TypeDefInfo.Enum,
          sub: this.#extractVariantSub(variants)
        };
  }

  #extractVariantSub = (variants: Si0Variant[]): TypeDef[] => {
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
      : variants.map(({ fields, name }) => withTypeString(this, {
        ...this.#extractFields(fields),
        name: name.toString()
      }));
  }
}
