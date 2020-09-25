// Copyright 2017-2020 @polkadot/api-contract authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { InkProject, MtField, MtLookupTypeId, MtType, MtTypeDefArray, MtTypeDefComposite, MtTypeDefVariant, MtTypeDefPrimitive, MtTypeDefSlice, MtTypeDefTuple, MtVariant } from '@polkadot/types/interfaces';
import { Registry, TypeDef, TypeDefInfo } from '@polkadot/types/types';

import { assert, isUndefined } from '@polkadot/util';
import { withTypeString } from '@polkadot/types';
import { u32 as U32 } from '@polkadot/types/primitive';

// const builtinMap: [(id: unknown | unknown[] | { 'array.type': unknown } | { 'slice.type': unknown }) => boolean, MetaTypeInfo][] = [
//   [(id: any) => typeof id === 'string', MetaTypeInfo.BuiltinPlain],
//   [(id: any) => Array.isArray(id), MetaTypeInfo.BuiltinTuple],
//   [(id: any) => !!((id as { 'array.type': unknown })['array.type']), MetaTypeInfo.BuiltinVecFixed],
//   [(id: any) => !!((id as { 'slice.type': unknown })['slice.type']), MetaTypeInfo.BuiltinVec]
// ];

// const typeMap: [string, MtTypeDef][] = [
//   ['fields', MtTypeDef.Composite],
//   ['variants', MtTypeDef.Variant],
//   ['len', MtTypeDef.Array],
//   ['type', MtTypeDef.Slice]
// ];

// convert the offset into project-specific, index-1
export function getRegistryOffset (id: MtLookupTypeId): number {
  return id.toNumber() - 1;
}

// extract a single ink type defintion from the project
// export function getInkType (project: InkProject, id: MtLookupTypeId): MtType {
//   const offset = getRegistryOffset(id);
//   const type = project.types[offset];

//   assert(!isUndefined(type), `getInkType:: Unable to find ${id.toNumber()} in type values`);

//   return createType('MtType', type);
// }

// // extract and array of ink type defs from the project
// export function getInkTypes (project: InkProject, ids: MtLookupTypeId[]): MtType[] {
//   return ids.map((id): MtType => getInkType(project, id));
// }

// function detectedType ({ def, id }: MetaType): MetaTypeInfo {
//   assert(!(def as MetaTypeDefUnion)['union.fields'], 'Invalid union type definition found');

//   const lookup = def === 'builtin'
//     ? builtinMap.find(([test]) => test(id))
//     : typeMap.find(([test]) => !!(def as unknown as Record<string, unknown>)[test]);

//   return lookup
//     ? lookup[1]
//     : MetaTypeInfo.Null;
// }

export default class InkRegistry {
  public typeDefs: TypeDef[] = [];

  public registry: Registry;

  public project: InkProject;

  public get json (): string {
    return JSON.stringify(this.project);
  }

  constructor (registry: Registry, project: InkProject) {
    this.registry = registry;
    this.project = project;
    // Generate TypeDefs for each provided registry type
    this.project.types.forEach((_, index): void => this.setTypeDef(new U32(this.registry, index + 1)));
  }

  public getInkType (id: MtLookupTypeId): MtType {
    const offset = getRegistryOffset(id);
    const type = this.project.types[offset];

    assert(!isUndefined(type), `getInkType:: Unable to find ${id.toNumber()} in type values`);

    return this.registry.createType('MtType', type);
  }

  // extract and array of ink type defs from the project
  public getInkTypes (ids: MtLookupTypeId[]): MtType[] {
    return ids.map((id): MtType => this.getInkType(id));
  }

  // protected _hasItemAt (index: number, variant: MetaRegistryItem): boolean {
  //   switch (variant) {
  //     case MetaRegistryItem.String:
  //       return this._strings && !!this._strings[index - 1];
  //     case MetaRegistryItem.Type:
  //       return this._types && !!this._types[index - 1];
  //     case MetaRegistryItem.TypeDef:
  //       return this.typeDefs && !!this.typeDefs[index - 1];
  //   }
  // }

  // protected _itemAt (index: number, variant: MetaRegistryItem): string | MetaType | TypeDef {
  //   assert(this._hasItemAt(index, variant), `MetaRegistry: Invalid ${variant} index ${index} found in metadata`);

  //   switch (variant) {
  //     case MetaRegistryItem.String:
  //       return this._strings[index - 1];
  //     case MetaRegistryItem.Type:
  //       return this._types[index - 1];
  //     case MetaRegistryItem.TypeDef:
  //       return this.typeDefs[index - 1];
  //   }
  // }

