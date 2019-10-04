// Copyright 2017-2019 @polkadot/api-contract authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { MetaRegistryItem, MetaRegistryJson, MetaTypeDefClikeEnum, MetaType, MetaTypeDefEnum, MetaTypeDefEnumVariant, MetaTypeDefEnumVariantStruct, MetaTypeDefEnumVariantTupleStruct, MetaTypeDefEnumVariantUnit, MetaTypeDefStruct, MetaTypeDefStructField, MetaTypeDefTupleStruct, MetaTypeDefUnion, MetaTypeIdArray, MetaTypeIdCustom, MetaTypeInfo, StringIndex, TypeDef, TypeDefInfo, TypeIndex } from '@polkadot/types/types';

import { assert } from '@polkadot/util';
import { withTypeString } from '@polkadot/types';

const {
  BuiltinPlain,
  BuiltinTuple,
  BuiltinArray,
  ClikeEnum,
  Enum,
  Struct,
  TupleStruct,
  Null
} = MetaTypeInfo;

const {
  String,
  Type,
  TypeDef: TypeDefItem
} = MetaRegistryItem;

export default class MetaRegistry {
  private static detectedType ({ def, id }: MetaType): MetaTypeInfo {
    assert(!(def as MetaTypeDefUnion)['union.fields'], 'Invalid union type definition found');

    let metaTypeInfo = MetaTypeInfo.Null;
    if (def === 'builtin') {
      if (typeof id === 'string') {
        metaTypeInfo = MetaTypeInfo.BuiltinPlain;
      }
      if (Array.isArray(id)) {
        metaTypeInfo = MetaTypeInfo.BuiltinTuple;
      }
      if ((id as MetaTypeIdArray)['array.type']) {
        metaTypeInfo = MetaTypeInfo.BuiltinArray;
      }
    }

    if ((def as MetaTypeDefEnum)['enum.variants']) {
      metaTypeInfo = MetaTypeInfo.Enum;
    }

    if ((def as MetaTypeDefClikeEnum)['clike_enum.variants']) {
      metaTypeInfo = MetaTypeInfo.ClikeEnum;
    }

    if ((def as MetaTypeDefStruct)['struct.fields']) {
      metaTypeInfo = MetaTypeInfo.Struct;
    }

    if ((def as MetaTypeDefTupleStruct)['tuple_struct.types']) {
      metaTypeInfo = MetaTypeInfo.TupleStruct;
    }

    return metaTypeInfo;
  }

  private _strings: string[] = [];

  private _types: MetaType[] = [];

  public typeDefs: TypeDef[] = [];

  public constructor ({ registry: { strings, types } }: MetaRegistryJson) {
    this._strings = strings;
    this._types = types;

    // Generate TypeDefs for each provided registry type
    this._types.forEach((_, index: number): void => this.setTypeDefAtIndex(index + 1));
  }

  private hasItemAt (index: number, variant: MetaRegistryItem): boolean {
    switch (variant) {
      case String:
        return this._strings && !!this._strings[index - 1];
      case Type:
        return this._types && !!this._types[index - 1];
      case TypeDefItem:
        return this.typeDefs && !!this.typeDefs[index - 1];
    }
  }

  private itemAt (index: number, variant: MetaRegistryItem): any {
    assert(this.hasItemAt(index, variant), `MetaRegistry: Invalid ${variant} index ${index} found in metadata`);

    switch (variant) {
      case String:
        return this._strings[index - 1];
      case Type:
        return this._types[index - 1];
      case TypeDefItem:
        return this.typeDefs[index - 1];
    }
  }

  private itemsAt (indices: number[], variant: MetaRegistryItem): any[] {
    return indices.map(
      (index: number): string => {
        return this.itemAt(index, variant);
      }
    );
  }

  public stringAt (index: StringIndex): string {
    return this.itemAt(index, String);
  }

  public stringsAt (indices: StringIndex[]): string[] {
    return this.itemsAt(indices, String);
  }

