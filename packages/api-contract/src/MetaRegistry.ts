// Copyright 2017-2020 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ChainProperties, MtField, MtLookupTypeId, MtType, MtTypeDefArray, MtTypeDefVariant, MtTypeDefSequence, MtTypeDefTuple, MtVariant } from '@polkadot/types/interfaces';
import { InterfaceTypes, TypeDef, TypeDefInfo } from '@polkadot/types/types';

import { assert, isUndefined } from '@polkadot/util';
import { TypeRegistry, withTypeString } from '@polkadot/types';

// convert the offset into project-specific, index-1
export function getRegistryOffset (id: MtLookupTypeId): number {
  return id.toNumber() - 1;
}

const PRIMITIVE_ALIAS: Record<string, keyof InterfaceTypes> = {
  Str: 'Text'
};

export default class MetaRegistry extends TypeRegistry {
  public readonly typeDefs: TypeDef[] = [];

  #metaTypes: MtType[] = [];

  constructor (chainProperties?: ChainProperties) {
    super();

    if (chainProperties) {
      this.setChainProperties(chainProperties);
    }
  }

  public get metaTypes (): MtType[] {
    return this.#metaTypes;
  }

  public setMetaTypes (metaTypes: MtType[]): void {
    this.#metaTypes = metaTypes;
  }

  public getTypeDef (id: MtLookupTypeId): TypeDef {
    const offset = getRegistryOffset(id);
    let typeDef = this.typeDefs[offset];

    if (!typeDef) {
      typeDef = this.#extract(this.#getMetaType(id), id);

      this.typeDefs[offset] = typeDef;

      // Here we protect against the following cases
      //   - No displayName present, these are generally known primitives
      //   - displayName === type, these generate circular references
      //   - displayName Option & type Option<...something...>
      if (typeDef.displayName && !(typeDef.type === typeDef.displayName || typeDef.type.startsWith(`${typeDef.displayName}<`))) {
        this.register({ [typeDef.displayName]: typeDef.type });
      }
    }

    return typeDef;
  }

  #getMetaType = (id: MtLookupTypeId): MtType => {
    const type = this.metaTypes[getRegistryOffset(id)];

    assert(!isUndefined(type), `getMetaType:: Unable to find ${id.toNumber()} in type values`);

    return this.createType('MtType', type);
  }

  #extract = (type: MtType, id: MtLookupTypeId): TypeDef => {
    const path = [...type.path];
    let typeDef: Omit<TypeDef, 'type'>;

    if (type.path.join('::').startsWith('ink_env::types::') || type.def.isPrimitive) {
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
        ? { params: type.params.map((id) => this.getTypeDef(id)) }
        : {}
      ),
      ...typeDef
    });
  }

  #extractArray = ({ len: length, type }: MtTypeDefArray): Omit<TypeDef, 'type'> => {
    assert(!length || length.toNumber() <= 256, 'ContractRegistry: Only support for [Type; <length>], where length > 256');

    return {
      info: TypeDefInfo.VecFixed,
      length: length.toNumber(),
      sub: this.getTypeDef(type)
    };
  }

  #extractFields = (fields: MtField[]): Omit<TypeDef, 'type'> => {
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
        ...this.getTypeDef(type),
        ...(name.isSome ? { name: name.unwrap().toString() } : {})
      };
    });

    return isTuple && sub.length === 1
      ? sub[0]
      : { info, sub };
  }

  #extractPrimitive = (type: MtType): TypeDef => {
    if (type.def.isPrimitive) {
      const typeStr = type.def.asPrimitive.type.toString();

      return {
        info: TypeDefInfo.Plain,
        // FIXME This should not be as a blanket toLowerCase
        type: PRIMITIVE_ALIAS[typeStr] || typeStr.toLowerCase()
      };
    } else if (type.path.length > 1) {
      return {
        info: TypeDefInfo.Plain,
        type: type.path[type.path.length - 1].toString()
      };
    }

    throw new Error('Invalid primitive type');
  }

  #extractSequence = ({ type }: MtTypeDefSequence, id: MtLookupTypeId): Omit<TypeDef, 'type'> => {
    assert(!!type, `ContractRegistry: Invalid sequence type found at id ${id.toString()}`);

    return {
      info: TypeDefInfo.Vec,
      sub: this.getTypeDef(type)
    };
  }

  #extractTuple = (ids: MtTypeDefTuple): Omit<TypeDef, 'type'> => {
    return ids.length === 1
      ? this.getTypeDef(ids[0])
      : {
        info: TypeDefInfo.Tuple,
        sub: ids.map((id) => this.getTypeDef(id))
      };
  }

  #extractVariant = ({ variants }: MtTypeDefVariant, id: MtLookupTypeId): Omit<TypeDef, 'type'> => {
    const { params, path } = this.#getMetaType(id);
    const specialVariant = path[0].toString();

    if (specialVariant === 'Option') {
      return {
        info: TypeDefInfo.Option,
        sub: this.getTypeDef(params[0])
      };
    } else if (specialVariant === 'Result') {
      return {
        info: TypeDefInfo.Result,
        sub: params.map((param, index) => ({
          name: ['Ok', 'Error'][index],
          ...this.getTypeDef(param)
        }))
      };
    }

    return {
      info: TypeDefInfo.Enum,
      sub: this.#extractVariantSub(variants)
    };
  }

  #extractVariantSub = (variants: MtVariant[]): TypeDef[] => {
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
