// Copyright 2017-2020 @polkadot/api-contract authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { MetaRegistryItem, MetaRegistryJson, MetaTypeDefClikeEnum, MetaType, MetaTypeDefEnum, MetaTypeDefEnumVariant, MetaTypeDefEnumVariantStruct, MetaTypeDefEnumVariantTupleStruct, MetaTypeDefEnumVariantUnit, MetaTypeDefStruct, MetaTypeDefStructField, MetaTypeDefTupleStruct, MetaTypeDefUnion, MetaTypeIdCustom, MetaTypeIdVec, MetaTypeIdVecFixed, MetaTypeInfo, Registry, StringIndex, TypeDef, TypeDefInfo, TypeIndex } from '@polkadot/types/types';

import { assert } from '@polkadot/util';
import { displayType, withTypeString } from '@polkadot/types';

const builtinMap: [(id: any) => boolean, MetaTypeInfo][] = [
  [(id: any): boolean => typeof id === 'string', MetaTypeInfo.BuiltinPlain],
  [(id: any): boolean => Array.isArray(id), MetaTypeInfo.BuiltinTuple],
  [(id: any): boolean => !!(id['array.type']), MetaTypeInfo.BuiltinVecFixed],
  [(id: any): boolean => !!(id['slice.type']), MetaTypeInfo.BuiltinVec]
];

const typeMap: [string, MetaTypeInfo][] = [
  ['enum.variants', MetaTypeInfo.Enum],
  ['clike_enum.variants', MetaTypeInfo.ClikeEnum],
  ['struct.fields', MetaTypeInfo.Struct],
  ['tuple_struct.types', MetaTypeInfo.TupleStruct]
];

function detectedType ({ def, id }: MetaType): MetaTypeInfo {
  assert(!(def as MetaTypeDefUnion)['union.fields'], 'Invalid union type definition found');

  const lookup = def === 'builtin'
    ? builtinMap.find(([test]): boolean => test(id))
    : typeMap.find(([test]): boolean => !!(def as any)[test]);

  return lookup
    ? lookup[1]
    : MetaTypeInfo.Null;
}

class MetadataRegistryLookup {
  public readonly registry: Registry;

  protected _strings: string[] = [];

  protected _types: MetaType[] = [];

  public typeDefs: TypeDef[] = [];

  constructor (registry: Registry, { registry: { strings, types } }: MetaRegistryJson) {
    this.registry = registry;
    this._strings = strings;
    this._types = types;
  }

  protected hasItemAt (index: number, variant: MetaRegistryItem): boolean {
    switch (variant) {
      case MetaRegistryItem.String:
        return this._strings && !!this._strings[index - 1];
      case MetaRegistryItem.Type:
        return this._types && !!this._types[index - 1];
      case MetaRegistryItem.TypeDef:
        return this.typeDefs && !!this.typeDefs[index - 1];
    }
  }

  protected itemAt (index: number, variant: MetaRegistryItem): any {
    assert(this.hasItemAt(index, variant), `MetaRegistry: Invalid ${variant} index ${index} found in metadata`);

    switch (variant) {
      case MetaRegistryItem.String:
        return this._strings[index - 1];
      case MetaRegistryItem.Type:
        return this._types[index - 1];
      case MetaRegistryItem.TypeDef:
        return this.typeDefs[index - 1];
    }
  }

  protected itemsAt (indices: number[], variant: MetaRegistryItem): any[] {
    return indices.map((index: number): string => this.itemAt(index, variant));
  }

  protected stringAt (index: StringIndex): string {
    return this.itemAt(index, MetaRegistryItem.String);
  }

  public stringsAt (indices: StringIndex[]): string[] {
    return this.itemsAt(indices, MetaRegistryItem.String);
  }

  public typeAt (index: TypeIndex): MetaType {
    return this.itemAt(index, MetaRegistryItem.Type);
  }

  public typesAt (indices: TypeIndex[]): MetaType[] {
    return this.itemsAt(indices, MetaRegistryItem.Type);
  }

  public hasTypeDefAt (index: TypeIndex): boolean {
    return this.hasItemAt(index, MetaRegistryItem.TypeDef);
  }

  public typeDefAt (index: TypeIndex, extra: Pick<TypeDef, never> = {}): TypeDef {
    return {
      ...this.itemAt(index, MetaRegistryItem.TypeDef),
      ...extra
    };
  }
}

export default class MetaRegistry extends MetadataRegistryLookup {
  constructor (registry: Registry, json: MetaRegistryJson) {
    super(registry, json);

    // Generate TypeDefs for each provided registry type
    this._types.forEach((_, index: number): void => this.setTypeDefAtIndex(index + 1));
  }

  public setTypeDefAtIndex (typeIndex: TypeIndex): void {
    this.typeDefs[typeIndex - 1] = this.typeDefFromMetaType(this.typeAt(typeIndex), typeIndex);
  }

