// Copyright 2017-2020 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { InkProject, MtField, MtLookupTypeId, MtType, MtTypeDefArray, MtTypeDefVariant, MtTypeDefSlice, MtTypeDefTuple, MtVariant } from '@polkadot/types/interfaces';
import { AnyJson, Registry, TypeDef, TypeDefInfo } from '@polkadot/types/types';

import { assert, isUndefined } from '@polkadot/util';
import { withTypeString } from '@polkadot/types';
import { u32 as U32 } from '@polkadot/types/primitive';

// convert the offset into project-specific, index-1
export function getRegistryOffset (id: MtLookupTypeId): number {
  return id.toNumber() - 1;
}

function isPrimitiveContractType (inkType: MtType) {
  const inkEnvTypes = inkType.path
    .map((segment) => segment.toString())
    .slice(0, inkType.path.length - 1)
    .join('::');

  return inkEnvTypes === 'ink_env::types';
}

export default class ContractRegistry {
  public typeDefs: TypeDef[] = [];

  public registry: Registry;

  public project: InkProject;

  public json: AnyJson;

  constructor (registry: Registry, json: AnyJson) {
    this.registry = registry;
    this.json = json;
    this.project = registry.createType('InkProject', json);

    // Generate TypeDefs for each provided registry type
    this.project.types.forEach((_, index) => this.setTypeDef(new U32(this.registry, index + 1)));
  }

  public getContractType (id: MtLookupTypeId): MtType {
    const offset = getRegistryOffset(id);
    const type = this.project.types[offset];

    assert(!isUndefined(type), `getContractType:: Unable to find ${id.toNumber()} in type values`);

    return this.registry.createType('MtType', type);
  }

  public getContractTypes (ids: MtLookupTypeId[]): MtType[] {
    return ids.map((id): MtType => this.getContractType(id));
  }

  public hasTypeDefAt (id: MtLookupTypeId): boolean {
    return !!this.typeDefs[getRegistryOffset(id)];
  }

  public typeDefAt (id: MtLookupTypeId, extra: Pick<TypeDef, never> = {}): TypeDef {
    if (!this.hasTypeDefAt(id)) {
      this.setTypeDef(id);
    }

    return {
      ...this.typeDefs[getRegistryOffset(id)],
      ...extra
    };
  }

  public typeDefsAt (ids: MtLookupTypeId[]): TypeDef[] {
    return ids.map((id) => this.typeDefAt(id));
  }

  public setTypeDef (id: MtLookupTypeId): void {
    this.typeDefs[getRegistryOffset(id)] = this.resolveType(this.getContractType(id), id) as TypeDef;
  }

  private resolveType (inkType: MtType, id: MtLookupTypeId): Pick<TypeDef, never> {
    const path = [...inkType.path];
    let typeDef;

    if (isPrimitiveContractType(inkType) || inkType.def.isPrimitive) {
      typeDef = this.resolvePrimitive(inkType);
    } else if (inkType.def.isComposite) {
      typeDef = this.resolveFields(inkType.def.asComposite.fields);
    } else if (inkType.def.isVariant) {
      typeDef = this.resolveVariant(inkType.def.asVariant, id);
    } else if (inkType.def.isArray) {
      typeDef = this.resolveArray(inkType.def.asArray);
    } else if (inkType.def.isSequence) {
      typeDef = this.resolveSequence(inkType.def.asSequence, id);
    } else if (inkType.def.isSlice) {
      typeDef = this.resolveSlice(inkType.def.asSlice, id);
    } else if (inkType.def.isTuple) {
      typeDef = this.resolveTuple(inkType.def.asTuple);
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
        ? { params: this.typeDefsAt(inkType.params) }
        : {}
      ),
      ...typeDef
    });
  }

  private resolveVariant ({ variants }: MtTypeDefVariant, id: MtLookupTypeId): Pick<TypeDef, never> {
    const { params, path } = this.getContractType(id);
    const specialVariant = path[0].toString();

    if (specialVariant === 'Option') {
      return {
        info: TypeDefInfo.Option,
        sub: this.typeDefAt(params[0])
      };
    } else if (specialVariant === 'Result') {
      return {
        info: TypeDefInfo.Result,
        sub: params.map((param, index) => ({
          name: ['Ok', 'Error'][index],
          ...this.typeDefAt(param)
        }))
      };
    }

    return {
      info: TypeDefInfo.Enum,
      sub: this.resolveVariantSub(variants)
    };
  }

  private resolveVariantSub (variants: MtVariant[]): Pick<TypeDef, any>[] {
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

    return variants.map(({ fields, name }) => ({
      ...this.resolveFields(fields),
      name: name.toString()
    }));
  }

  private resolveFields (fields: MtField[]): Pick<TypeDef, any> {
    const [isStruct, isTuple] = fields.reduce(([isAllNamed, isAllUnnamed], { name }) => ([
      isAllNamed && name.isSome,
      isAllUnnamed && name.isNone
    ]),
    [true, true]);

    let info;

    if (isStruct) {
      info = TypeDefInfo.Struct;
    } else if (isTuple) {
      info = TypeDefInfo.Tuple;
    } else {
      throw new Error('Invalid fields type detected, expected either Tuple or Struct');
    }

    const sub = fields.map(({ name, type }) => {
      return {
        ...this.typeDefAt(type),
        ...(name.isSome ? { name: name.unwrap().toString() } : {})
      };
    });

    return isTuple && sub.length === 1
      ? sub[0]
      : { info, sub };
  }

  private resolveArray ({ len: length, type }: MtTypeDefArray): Pick<TypeDef, never> {
    assert(!length || length.toNumber() <= 256, 'ContractRegistry: Only support for [Type; <length>], where length > 256');

    return {
      info: TypeDefInfo.VecFixed,
      length: length.toNumber(),
      sub: this.typeDefAt(type)
    };
  }

  private resolveSequence ({ type }: MtTypeDefSlice, id: MtLookupTypeId): Pick<TypeDef, never> {
    assert(!!type, `ContractRegistry: Invalid sequence type found at id ${id.toString()}`);

    return {
      info: TypeDefInfo.Vec,
      sub: this.typeDefAt(type)
    };
  }

  private resolveSlice ({ type }: MtTypeDefSlice, id: MtLookupTypeId): Pick<TypeDef, never> {
    assert(!!type, `ContractRegistry: Invalid slice type found at id ${id.toString()}`);

    return {
      info: TypeDefInfo.Vec,
      sub: this.typeDefAt(type)
    };
  }

  private resolveTuple (ids: MtTypeDefTuple): Pick<TypeDef, never> {
    return ids.length === 1
      ? this.typeDefAt(ids[0])
      : {
        info: TypeDefInfo.Tuple,
        sub: ids.map((id) => this.typeDefAt(id))
      };
  }

  private resolvePrimitive (inkType: MtType): Pick<TypeDef, never> {
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