  public typeAt (index: TypeIndex): MetaType {
    return this.itemAt(index, Type);
  }

  public typesAt (indices: TypeIndex[]): MetaType[] {
    return this.itemsAt(indices, Type);
  }

  public hasTypeDefAt (index: TypeIndex): boolean {
    return this.hasItemAt(index, TypeDefItem);
  }

  public typeDefAt (index: TypeIndex, extra: Pick<TypeDef, never> = {}): TypeDef {
    return {
      ...this.itemAt(index, TypeDefItem),
      ...extra
    };
  }

  private typeDefIdFields ({ id }: MetaType): Pick<TypeDef, never> {
    const { 'custom.name': nameIndex, 'custom.namespace': namespaceIndices, 'custom.params': paramsIndices } = id as MetaTypeIdCustom;

    if (!nameIndex) {
      return {};
    }

    return {
      name: this.stringAt(nameIndex),
      ...(
        namespaceIndices && namespaceIndices.length
          ? { namespace: this.stringsAt(namespaceIndices).join('::') }
          : {}
      ),
      ...(
        paramsIndices && paramsIndices.length
          ? { params: this.typesAt(paramsIndices).map((type): TypeDef => this.typeDefFromMetaType(type)) }
          : {}
      )
    };
  }

  private typeDefDefFields (metaType: MetaType, typeIndex?: TypeIndex): Pick<TypeDef, never> {
    let typeDef;
    switch (MetaRegistry.detectedType(metaType)) {
      case BuiltinPlain:
        typeDef = this.typeDefForBuiltinPlain(metaType.id as string);
        break;
      case BuiltinTuple:
        typeDef = this.typeDefForBuiltinTuple(metaType.id as TypeIndex[]);
        break;
      case BuiltinArray:
        typeDef = this.typeDefForBuiltinArray(metaType.id as MetaTypeIdArray, typeIndex);
        break;
      case Enum:
        typeDef = this.typeDefForEnum(metaType.def as MetaTypeDefEnum, metaType.id as MetaTypeIdCustom, typeIndex);
        break;
      case ClikeEnum:
        typeDef = this.typeDefForClikeEnum(metaType.def as MetaTypeDefClikeEnum);
        break;
      case Struct:
        typeDef = this.typeDefForStruct(metaType.def as MetaTypeDefStruct);
        break;
      case TupleStruct:
        typeDef = this.typeDefForTupleStruct(metaType.def as MetaTypeDefTupleStruct);
        break;
      case Null:
      default:
        throw new Error(`Invalid type detected at index ${typeIndex}`);
    }
    return typeDef;
  }

  public typeDefFromMetaType (metaType: MetaType, typeIndex?: TypeIndex): TypeDef {
    const typeDef: TypeDef = {
      info: TypeDefInfo.Null,
      type: '',
      ...this.typeDefDefFields(metaType, typeIndex),
      ...this.typeDefIdFields(metaType)
    };

    return withTypeString(typeDef) as TypeDef;
  }

  public setTypeDefAtIndex (typeIndex: TypeIndex): void {
    const metaType = this.typeAt(typeIndex);

    this.typeDefs[typeIndex - 1] = this.typeDefFromMetaType(metaType, typeIndex);
  }

