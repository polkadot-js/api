// Copyright 2017-2020 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ChainProperties, MtField, MtLookupTypeId, MtType, MtTypeDefArray, MtTypeDefVariant, MtTypeDefSequence, MtTypeDefTuple, MtVariant } from '@polkadot/types/interfaces';
import { TypeDef, TypeDefInfo } from '@polkadot/types/types';

import { assert, isUndefined } from '@polkadot/util';
import { TypeRegistry, withTypeString } from '@polkadot/types';

// convert the offset into project-specific, index-1
export function getRegistryOffset (id: MtLookupTypeId): number {
  return id.toNumber() - 1;
}

export default abstract class MetaRegistry extends TypeRegistry {
  public readonly typeDefs: TypeDef[] = [];

  constructor (chainProperties?: ChainProperties) {
    super();

    if (chainProperties) {
      this.setChainProperties(chainProperties);
    }
  }

  public get metaTypes (): MtType[] {
    throw new Error('MetaRegistry needs to implement metaTypes');
  }

  #getMetaType = (id: MtLookupTypeId): MtType => {
    const type = this.metaTypes[getRegistryOffset(id)];

    assert(!isUndefined(type), `getMetaType:: Unable to find ${id.toNumber()} in type values`);

    return this.createType('MtType', type);
  }

  public getTypeDef (id: MtLookupTypeId): TypeDef {
    const offset = getRegistryOffset(id);
    let typeDef = this.typeDefs[offset];

    if (!typeDef) {
      typeDef = this.#extractType(this.#getMetaType(id), id);

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

  #extractType = (inkType: MtType, id: MtLookupTypeId): TypeDef => {
    const path = [...inkType.path];
    let typeDef: Omit<TypeDef, 'type'>;

    if (inkType.path.join('::').startsWith('ink_env::types::') || inkType.def.isPrimitive) {
      typeDef = this.#extractPrimitive(inkType);
    } else if (inkType.def.isComposite) {
      typeDef = this.#extractFields(inkType.def.asComposite.fields);
    } else if (inkType.def.isVariant) {
      typeDef = this.#extractVariant(inkType.def.asVariant, id);
    } else if (inkType.def.isArray) {
      typeDef = this.#extractArray(inkType.def.asArray);
    } else if (inkType.def.isSequence) {
      typeDef = this.#extractSequence(inkType.def.asSequence, id);
    } else if (inkType.def.isTuple) {
      typeDef = this.#extractTuple(inkType.def.asTuple);
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
      ...(inkType.params.length > 0
        ? { params: inkType.params.map((id) => this.getTypeDef(id)) }
        : {}
      ),
      ...typeDef
    });
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

  #extractArray = ({ len: length, type }: MtTypeDefArray): Omit<TypeDef, 'type'> => {
    assert(!length || length.toNumber() <= 256, 'ContractRegistry: Only support for [Type; <length>], where length > 256');

    return {
      info: TypeDefInfo.VecFixed,
      length: length.toNumber(),
      sub: this.getTypeDef(type)
    };
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

  #extractPrimitive = (inkType: MtType): TypeDef => {
    if (inkType.def.isPrimitive) {
      return {
        info: TypeDefInfo.Plain,
        type: inkType.def.asPrimitive.type.toLowerCase()
      };
    } else if (inkType.path.length > 1) {
      return {
        info: TypeDefInfo.Plain,
        type: inkType.path[inkType.path.length - 1].toString()
      };
    }

    throw new Error('Invalid primitive type');
  }
}