  private typeDefIdFields ({ id }: MetaType): Pick<TypeDef, never> {
    const { 'custom.name': nameIndex, 'custom.namespace': namespaceIndices, 'custom.params': paramsIndices } = id as MetaTypeIdCustom;

    if (!nameIndex) {
      return {};
    }

    return {
      name: this.stringAt(nameIndex),
      ...(namespaceIndices && namespaceIndices.length
        ? { namespace: this.stringsAt(namespaceIndices).join('::') }
        : {}
      ),
      ...(paramsIndices && paramsIndices.length
        ? { params: this.typesAt(paramsIndices).map((type): TypeDef => this.typeDefFromMetaType(type)) }
        : {}
      )
    };
  }

  private typeDefDefFields (metaType: MetaType, typeIndex?: TypeIndex): Pick<TypeDef, never> {
    let typeDef;

    switch (detectedType(metaType)) {
      case MetaTypeInfo.BuiltinPlain:
        typeDef = this.typeDefForBuiltinPlain(metaType.id as string);
        break;
      case MetaTypeInfo.BuiltinTuple:
        typeDef = this.typeDefForBuiltinTuple(metaType.id as TypeIndex[]);
        break;
      case MetaTypeInfo.BuiltinVec:
        typeDef = this.typeDefForBuiltinVec(metaType.id as MetaTypeIdVec, typeIndex);
        break;
      case MetaTypeInfo.BuiltinVecFixed:
        typeDef = this.typeDefForBuiltinVecFixed(metaType.id as MetaTypeIdVecFixed, typeIndex);
        break;
      case MetaTypeInfo.Enum:
        typeDef = this.typeDefForEnum(metaType.def as MetaTypeDefEnum, metaType.id as MetaTypeIdCustom, typeIndex);
        break;
      case MetaTypeInfo.ClikeEnum:
        typeDef = this.typeDefForClikeEnum(metaType.def as MetaTypeDefClikeEnum);
        break;
      case MetaTypeInfo.Struct:
        typeDef = this.typeDefForStruct(metaType.def as MetaTypeDefStruct);
        break;
      case MetaTypeInfo.TupleStruct:
        typeDef = this.typeDefForTupleStruct(metaType.def as MetaTypeDefTupleStruct);
        break;
      case MetaTypeInfo.Null:
      default:
        throw new Error(`Invalid type detected at index ${typeIndex}`);
    }

    return typeDef;
  }

  public typeDefFromMetaType (metaType: MetaType, typeIndex?: TypeIndex): TypeDef {
    return withTypeString({
      info: TypeDefInfo.Null,
      type: '',
      ...this.typeDefDefFields(metaType, typeIndex),
      ...this.typeDefIdFields(metaType)
    }) as TypeDef;
  }

  public typeDefFromMetaTypeAt (typeIndex: TypeIndex): TypeDef {
    if (!this.hasTypeDefAt(typeIndex)) {
      this.setTypeDefAtIndex(typeIndex);
    }

    return this.typeDefAt(typeIndex);
  }

  private typeDefForEnumVariant (variant: MetaTypeDefEnumVariant): Pick<TypeDef, any> {
    const { 'unit_variant.name': unitNameIndex } = variant as MetaTypeDefEnumVariantUnit;

    if (unitNameIndex) {
      return {
        info: TypeDefInfo.Plain,
        name: this.stringAt(unitNameIndex),
        type: 'Null'
      };
    }

    const { 'tuple_struct_variant.name': tupleStructVariantNameIndex } = variant as MetaTypeDefEnumVariantTupleStruct;

    if (tupleStructVariantNameIndex) {
      return this.typeDefForTupleStruct(variant as MetaTypeDefEnumVariantTupleStruct);
    }

    const { 'struct_variant.name': structVariantNameIndex } = variant as MetaTypeDefEnumVariantStruct;

    if (structVariantNameIndex) {
      return this.typeDefForStruct(variant as MetaTypeDefEnumVariantStruct);
    }

    return {
      info: TypeDefInfo.Null,
      type: 'Null'
    };
  }

  private typeDefForBuiltinPlain (id: string): Pick<TypeDef, never> {
    return {
      info: TypeDefInfo.Plain,
      type: id
    };
  }

  private typeDefForBuiltinTuple (id: TypeIndex[]): Pick<TypeDef, never> {
    const sub = id.map((tupleTypeIndex: number): TypeDef => this.typeDefFromMetaTypeAt(tupleTypeIndex));

    return {
      info: TypeDefInfo.Tuple,
      sub
    };
  }