  // protected _itemsAt (indices: number[], variant: MetaRegistryItem): (string | MetaType | TypeDef)[] {
  //   return indices.map((index: number) => this._itemAt(index, variant));
  // }

  // protected _stringAt (index: StringIndex): string {
  //   return this._itemAt(index, MetaRegistryItem.String) as string;
  // }

  // public stringsAt (indices: StringIndex[]): string[] {
  //   return this._itemsAt(indices, MetaRegistryItem.String) as string[];
  // }

  // public typeDefAt (index: MtLookupTypeId): TypeDef {
  //   return this.
  // }

  // public typesAt (indices: TypeIndex[]): MetaType[] {
  //   return this._itemsAt(indices, MetaRegistryItem.Type) as MetaType[];
  // }

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
    this.typeDefs[getRegistryOffset(id)] = this.resolveType(this.getInkType(id), id) as TypeDef;
  }

  private resolveType (inkType: MtType, id: MtLookupTypeId): Pick<TypeDef, never> {
    const { path } = inkType;
    let typeDef;

    if (inkType.def.isComposite) {
      typeDef = this.resolveComposite(inkType.def.asComposite);
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
    } else if (inkType.def.isPrimitive) {
      typeDef = this.resolvePrimitive(inkType.def.asPrimitive);
    } else {
      // console.error(inkType);

      throw new Error(`Invalid ink! type at index ${id.toString()}`);
    }

    const displayName = path.pop()?.toString();

    const result = withTypeString({
      ...(displayName ? { displayName } : {}),
      ...(path.length > 1 ? { namespace: path
        .map((segment) => segment.toString())
        .join('::') } : {}),
      // name,
      // namespace: inkType.path.slice(0, inkType.path.length - 1).join('::'),
      ...(inkType.params.length > 0 ? { params: this.typeDefsAt(inkType.params) } : {}),
      ...typeDef
    });

    // console.log(result);

    return result;
  }

  private resolveComposite ({ fields }: MtTypeDefComposite): Pick<TypeDef, never> {
    return this.resolveFields(fields);
  }

  private resolveVariant ({ variants }: MtTypeDefVariant, id: MtLookupTypeId): Pick<TypeDef, never> {
    const { params, path } = this.getInkType(id);
    const specialVariant = path[0].toString();

    switch (specialVariant) {
      case 'Option':
        return this.resolveOption(params);

      case 'Result':
        return this.resolveResult(params);

      default: {
        return {
          info: TypeDefInfo.Enum,
          sub: this.resolveVariantSub(variants)
        };
      }
    }
  }

  private resolveOption ([param]: MtLookupTypeId[]): Pick<TypeDef, never> {
    return {
      info: TypeDefInfo.Option,
      sub: this.typeDefAt(param)
    };
  }

  private resolveResult (params: MtLookupTypeId[]): Pick<TypeDef, never> {
    return {
      info: TypeDefInfo.Result,
      sub: params.map((param, index) => ({
        name: ['Ok', 'Error'][index],
        ...this.typeDefAt(param)
      }))
    };
  }

  private resolveVariantSub (variants: MtVariant[]): Pick<TypeDef, any>[] {
    const isAllUnitVariants = variants.reduce(
      (result, { fields }) => result && fields.length === 0,
      true
    );

    if (isAllUnitVariants) {
      return variants.map(
        ({ discriminant, name }) => {
          return {
            ...(
              discriminant.isSome
                ? { ext: { discriminant: discriminant.unwrap().toNumber() } }
                : {}
            ),
            info: TypeDefInfo.Plain,
            name: name.toString(),
            type: 'Null'
          };
        }
      );
    }

    return variants.map(
      ({ fields, name }) => {
        return {
          ...this.resolveFields(fields),
          name: name.toString()
        };
      }
    );
  }

  private resolveFields (fields: MtField[]): Pick<TypeDef, any> {
    const [isStruct, isTuple] = fields.reduce(
      ([isAllNamed, isAllUnnamed], { name }) => ([
        isAllNamed && name.isSome,
        isAllUnnamed && name.isNone
      ]),
      [true, true]
    );

    let info;

    if (isStruct) {
      info = TypeDefInfo.Struct;
    }

    if (isTuple) {
      info = TypeDefInfo.Tuple;
    }

    if (!info) {
      throw new Error('Invalid fields type detected');
    }

    const sub = fields.map(({ name, type }) => {
      return {
        ...this.typeDefAt(type),
        ...(name.isSome ? { name: name.unwrap().toString() } : {})
      };
    });

    if (isTuple && sub.length === 1) {
      return sub[0];
    }

    return {
      info,
      sub
    };
  }

  private resolveArray ({ len: length, type }: MtTypeDefArray): Pick<TypeDef, never> {
    assert(!length || length.toNumber() <= 256, 'InkRegistry: Only support for [Type; <length>], where length <= 256');

    return {
      info: TypeDefInfo.VecFixed,
      length: length.toNumber(),
      sub: this.typeDefAt(type)
    };
  }

  private resolveSequence ({ type }: MtTypeDefSlice, id: MtLookupTypeId): Pick<TypeDef, never> {
    assert(!!type, `InkRegistry: Invalid sequence type found at id ${id.toString()}`);

    return {
      info: TypeDefInfo.Vec,
      sub: this.typeDefAt(type)
    };
  }

  private resolveSlice ({ type }: MtTypeDefSlice, id: MtLookupTypeId): Pick<TypeDef, never> {
    assert(!!type, `InkRegistry: Invalid slice type found at id ${id.toString()}`);

    return {
      info: TypeDefInfo.Vec,
      sub: this.typeDefAt(type)
    };
  }

  private resolveTuple (ids: MtTypeDefTuple): Pick<TypeDef, never> {
    if (ids.length === 1) {
      return this.typeDefAt(ids[0]);
    }

    return {
      info: TypeDefInfo.Tuple,
      sub: ids.map((id) => this.typeDefAt(id))
    };
  }

  private resolvePrimitive ({ type }: MtTypeDefPrimitive): Pick<TypeDef, never> {
    return {
      info: TypeDefInfo.Plain,
      type: type.toLowerCase()
    };
  }

  // private resolveFields (fields: MtField[]): TypeDef[] {
  //   let allNamed = true;
  //   let allUnnamed = true;

  //   for (const field of fields) {
  //     allNamed = allNamed && field.name.isSome;
  //     allUnnamed = allUnnamed && field.name.isNone;
  //   }

  //   if (allNamed) {
  //     const sub = fields.map((field): string => {
  //       const type = this.typeDefAt(field.type);

  //       const name = field.name.unwrap().toString();

  //       return withTypeString({
  //         info: TypeDefInfo.Struct,

  //       })
  //     });
  //   }

  //   if (allUnnamed) {
  //     const fields = typeFields.map((field): string =>
  //       resolveTypeFromId(project, field.type)
  //     );

  //     return fields.length
  //       ? getTypeDef(`(${fields.join(', ')})`)
  //       : getTypeDef('Null');
  //   }

  //   throw new Error('buildTypeDefFields:: Fields must either be *all* named or *all* unnamed');

  // }

  // private _typeDefIdFields ({ id }: MetaType): Pick<TypeDef, never> {
  //   const { 'custom.name': nameIndex, 'custom.namespace': namespaceIndices, 'custom.params': paramsIndices } = id as MetaTypeIdCustom;

  //   if (!nameIndex) {
  //     return {};
  //   }

  //   return {
  //     name: this._stringAt(nameIndex),
  //     ...(namespaceIndices && namespaceIndices.length
  //       ? { namespace: this.stringsAt(namespaceIndices).join('::') }
  //       : {}
  //     ),
  //     ...(paramsIndices && paramsIndices.length
  //       ? { params: this.typesAt(paramsIndices).map((type): TypeDef => this.typeDefFromMetaType(type)) }
  //       : {}
  //     )
  //   };
  // }

  // private _typeDefDefFields (metaType: MetaType, typeIndex: TypeIndex = -1): Pick<TypeDef, never> {
  //   let typeDef;

  //   switch (detectedType(metaType)) {
  //     case MetaTypeInfo.BuiltinPlain:
  //       typeDef = this._typeDefForBuiltinPlain(metaType.id as string);
  //       break;
  //     case MetaTypeInfo.BuiltinTuple:
  //       typeDef = this._typeDefForBuiltinTuple(metaType.id as TypeIndex[]);
  //       break;
  //     case MetaTypeInfo.BuiltinVec:
  //       typeDef = this._typeDefForBuiltinVec(metaType.id as MetaTypeIdVec, typeIndex);
  //       break;
  //     case MetaTypeInfo.BuiltinVecFixed:
  //       typeDef = this._typeDefForBuiltinVecFixed(metaType.id as MetaTypeIdVecFixed, typeIndex);
  //       break;
  //     case MetaTypeInfo.Enum:
  //       typeDef = this._typeDefForEnum(metaType.def as MetaTypeDefEnum, metaType.id as MetaTypeIdCustom, typeIndex);
  //       break;
  //     case MetaTypeInfo.ClikeEnum:
  //       typeDef = this._typeDefForClikeEnum(metaType.def as MetaTypeDefClikeEnum);
  //       break;
  //     case MetaTypeInfo.Struct:
  //       typeDef = this.typeDefForStruct(metaType.def as MetaTypeDefStruct);
  //       break;
  //     case MetaTypeInfo.TupleStruct:
  //       typeDef = this._typeDefForTupleStruct(metaType.def as MetaTypeDefTupleStruct);
  //       break;
  //     case MetaTypeInfo.Null:
  //     default:
  //       throw new Error(`Invalid type detected at index ${typeIndex}`);
  //   }

  //   return typeDef;
  // }

  // public typeDefFromMetaType (metaType: MetaType, typeIndex?: TypeIndex): TypeDef {
  //   return withTypeString({
  //     info: TypeDefInfo.Null,
  //     type: '',
  //     ...this._typeDefDefFields(metaType, typeIndex),
  //     ...this._typeDefIdFields(metaType)
  //   }) as TypeDef;
  // }

  // public typeDefFromMetaTypeAt (typeIndex: TypeIndex): TypeDef {
  //   if (!this.hasTypeDefAt(typeIndex)) {
  //     this.setTypeDefAtIndex(typeIndex);
  //   }

  //   return this.typeDefAt(typeIndex);
  // }

  // private _typeDefForEnumVariant (variant: MetaTypeDefEnumVariant): Pick<TypeDef, any> {
  //   const { 'unit_variant.name': unitNameIndex } = variant as MetaTypeDefEnumVariantUnit;

  //   if (unitNameIndex) {S
  //     return {
  //       info: TypeDefInfo.Plain,
  //       name: this._stringAt(unitNameIndex),
  //       type: 'Null'
  //     };
  //   }

  //   const { 'tuple_struct_variant.name': tupleStructVariantNameIndex } = variant as MetaTypeDefEnumVariantTupleStruct;

  //   if (tupleStructVariantNameIndex) {
  //     return this._typeDefForTupleStruct(variant as MetaTypeDefEnumVariantTupleStruct);
  //   }

  //   const { 'struct_variant.name': structVariantNameIndex } = variant as MetaTypeDefEnumVariantStruct;

  //   if (structVariantNameIndex) {
  //     return this.typeDefForStruct(variant as MetaTypeDefEnumVariantStruct);
  //   }

  //   return {
  //     info: TypeDefInfo.Null,
  //     type: 'Null'
  //   };
  // }

  // private _typeDefForBuiltinPlain (id: string): Pick<TypeDef, never> {
  //   return {
  //     info: TypeDefInfo.Plain,
  //     type: id
  //   };
  // }

  // private _typeDefForBuiltinTuple (id: TypeIndex[]): Pick<TypeDef, never> {
  //   const sub = id.map((tupleTypeIndex: number): TypeDef => this.typeDefFromMetaTypeAt(tupleTypeIndex));

  //   return {
  //     info: TypeDefInfo.Tuple,
  //     sub
  //   };
  // }

  // private _typeDefForBuiltinVec (id: MetaTypeIdVec, typeIndex: TypeIndex = -1): Pick<TypeDef, never> {
  //   const { 'slice.type': vecTypeIndex } = id;

  //   assert(!typeIndex || vecTypeIndex !== typeIndex, `MetaRegistry: self-referencing registry type at index ${typeIndex}`);

  //   const type = displayType(this.typeDefFromMetaTypeAt(vecTypeIndex));

  //   assert(type && type.length > 0, `MetaRegistry: Invalid builtin Vec type found at index ${typeIndex}`);

  //   return {
  //     info: TypeDefInfo.Vec,
  //     sub: this.typeDefFromMetaTypeAt(vecTypeIndex),
  //     type: `Vec<${type}>`
  //   };
  // }

  // private _typeDefForBuiltinVecFixed (id: MetaTypeIdVecFixed, typeIndex: TypeIndex = -1): Pick<TypeDef, never> {
  //   const { 'array.len': vecLength, 'array.type': vecTypeIndex } = id;

  //   assert(!vecLength || vecLength <= 256, 'MetaRegistry: Only support for [Type; <length>], where length <= 256');
  //   assert(!typeIndex || vecTypeIndex !== typeIndex, `MetaRegistry: self-referencing registry type at index ${typeIndex}`);

  //   const type = displayType(this.typeDefFromMetaTypeAt(vecTypeIndex));

  //   assert(type && type.length > 0, `MetaRegistry: Invalid vector type found at index ${typeIndex}`);

  //   return {
  //     info: TypeDefInfo.VecFixed,
  //     length: vecLength, // ex: { type: type }
  //     sub: this.typeDefFromMetaTypeAt(vecTypeIndex),
  //     type: `[${type};${vecLength}]`
  //   };
  // }

  // private _typeDefForEnum (def: MetaTypeDefEnum, id: MetaTypeIdCustom, typeIndex?: TypeIndex): Pick<TypeDef, any> {
  //   const name = id && this._stringAt(id['custom.name']);

  //   switch (name) {
  //     case 'Option':
  //       return this.typeDefForOption(id, typeIndex);

  //     case 'Result':
  //       return this.typeDefForResult(id, typeIndex);

  //     default: {
  //       const sub = def['enum.variants'].map((variant) => this._typeDefForEnumVariant(variant));

  //       return {
  //         info: TypeDefInfo.Enum,
  //         sub
  //       };
  //     }
  //   }
  // }

  // private _typeDefForClikeEnum (def: MetaTypeDefClikeEnum): Pick<TypeDef, never> {
  //   return {
  //     info: TypeDefInfo.Enum,
  //     sub: def['clike_enum.variants'].map(({ discriminant, name: nameIndex }): TypeDef => ({
  //       ext: { discriminant },
  //       info: TypeDefInfo.Plain,
  //       name: this._stringAt(nameIndex),
  //       type: 'Null'
  //     }))
  //   };
  // }

  // public typeDefForOption (id: MetaTypeIdCustom, typeIndex: TypeIndex = -1): Pick<TypeDef, any> {
  //   assert(id['custom.params'] && id['custom.params'][0], `Invalid Option type defined at index ${typeIndex}`);

  //   return {
  //     info: TypeDefInfo.Option,
  //     sub: this.typeDefFromMetaTypeAt(id['custom.params']![0])
  //   };
  // }

  // public typeDefForResult (id: MetaTypeIdCustom, typeIndex: TypeIndex = -1): Pick<TypeDef, any> {
  //   assert(id['custom.params'] && id['custom.params'][0] && id['custom.params'][1], `Invalid Result type defined at index ${typeIndex}`);

  //   return {
  //     info: TypeDefInfo.Result,
  //     sub: id['custom.params']!.map((typeIndex): TypeDef => this.typeDefFromMetaTypeAt(typeIndex))
  //   };
  // }

  // public typeDefForStruct (def: MetaTypeDefStruct | MetaTypeDefEnumVariantStruct): Pick<TypeDef, any> {
  //   const structFields = (def as MetaTypeDefStruct)['struct.fields'] || (def as MetaTypeDefEnumVariantStruct)['struct_variant.fields'];
  //   const structNameIndex = (def as MetaTypeDefEnumVariantStruct)['struct_variant.name'];

  //   return withTypeString({
  //     info: TypeDefInfo.Struct,
  //     ...(structNameIndex
  //       ? { name: this._stringAt(structNameIndex) }
  //       : {}
  //     ),
  //     sub: structFields.map((field: MetaTypeDefStructField): TypeDef => ({
  //       ...this.typeDefFromMetaTypeAt(field.type),
  //       name: this._stringAt(field.name)
  //     }))
  //   });
  // }

  // private _typeDefForTupleStruct (def: MetaTypeDefTupleStruct | MetaTypeDefEnumVariantTupleStruct): Pick<TypeDef, any> {
  //   const tupleStructTypes = (def as MetaTypeDefTupleStruct)['tuple_struct.types'] || (def as MetaTypeDefEnumVariantTupleStruct)['tuple_struct_variant.types'];
  //   const tupleStructNameIndex = (def as MetaTypeDefEnumVariantTupleStruct)['tuple_struct_variant.name'];

  //   return withTypeString({
  //     info: TypeDefInfo.Tuple,
  //     ...(tupleStructNameIndex
  //       ? { name: this._stringAt(tupleStructNameIndex) }
  //       : {}
  //     ),
  //     sub: tupleStructTypes.map((fieldIndex: number, index: number): TypeDef => ({
  //       ...this.typeDefFromMetaTypeAt(fieldIndex),
  //       index
  //     }))
  //   });
  // }
}