  public typeDefFromMetaTypeAt (typeIndex: TypeIndex): TypeDef {
    if (!this.hasTypeDefAt(typeIndex)) {
      this.setTypeDefAtIndex(typeIndex);
    }
    return this.typeDefAt(typeIndex)!;
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

  private typeDefForBuiltinArray (id: MetaTypeIdArray, typeIndex?: TypeIndex): Pick<TypeDef, never> {
    const { 'array.type': vecTypeIndex, 'array.len': vecLength } = id;

    assert(!vecLength || vecLength <= 256, 'MetaRegistry: Only support for [Type; <length>], where length <= 256');
    assert(!typeIndex || vecTypeIndex !== typeIndex, `MetaRegistry: self-referencing registry type at index ${typeIndex}`);
    const sub = this.typeDefFromMetaTypeAt(vecTypeIndex);

    return {
      ...(
        vecLength
          ? {
            info: TypeDefInfo.VecFixed,
            ext: { length: vecLength, type: '' },
            type: `[${sub.name || sub.type};${vecLength}]`
          }
          : {
            info: TypeDefInfo.Vec,
            type: `Vec<${sub.name || sub.type}>`
          }
      ),
      sub: this.typeDefFromMetaTypeAt(vecTypeIndex)
    };
  }

  private typeDefForEnum (def: MetaTypeDefEnum, id: MetaTypeIdCustom, typeIndex?: TypeIndex): Pick<TypeDef, any> {
    const isOption = id && this.stringAt(id['custom.name']) === 'Option';

    if (isOption) {
      return this.typeDefForOption(id, typeIndex);
    }

    const sub = def['enum.variants'].map(variant => this.typeDefForEnumVariant(variant));

    return {
      info: TypeDefInfo.Enum,
      sub
    };
  }

  private typeDefForClikeEnum (def: MetaTypeDefClikeEnum): Pick<TypeDef, never> {
    const sub = def['clike_enum.variants'].map(
      ({ name: nameIndex, discriminant }): TypeDef => {
        return {
          ext: { discriminant },
          info: TypeDefInfo.Plain,
          name: this.stringAt(nameIndex),
          type: 'Null'
        };
      }
    );

    return {
      info: TypeDefInfo.Enum,
      sub
    };
  }

  public typeDefForOption (id: MetaTypeIdCustom, typeIndex?: TypeIndex): Pick<TypeDef, any> {
    assert(id['custom.params']![0], `Invalid Option type defined at index ${typeIndex}`);

    return {
      info: TypeDefInfo.Option,
      sub: this.typeDefFromMetaTypeAt(id['custom.params']![0])
    };
  }

  public typeDefForStruct (def: MetaTypeDefStruct | MetaTypeDefEnumVariantStruct): Pick<TypeDef, any> {
    const structFields = (def as MetaTypeDefStruct)['struct.fields'] || (def as MetaTypeDefEnumVariantStruct)['struct_variant.fields'];
    const structNameIndex = (def as MetaTypeDefEnumVariantStruct)['struct_variant.name'];
    const sub = structFields.map(
      (field: MetaTypeDefStructField): TypeDef => {
        const { name: nameIndex, type: fieldTypeIndex } = field;
        return {
          ...this.typeDefFromMetaTypeAt(fieldTypeIndex),
          name: this.stringAt(nameIndex)
        };
      }
    );

    return withTypeString({
      info: TypeDefInfo.Struct,
      ...(
        structNameIndex
          ? {
            name: this.stringAt(structNameIndex)
          }
          : {}
      ),
      sub
    });
  }

  private typeDefForTupleStruct (def: MetaTypeDefTupleStruct | MetaTypeDefEnumVariantTupleStruct): Pick<TypeDef, any> {
    const tupleStructTypes = (def as MetaTypeDefTupleStruct)['tuple_struct.types'] || (def as MetaTypeDefEnumVariantTupleStruct)['tuple_struct_variant.types'];
    const tupleStructNameIndex = (def as MetaTypeDefEnumVariantTupleStruct)['tuple_struct_variant.name'];
    const sub: TypeDef[] = tupleStructTypes.map(
      (tupleStructFieldTypeIndex: number, index: number): TypeDef => {
        return {
          ...this.typeDefFromMetaTypeAt(tupleStructFieldTypeIndex),
          index
        };
      }
    );

    return withTypeString({
      info: TypeDefInfo.Tuple,
      ...(
        tupleStructNameIndex
          ? {
            name: this.stringAt(tupleStructNameIndex)
          }
          : {}
      ),
      sub
    });
  }
}