  private typeDefForBuiltinVec (id: MetaTypeIdVec, typeIndex?: TypeIndex): Pick<TypeDef, never> {
    const { 'slice.type': vecTypeIndex } = id;

    assert(!typeIndex || vecTypeIndex !== typeIndex, `MetaRegistry: self-referencing registry type at index ${typeIndex}`);

    const type = displayType(this.typeDefFromMetaTypeAt(vecTypeIndex));
    assert(type && type.length > 0, `MetaRegistry: Invalid builtin Vec type found at index ${typeIndex}`);

    return {
      info: TypeDefInfo.Vec,
      type: `Vec<${type}>`,
      sub: this.typeDefFromMetaTypeAt(vecTypeIndex)
    };
  }

  private typeDefForBuiltinVecFixed (id: MetaTypeIdVecFixed, typeIndex?: TypeIndex): Pick<TypeDef, never> {
    const { 'array.type': vecTypeIndex, 'array.len': vecLength } = id;

    assert(!vecLength || vecLength <= 256, 'MetaRegistry: Only support for [Type; <length>], where length <= 256');
    assert(!typeIndex || vecTypeIndex !== typeIndex, `MetaRegistry: self-referencing registry type at index ${typeIndex}`);

    const type = displayType(this.typeDefFromMetaTypeAt(vecTypeIndex));
    assert(type && type.length > 0, `MetaRegistry: Invalid vector type found at index ${typeIndex}`);

    return {
      info: TypeDefInfo.VecFixed,
      ext: { length: vecLength, type },
      type: `[${type};${vecLength}]`,
      sub: this.typeDefFromMetaTypeAt(vecTypeIndex)
    };
  }

  private typeDefForEnum (def: MetaTypeDefEnum, id: MetaTypeIdCustom, typeIndex?: TypeIndex): Pick<TypeDef, any> {
    const name = id && this.stringAt(id['custom.name']);

    switch (name) {
      case 'Option':
        return this.typeDefForOption(id, typeIndex);
      case 'Result':
        return this.typeDefForResult(id, typeIndex);
      default: {
        const sub = def['enum.variants'].map(variant => this.typeDefForEnumVariant(variant));

        return {
          info: TypeDefInfo.Enum,
          sub
        };
      }
    }
  }

  private typeDefForClikeEnum (def: MetaTypeDefClikeEnum): Pick<TypeDef, never> {
    return {
      info: TypeDefInfo.Enum,
      sub: def['clike_enum.variants'].map(({ name: nameIndex, discriminant }): TypeDef => ({
        ext: { discriminant },
        info: TypeDefInfo.Plain,
        name: this.stringAt(nameIndex),
        type: 'Null'
      }))
    };
  }

  public typeDefForOption (id: MetaTypeIdCustom, typeIndex?: TypeIndex): Pick<TypeDef, any> {
    assert(id['custom.params'] && id['custom.params'][0], `Invalid Option type defined at index ${typeIndex}`);

    return {
      info: TypeDefInfo.Option,
      sub: this.typeDefFromMetaTypeAt(id['custom.params']![0])
    };
  }

  public typeDefForResult (id: MetaTypeIdCustom, typeIndex?: TypeIndex): Pick<TypeDef, any> {
    assert(id['custom.params'] && id['custom.params'][0] && id['custom.params'][1], `Invalid Result type defined at index ${typeIndex}`);

    return {
      info: TypeDefInfo.Result,
      sub: id['custom.params']!.map((typeIndex): TypeDef => this.typeDefFromMetaTypeAt(typeIndex))
    };
  }

  public typeDefForStruct (def: MetaTypeDefStruct | MetaTypeDefEnumVariantStruct): Pick<TypeDef, any> {
    const structFields = (def as MetaTypeDefStruct)['struct.fields'] || (def as MetaTypeDefEnumVariantStruct)['struct_variant.fields'];
    const structNameIndex = (def as MetaTypeDefEnumVariantStruct)['struct_variant.name'];

    return withTypeString({
      info: TypeDefInfo.Struct,
      ...(structNameIndex
        ? { name: this.stringAt(structNameIndex) }
        : {}
      ),
      sub: structFields.map((field: MetaTypeDefStructField): TypeDef => ({
        ...this.typeDefFromMetaTypeAt(field.type),
        name: this.stringAt(field.name)
      }))
    });
  }

  private typeDefForTupleStruct (def: MetaTypeDefTupleStruct | MetaTypeDefEnumVariantTupleStruct): Pick<TypeDef, any> {
    const tupleStructTypes = (def as MetaTypeDefTupleStruct)['tuple_struct.types'] || (def as MetaTypeDefEnumVariantTupleStruct)['tuple_struct_variant.types'];
    const tupleStructNameIndex = (def as MetaTypeDefEnumVariantTupleStruct)['tuple_struct_variant.name'];

    return withTypeString({
      info: TypeDefInfo.Tuple,
      ...(tupleStructNameIndex
        ? { name: this.stringAt(tupleStructNameIndex) }
        : {}
      ),
      sub: tupleStructTypes.map((fieldIndex: number, index: number): TypeDef => ({
        ...this.typeDefFromMetaTypeAt(fieldIndex),
        index
      }))
    });
  }
}
