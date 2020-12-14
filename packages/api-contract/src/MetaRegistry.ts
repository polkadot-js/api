// Copyright 2017-2020 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ChainProperties, ContractDisplayName, SiField, SiLookupTypeId, SiType, SiTypeDefArray, SiTypeDefSequence, SiTypeDefTuple, SiTypeDefVariant, SiVariant } from '@polkadot/types/interfaces';
import type { InterfaceTypes, TypeDef } from '@polkadot/types/types';

import { TypeRegistry, withTypeString } from '@polkadot/types/create';
import { TypeDefInfo } from '@polkadot/types/types';
import { assert, isUndefined } from '@polkadot/util';

interface PartialTypeSpec {
  readonly type: SiLookupTypeId;
  readonly displayName?: ContractDisplayName;
}

// convert the offset into project-specific, index-1
export function getRegistryOffset (id: SiLookupTypeId): number {
  return id.toNumber() - 1;
}

const PRIMITIVE_ALIAS: Record<string, keyof InterfaceTypes> = {
  Char: 'u32', // Rust char is 4-bytes
  Str: 'Text'
};

const PRIMITIVE_ALWAYS = ['AccountId', 'AccountIndex', 'Address', 'Balance'];

export class MetaRegistry extends TypeRegistry {
  public readonly metaTypeDefs: TypeDef[] = [];

  #siTypes: SiType[] = [];

  constructor (chainProperties?: ChainProperties) {
    super();

    if (chainProperties) {
      this.setChainProperties(chainProperties);
    }
  }

  public setMetaTypes (metaTypes: SiType[]): void {
    this.#siTypes = metaTypes;
  }

  public getMetaTypeDef (typeSpec: PartialTypeSpec): TypeDef {
    const offset = getRegistryOffset(typeSpec.type);
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

  #getMetaType = (id: SiLookupTypeId): SiType => {
    const type = this.#siTypes[getRegistryOffset(id)];

    assert(!isUndefined(type), `getMetaType:: Unable to find ${id.toNumber()} in type values`);

    return this.createType('SiType', type);
  }

  #extract = (type: SiType, id: SiLookupTypeId): TypeDef => {
    const path = [...type.path];
    const pathFinal = path.length ? path[path.length - 1].toString() : '';
    let typeDef: Omit<TypeDef, 'type'>;

    if (type.path.join('::').startsWith('ink_env::types::') || PRIMITIVE_ALWAYS.includes(pathFinal)) {
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

    return withTypeString({
      ...(displayName
        ? { displayName }
        : {}
      ),
      ...(path.length > 1
        ? { namespace: path.map((segment) => segment.toString()).join('::') }
        : {}
      ),
      ...(type.params.length > 0
        ? { sub: type.params.map((type) => this.getMetaTypeDef({ type })) }
        : {}
      ),
      ...typeDef
    });
  }

  #extractArray = ({ len: length, type }: SiTypeDefArray): Omit<TypeDef, 'type'> => {
    assert(!length || length.toNumber() <= 256, 'MetaRegistry: Only support for [Type; <length>], where length > 256');

    return {
      info: TypeDefInfo.VecFixed,
      length: length.toNumber(),
      sub: this.getMetaTypeDef({ type })
    };
  }

  #extractFields = (fields: SiField[]): Omit<TypeDef, 'type'> => {
    const [isStruct, isTuple] = fields.reduce(([isAllNamed, isAllUnnamed], { name }) => ([
      isAllNamed && name.isSome,
      isAllUnnamed && name.isNone
    ]),
    [true, true]);

    let info;

    // check for tuple first (no fields may be available)
    if (isTuple) {
      info = TypeDefInfo.Tuple;
    } else if (isStruct) {
      info = TypeDefInfo.Struct;
    } else {
      throw new Error('Invalid fields type detected, expected either Tuple or Struct');
    }

    const sub = fields.map(({ name, type }) => {
      return {
        ...this.getMetaTypeDef({ type }),
        ...(name.isSome ? { name: name.unwrap().toString() } : {})
      };
    });

    return isTuple && sub.length === 1
      ? sub[0]
      : { info, sub };
  }

  #extractPrimitive = (type: SiType): TypeDef => {
    const typeStr = type.def.asPrimitive.type.toString();

    return {
      info: TypeDefInfo.Plain,
      type: PRIMITIVE_ALIAS[typeStr] || typeStr.toLowerCase()
    };
  }

  #extractPrimitivePath = (type: SiType): TypeDef => {
    return {
      info: TypeDefInfo.Plain,
      type: type.path[type.path.length - 1].toString()
    };
  }

  #extractSequence = ({ type }: SiTypeDefSequence, id: SiLookupTypeId): Omit<TypeDef, 'type'> => {
    assert(!!type, `ContractRegistry: Invalid sequence type found at id ${id.toString()}`);

    return {
      info: TypeDefInfo.Vec,
      sub: this.getMetaTypeDef({ type })
    };
  }

  #extractTuple = (ids: SiTypeDefTuple): Omit<TypeDef, 'type'> => {
    return ids.length === 1
      ? this.getMetaTypeDef({ type: ids[0] })
      : {
        info: TypeDefInfo.Tuple,
        sub: ids.map((type) => this.getMetaTypeDef({ type }))
      };
  }

  #extractVariant = ({ variants }: SiTypeDefVariant, id: SiLookupTypeId): Omit<TypeDef, 'type'> => {
    const { params, path } = this.#getMetaType(id);
    const specialVariant = path[0].toString();

    if (specialVariant === 'Option') {
      return {
        info: TypeDefInfo.Option,
        sub: this.getMetaTypeDef({ type: params[0] })
      };
    } else if (specialVariant === 'Result') {
      return {
        info: TypeDefInfo.Result,
        sub: params.map((type, index) => ({
          name: ['Ok', 'Error'][index],
          ...this.getMetaTypeDef({ type })
        }))
      };
    }

    return {
      info: TypeDefInfo.Enum,
      sub: this.#extractVariantSub(variants)
    };
  }

  #extractVariantSub = (variants: SiVariant[]): TypeDef[] => {
    const isAllUnitVariants = variants.every(({ fields }) => fields.length === 0);

    if (isAllUnitVariants) {
      return variants.map(({ discriminant, name }) => ({
        ...(
          discriminant.isSome
            ? { ext: { discriminant: discriminant.unwrap().toNumber() } }
            : {}
        ),
        info: TypeDefInfo.Plain,
        name: name.toString(),
        type: 'Null'
      }));
    }

    return variants.map(({ fields, name }) =>
      withTypeString({
        ...this.#extractFields(fields),
        name: name.toString()
      })
    );
  }
}
